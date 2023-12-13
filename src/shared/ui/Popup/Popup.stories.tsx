import { Meta, StoryObj } from '@storybook/react'
import { Popup } from './Popup'
import '@app/styles/index.scss'

const meta: Meta<typeof Popup> = {
  title: 'ui/Popup',
  component: Popup,
}
export default meta
type Story = StoryObj<typeof Popup>;

export const Normal: Story = {}
Normal.args = {
  centered: true,
  isActive: false,
  children: <div style={{width: '400px', height:'150px', display: 'flex', backgroundColor: 'white', alignItems: 'center', justifyContent:'center', borderRadius: '10px'}}>Просто модалка</div>
}