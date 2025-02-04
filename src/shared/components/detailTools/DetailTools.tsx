import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from "@mui/material";
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
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            gap={1}
            marginX={1}
            marginY={4}
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
                    {!smDown && (
                        <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                            Save
                        </Typography>
                    )}
                </Button>
            )}

            {showSaveButtonLoading && (
                <Skeleton width={110} height={60} />
            )}

            {(showSaveAndCloseButton && !showSaveAndCloseButtonLoading && !smDown && !mdDown) && (
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    startIcon={<Icon>save</Icon>}
                    onClick={whenClickingInSaveAndClose}
                >
                    <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        Save and Back to List
                    </Typography>
                </Button>
            )}

            {(showSaveAndCloseButtonLoading && !smDown) && (
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
                    {!smDown && (
                        <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                            Delete
                        </Typography>
                    )}
                </Button>
            )}

            {showDeleteButtonLoading && (
                <Skeleton width={110} height={60} />
            )}

            {(showNewButton && !showNewButtonLoading && !smDown) && (
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    startIcon={<Icon>add</Icon>}
                    onClick={whenClickingInNew}
                >
                    {!smDown && (
                        <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                            {newButtonText}
                        </Typography>
                    )}
                </Button>
            )}

            {(showNewButtonLoading && !smDown) && (
                <Skeleton width={110} height={60} />
            )}

            {
                (
                    showBackButton &&
                    (showNewButton || showDeleteButton || showSaveButton || showSaveAndCloseButton)
                ) &&
                (
                    <Divider variant='middle' orientation='vertical' />
                )
            }

            {showBackButton && !showBackButtonLoading && (
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    startIcon={<Icon>arrow_back</Icon>}
                    onClick={whenClickingInBack}
                >
                    {!smDown && (
                        <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                            Back to List
                        </Typography>
                    )}
                </Button>
            )}

            {showBackButtonLoading && (
                <Skeleton width={110} height={60} />
            )}
        </Box>
    );
} 