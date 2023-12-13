import { Meta, StoryObj } from '@storybook/react'
import moment from 'moment'
import { TaskDueDate } from './TaskDueDate'
moment.locale('ru')

const meta: Meta<typeof TaskDueDate> = {
  component: TaskDueDate,
  parameters: {
    layout: 'centered',
  },
  title: 'entities/Tasks/TaskDueDate',
}
export default meta
type Story = StoryObj<typeof TaskDueDate>

export const Normal: Story = {
  render: (args) => (
    <div style={{ width: '434px' }}>
      <TaskDueDate {...args} />
    </div>
  ),
}
Normal.args = {
  finishDate: moment().add(3, 'days'),
  startDate: moment().subtract(2, 'days'),
}
