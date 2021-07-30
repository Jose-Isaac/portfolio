import utilStyles from '../../styles/utils.module.css';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.container}>
      <h1 className={utilStyles.titleSection}>
        A palavra da vez é{' '}
        <strong className={styles.highlightText}>Network!</strong>
      </h1>
      <div className={styles.content}>
        <p>
          Gostaria de conversar sobre tecnologia! Achou um error em algum
          projeto? ou queria sugerir um ponto de melhoria!
        </p>
        <p>Aqui abaixo está minha principais redes para contato!</p>
      </div>
    </section>
  );
}
