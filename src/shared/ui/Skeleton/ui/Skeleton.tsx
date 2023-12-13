import classNames from 'classnames'
import styles from './Skeleton.module.scss'

interface ISkeletonProps {
  className?: string
  height?: string
  radius?: string
  width?: string
}
export const Skeleton = ({ className, height, radius, width }: ISkeletonProps) => {
  const style = {
    borderRadius: radius,
    height,
    width,
  }

  return <div className={classNames(styles.skeleton, className)} style={style}></div>
}
