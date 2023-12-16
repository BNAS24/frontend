import { Grid } from '@mui/material';
import { styled } from '@mui/system';


export const MainLayoutGrid = styled(Grid)(({ theme }) =>
    theme.unstable_sx({
        flex: '1',
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
        maxHeight: '100vh',
        overflowX: 'auto',
        overflowY: 'hidden'
    })
)