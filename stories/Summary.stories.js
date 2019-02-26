// storybook
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';

//
import Props from './Notes/Doc/Props.md'
import Style from './Notes/Doc/Style.md'
import toStyleWithLabel from './Notes/Doc/toStyleWithLabel.md'

storiesOf('❗ Summary', module)
  .add('Prop Type', doc(Props), {
    info: {
      source: false,
      propTables: false
    }
  })
  .add('Style Config', doc(Style), {
    info: {
      source: false,
      propTables: false
    }
  }).add('How to Styling withLabel()', doc(toStyleWithLabel), {
    info: {
      source: false,
      propTables: false
    }
  });