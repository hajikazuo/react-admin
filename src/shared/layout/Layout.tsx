import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { useDrawerContext } from "../contexts";

interface ILayoutProps {
    title: string
    toolbar: ReactNode;
    children: ReactNode;

}

export const Layout: React.FC<ILayoutProps> = ({ title, toolbar, children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={1} display="flex" alignItems="center" gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} >
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}

                <Typography
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3' }
                >
                    {title}
                </Typography>
            </Box>

            {toolbar && (
                <Box>
                    {toolbar}
                </Box>
            )}
            <Box flex={1} overflow="auto">
                {children}
            </Box>
        </Box>
    );
};