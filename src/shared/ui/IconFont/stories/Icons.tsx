import { Grid } from '@shared/ui/Grid'
import { IconFont } from '../IconFont'
import { ICON_NAMES } from '../constants'
import styles from './Icons.module.scss'

export const Icons = () => (
  <Grid colMinWidth={90} columns='auto-fill' gap={8}>
    {ICON_NAMES.map((iconName) => (
      <Grid gap={2} justifyItems='center' key={iconName}>
        <IconFont iconName={`icon-${iconName}`} />
        <span className={styles.text}>{iconName}</span>
      </Grid>
    ))}
  </Grid>
)
