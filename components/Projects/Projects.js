import utilStyles from '../../styles/utils.module.css';
import CardProject from '../CardProject/CardProject';
import styles from './Projects.module.css';
import imageGeneratorRGB from '../../public/images/generator-rgb.png';

export default function Projects() {
  return (
    <section className={styles.container}>
      <h1 className={utilStyles.titleSection}>Projetos</h1>
      <div className={styles.content}>
        <CardProject
          image={imageGeneratorRGB}
          altImage="Image de apresentação de um gerador de cores no padrão rgb"
          title="GeneratorRGB"
          subTitle="Font-end"
          description="Um gerador de cores no padrão rgb"
        />
        <div className={styles.more}>
          <button>ver mais projetos</button>
        </div>
      </div>
    </section>
  );
}
