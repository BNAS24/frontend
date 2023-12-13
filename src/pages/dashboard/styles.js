export const styles = {
    fakeTeamsContainer: {
        display: 'flex',
        flexShrink: 1,
        flexGrow: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '33%',
        minWidth: '73px',
        mt: '24px',
        p: '0 0 !important'
    },
    fakeTeamsLogoPlaceHolder: {
        height: '62px',
        width: '62px',
    },
    fakeTeamsTitle: {
        flexShrink: 2,
        fontSize: '1rem',
    },
    notificationsButtonIcon: {
        width: '40px',
        height: 'auto',
        marginTop: '8px',
    },
    badgesButtonIcon: {
        width: '48px',
        height: 'auto'
    },
    notificationLink: {
        mt: '24px',
        flexShrink: '0',
        flexGrow: '0',
        fontSize: '1rem'
    },
    forumsYouFollowContentContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: {
            xs: '8px',
            sm: '8px',
            md: '16px',
            lg: '16px'
        },
        p: {
            xs: '0 8px',
            sm: '0 8px',
            md: '0 16px',
            lg: '0 16px'
        },
    },
    forumsYouFollowUserAvatar: {
        height: {
            xs: '16px',
            sm: '64px',
            md: '64px',
            lg: '64px',
        },
        width: {
            xs: '16px',
            sm: '64px',
            md: '64px',
            lg: '64px',
        }
    },
    forumsYouFollowPostContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'start',
        gap: '8px',
        height: {
            xs: '140px',
            sm: '168px',
            md: '168px',
            lg: '168px'
        },
        p: '8px',
        backgroundColor: 'var(--theme-blue)'
    },
    postUsernameTypography: {
        fontSize: {
            xs: '0.68rem',
            sm: '0.7rem',
            md: '1rem',
            lg: '1.2rem',
            xl: 'false'
        },
        color: 'var(--theme-white)'
    },
    postTimeCreatedTypography: {
        fontSize: {
            xs: '0.68rem',
            sm: '0.7rem',
            md: '1rem',
            lg: '1.2rem',
            xl: ''
        },
        color: 'var(--theme-white)'
    },
    postContentContainer: {
        height: '100px',
        width: '100%',
        p: '8px 8px !important',
        border: 'solid 1px var(--theme-orange)',
        overflowY: 'auto',
        overflowX: {
            xs: 'hidden',
            sm: 'auto',
            md: 'auto',
            lg: 'auto'
        }
    },
    postContentText: {
        fontSize: {
            xs: '0.68rem',
            sm: '0.7rem',
            md: '0.9rem',
            lg: '1rem'
        },
        color: 'var(--theme-white)'
    },
    forumLinkText: {
        fontSize: {
            xs: '0.68rem',
            sm: '0.7rem',
            md: '1rem',
            lg: '1.2rem',
            xl: ''
        },
        color: 'var(--theme-white)'
    },
    commentIcon: {
        height: {
            xs: '16px',
            sm: '16px',
            md: '32px',
            lg: 'false'
        },
        color: 'var(--theme-orange)',
        '&:hover': {
            cursor: 'pointer',
            color: '#ff8c33',
        }
    },
    favoriteIconNormal: {
        height: {
            xs: '16px',
            sm: '16px',
            md: '32px',
            lg: 'false'
        },
        color: 'red',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    favoriteIconClickedState: {
        height: {
            xs: '16px',
            sm: '16px',
            md: '32px',
            lg: 'false'
        },
        color: 'red',
        '&:hover': {
            cursor: 'pointer',
            color: '#f95149',
        }
    },
}

export const mobileDisplay = {
    favoriteTeams: {
        button: {
            position: 'absolute',
            display: 'flex',
            left: '8px',
            top: '8px',
        },
        buttonColor: {
            color: 'var(--theme-orange)'

        },
        title: {
            position: 'absolute',
            top: '8px',
            fontSize: '1.5rem',
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            height: '88%',
            width: '100%',
            mt: '56px',
            pl: '16px !important',
            pr: '16px !important',
            overflowY: 'auto',
            border: 'solid 1px #F26101'
        },
        innerContainer: {
            display: 'flex',
            flexShrink: 1,
            flexGrow: 0,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '33%',
            minWidth: '73px',
            mt: '24px',
            p: '0 0 !important'
        },
        image: {
            height: '62px',
            width: '62px',
        },
        name: {
            flexShrink: 2,
            fontSize: '1rem',
        }
    },
    notifications: {
        button: {
            position: 'absolute',
            display: 'flex',
            left: '8px',
            top: '8px',
        },
        buttonColor: {
            color: 'var(--theme-orange)'

        },
        title: {
            position: 'absolute',
            top: '8px',
            fontSize: '1.5rem',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '88%',
            width: '100%',
            mt: '56px',
            pb: '24px',
            overflowY: 'auto',
            border: 'solid 1px #F26101'
        },
        link: {
            mt: '24px',
            flexShrink: '0',
            flexGrow: '0',
            fontSize: '1rem'
        }
    }
}