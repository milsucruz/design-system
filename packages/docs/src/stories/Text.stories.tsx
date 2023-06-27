import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography / Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus laborum deserunt magni nulla, quas et iusto amet commodi repellendus eligendi maiores asperiores. Veritatis quod mollitia provident excepturi alias libero eos.,',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
