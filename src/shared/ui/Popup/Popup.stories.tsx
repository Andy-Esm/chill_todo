import { Meta, StoryObj } from '@storybook/react'
import { Popup } from './Popup'
import '@app/styles/index.scss'

const meta: Meta<typeof Popup> = {
  component: Popup,
  title: 'ui/Popup',
}
export default meta
type Story = StoryObj<typeof Popup>

export const Normal: Story = {}
Normal.args = {
  centered: true,
  children: (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '10px',
        display: 'flex',
        height: '150px',
        justifyContent: 'center',
        width: '400px',
      }}
    >
      Просто модалка
    </div>
  ),
  isActive: false,
}
