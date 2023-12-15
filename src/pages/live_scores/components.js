import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const LiveScorePageWrap = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        height: '100%',
        width: '100%',
    })
)

export const LiveScoreContent = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        flex: '1',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: {
            xs: '16px',
            sm: '40px',
            md: '40px',
            lg: '40px',
        },
        height: '100%',
        maxHeight: '100vh',
        width: '100%',
        minWidth: '286',
        overflowY: 'hidden',
    })
)

export const LeagueSelect = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexShrink: '1',
        width: '50%',
        minWidth: '142px',
        borderLeft: 'solid 1px var(--theme-orange)',
        borderRight: 'solid 1px var(--theme-orange)',
        overflow: 'auto',
    })
)

export const LeagueTitle = styled(Typography)(({ theme }) =>
    theme.unstable_sx({
        mt: '24px',
        fontSize: {
            xs: '1.5rem',
            sm: '3rem',
            md: '3rem',
            lg: '3rem',
        },
        pr: {
            xs: '8px !important',
            sm: '0 ',
            md: '0 ',
            lg: '0 ',
        },
    })
)

export const LeaguesList = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100%',
        width: '100%'
    })
)

export const TeamsData = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        display: 'flex',
        position: 'relative',
        flexShrink: '1',
        width: '50%',
        minWidth: '144px',
        justifyContent: 'center',
        color: 'white',
    })
)