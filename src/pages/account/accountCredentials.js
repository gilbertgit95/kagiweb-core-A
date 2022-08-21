import { useState, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import EditIcon from '@mui/icons-material/Edit'

// import AccountContext from '../../common/contexts/accountContext'
import OpenCloseBox from '../../common/blocks/openCloseBox'
import AccountView from './components/accountCredentialsView'
import AccountEdit from './components/accountCredentialsEdit'

import AccountContext from '../../common/contexts/accountContext'

const AccountCredentials = (props) => {
    const [states, setStates] = useState({
        openUpdate: false
    })
    const accCtx = useContext(AccountContext)

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ paddingTop: 30 }}>
                    {/* <Typography>Account Core Content</Typography> */}
                    { !states.openUpdate? <AccountView accountInfo={accCtx.accountContext} />: null }
                    <OpenCloseBox
                        btnIcon={ <EditIcon /> }
                        btnLabel={ 'Update Credentials' }
                        isOpen={ states.openUpdate }
                        onOpen={ () => {
                            setStates({ ...states, ...{ openUpdate: true } })
                        }}
                        onClose={ () => {
                            setStates({ ...states, ...{ openUpdate: false } })
                        }}>
                        <AccountEdit accountInfo={accCtx.accountContext} />
                    </OpenCloseBox>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AccountCredentials