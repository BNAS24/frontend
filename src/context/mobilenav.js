// SidebarContext.js
import React, { createContext, useContext, useState } from "react";

const Sidebar = createContext();

export function useSidebar() {
  return useContext(Sidebar);
}

export function SidebarProvider({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Sidebar.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </Sidebar.Provider>
  );
}
