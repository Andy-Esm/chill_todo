import { Meta, StoryObj } from '@storybook/react'
import moment from 'moment'
import { TaskCircleDeadline } from './TaskCircleDeadline'
moment.locale('ru')

const meta: Meta<typeof TaskCircleDeadline> = {
  component: TaskCircleDeadline,
  title: 'entities/Tasks/TaskCircleDeadline',
}
export default meta
type Story = StoryObj<typeof TaskCircleDeadline>

export const Normal: Story = {}
Normal.args = {
  finish: moment().add(3, 'days'),
  start: moment().subtract(2, 'days'),
}
