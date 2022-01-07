import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../theme/src';

const themes = [lightTheme];
addDecorator(withThemesProvider(themes), ThemeProvider);
