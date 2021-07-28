import utilStyles from '../../styles/utils.module.css';
import styles from './WhatDoIDo.module.css';

export default function WhatDoIDo() {
  return (
    <section className={utilStyles.marginSection}>
      <h1 className={utilStyles.titleSection}>O que faço?</h1>

      <div className={styles.content}>
        <div className={styles.cardContent}>
          <h2>Front-end</h2>
          <p>
            Desenvolvo aplicações web utilizando HTML, CSS e Javascript com os
            Criando sites responsivos, seguindo o principio do Mobile First.
            frameworks React e Next.
          </p>
        </div>
        <div className={styles.cardContent}>
          <h2>Back-end</h2>
          <p>
            Aplicações utilizando NodeJS, Typescript e MySQL. Criação de API´s
            para comunicação com front-end seguindo princípio de Clean Code.
          </p>
        </div>
      </div>
    </section>
  );
}
