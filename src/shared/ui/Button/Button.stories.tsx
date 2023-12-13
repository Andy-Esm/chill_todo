import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import '@app/styles/index.scss'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'ui/Button',
}
export default meta
type Story = StoryObj<typeof Button>

export const Normal: Story = {}
Normal.args = { children: 'Кнопка' }
