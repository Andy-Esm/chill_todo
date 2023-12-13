import { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'
import '@app/styles/index.scss'


const meta: Meta<typeof ProgressBar> = {
  title: 'ui/ProgressBar',
  component: ProgressBar,
}
export default meta
type Story = StoryObj<typeof ProgressBar>;

export const Normal: Story = {}
Normal.args = {total: 100, current: 50}
