import { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './IconButton'
import '@app/styles/index.scss'

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'ui/IconButton',
}
export default meta
type Story = StoryObj<typeof IconButton>

export const Normal: Story = {}
Normal.args = { form: 'rounded', iconName: 'CheckIcon', size: 'medium' }
