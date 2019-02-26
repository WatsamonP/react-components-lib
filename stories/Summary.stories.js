// storybook
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';

//
import SUMMARY from './SUMMARY.md'

storiesOf('❗ Summary', module)
  .add('Prop Type', doc(SUMMARY), {
    info: {
      source: false,
      propTables: false
    }
  });