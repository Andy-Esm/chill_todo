import ArrowLeftCircle from '@icons/arrow-left-circle_icon.svg'
import BucketIcon from '@icons/bucket_icon.svg'
import CalendarIcon from '@icons/calendar_icon.svg'
import CheckIcon from '@icons/check_icon.svg'
import CloseIcon from '@icons/close_icon.svg'
import FolderIcon from '@icons/folder_icon.svg'
import HomeIcon from '@icons/home_icon.svg'
import ListIcon from '@icons/list_icon.svg'
import Notification from '@icons/notification.svg'
import PlusIcon from '@icons/plus_icon.svg'
import PlusRectangleIcon from '@icons/plus_rectangle.svg'
import SearchIcon from '@icons/search_icon.svg'
import StopwatchIcon from '@icons/stopwatch_icon.svg'
import TaskIcon from '@icons/tasks_icon.svg'
import TeamIcon from '@icons/team_icon.svg'
import { FunctionComponent, SVGAttributes } from 'react'

export type IconName =
  | 'ArrowLeftCircle'
  | 'BucketIcon'
  | 'CalendarIcon'
  | 'CheckIcon'
  | 'CloseIcon'
  | 'FolderIcon'
  | 'HomeIcon'
  | 'ListIcon'
  | 'Notification'
  | 'PlusIcon'
  | 'PlusRectangleIcon'
  | 'SearchIcon'
  | 'StopwatchIcon'
  | 'TaskIcon'
  | 'TeamIcon'

export const icons: Record<IconName, FunctionComponent<SVGAttributes<SVGAElement>>> = {
  ArrowLeftCircle: ArrowLeftCircle,
  BucketIcon: BucketIcon,
  CalendarIcon: CalendarIcon,
  CheckIcon: CheckIcon,
  CloseIcon: CloseIcon,
  FolderIcon: FolderIcon,
  HomeIcon: HomeIcon,
  ListIcon: ListIcon,
  Notification: Notification,
  PlusIcon: PlusIcon,
  PlusRectangleIcon: PlusRectangleIcon,
  SearchIcon: SearchIcon,
  StopwatchIcon: StopwatchIcon,
  TaskIcon: TaskIcon,
  TeamIcon: TeamIcon,
}
