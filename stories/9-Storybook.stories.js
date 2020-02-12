import React from 'react'
import {linkTo} from '@storybook/addon-links'
import {Welcome} from '@storybook/react/demo'
import {action} from '@storybook/addon-actions'
import {Button} from '@storybook/react/demo'

export default {
  title: 'Storybook',
  component: Welcome,
}

export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />

ToStorybook.story = {
  name: 'Welcome',
}

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)

Emoji.story = {
  name: 'with emoji',
}
