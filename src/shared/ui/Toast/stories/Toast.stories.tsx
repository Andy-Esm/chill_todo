import { Meta, StoryObj } from '@storybook/react'
import { Toast } from '../Toast'

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: 'ui/Toast',
}

export default meta
type Story = StoryObj<typeof Toast>

export const Normal: Story = {}
Normal.args = {
  background: true,
  colorBg: 'accent-success',
  colorFont: 'neutral',
  iconName: { check: 'icon-achtung-triangle', close: 'icon-close-thin' },
  message: 'Задача выполнена',
  size: 'normal',
}
