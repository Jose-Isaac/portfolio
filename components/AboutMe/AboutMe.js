import Image from 'next/image';
import Avatar from '../../public/images/avatar.png';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <section>
      <h1 className={styles.title}>Sobre mim</h1>
      <div className={styles.content}>
        <Image
          className={styles.avatar}
          src={Avatar}
          alt="José Isaac"
          layout="intrinsic"
        />
        <div className={styles.boxText}>
          <p>
            Tenho 22 anos e moro no interior da paraíba. Sou apaixonado por
            tecnologia e todo o ecossistema que a envolve, principalmente suas
            comunidades.
          </p>
          <p>
            Como curioso que sou adoro passar horas tentando entender o que
            existe por debaixo do 'capô'
          </p>
        </div>
      </div>
    </section>
  );
}
