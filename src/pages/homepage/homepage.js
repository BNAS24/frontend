import Button from '@mui/material/Button';
import * as React from 'react';
import { Link } from 'react-router-dom';
import '../../styleSheets/homepage.css';
// import { useSidebar } from "../context/mobilenav";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import { Footer } from '../../components/authfoot';


export const Homepage = () => {
    return (
        <div
            className='wrapper'
        >
            <nav
                className='header-container'
            >
                <div
                    className='logo_name_container'
                >
                    <img
                        src='https://i.postimg.cc/wjkpvXx7/fans.png'
                        className='sports-fanatic-logo'
                        alt='logo'
                    />
                    <div
                        className='title'
                    >
                        Sports Fanatic
                    </div>
                </div>
                <div
                    className='nav-container'
                >
                    <p
                        className='links-hover-state'
                    >
                        Forums
                    </p>
                    <p
                        className='links-hover-state'
                    >
                        Live Scores
                    </p>
                    <p>
                        <Link
                            className='links-hover-state'
                            to='/login'
                        >
                            Login
                        </Link>
                    </p>
                </div>
                <IconButton
                    // onClick={handleNav}
                    sx={{
                        position: 'absolute',
                        display: {
                            xs: 'flex',
                            sm: 'none',
                            md: 'none',
                            lg: 'none',
                        },
                        right: '24px',
                        mt: '0',
                        height: '24px',
                        width: '24px',
                    }}
                >
                    <MenuIcon
                        sx={{
                            color: 'var(--theme-orange)'
                        }}
                    />
                </IconButton>
            </nav>
            <section
                className='hero-container'
            >
                <p
                    className='hero-text-overlay'
                >
                    Join The Club
                </p>
                <Link
                    to='/register'
                >
                    <Button
                        className='C2A-Button'
                        style={{
                            backgroundColor: 'var(--theme-orange)',
                            color: 'white',
                            height: 'auto',
                            minHeight: '80px',
                            width: '243px',
                            borderRadius: '24px',
                            boxShadow: '0px 4px 4px 0px #00000040',
                            fontSize: '32px',
                            fontWeight: '600',
                            whiteSpace: 'nowrap',
                            zIndex: '2'
                        }}>
                        Get Started
                    </Button>
                </Link>
            </section>
            <Footer />
        </div>
    );
}
