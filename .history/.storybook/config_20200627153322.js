import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach((filename) => req(filename));
}

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

configure(loadStories, module);
