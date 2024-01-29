import { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'
import '@app/styles/index.scss'

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  title: 'ui/ProgressBar',
}
export default meta
type Story = StoryObj<typeof ProgressBar>

export const Normal: Story = {}
Normal.args = { current: 50, total: 100 }
