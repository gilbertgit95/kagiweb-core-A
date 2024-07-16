import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Box, Divider } from '@mui/material';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

import Grid from '@mui/material/Grid';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

import ResponseStatus, { TResponseStatus } from '../../components/infoOrWarnings/responseStatus';
import PrimaryHeader from '../../components/headers/primaryHeader';
import UserLimitedTransactionReadOnlyView from '../accountLimitedTransaction/userLimitedTransactionReadOnlyView';
// import UserService from '../user/accountService';
import OwnerService from './ownerService';
// import UserLimitedTransactionService from './userLimitedTransactionService';
import { IAccount } from '../../types/account';
import {
  useParams
} from 'react-router-dom';

const OwnerLimitedTransactionPage = () => {
    const { limitedTransactionId } = useParams()
    const navigate = useNavigate()
    const [infoAndErrors, setInfoAndErrors] = useState<TResponseStatus>({
        errorMessages: [],
        infoMessages: []
    })
    const [pageState, setPageState] = useState({
        disableEditButton: false,
        disableDeleteButton: false,
        deleteDialogOpen: false
    })
    const [user, setUser] = useState<IAccount | undefined>()

    // const onDelete = async () => {
    //     if (limitedTransactionId) {
    //         try {
    //             // await UserLimitedTransactionService.deleteContactInfo(userId, limitedTransactionId)
    //             // const userResp = await UserService.getUser(userId)
    //             // setUser(userResp.data)
    //             setPageState({
    //                 disableEditButton: true,
    //                 disableDeleteButton: true,
    //                 deleteDialogOpen: false
    //             })
    //             setInfoAndErrors({
    //                 ...{infoMessages: ['Sucessfully deleted this limited transaction']},
    //                 ...{errorMessages: []}
    //             })
    //         } catch (err:any) {
    //             setPageState({...pageState, ...{
    //                 deleteDialogOpen: false
    //             }})
    //             setInfoAndErrors({
    //                 ...{infoMessages: []},
    //                 ...{errorMessages: [err?.response?.data?.message || '']}
    //             })
    //         }
    //     }
    // }
    
    useEffect(() => {
        const init = async () => {
            try {
                const userResp = await OwnerService.getOwner()
                setUser(userResp.data)

            } catch (err:any) {
                setPageState({
                    disableEditButton: true,
                    disableDeleteButton: true,
                    deleteDialogOpen: false
                })

                setInfoAndErrors({
                    ...{infoMessages: []},
                    ...{errorMessages: [err?.response?.data?.message || '']}
                })
            }
        }

        init()
    }, [])

    return (
        <Container style={{paddingTop: 20}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <PrimaryHeader title={'My Account Limited Transaction Readonly View'} subtitle={ user?.username } />
                    <Divider />
                </Grid>
                <Grid item xs={6}>
                    <Button
                        variant="text"
                        startIcon={<ArrowBackIosNewIcon />}
                        onClick={() => navigate(-1)}>
                        Back
                    </Button>
                </Grid>
                <Grid item xs={6} style={{alignContent: 'right'}}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}>
                        <Button
                            variant="text"
                            startIcon={<EditIcon />}
                            disabled={ pageState.disableEditButton }
                            onClick={() => navigate(`/owner/edit/limitedTransactions/${ limitedTransactionId }`)}>
                            Edit
                        </Button>
                    </Box>
                </Grid>

                <UserLimitedTransactionReadOnlyView
                    user={user}
                    limitedTransactionId={limitedTransactionId} />

                <Grid item xs={12}>
                    <ResponseStatus {...infoAndErrors} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default OwnerLimitedTransactionPage