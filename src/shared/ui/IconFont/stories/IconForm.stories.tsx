import { Meta, StoryObj } from '@storybook/react'
import { Icons } from './Icons'

const meta: Meta<typeof Icons> = {
  component: Icons,
  title: 'ui/IconFont',
}

export default meta
type Story = StoryObj<typeof Icons>

export const Normal: Story = {}
Normal.args = {
  iconName: '',
}
