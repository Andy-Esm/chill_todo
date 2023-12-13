import { Meta, StoryObj } from '@storybook/react'
import { TaskDueDate } from './TaskDueDate'
import moment from 'moment'
moment.locale('ru')

const meta: Meta<typeof TaskDueDate> = {
  title: 'entities/Tasks/TaskDueDate',
  component: TaskDueDate,
  parameters: {
    layout: 'centered'
  }
}
export default meta
type Story = StoryObj<typeof TaskDueDate>;

export const Normal: Story = {
  render: (args) => <div style={{width: '434px'}}><TaskDueDate {...args}/></div>
}
Normal.args = {
  startDate: moment().subtract(2, 'days'),
  finishDate: moment().add(3, 'days')
}