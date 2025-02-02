import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from "@mui/material";
import React from "react";

interface IDetailToolsProps {
    newButtonText?: string;
    showNewButton?: boolean;
    showBackButton?: boolean;
    showDeleteButton?: boolean;
    showSaveButton?: boolean;
    showSaveAndCloseButton?: boolean;

    showNewButtonLoading?: boolean;
    showBackButtonLoading?: boolean;
    showDeleteButtonLoading?: boolean;
    showSaveButtonLoading?: boolean;
    showSaveAndCloseButtonLoading?: boolean;

    whenClickingInNew?: () => void;
    whenClickingInBack?: () => void;
    whenClickingInDelete?: () => void;
    whenClickingInSave?: () => void;
    whenClickingInSaveAndClose?: () => void;
}

export const DetailTools: React.FC<IDetailToolsProps> = ({
    newButtonText = 'New',
    showNewButton = true,
    showBackButton = true,
    showDeleteButton = true,
    showSaveButton = true,
    showSaveAndCloseButton = false,

    showNewButtonLoading = false,
    showBackButtonLoading = false,
    showDeleteButtonLoading = false,
    showSaveButtonLoading = false,
    showSaveAndCloseButtonLoading = false,

    whenClickingInNew,
    whenClickingInBack,
    whenClickingInDelete,
    whenClickingInSave,
    whenClickingInSaveAndClose,
}) => {
    const theme = useTheme();

    return (
        <Box
            gap={1}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            height={theme.spacing(5)}
            component={Paper}
        >
            {showSaveButton && !showSaveButtonLoading && (
                <Button
                    color='primary'
                    disableElevation
                    variant='contained'
                    startIcon={<Icon>save</Icon>}
                    onClick={whenClickingInSave}
                >
                    Save
                </Button>
            )}

            {showSaveButtonLoading && (
                <Skeleton width={110} height={60} />
            )}

            {showSaveAndCloseButton && !showSaveAndCloseButtonLoading && (
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    startIcon={<Icon>save</Icon>}
                    onClick={whenClickingInSaveAndClose}
                >
                    Save and Back to List
                </Button>
            )}

            {showSaveAndCloseButtonLoading && (
                <Skeleton width={180} height={60} />
            )}

            {showDeleteButton && !showDeleteButtonLoading && (
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    startIcon={<Icon>delete</Icon>}
                    onClick={whenClickingInDelete}
                >
                    Delete
                </Button>
            )}

            {showDeleteButtonLoading && (
                <Skeleton width={110} height={60} />
            )}

            {showNewButton && !showNewButtonLoading && (
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    startIcon={<Icon>add</Icon>}
                    onClick={whenClickingInNew}
                >
                    {newButtonText}
                </Button>
            )}

            {showNewButtonLoading && (
                <Skeleton width={110} height={60} />
            )}

            <Divider variant='middle' orientation='vertical' />

            {showBackButton && !showBackButtonLoading && (
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    startIcon={<Icon>arrow_back</Icon>}
                    onClick={whenClickingInBack}
                >
                    Back to List
                </Button>
            )}

            {showBackButtonLoading && (
                <Skeleton width={110} height={60} />
            )}
        </Box>
    );
}
