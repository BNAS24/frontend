import { Footer } from "../../../../components/authfoot"
import { NavBar } from "../../../../components/authnav"
import {
    ForumContent,
    ForumDataDisplay,
    ForumPageWrap,
} from "../forumsStyledComponents"

export const SubForumPage = () => {

    return (
        <ForumPageWrap
            disableGutters={true}
            maxWidth='xl'
        >
            <NavBar />
            <ForumContent>
                <ForumDataDisplay>

                </ForumDataDisplay>
            </ForumContent>
            <Footer />
        </ForumPageWrap>
    )
}