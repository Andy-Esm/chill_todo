import { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './IconButton'
import '@app/styles/index.scss'


const meta: Meta<typeof IconButton> = {
  title: 'ui/IconButton',
  component: IconButton,
}
export default meta
type Story = StoryObj<typeof IconButton>;

export const Normal: Story = {}
Normal.args = {size: 'medium', iconName: 'CheckIcon', form: 'rounded'}
