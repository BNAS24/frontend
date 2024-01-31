import React, { useEffect, useState } from 'react';
import { useSidebar } from '../../context/mobilenav';
import { fetchTeamData, fetchTeamEvents } from '../../context/sportsData/sportDataFetch';
import leagues from '../../datastore/leagues';
import '../../styleSheets/livescores.css';
import { LiveScorePres } from './liveScoresPres';
import { useAuth } from '../../context/auth/authSlice';

export const LiveScores = () => {

    const { user } = useAuth();

    const { isSidebarOpen } = useSidebar();

    const [sportSelected, setSportSelected] = useState(null);

    const [teamSelected, setTeamSelected] = useState(false);

    const [teamData, setTeamData] = useState(null);

    const [teamImage, setTeamImage] = useState('');

    const [isTeamFavorited, setTeamFavorited] = useState(false);

    const [score, setScore] = useState([]);


    const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    useEffect(() => {

        const fetchTeamsImage = async () => {

            if (teamSelected) {

                try {

                    const data = await fetchTeamData(teamData);

                    if (data) {

                        setTeamImage(data.IMAGE_PATH)

                    }

                } catch (error) {
                    console.log(error);
                }
            }

        };

        fetchTeamsImage();

    }, [teamSelected, teamData])

    useEffect(() => {

        const fetchEventResults = async () => {

            if (teamData !== null) {
                try {

                    const eventResults = await fetchTeamEvents(teamData);

                    if (eventResults.length > 0) {

                        const firstMatch = eventResults[0];

                        const extractedScores = {
                            homeTeam: {
                                name: firstMatch.HOME_NAME,
                                firstQuarter: firstMatch.HOME_SCORE_PART_1,
                                secondQuarter: firstMatch.HOME_SCORE_PART_2,
                                thirdQuarter: firstMatch.HOME_SCORE_PART_3,
                                forthQuarter: firstMatch.HOME_SCORE_PART_4,
                                totalScore: firstMatch.HOME_SCORE_CURRENT,
                                images: firstMatch.HOME_IMAGES,
                            },
                            awayTeam: {
                                name: firstMatch.AWAY_NAME,
                                firstQuarter: firstMatch.AWAY_SCORE_PART_1,
                                secondQuarter: firstMatch.AWAY_SCORE_PART_2,
                                thirdQuarter: firstMatch.AWAY_SCORE_PART_3,
                                forthQuarter: firstMatch.AWAY_SCORE_PART_4,
                                totalScore: firstMatch.AWAY_SCORE_CURRENT,
                                images: firstMatch.AWAY_IMAGES,
                            },
                        };

                        setScore([extractedScores]);

                    }

                } catch (error) {
                    console.log(error);
                }
            }
        };

        fetchEventResults();

    }, [teamData]);

    const handleTeamData = async (index) => {

        if (index !== undefined) {

            setTeamSelected(true);
            const selectedTeam = leagues[sportSelected].teams[index];
            setTeamData(selectedTeam);

        } else {

            setTeamSelected(false);
            setTeamData(null);

        };
    };

    const data1 = [
        { team: 'Home', scores: [0, 0, 6, 0], total: 6 },
        { team: 'Away', scores: [20, 0, 3, 0], total: 23, totalColor: true },
    ];

    const updateFavoritedTeamsList = async (name) => {

        if (name) {

            try {
                const response = await fetch(`http://localhost:5000/api/users/favorited-team/${encodeURIComponent(name)}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user?.token}`,
                    },
                })

                if (!response.ok) {

                    console.log(`Error updating favorited teams list:`, response.statusText);

                }

                console.log(response)

            } catch (error) {

                console.log(error);

            }

        } else {

            console.log('Error: team name not found');

        }

    };

    const favoriteTeamSelected = (teamData) => {

        updateFavoritedTeamsList(teamData);

        setTeamFavorited(!isTeamFavorited)
    };

    console.log('score', score)


    return (
        <LiveScorePres
            data1={data1}
            score={score}
            handleTeamData={handleTeamData}
            isSidebarOpen={isSidebarOpen}
            sportSelected={sportSelected}
            setSportSelected={setSportSelected}
            teamSelected={teamSelected}
            teamData={teamData}
            teamImage={teamImage}
            isTeamFavorited={isTeamFavorited}
            favoriteTeamSelected={favoriteTeamSelected}
            leagues={leagues}
            weeks={weeks}
        />
    )
};