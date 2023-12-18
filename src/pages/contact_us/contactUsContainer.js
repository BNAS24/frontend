import React from 'react';
import { useSidebar } from '../../context/mobilenav';
import { ContactUsPres } from './contactUsPres';

export const ContactUs = () => {

    const { isSidebarOpen } = useSidebar();

    return (
        <ContactUsPres isSidebarOpen={isSidebarOpen} />
    )
}

