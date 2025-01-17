import { withTests as wt } from '@storybook/addon-jest';
import results from './addon-jest.testresults.json';

export default {
  title: 'Addons/Jest',
  decorators: [wt({ results })],
};

export const withTests = () => 'This story shows test results';
withTests.parameters = { jest: 'addon-jest' };
