import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { ReactNode } from "react";

interface ILayoutProps {
    title: string
    toolbar: ReactNode;
    children: ReactNode;

}

export const Layout: React.FC<ILayoutProps> = ({ title, toolbar, children }) => {

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
                <Typography sx={{ color: 'text.primary' }}>{title}</Typography>
            </Breadcrumbs>

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