import { Typography } from '@mui/material';
import { Container, styled } from '@mui/system';

export const MainContentContainer = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        position: 'relative',
        flex: '1',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '16px',
        height: '100%',
        width: '100%',
        pl: '0 !important',
        pr: '16px !important'
    })
)

export const BackgroundImageContainer = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        flex: '1',
        width: '50%',
        color: 'white',
        backgroundImage: 'url(https://i.postimg.cc/WpCGbLhy/Hockey-Shot.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    })
)

export const TextContentContainer = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        gap: '16px',
        color: 'white',
    })
)

export const Title = styled(Typography)(({ theme }) =>
    theme.unstable_sx({
        fontSize: {
            xs: '1.5rem',
            sm: '2.5rem',
            md: '3rem',
            lg: '3rem',

        },
    })
)

export const Paragraph = styled(Typography)(({ theme }) =>
    theme.unstable_sx({
        fontSize: {
            xs: '0.6rem',
            sm: '1rem',
            md: '1.2rem',
            lg: '1.3rem',

        },
    })
)