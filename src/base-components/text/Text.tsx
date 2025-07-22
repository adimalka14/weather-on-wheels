import React from 'react';

import {
    TextField as MuiTextField,
    InputAdornment as MuiInputAdornment,
} from '@mui/material';

import { TEXT_FIELD_TYPES } from './textField.constants';

interface TextFieldProps {
    id: string;
    type?: TEXT_FIELD_TYPES;
    value?: string;
    label?: string;
    placeholder?: string;
    variant?: 'outlined' | 'filled' | 'standard';
    fullWidth?: boolean;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    size?: 'small' | 'medium';
    multiline?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    startCmp?: React.ReactNode;
    endCmp?: React.ReactNode;
}

export default function TextField({
                                      id,
                                      type = 'text',
                                      value = '',
                                      label = '',
                                      placeholder = '',
                                      variant = 'outlined',
                                      fullWidth = true,
                                      error = false,
                                      helperText = '',
                                      disabled = false,
                                      readOnly = false,
                                      required = false,
                                      size = 'medium',
                                      multiline = false,
                                      onChange,
                                      startCmp,
                                      endCmp,
                                  }) {
    return (
        <MuiTextField
            id={id}
            type={type}
            value={value}
            label={label}
            placeholder={placeholder}
            variant={variant}
            fullWidth={fullWidth}
            error={error}
            helperText={helperText}
            disabled={disabled}
            required={required}
            size={size}
            multiline={multiline}
            onChange={onChange}
            InputProps={{
                readOnly: readOnly,
                ...(startCmp && {
                    startAdornment: (
                        <MuiInputAdornment position="start">
                            {startCmp}
                        </MuiInputAdornment>
                    ),
                }),
                ...(endCmp && {
                    endAdornment: (
                        <MuiInputAdornment position="end">
                            {endCmp}
                        </MuiInputAdornment>
                    ),
                }),
            }}
        >
        </MuiTextField>
    );
}