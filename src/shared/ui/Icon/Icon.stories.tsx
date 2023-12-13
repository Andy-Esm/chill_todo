import { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'
import '@app/styles/index.scss'


const meta: Meta<typeof Icon> = {
  title: 'ui/Icon',
  component: Icon,
}
export default meta
type Story = StoryObj<typeof Icon>;

export const Normal: Story = {}
Normal.args = {height: 24, width: 24, color: 'success', name: 'CloseIcon'}
