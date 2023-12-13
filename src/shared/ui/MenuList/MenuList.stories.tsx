import { Meta, StoryObj } from '@storybook/react'
import {withRouter} from 'storybook-addon-react-router-v6'
import { MenuList } from './MenuList'
import '@app/styles/index.scss'



const meta: Meta<typeof MenuList> = {
  title: 'ui/MenuList',
  component: MenuList,
  decorators: [withRouter],
}
export default meta
type Story = StoryObj<typeof MenuList>;

export const Normal: Story = {render: (args) => <MenuList {...args} />}
Normal.args = {
  menuList: [
    {icon: {iconName: 'icon-close'}, type: 'main', title: 'Главная', to: '/'},
    {icon: {iconName: 'icon-close'}, type: 'main', title: 'Список задач', to: '/TaskPage'},
    {icon: {iconName: 'icon-plus'}, type: 'task', title: 'Задача 1', to: '/'},
    {icon: {iconName: 'icon-close'}, type: 'project', title: 'Проект 1', to: '/'},
  ]
}
