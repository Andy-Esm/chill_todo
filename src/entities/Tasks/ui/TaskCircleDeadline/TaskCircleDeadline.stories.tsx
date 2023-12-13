import { Meta, StoryObj } from '@storybook/react'
import { TaskCircleDeadline } from './TaskCircleDeadline'
import moment from 'moment'
moment.locale('ru')

const meta: Meta<typeof TaskCircleDeadline> = {
  title: 'entities/Tasks/TaskCircleDeadline',
  component: TaskCircleDeadline,
}
export default meta
type Story = StoryObj<typeof TaskCircleDeadline>;

export const Normal: Story = {}
Normal.args = {
  start:  moment().subtract(2, 'days'),
  finish: moment().add(3, 'days')
}