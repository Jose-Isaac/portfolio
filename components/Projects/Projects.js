import utilStyles from '../../styles/utils.module.css';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.container}>
      <h1 className={utilStyles.titleSection}>Projetos</h1>
      <div className={styles.content}>
        <div className={styles.more}>
          <button>ver mais projetos</button>
        </div>
      </div>
    </section>
  );
}
