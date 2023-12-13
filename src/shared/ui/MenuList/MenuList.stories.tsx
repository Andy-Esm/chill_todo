import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { MenuList } from './MenuList'
import '@app/styles/index.scss'

const meta: Meta<typeof MenuList> = {
  component: MenuList,
  decorators: [withRouter],
  title: 'ui/MenuList',
}
export default meta
type Story = StoryObj<typeof MenuList>

export const Normal: Story = { render: (args) => <MenuList {...args} /> }
Normal.args = {
  menuList: [
    { icon: { iconName: 'icon-close' }, title: 'Главная', to: '/', type: 'main' },
    { icon: { iconName: 'icon-close' }, title: 'Список задач', to: '/TaskPage', type: 'main' },
    { icon: { iconName: 'icon-plus' }, title: 'Задача 1', to: '/', type: 'task' },
    { icon: { iconName: 'icon-close' }, title: 'Проект 1', to: '/', type: 'project' },
  ],
}
