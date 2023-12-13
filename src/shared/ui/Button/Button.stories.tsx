import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import '@app/styles/index.scss'


const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
}
export default meta
type Story = StoryObj<typeof Button>;

export const Normal: Story = {}
Normal.args = {children: 'Кнопка'}
