import React, { useEffect, useState } from 'react';
import { useSidebar } from '../../context/mobilenav';
import { fetchTeamData, fetchTeamEvents } from '../../context/sportsData/sportDataFetch';
import leagues from '../../datastore/leagues';
import '../../styleSheets/livescores.css';
import { LiveScorePres } from './liveScoresPres';


export const LiveScores = () => {

    const [sportSelected, setSportSelected] = useState(null)

    const [teamSelected, setTeamSelected] = useState(false)

    const [teamData, setTeamData] = useState(null)

    const [teamImage, setTeamImage] = useState('')

    const [score, setScore] = useState([])

    const { isSidebarOpen } = useSidebar()

    const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    useEffect(() => {
        const fetchBasicData = async () => {
            if (teamData !== null) {
                try {
                    const data = await fetchTeamData(teamData);
                    if (data && data.IMAGE_PATH) {
                        setTeamImage(data.IMAGE_PATH);
                    } else {
                        console.error('Data or IMAGE_PATH is undefined');
                    }
                } catch (error) {
                    console.error('Error fetching team data:', error);
                }
            }
        };

        const fetchEventResults = async () => {
            if (teamData !== null) {
                try {
                    const eventResults = await fetchTeamEvents(teamData);
                    if (eventResults.length > 0) {
                        const firstMatch = eventResults[0];
                        const extractedScores = {
                            homeTeam: {
                                name: firstMatch.HOME_NAME,
                                score: firstMatch.HOME_SCORE_CURRENT,
                                images: firstMatch.HOME_IMAGES,
                            },
                            awayTeam: {
                                name: firstMatch.AWAY_NAME,
                                score: firstMatch.AWAY_SCORE_CURRENT,
                                images: firstMatch.AWAY_IMAGES,
                            },
                        };
                        setScore([extractedScores]);
                    }
                } catch (error) {
                    console.error('Error fetching team events:', error);
                }
            }
        };

        fetchBasicData();
        fetchEventResults();
    }, [teamData, teamImage]);

    console.log(score)

    const handleTeamData = async (index) => {

        if (index !== undefined) {

            setTeamSelected(true);
            const selectedTeam = leagues[sportSelected].teams[index];
            setTeamData(selectedTeam);

        } else {

            setTeamSelected(false);
            setTeamData(null);

        }
    }

    const data1 = [
        { team: 'Home', scores: [0, 0, 6, 0], total: 6 },
        { team: 'Away', scores: [20, 0, 3, 0], total: 23, totalColor: true },
    ]


    return (
        <LiveScorePres
            data1={data1}
            handleTeamData={handleTeamData}
            isSidebarOpen={isSidebarOpen}
            sportSelected={sportSelected}
            setSportSelected={setSportSelected}
            teamSelected={teamSelected}
            teamData={teamData}
            teamImage={teamImage}
            leagues={leagues}
            weeks={weeks}
        />
    )
}