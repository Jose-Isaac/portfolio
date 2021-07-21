import styles from './header.module.css';

export default function Header() {
  return (
    <header>
      <div className={styles.content}>
        <div className={styles.boxLogo}>{`<José Isaac/>`}</div>

        <nav>
          <ul className={styles.menuList}>
            <a className={styles.menuItem}>
              <li>Sobre mim</li>
            </a>
            <a className={styles.menuItem}>
              <li>Projetos</li>
            </a>
            <a className={styles.menuItem}>
              <li>Contato</li>
            </a>
            <a className={styles.menuItem}>
              <li>Blog</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}
