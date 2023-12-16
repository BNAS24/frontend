import { useSidebar } from '../../context/mobilenav'
import { AboutUsPres } from './aboutUsPres';


export const AboutUs = () => {

    const { isSidebarOpen } = useSidebar();

    return (
        <>
            <AboutUsPres
                isSidebarOpen={isSidebarOpen}
            />
        </>
    )
}
