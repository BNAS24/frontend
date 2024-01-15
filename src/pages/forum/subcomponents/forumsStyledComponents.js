import { Container, TextField } from '@mui/material';
import { styled } from '@mui/system';

export const ForumPageWrap = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: '100%',
        width: '100%',
    })
)

export const ForumContent = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        position: 'relative',
        display: 'flex',
        flex: '1',
        justifyContent: 'center',
        overflow: 'hidden',
    })
)

export const ForumSeachBar = styled(TextField)(({ theme }) =>
    theme.unstable_sx({
        width: '100%',
        maxWidth: '400px',
        mt: '32px',
        '& .MuiOutlinedInput-root': {
            width: '100%',
            maxWidth: '600px',
            '& fieldset': {
                borderColor: 'var(--theme-orange)'
            },
            '&:hover fieldset': {
                borderColor: '#fe6f10',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'var(--theme-orange)',
            },
            '& .MuiInputBase-input': {
                color: 'white',
            },
            cursor: 'text',
        },
        '& .MuiInputLabel-root': {
            color: 'white',
            '&.Mui-focused': {
                color: 'var(--theme-orange)',
            },
        },
        '& input:-webkit-autofill': {
            backgroundColor: 'transparent !important',
        },
    })
)

export const ForumDataDisplay = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        minHeight: '100%',
        width: '100%',
        background: 'linear-gradient(to bottom, #0081D4, #000000)',
        border: 'solid 1px var(--theme-orange)',
        overflow: 'auto',
    })
)

export const TopContainer = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexGrow: '0',
        flexShrink: '0',
        position: 'sticky',
        WebkitPosition: 'sticky',
        top: '0',
        background: 'linear-gradient(to bottom, #0081D4, #229cff)',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.85)',
        zIndex: '999',
    })
)