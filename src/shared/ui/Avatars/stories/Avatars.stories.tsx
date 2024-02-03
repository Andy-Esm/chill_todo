import { Meta, StoryObj } from '@storybook/react'
import { Avatars } from '../Avatars'

const meta: Meta<typeof Avatars> = {
  component: Avatars,
  title: 'ui/Avatars',
}

export default meta
type Story = StoryObj<typeof Avatars>

export const Normal: Story = {}
Normal.args = {
  className: '',
  color: 'accent-success',
  imageUrl:
    'https://img-forum-wt-ru.cdn.gaijin.net/original/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1.jpeg',
  size: 'small',
  borderWidth: 1,
  border: true,
}
