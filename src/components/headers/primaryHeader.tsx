
import React, { FC } from 'react';
import {Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Stack from '@mui/material/Stack';

interface Props {
    Icon?: FC,
    title?:string,
    subtitle?:string
}

const PrimaryHeader = ({title, subtitle, Icon}:Props) => {
    return (
        <Stack
            direction="row"
            style={{padding:'10px'}}
            alignItems="center"
            spacing={2}>
            { Icon? <Icon />: <VisibilityIcon /> }
            <Typography variant='h5'>
                 { title }
            </Typography>
            <Typography color="primary" variant='subtitle2'>
                 { subtitle }
            </Typography>
        </Stack>
    )
}

export default PrimaryHeader