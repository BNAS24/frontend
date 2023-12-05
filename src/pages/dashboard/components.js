import { Avatar, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const MainLayoutGrid = styled(Grid)(({ theme }) =>
    theme.unstable_sx({
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: {
            xs: '1fr 5fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)'
        },
        gridTemplateRows: {
            xs: '1fr 8fr',
            sm: '1fr 5fr',
            md: '1fr 5fr',
            lg: '1fr 5fr'
        },
        gridGap: '8px',
        columnGap: {
            xs: '8px',
            sm: '24px',
            md: '56px',
            lg: '56px'
        },
        p: {
            xs: '16px 8px !important',
            sm: '24px 24px !important',
            md: '24px 24px !important',
            lg: '24px 24px !important'
        },
        flex: '1',
        maxHeight: '100vh',
        overflow: 'hidden',
    })
)

export const DashboardHeadGrid = styled(Grid)(({ theme }) =>
    theme.unstable_sx({
        gridArea: {
            xs: '1 / 1 / 2 / 2',
            sm: '1 / 1 / 2 / 2',
            md: '1 / 1 / 2 / 2',
            lg: '1 / 1 / 2 / 2'
        },
    })
)

export const DashboardHeadXS = styled(Grid)(({ theme }) =>
    theme.unstable_sx({
        display: {
            xs: 'flex',
            sm: 'none',
            md: 'none',
            lg: 'none',
        },
        gridArea: '1 / 2 / 2 / 3',
        color: 'white',
        justifyContent: 'center',
    })
)

export const DashboardContainer = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        alignItems: 'start',
        color: 'white',
    })
)

export const UserAvatar = styled(Avatar)(({ theme }) =>
    theme.unstable_sx({
        height: {
            xs: 'auto',
            sm: '70px',
            md: '80px',
            lg: '104px'
        },
        width: {
            xs: '100%',
            sm: '70px',
            md: '80px',
            lg: '104px'
        },
        p: {
            xs: '0 0 !important',
            sm: 'false',
            md: 'false',
            lg: 'false',
        }
    })
)

export const Greeting = styled(Typography)(({ theme }) =>
    theme.unstable_sx({
        display: {
            xs: 'none',
            sm: 'flex',
            md: 'flex',
            lg: 'flex',

        },
        fontSize: {
            xs: 'false',
            sm: '2.5rem',
            md: 'false',
            lg: '3rem',
        },
        marginLeft: '24px'
    })
)

export const GreetingXS = styled(Typography)(({ theme }) =>
    theme.unstable_sx({
            fontSize: '2rem'
    })
)

export const UserData = styled(Grid)(({ theme }) =>
    theme.unstable_sx({
        gridArea: {
            xs: '2 / 1 / 3 / 2',
            sm: '2 / 1 / 3 / 2',
            md: '2 / 1 / 3 / 2',
            lg: '2 / 1 / 3 / 2'
        },
        overflow: {
            xs: 'hidden',
            sm: 'auto',
            md: 'auto',
            lg: 'auto'
        },
        minWidth: '40px',
    })
)

export const FavoriteTeamsBox = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        display: {
            xs: 'none',
            sm: 'flex',
            md: 'flex',
            lg: 'flex'
        },
        flexShrink: '1',
        flexDirection: 'column',
        alignItems: 'center',
        maxHeight: '100%',
        width: '50%',
    })
)

export const FavoriteTeamsBoxXS = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        display: {
            xs: 'flex',
            sm: 'none',
            md: 'none',
            ld: 'none',
        },
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        gap: '24px',
        width: '100%',
        height: '136px',
        p: '0 16px',
        border: 'solid 1px var(--theme-orange)'
    })
)

export const NotificationsBox = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        display: {
            xs: 'none',
            sm: 'flex',
            md: 'flex',
            lg: 'flex'
        },
        flexShrink: '1',
        flexGrow: '1',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        maxHeight: '100%',
    })
)

export const ForumsYouFollow = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        gridArea: {
            xs: '2 / 2 / 3 / 3',
            sm: '1 / 2 / 3 / 3',
            md: '1 / 2 / 3 / 3',
            lg: '1 / 2 / 3 / 3'
        },
        width: '100%',

        minWidth: {
            xs: '201px',
            sm: '278px',
            md: '278px',
            lg: '278px'
        },
        pb: '24px !important',
        background: 'linear-gradient(to bottom, #0081D4, #000000)',
        border: 'solid 1px var(--theme-orange)',
        overflow: 'auto',
    })
)