import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components'); //, true, /\.stories\.js$/
}

configure(loadStories, module);
