import { useState, useEffect } from 'react'
import subpages from './lib/subPages'

import SubPageslayout from '../../common/layouts/subPagesLayout'

// import Link from '@mui/material/Link'
import Container from '@mui/material/Container'
// import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
// import TextField from '@mui/material/TextField'
// import LoginIcon from '@mui/icons-material/Login'
import InfoIcon from '@mui/icons-material/Info'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import AddIcon from '@mui/icons-material/Add'

import BasicTable from '../../common/tables/basicTable'
import ImportData from '../../common/inputs/importData'
import FullScreenDialogBox from '../../common/blocks/fullScreenDialogBox'
import NormalDialogBox from '../../common/blocks/normalDialogBox'
// import AccountContext from '../../common/contexts/accountContext'

const AppEndpoints = (props) => {
    const [states, setStates] = useState({
        isLoading: true,
        itemDialogMode: 'add', // add || edit
        itemDialog: false,
        bulkImportDialog: false,

        headers: ['Endpoint', 'Name', 'Type', 'Category', 'Subcategory'],
        rows: []
    })

    useEffect(() => {
        const fetchData = () => {
            setStates({...states, ...{ ioLoading: true }})
            setTimeout(() => {
                setStates({...states, ...{ ioLoading: false }})
            }, 1000)
        }

        fetchData()
    }, [])

    return (
        <SubPageslayout
            navAnchor={'left'}
            navMenu={subpages}>
            <Grid item xs={12}>
                <Container maxWidth="lg" style={{ paddingTop: 20 }}>
                    <BasicTable
                        headers={ states.headers }
                        rows={ states.rows }
                        rightSideComponents={
                            <>
                                <Button
                                    color='primary'
                                    variant='contained'
                                    style={{ marginRight: 5 }}
                                    startIcon={ <AddIcon /> }
                                    onClick={() => {
                                        setStates({...states, ...{ itemDialog: true }})
                                    }}>Add</Button>
                                <Button
                                    color='primary'
                                    variant='contained'
                                    startIcon={ <ImportExportIcon /> }
                                    onClick={() => {
                                        setStates({...states, ...{ bulkImportDialog: true }})
                                    }}>Import Data</Button>
                                <Tooltip
                                    style={{ float: 'right' }}
                                    placement='bottom-end'
                                    title={
                                        <Typography
                                            style={{ padding: 10 }}
                                            variant='body1'>
                                            Endpoints will be the bases for user role access rights. The more
                                            endpoints a role has, the more access it has on the system.
                                        </Typography>
                                    }>
                                    <InfoIcon color='primary' />
                                </Tooltip>
                            </>
                        } />
                    <NormalDialogBox
                        title={ states.itemDialogMode === 'add'? 'Add Endpoint': 'Edit Endpoint' }
                        open={ states.itemDialog }
                        fullWidth={ true }
                        maxWidth={ 'xs' }
                        onClose={() => {
                            setStates({...states, ...{ itemDialog: false }})
                        }}>
                        <Typography>add/ edit</Typography>
                    </NormalDialogBox>
                    <FullScreenDialogBox
                        title={ 'Import from Excel' }
                        open={ states.bulkImportDialog }
                        onClose={() => {
                            setStates({...states, ...{ bulkImportDialog: false }})
                        }}>
                        <Container
                            style={{ marginTop: 20 }}
                            maxWidth="lg">
                            <ImportData
                                // headers={['Endpoint', 'Name', 'Type', 'Category', 'Subcategory']} />
                                headers={['name', 'calories', 'fat', 'carb', 'protein']} />
                        </Container>
                    </FullScreenDialogBox>
                </Container>
            </Grid>
        </SubPageslayout>
    )
}

export default AppEndpoints