import React from 'react';
import { default as MuiButton } from '@mui/material/Button';

interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    variant?: 'text' | 'outlined' | 'contained';
    loading?: boolean;
    size?: 'small' | 'medium' | 'large';
}

export default function Button({
                                   onClick,
                                   disabled = false,
                                   startIcon,
                                   endIcon,
                                   variant = 'contained',
                                   children,
                                   loading,
                                   size = 'medium',
                               } : React.PropsWithChildren<ButtonProps>) {
    return (
        <MuiButton
            onClick={onClick}
            disabled={disabled}
            startIcon={startIcon}
            endIcon={endIcon}
            variant={variant}
            loading={loading}
            size={size}
        >
            {children}
        </MuiButton>
    );
}