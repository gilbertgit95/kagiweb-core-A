import { useState } from 'react'
import Link from '@mui/material/Link'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import LoginIcon from '@mui/icons-material/Login'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import RotateLeftIcon from '@mui/icons-material/RotateLeft'

import {
    useParams
  } from "react-router-dom";

const ResetPassword = (props) => {
    const { key } = useParams()
    const [resetKey, setResetKey] = useState(key? key: '')

    const onChangeResetKey = (e) => {
        setResetKey(e.target.value)
    }

    const handleResetKeyValue = (e) => {
        let keyVal = key? key: ''
        setResetKey(keyVal)
    }


    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography>
                    Please enter the correct key and the new password you wanted to set.
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <TextField
                    value={resetKey}
                    onChange={onChangeResetKey}
                    size='small'
                    fullWidth
                    variant='outlined'
                    color='primary'
                    type='text'
                    label='Reset Key'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Reset key"
                                    onClick={handleResetKeyValue}
                                    edge="end">
                                    <RotateLeftIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }} />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    size='small'
                    fullWidth
                    variant='outlined'
                    color='primary'
                    type='password'
                    label='New Password' />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    size='small'
                    fullWidth
                    variant='outlined'
                    color='primary'
                    type='password'
                    label='Confirm Password' />
            </Grid>

            <Grid item xs={12}>
                <Button
                    size='small'
                    fullWidth
                    variant='contained'
                    color='primary'
                    startIcon={<LoginIcon />}>
                    Reset
                </Button>
                <Box style={{marginTop: 15}}>
                    <Link
                        style={{margin: 10}}
                        color="inherit"
                        href="/auth/forgotPassword">
                        Forgot password
                    </Link>
                    <Link
                        style={{margin: 10}}
                        color="inherit"
                        href="/auth/login">
                        Login
                    </Link>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ResetPassword