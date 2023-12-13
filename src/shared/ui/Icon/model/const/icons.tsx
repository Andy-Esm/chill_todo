import {FunctionComponent, SVGAttributes} from 'react'
import SearchIcon  from '@icons/search_icon.svg'
import CheckIcon from '@icons/check_icon.svg'
import PlusIcon from '@icons/plus_icon.svg'
import ListIcon from '@icons/list_icon.svg'
import CloseIcon from  '@icons/close_icon.svg'
import StopwatchIcon from '@icons/stopwatch_icon.svg'
import CalendarIcon from '@icons/calendar_icon.svg'
import ArrowLeftCircle from '@icons/arrow-left-circle_icon.svg'
import PlusRectangleIcon from '@icons/plus_rectangle.svg'
import Notification from '@icons/notification.svg'
import TaskIcon from '@icons/tasks_icon.svg'
import FolderIcon from '@icons/folder_icon.svg'
import TeamIcon from '@icons/team_icon.svg'
import HomeIcon from '@icons/home_icon.svg'
import BucketIcon from '@icons/bucket_icon.svg'


export type IconName = 'SearchIcon' | 'CheckIcon' | 'CloseIcon' | 'ListIcon' | 'PlusIcon' | 'StopwatchIcon' | 'CalendarIcon' | 'ArrowLeftCircle' | 'Notification' | 'PlusRectangleIcon' | 'TaskIcon' | 'FolderIcon' | 'TeamIcon' | 'HomeIcon' | 'BucketIcon';

export const icons: Record<IconName, FunctionComponent<SVGAttributes<SVGAElement>>> = {
  SearchIcon: SearchIcon,
  CheckIcon: CheckIcon,
  CloseIcon: CloseIcon,
  ListIcon: ListIcon,
  PlusIcon: PlusIcon,
  StopwatchIcon: StopwatchIcon,
  CalendarIcon: CalendarIcon,
  ArrowLeftCircle: ArrowLeftCircle,
  PlusRectangleIcon: PlusRectangleIcon,
  Notification: Notification,
  TaskIcon: TaskIcon,
  FolderIcon: FolderIcon,
  TeamIcon: TeamIcon,
  HomeIcon: HomeIcon,
  BucketIcon: BucketIcon
}
