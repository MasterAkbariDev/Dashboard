import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation()

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    useEffect(() => {
        setIsSidebarOpen(false)
    }, [location.pathname])

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    return useContext(SidebarContext);
};