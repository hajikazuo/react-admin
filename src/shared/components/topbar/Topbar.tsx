import { AppBar, Toolbar, IconButton, Typography, Box, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDrawerContext } from "../../contexts/DrawerContext";

export const Topbar: React.FC = () => {
    const { toggleDrawerOpen } = useDrawerContext();
    const theme = useTheme();
    
    return (
        <Box component={AppBar} height={theme.spacing(7)} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawerOpen}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    MyDashBoard
                </Typography>
            </Toolbar>
        </Box>
    );
};
