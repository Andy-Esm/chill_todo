import styles from './PageNotFound.module.scss'

const PageNotFound = () => {
  return (
    <section className={styles.main}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>
          Страница ушла поплавать. <br /> Попробуйте перейти на другую
        </p>
      </div>
      <div className={styles.image}></div>
    </section>
  )
}

export default PageNotFound
