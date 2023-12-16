import { useSidebar } from '../../context/mobilenav';
import { ForumPres } from './forumsPres';

export const Forums = () => {

    const { isSidebarOpen } = useSidebar();

    return (
        <>
            <ForumPres isSidebarOpen={isSidebarOpen}/>
        </>
    )
}
