import { configure } from '@storybook/react';
import '../src/i18n';

configure(require.context('../src/components', true, /stories\.js$/), module);
