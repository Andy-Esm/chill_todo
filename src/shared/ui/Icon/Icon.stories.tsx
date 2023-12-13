import { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'
import '@app/styles/index.scss'

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'ui/Icon',
}
export default meta
type Story = StoryObj<typeof Icon>

export const Normal: Story = {}
Normal.args = { color: 'success', height: 24, name: 'CloseIcon', width: 24 }
