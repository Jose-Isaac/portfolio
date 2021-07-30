import githubLogo from '../../public/icons/github-logo.svg';
import instagramLogo from '../../public/icons/instagram-logo.svg';
import linkedinLogo from '../../public/icons/linkedin-logo.svg';
import Image from 'next/image';
import styles from './SocialMediaList.module.css';

export default function SocialMediaList() {
  return (
    <ul className={styles.SocialMediaList}>
      <li className={styles.socialMedia}>
        <a>
          <Image src={linkedinLogo} alt="Linkedin" />
        </a>
      </li>
      <li className={styles.socialMedia}>
        <a>
          <Image src={githubLogo} alt="GitHub" />
        </a>
      </li>
      <li className={styles.socialMedia}>
        <a>
          <Image src={instagramLogo} alt="Instagram" />
        </a>
      </li>
    </ul>
  );
}
