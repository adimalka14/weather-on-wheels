import React from 'react';
import {
    MenuItem as MuiMenuItem,
    Select as MuiSelect,
    FormControl,
    InputLabel,
    FormHelperText,
} from '@mui/material';

interface SelectProps {
    id: string;
    label?: string;
    placeholder?: string;
    variant?: 'outlined' | 'filled' | 'standard';
    selected?: string | number;
    fullWidth?: boolean;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
    required?: boolean;
    size?: 'small' | 'medium';
    options?: { value: string | number; label: string }[];
    onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
    startCmp?: React.ReactNode;
    endCmp?: React.ReactNode;
}

export default function Select({
                                   id,
                                   label,
                                   placeholder,
                                   variant = 'outlined',
                                   selected,
                                   fullWidth = true,
                                   error,
                                   helperText,
                                   disabled,
                                   required,
                                   size = 'medium',
                                   options = [],
                                   onChange,
                                   startCmp,
                                   endCmp,
                               }) {
    return (
        <FormControl
            fullWidth={fullWidth}
            variant={variant}
            size={size}
            error={error}
        >
            {label && <InputLabel id={`${id}-label`}>{label}</InputLabel>}
            <MuiSelect
                labelId={`${id}-label`}
                id={id}
                label={label}
                variant={variant}
                placeholder={placeholder}
                value={selected}
                onChange={onChange}
                disabled={disabled}
                required={required}
                startAdornment={startCmp}
                endAdornment={endCmp}
            >
                {options.map(({ value, label }) => (
                    <MuiMenuItem key={value} value={value}>
                        {label}
                    </MuiMenuItem>
                ))}
            </MuiSelect>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
}