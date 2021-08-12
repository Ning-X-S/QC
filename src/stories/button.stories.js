// src/stories/button.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/button';
import Text from '../components/text/index';

// import { withInfo } from '@storybook/addon-info';

storiesOf('Button', module)
  .add('基本用法', () => (
    <Button>
      <span>222</span>
    </Button>
  ))
storiesOf('Text', module)
  .add('基本用法', () => (
    <Text text="111"></Text>
  ))


// storiesOf('Button', module)
//   .add('基本用法',
//     withInfo(`
//       description or documentation about my component, supports markdown

//       ~~~js
//       <Button>测试按钮</Button>
//       ~~~

//     `)(() =>
//       <Button>测试按钮</Button>
//     )
//   )
