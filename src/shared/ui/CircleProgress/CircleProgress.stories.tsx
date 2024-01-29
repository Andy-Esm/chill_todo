import { Meta, StoryObj } from '@storybook/react'
import { CircleProgress } from './CircleProgress'
import '@app/styles/index.scss'

const meta: Meta<typeof CircleProgress> = {
  component: CircleProgress,
  title: 'ui/CircleProgress',
}
export default meta
type Story = StoryObj<typeof CircleProgress>

export const Normal: Story = {}
Normal.args = { current: 100 }
