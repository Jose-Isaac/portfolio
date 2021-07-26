import Image from 'next/image';
import introductionIllustration from '../../public/images/undraw_dev_productivity_umsq.svg';
import styles from './SectionIntroduction.module.css';
import utilsStyles from '../../styles/utils.module.css';

export default function SectionIntroduction() {
  return (
    <section className={styles.container}>
      <div className={styles.context}>
        <div className={styles.boxTitles}>
          <h1>José Isaac</h1>
          <h2>Web Full Stack and Computer Science</h2>
        </div>

        <div className={(styles.boxIllustration, utilsStyles.flexCenter)}>
          <Image
            layout="intrinsic"
            width={400}
            height={400}
            src={introductionIllustration}
            alt="Avatar illustration working on a project"
          />
        </div>
      </div>
    </section>
  );
}
