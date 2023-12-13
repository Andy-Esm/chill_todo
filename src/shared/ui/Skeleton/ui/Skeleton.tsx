import styles from './Skeleton.module.scss'
import classNames from 'classnames'

interface ISkeletonProps {
	className?: string;
  width?: string
  height?: string
  radius?: string
}
export const Skeleton = ({className, width, height, radius}: ISkeletonProps) => {

  const style = {
    width,
    height,
    borderRadius: radius
  }

  return (
    <div className={classNames(styles.skeleton, className)} style={style}></div>)
}
