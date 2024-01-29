import { Meta, StoryObj } from '@storybook/react'
import { Tag } from './Tag'
import '@app/styles/index.scss'

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'ui/Tag',
}
export default meta
type Story = StoryObj<typeof Tag>

export const Normal: Story = {}
Normal.args = { children: 'Webpack', color: 'blue' }
