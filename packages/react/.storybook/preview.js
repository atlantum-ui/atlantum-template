import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { lightTheme } from '../../react/src/index';

const themes = [lightTheme];
addDecorator(withThemesProvider(themes));
