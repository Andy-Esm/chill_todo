import { Meta, StoryObj } from '@storybook/react'
import { Panel } from '../Panel'

const meta: Meta<typeof Panel> = {
  component: Panel,
  title: 'ui/Panel',
}
export default meta
type Story = StoryObj<typeof Panel>

export const Default: Story = {}
Default.args = {
  children: [<div key={'key'}>Элемент</div>],
  withShadow: true,
}
