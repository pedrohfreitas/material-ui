import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routers";
import { AppThemeProvider } from "./shared/contexts";
import { MenuLateral } from "./shared/components/menu-lateral/MenuLateral";

export const App = () => {
    return (
        <AppThemeProvider>
            <BrowserRouter>
                <MenuLateral>
                    <AppRoutes />
                </MenuLateral>
            </BrowserRouter>
        </AppThemeProvider>
    );
};

export default App;
