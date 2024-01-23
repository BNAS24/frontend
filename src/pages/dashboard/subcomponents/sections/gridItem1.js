import {
    DashboardHead,
    DashboardHeadContainer,
    UserAvatar,
    Greeting
} from "../dashboardStyledComponents"

export const FirstGridItem = ({
    user,
    extraUserData
}) => {

    return (
        <>
            <DashboardHead
                item
                xs={12} sm={12} md={12} lg={12}>
                <DashboardHeadContainer
                    disableGutters={true}
                >
                    <UserAvatar
                        variant='square'
                        alt='profile picture'
                        // src={extraUserData?.profileImage}
                        src={extraUserData?.profileImage
                            ? `http://localhost:5000${extraUserData.profileImage}`
                            : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'}
                    />
                    <Greeting>
                        Hello {user && user.username}!
                    </Greeting>
                </DashboardHeadContainer>
            </DashboardHead>
        </>
    )
}