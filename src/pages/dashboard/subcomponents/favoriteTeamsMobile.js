import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Avatar, Container, IconButton, Typography } from "@mui/material";
import { fakeTeams } from '../../../datastore/dashboard'
import { mobileDisplay } from '../styles';
import {
    FavoriteTeamsMobileDisplayContainer,
} from "./dashboardStyledComponents";


export const FavoriteTeamsMobileDisplay = ({ handleTeamsDisplayed }) => {

    return (
        <>
            <FavoriteTeamsMobileDisplayContainer>
                <IconButton
                    onClick={handleTeamsDisplayed}
                    sx={mobileDisplay.favoriteTeams.button}
                    // aria-label='Back Button'
                >
                    <ArrowBackIosNewOutlinedIcon
                        sx={mobileDisplay.favoriteTeams.buttonColor}
                    />
                </IconButton>
                <Typography
                    align='center'
                    sx={mobileDisplay.favoriteTeams.title}
                >
                    Favorite Teams
                </Typography>
                <Container
                    sx={mobileDisplay.favoriteTeams.container}
                >
                    {fakeTeams.map((team) =>
                        <Container
                            key={team}
                            sx={mobileDisplay.favoriteTeams.innerContainer}
                        >
                            <Avatar
                                variant='square'
                                alt='team logo'
                                src='https://cdn-icons-png.flaticon.com/512/2553/2553695.png'
                                sx={mobileDisplay.favoriteTeams.image}
                            >
                            </Avatar>
                            <Typography
                                variant='body1'
                                align='center'
                                className='links-hover-state'
                                sx={mobileDisplay.favoriteTeams.name}
                            >
                                {team}
                            </Typography>
                        </Container>
                    )}
                </Container>
            </FavoriteTeamsMobileDisplayContainer>
        </>
    )
}