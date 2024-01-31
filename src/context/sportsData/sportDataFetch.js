const API_URL = 'http://localhost:5000/api/sportsApi/'

export const fetchTeamData = async (teamName) => {

    try {

        const response = await fetch(`${API_URL}fetchData?teamName=${teamName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {

            const data = await response.json();
            return data;

        } else {
            throw new Error('Failed to fetch team data');
        }

    } catch (error) {
        console.log('Error fetching team data', error);
    }

}

export const fetchTeamEvents = async (teamName) => {

    try {

        const response = await fetch(`${API_URL}fetchEvents?teamName=${teamName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {

            const data = await response.json();

            return data;

        } else {
            throw new Error('Failed to fetch team data');
        }

    } catch (error) {

        console.log('Error fetching team events', error)

    }

}

export const fetchFixtureEvents = async (teamName) => {

    try {

        const response = await fetch(`${API_URL}fetchFixtureEvents?teamName=${teamName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {

            const data = await response.json();
            
            return data;

        } else {
            throw new Error('Failed to fetch team data');
        }

    } catch (error) {

    }

}

export const latestEvents = async () => {

    try {

    } catch (error) {

    }

}
