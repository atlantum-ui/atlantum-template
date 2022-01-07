import styled from 'styled-components';
import React, { FC, ReactNode, Fragment, MouseEventHandler } from 'react';

export type Purpose = 'primary' | 'danger' | 'success' | 'warning' | 'info';

export type Size = 'small' | 'default' | 'hero';

/* eslint-disable-next-line */
export interface ButtonProps {
    /**
     * You need to pass Icon component to make it work
     * Example: `leftIcon={<Icon name={'git-commit'} size={20} />}`
     */
    leftIcon?: ReactNode;

    /**
     * You need to pass Icon component to make it work
     * Example: `rightIcon={<Icon name={'git-commit'} size={20} />}`
     */
    rightIcon?: ReactNode;

    /**
     * If `true`, the button will be disabled.
     *
     */
    disabled?: boolean;

    /**
     * Required field, you need to pass a button label.
     */
    children: ReactNode;

    /**
     * HTML types for button.
     */
    type?: 'button' | 'submit' | 'reset';

    /**
     * Access to React event handler.
     */
    onClick?: MouseEventHandler;

    /**
     * Allow applying custom classes to component
     */
    className?: string;

    /**
     * Applying visual purpose to the button
     */
    purpose?: Purpose;

    /**
     * Applying visual appearance to the button
     */
    size?: Size;
}

const ButtonBase = styled.button`
    outline: none;
    border: none;
    display: inline-block;
    font-family: ${(props) => props.theme.typography.family.base};
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};
    border-radius: ${(props) => props.theme.borderRadius};
    cursor: pointer;
    transition: all ${(props) => props.theme.animation.base};
    color: ${(props) => props.theme.colors.neutral[400]};
    background-color: ${(props) => props.theme.colors.neutral[100]};
    &:hover {
        color: ${(props) => props.theme.colors.primary[300]};
    }
    &:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary[100]};
    }

    &:active {
        color: ${(props) => props.theme.colors.neutral[25]};
        background-color: ${(props) => props.theme.colors.neutral[300]};
    }
`;

const StyledButton = styled(ButtonBase)<ButtonProps>`
    ${(props) =>
        props.size === 'small' &&
        `
        font-size: ${props.theme.typography.fontSize.label};
        line-height: ${props.theme.spacing[24]};
        padding: 0 ${props.theme.spacing[12]};

    `}

    ${(props) =>
        props.size === 'default' &&
        `
        font-size: ${props.theme.typography.fontSize.base};
        line-height: ${props.theme.spacing[40]};
        padding: 0 ${props.theme.spacing[16]};

    `}

    ${(props) =>
        props.size === 'hero' &&
        `
        font-size: ${props.theme.typography.fontSize.h6};
        line-height: ${props.theme.spacing[56]};
        padding: 0 ${props.theme.spacing[24]};

    `}

    ${(props) =>
        props.purpose &&
        `
        color: ${props.theme.colors.neutral[25]};
        background-color: ${props.theme.colors[props.purpose][200]};
        &:hover {
        background-color: ${props.theme.colors[props.purpose][300]};
        color: ${props.theme.colors.neutral[25]};
    }
        &:focus {
            box-shadow: 0 0 0 2px ${props.theme.colors[props.purpose][100]};
            color: ${props.theme.colors.neutral[25]};
        }

        &:active {
            background-color: ${props.theme.colors[props.purpose][400]};
            color: ${props.theme.colors.neutral[25]};
        }

    `}

    ${(props) =>
        props.disabled &&
        `
         color: ${props.theme.colors.neutral[200]};
         background-color: ${props.theme.colors.neutral[50]};
         cursor: not-allowed;
         &:hover {
         background-color: ${props.theme.colors.neutral[50]};

    }
    `}
`;

export function Button({
    children,
    size = 'default',
    purpose,
    disabled,
    onClick,
    leftIcon,
    rightIcon,
}: ButtonProps) {
    return (
        <StyledButton
            size={size}
            purpose={purpose}
            onClick={onClick}
            disabled={disabled}
        >
            {leftIcon && <Fragment>{leftIcon}</Fragment>}
            {children}
            {rightIcon && <Fragment>{rightIcon}</Fragment>}
        </StyledButton>
    );
}

export default Button;
