import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IUser, IAccessToken } from '../../types/user';
import PrimaryTable, { IColDef } from '../../components/tables/primaryTable';
import Check from '../../components/indicators/check';
import Config from '../../config';
import UserClientDeviceService from '../userClientDevice/userClientDeviceService';

interface IProps {
    user: IUser | undefined,
    clientDeviceId: string | undefined
}

interface IclientDeviceTokenRow {
    _id: string,
    jwt: string,
    description: string,
    ipAddress: string,
    expiration: string,
    disabled: boolean,
    createdAt: string,
    updatedAt: string
}

const UserclientDeviceTokensReadOnlyView = ({user, clientDeviceId}:IProps) => {
    const navigate = useNavigate()
    const [data, setData] = useState<IclientDeviceTokenRow[]>([])

    useEffect(() => {
        if (user && user.clientDevices && clientDeviceId) {
            const clientDevice = UserClientDeviceService.getClientDeviceById(user, clientDeviceId)
            const transformedData:IclientDeviceTokenRow[] = clientDevice?.accessTokens?.map((item:IAccessToken & {createdAt?: Date, updatedAt?: Date}) => {
                return {
                    _id: item._id || '',
                    jwt: item.jwt,
                    description: item.description || '--',
                    ipAddress: item.ipAddress || '--',
                    expiration: item?.expTime? moment(item?.expTime).format(Config.defaultDateTimeFormat): '--',
                    disabled: Boolean(item.disabled),
                    createdAt: moment(item.createdAt).format(Config.defaultDateTimeFormat),
                    updatedAt: moment(item.updatedAt).format(Config.defaultDateTimeFormat)
                }
            }) || []
            // console.log(transformedData)
            setData(transformedData)
        }

    }, [user, clientDeviceId])

    const colDef:IColDef[] = [
        {
            header: 'JWT',
            field: 'jwt'
        },
        {
            header: 'IP Address',
            field: 'ipAddress'
        },
        {
            header: 'Description',
            field: 'description'
        },
        {
            header: 'Created',
            field: 'createdAt'
        },
        {
            header: 'Updated',
            field: 'updatedAt'
        },
        {
            header: 'Expiration',
            field: 'expiration'
        },
        {
            header: 'Disabled',
            field: 'disabled',
            Component: (props:IclientDeviceTokenRow) => {
                return <Check value={props.disabled} />
            }
        },
        {
            header: '',
            field: '_id',
            Component: (props:IclientDeviceTokenRow) => {
    
                return (
                    <Button
                        startIcon={<VisibilityIcon />}
                        onClick={() => navigate(props._id)}
                        variant="text">View Device Token</Button>
                )
            }
        }
    ]

    return (
        <Grid item xs={12}>
            <PrimaryTable
                columnDefs={colDef}
                data={data} />
        </Grid>
    )
}

export default UserclientDeviceTokensReadOnlyView