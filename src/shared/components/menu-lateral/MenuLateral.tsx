import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";


interface IAppMenuLateralProviderProps {
    children: React.ReactNode
}

export const MenuLateral: React.FC<IAppMenuLateralProviderProps> = ({ children }) => {

    const theme = useTheme();

    return (
        <>
            <Drawer open={true} variant="permanent">
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)} alignItems="center" display="flex" justifyContent="center">
                        <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} src="https://cdn-icons-png.flaticon.com/512/147/147144.png"></Avatar>
                    </Box>
                    Teste
                    <Divider />
                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página Inicial" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>

            </Drawer>

            <Box height="100vh" marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};