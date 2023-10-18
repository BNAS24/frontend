import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Container, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { Footer } from '../components/authfoot';
import { NavBar } from '../components/authnav';
import { useSidebar } from '../context/mobilenav';
import { SideBarNav } from '../components/helpers/sidebarnav';

export const Forums = () => {

    const { isSidebarOpen } = useSidebar();

    return (
        <Container
            maxWidth='xl'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                width: '100%',
                paddingLeft: '0 !important',
                paddingRight: '0 !important',
            }}
        >
            <NavBar />
            <Container
                sx={{
                    display: 'flex',
                    flex: '1',
                    justifyContent: 'center'
                }}
            >
                <TextField
                    id="searchBar"
                    label='Search Forums'
                    variant="outlined"
                    type='search'
                    sx={{
                        width: '100%',
                        maxWidth: '400px',
                        marginTop: '32px',
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

                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchOutlinedIcon
                                    sx={{
                                        color: 'white'
                                    }}
                                />
                            </InputAdornment>
                        )
                    }}

                />
                {isSidebarOpen  && (
                    <SideBarNav />
                )}
            </Container>
            <Footer />
        </Container>
    )
}
