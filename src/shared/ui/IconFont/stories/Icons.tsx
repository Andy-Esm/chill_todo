import { Grid } from '@shared/ui/Grid'
import { IconFont, IconName } from '../IconFont'
import icons from '../../../assets/style.module.scss'

export const Icons = () => {
  const iconNameWithoutPrefix = (iconName: string) => iconName.replace('icon-', '')
  return (
    <Grid colMinWidth={90} columns='auto-fill' gap={24}>
      {Object.keys(icons).map((iconName) => {
        return (
          <Grid gap={2} justifyItems='center' key={iconName}>
            <IconFont iconName={iconName as IconName} />
            <span>{iconNameWithoutPrefix(iconName)}</span>
          </Grid>
        )
      })}
    </Grid>
  )
}
