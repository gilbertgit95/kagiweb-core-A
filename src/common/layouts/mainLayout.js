import { useState, useContext } from 'react'
import { Outlet, Link } from "react-router-dom"
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import MailIcon from '@mui/icons-material/Mail'
import Tooltip from '@mui/material/Tooltip'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'

import MainNav from '../navs/mainNav'
import AccountContext from '../context/accountContext'
import ThemeToggle from '../themes/themeToggle'
import config from '../../config'

const MainLayout = (props) => {
    // const ctx = useContext(AccountContext)

    // let accountVal = ctx.accountContext && ctx.accountContext.testVal? ctx.accountContext.testVal: ''
    let leftLogo = {
        label: '',
        component: <Avatar alt="Logo" src="/favicon.png" />
    }
    let leftMenu = [
        [
            {
              component: <MailIcon />,
              label: 'Emails',
              type: 'link',
              value: '/home'
            },
            {
                component: <MailIcon />,
                label: 'Auth',
                type: 'link',
                value: '/auth'
            }
        ],
        [
            {
                component: <MailIcon />,
                label: 'Notes',
                type: 'action',
                value: 'notes'
            }
        ],
        [
            {
                // component: <MailIcon />,
                label: 'Notes II',
                type: 'action',
                value: 'notes'
            }
        ]
    ]

    let middleMenu = [
        {
            label: 'Toggle Theme',
            component: (
                <Box sx={{ display: 'inline-block' }}>
                    <ThemeToggle />
                </Box>
            ),
            type: 'action',
            value: 'themeToggle'
        },
        {
            label: 'notifications',
            component: (
                <IconButton size="large" sx={{ p: 0 }}>
                    <Badge badgeContent={4} color="error">
                        <MailIcon color="action" size="large" />
                    </Badge>
                </IconButton>
            ),
            type: 'action',
            value: 'notifications'
        }
    ]

    let rightLogo = {
        label: 'Open settings',
        component: <Avatar alt="Gebe" src="/static/images/avatar/2.jpg" />
    }
    let rightMenu = [
        [
            {
                component: <MailIcon />,
                label: 'Emails',
                type: 'link',
                value: '/home'
            },
            {
                component: <MailIcon />,
                label: 'Auth',
                type: 'link',
                value: '/auth'
            }
        ],
        [
            {
                component: <MailIcon />,
                label: 'Notes',
                type: 'action',
                value: 'notes'
            }
        ]
    ]

    return (
        <>
            <MainNav
                leftLogo={leftLogo}
                leftMenu={leftMenu}
                middleMenu={middleMenu}
                rightLogo={rightLogo}
                rightMenu={rightMenu} />

            <Container maxWidth="lg">
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{textAlign: 'center'}}>
                            {/* <Typography variant="h4" gutterBottom component="div">
                                { config.appName }
                            </Typography> */}
                        </Grid>
                        <Grid item xs={12} style={{textAlign: 'center'}}>
                            <Box>
                                <Outlet />
                            </Box>
                        </Grid>
                        {/* <Grid item xs={12} style={{textAlign: 'center'}}>
                            <Typography variant="caption" display="block" gutterBottom>
                                Copyrights 2021
                            </Typography>
                        </Grid> */}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default MainLayout