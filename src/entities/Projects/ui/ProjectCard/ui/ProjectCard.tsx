import { Avatars } from '@shared/ui/Avatars'
import { Panel } from '@shared/ui/Panel'
import { Title } from '@shared/ui/Title'
import moment from 'moment'
import styles from './ProjectCard.module.scss'
moment.locale('ru')

export const ProjectCard = () => {
  return (
    <Panel className={styles['project-card']} pointer withShadow>
      <div className={styles['project-info']}>
        <Title className={styles['project-text']} tag='h3'>
          Todo app
        </Title>
        <button aria-label='Menu' className={styles['menu']}>
          <div className={styles['dot']}></div>
          <div className={styles['dot']}></div>
          <div className={styles['dot']}></div>
        </button>
      </div>
      <div className={styles['project-info-details']}>проект канбан доски и трекера задач</div>

      <div className={styles['project-avatars']}>
        <Avatars
          imageUrl='https://img-forum-wt-ru.cdn.gaijin.net/original/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1.jpeg'
          size='small'
        />
        <span className={styles['avatar-count']}>&#43;2</span>
      </div>
    </Panel>
  )
}
