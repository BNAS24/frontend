import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useAuth } from '../auth/authSlice';

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {

    const { user } = useAuth();

    const [socket, setSocket] = useState(null);

    useEffect(() => {

        if (user) {

            const newSocket = io('http://localhost:5000', {
                auth: (cb) => {
                    cb({ token: localStorage.token });
                },
                withCredentials: true,
            });

            setSocket(newSocket);

            newSocket.on('connectionEstablished', (data) => {
                console.log('Socket connection established:', data);
            });

            newSocket.on('recieved', (data) => {
                alert(data.message);
            });

            newSocket.on('newFollower', (data) => {
                console.log(`${data.followerUsername} is now following you!`);
            });

            newSocket.on('disconnect', () => {
                console.log('Socket disconnected');
            });

            return () => newSocket.disconnect();
        }

    }, [user]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};
