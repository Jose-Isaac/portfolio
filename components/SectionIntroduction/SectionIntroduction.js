import Image from 'next/image';
import IntroductionIllustration from '../../public/images/undraw_dev_productivity_umsq.svg';
import styles from './SectionIntroduction.module.css';
import utilsStyles from '../../styles/utils.module.css';

export default function SectionIntroduction() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.boxTitles}>
          <h1>{'${José Isaac}'}</h1>
          <h2>Web Full Stack and Computer Science</h2>
        </div>

        <Image
          layout="intrinsic"
          src={IntroductionIllustration}
          alt="José Isaac"
        />
      </div>
    </section>
  );
}
