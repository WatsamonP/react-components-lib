import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { withTests } from '@storybook/addon-jest';

import { baseFont } from './baseFont';
import TableComponent from './TableComponent'

// yarn test:generate-output -- --watch
import results from '../.jest-test-results.json';

addDecorator(withTests({ results }));

addDecorator(withKnobs);

addDecorator(
  withInfo({
    header: true,
    inline: true,
    source: true,
    TableComponent,
    styles: stylesheet => ({
      ...stylesheet,
      header: {
        ...stylesheet.header,
        h1: {
          ...stylesheet.header.h1,
          borderBottom: '1px solid #415E8C'
        },
        body: {}
      },
      infoStory: {
        ...stylesheet.infoStory,
        padding: '40px',
        margin: '20px 40px 20px',
        boxShadow: '0 0 40px rgba(0, 0, 0, 0.15)',
        position: 'relative'
      },
      infoBody: {
        ...baseFont,
        fontWeight: 300,
        lineHeight: 1.45,
        fontSize: '15px',
        padding: '10px 30px 0px',
      },
      source: {
        h1: {
          paddingTop: '25px',
          fontSize: '25px',
          borderBottom: '1px solid #415E8C',
        }
      },
      propTableHead: {
        margin: '0px 0 10px 0',
      },
    })
  })
);

setOptions({
  name: 'React Component',
  url: '',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
});

configure(
  () => {
    const req = require.context('../stories', true, /.stories.js$/);
    req.keys().forEach((filename) => req(filename));
  },
  module
);