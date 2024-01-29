import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'
import '@app/styles/index.scss'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'ui/Checkbox',
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Normal: Story = {}
Normal.args = { text: 'Checkbox' }
