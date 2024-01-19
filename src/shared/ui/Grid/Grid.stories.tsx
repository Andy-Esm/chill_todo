import { Meta, StoryObj } from '@storybook/react'
import { Grid } from '../Grid'
import style from './Grid.module.scss'

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: 'ui/Grid',
}
export default meta
type Story = StoryObj<typeof Grid>

export const Default: Story = {}
Default.args = {
  children: [
    Array.from({ length: 5 }, (_, i) => (
      <div className={style.children} key={i}>
        Элемент сетки {i + 1}
      </div>
    )),
  ],
  columns: 'auto-fit',
}
