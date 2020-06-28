import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/Button', true, /\.stories\.js$/);
}

configure(loadStories, module);
