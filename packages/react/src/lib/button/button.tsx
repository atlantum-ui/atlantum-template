import styled from 'styled-components';
import React, { ReactNode, Fragment, MouseEventHandler } from 'react';

export type Appearance = 'primary' | 'danger' | 'success' | 'warning' | 'info';

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
    appearance?: Appearance;

    /**
     * Applying different sizes to the button
     */
    size?: Size;
}

const ButtonBase = styled.button`
    /**
     * By default, base button style inherit Secondary button visual.
     * For more button styles, please discover Appearance type.
     */
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.neutral[100]};
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
        border-color: ${(props) => props.theme.colors.neutral[100]};
    }
`;

const StyledButton = styled(ButtonBase)<ButtonProps>`
    /**
    * Button sizes
    */
    ${(props) =>
        props.size === 'small' &&
        `
        font-size: ${props.theme.typography.fontSize.label};
        line-height: 1.375rem;
        padding: 0 ${props.theme.spacing[12]};

    `}

    ${(props) =>
        props.size === 'default' &&
        `
        font-size: ${props.theme.typography.fontSize.base};
        line-height: 2.375rem;
        padding: 0 ${props.theme.spacing[16]};

    `}

    ${(props) =>
        props.size === 'hero' &&
        `
        font-size: ${props.theme.typography.fontSize.h6};
        line-height: 3.375rem;
        padding: 0 ${props.theme.spacing[24]};

    `}


    /**
    * Button appearance styles
    */
    ${(props) =>
        props.appearance &&
        `
        color: ${props.theme.colors.neutral[25]};
        background-color: ${props.theme.colors[props.appearance][200]};
        border-color: ${props.theme.colors[props.appearance][200]};
        &:hover {
        color: ${props.theme.colors.neutral[25]};
        background-color: ${props.theme.colors[props.appearance][300]};
        border-color: ${props.theme.colors[props.appearance][300]};
    }
        &:focus {
            box-shadow: 0 0 0 2px ${props.theme.colors[props.appearance][100]};
            color: ${props.theme.colors.neutral[25]};
        }

        &:active {
            color: ${props.theme.colors.neutral[25]};
            background-color: ${props.theme.colors[props.appearance][400]};
            border-color: ${props.theme.colors[props.appearance][400]};
        }

    `}

    ${(props) =>
        props.disabled &&
        `
         color: ${props.theme.colors.neutral[200]};
         background-color: ${props.theme.colors.neutral[50]};
         border-color: ${props.theme.colors.neutral[50]};
         cursor: not-allowed;
         &:hover {
         background-color: ${props.theme.colors.neutral[50]};
         border-color: ${props.theme.colors.neutral[50]};

    }
    `}
`;

export function Button({
    children,
    size = 'default',
    appearance,
    disabled,
    onClick,
    leftIcon,
    rightIcon,
    type = 'button',
}: ButtonProps) {
    return (
        <StyledButton
            size={size}
            appearance={appearance}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {leftIcon && <Fragment>{leftIcon}</Fragment>}
            {children}
            {rightIcon && <Fragment>{rightIcon}</Fragment>}
        </StyledButton>
    );
}

export default Button;
