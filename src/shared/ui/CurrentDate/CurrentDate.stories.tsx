import { Meta, StoryObj } from '@storybook/react'
import { CurrentDate } from './CurrentDate'
import '@app/styles/index.scss'

const meta: Meta<typeof CurrentDate> = {
  component: CurrentDate,
  title: 'ui/CurrentDate',
}
export default meta
type Story = StoryObj<typeof CurrentDate>

export const Normal: Story = {}
Normal.args = {}
