import { Typography, Grid, Button } from '@mui/material'
// import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const PrivateLandingPage = () => {
    return (
        <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '80vh' }}>
            <Grid item xs={12}>
                <Typography color='primary' variant='h5'>Welcome! this is your Dashboard</Typography>
            </Grid>
            {/* <Grid item xs={12}>
                <Button
                    variant='outlined'
                    onClick={() => window.location.replace('/signin')}
                    endIcon={<TrendingFlatIcon />}>go to signin page</Button>
            </Grid> */}
        </Grid>
    )
}

export default PrivateLandingPage