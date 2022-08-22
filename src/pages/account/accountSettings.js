import { useState, useContext, useEffect } from 'react'

// import Link from '@mui/material/Link'
import Container from '@mui/material/Container'
// import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import EditIcon from '@mui/icons-material/Edit'
// import Typography from '@mui/material/Typography'
// import TextField from '@mui/material/TextField'
// import LoginIcon from '@mui/icons-material/Login'
// import Button from '@mui/material/Button'

// import AccountContext from '../../common/contexts/accountContext'
import AccountSettingsView from './components/accountSettingsView'
import AccountSettingsEdit from './components/accountSettingsEdit'
import OpenCloseBox from '../../common/blocks/openCloseBox'

import AccountContext from '../../common/contexts/accountContext'

const AccountSettings = (props) => {
    const [states, setStates] = useState({
        openUpdate: false
    })
    const accCtx = useContext(AccountContext)

    // useEffect(() => {
    //     accCtx.fetchAccountData()
    // }, [])

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ paddingTop: 30 }}>
                    {/* <Typography>Account Core Content</Typography> */}
                    { !states.openUpdate? <AccountSettingsView accountInfo={accCtx.accountContext} />: null }
                    <OpenCloseBox
                        btnIcon={ <EditIcon /> }
                        btnLabel={ 'Update Settings' }
                        isOpen={ states.openUpdate }
                        onOpen={ () => {
                            setStates({ ...states, ...{ openUpdate: true } })
                        }}
                        onClose={ () => {
                            setStates({ ...states, ...{ openUpdate: false } })
                        }}>
                        <AccountSettingsEdit accountInfo={accCtx.accountContext} />
                    </OpenCloseBox>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AccountSettings