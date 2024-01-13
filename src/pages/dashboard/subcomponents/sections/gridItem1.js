import {
    DashboardHead,
    DashboardHeadContainer,
    UserAvatar,
    Greeting
} from "../dashboardStyledComponents"

export const FirstGridItem = ({ user }) => {


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
                        src='https://i.postimg.cc/Vs24qSZJ/avatar-1577909-1280.webp'
                    />
                    <Greeting>
                        Hello {user && user.username}!
                    </Greeting>
                </DashboardHeadContainer>
            </DashboardHead>
        </>
    )
}