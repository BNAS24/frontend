import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import { Footer } from '../../components/authfoot';
import { NavBar } from '../../components/authnav';
import { SideBarNav } from '../../components/helpers/sidebarnav';
import { ForumContent, ForumPageWrap, ForumSeachBar } from './subcomponents/forumsStyledComponents';


export const ForumPres = ({ isSidebarOpen }) => {

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
                {isSidebarOpen && (
                    <SideBarNav />
                )}
            </ForumContent>
            <Footer />
        </ForumPageWrap>
    )
}