import Image from 'next/image';
import styles from './CardProject.module.css';

export default function CardProject({
  image,
  altImage,
  title,
  subTitle,
  description,
  links,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.boxImage}>
        <Image src={image} alt={altImage} />
      </div>
      <div className={styles.boxInformations}>
        <h3>{title}</h3>
        <h4>{subTitle}</h4>
        <p>{description}</p>
        <div></div>
      </div>
    </div>
  );
}
