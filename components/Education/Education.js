import utilStyles from '../../styles/utils.module.css';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section className={styles.container}>
      <h1 className={utilStyles.titleSection}>Educação</h1>

      <div className={styles.content}>
        <div className={styles.cardCourse}>
          <h3>Curso de Web Full Stack na Labenu</h3>
          <span>6 meses - 2021</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            necessitatibus iste fuga dolore magni nostrum et corporis in qui
            odio nulla, veritatis eligendi, ullam rerum ex sed iusto aliquam!
            Fugit!
          </p>
        </div>
        <div className={styles.cardCourse}>
          <h3>Curso de Web Full Stack na Labenu</h3>
          <span>6 meses - 2021</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            necessitatibus iste fuga dolore magni nostrum et corporis in qui
            odio nulla, veritatis eligendi, ullam rerum ex sed iusto aliquam!
            Fugit!
          </p>
        </div>
        <div className={styles.cardCourse}>
          <h3>Curso de Web Full Stack na Labenu</h3>
          <span>6 meses - 2021</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            necessitatibus iste fuga dolore magni nostrum et corporis in qui
            odio nulla, veritatis eligendi, ullam rerum ex sed iusto aliquam!
            Fugit!
          </p>
        </div>
      </div>
    </section>
  );
}
