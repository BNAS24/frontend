// SidebarContext.js
import React, { createContext, useContext, useState } from "react";

const Sidebar = createContext();

export function useSidebar() {
  return useContext(Sidebar);
}

export function SidebarProvider({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleNav = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Sidebar.Provider value={{ isSidebarOpen, handleNav }}>
      {children}
    </Sidebar.Provider>
  );
}
