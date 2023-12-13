import { Meta, StoryObj } from '@storybook/react'
import { TabsNavigation } from './TabsNavigation'
import '@app/styles/index.scss'

const meta: Meta<typeof TabsNavigation> = {
  component: TabsNavigation,
  title: 'ui/TabsNavigation',
}
export default meta
type Story = StoryObj<typeof TabsNavigation>

export const Normal: Story = {}
Normal.args = {
  tabs: [
    { id: 1, text: 'Текущие' },
    { id: 2, text: 'Выполненные' },
    { id: 2, text: 'Просроченные' },
    { id: 2, text: 'Отложенные' },
  ],
}
