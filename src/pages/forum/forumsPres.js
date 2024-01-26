import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import { Footer } from '../../components/authfoot';
import { NavBar } from '../../components/authnav';
import { SideBarNav } from '../../components/helpers/sidebarnav';
import { ForumContent, ForumPageWrap, ForumSeachBar } from './subcomponents/forumsStyledComponents';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';


export const ForumPres = ({
    isSidebarOpen,
    searchState,
    setSearchState,
    searchResults,
    loading,
}) => {

    return (
        <ForumPageWrap
            disableGutters={true}
            maxWidth='xl'
        >
            <NavBar />
            <ForumContent>
                <ForumSeachBar
                    id="searchBar"
                    label='Search Forums'
                    variant="outlined"
                    type='search'
                    value={searchState}
                    onChange={(e) => setSearchState(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment
                                position="end"
                            >
                                <SearchOutlinedIcon
                                    sx={{
                                        color: 'white'
                                    }}
                                />
                            </InputAdornment>
                        )
                    }}
                />
                {loading && <p>Loading...</p>}

                <ul>
                    {searchResults?.map(result => (
                        <li key={result._id}>{result.name}</li> // Adjust the properties based on your data structure
                    ))}
                </ul>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        // border: '1px solid var(--theme-orange)',
                        width: '100%',
                        height: '80%',
                    }}
                >
                    <Container
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            border: '1px solid var(--theme-orange)',
                            borderRadius: '8px',
                            width: '48%',
                            height: '40%',
                            '&: hover': {
                                backgroundColor: 'rgba(242, 97, 1, 0.5)',
                                cursor: 'pointer',
                            }
                        }}
                    >
                        <Typography
                            align='center'
                        >
                            Top Forum Content 1
                        </Typography>
                    </Container>
                    <Container
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            border: '1px solid var(--theme-orange)',
                            borderRadius: '8px',
                            width: '48%',
                            height: '40%',
                            '&: hover': {
                                backgroundColor: 'rgba(242, 97, 1, 0.5)',
                                cursor: 'pointer',
                            }
                        }}
                    >
                        <Typography
                            align='center'
                        >
                            Top Forum Content 2
                        </Typography>
                    </Container>
                    <Container
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            border: '1px solid var(--theme-orange)',
                            borderRadius: '8px',
                            width: '48%',
                            height: '40%',
                            '&: hover': {
                                backgroundColor: 'rgba(242, 97, 1, 0.5)',
                                cursor: 'pointer',
                            }
                        }}
                    >
                        <Typography
                            align='center'
                        >
                            Top Forum Content 3
                        </Typography>
                    </Container>
                    <Container
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            border: '1px solid var(--theme-orange)',
                            borderRadius: '8px',
                            width: '48%',
                            height: '40%',
                            '&: hover': {
                                backgroundColor: 'rgba(242, 97, 1, 0.5)',
                                cursor: 'pointer',
                            }
                        }}
                    >
                        <Typography
                            align='center'
                        >Top Forum Content 4
                        </Typography>
                    </Container>

                </Container>
                {isSidebarOpen && (
                    <SideBarNav />
                )}
            </ForumContent>
            <Footer />
        </ForumPageWrap>
    )
}