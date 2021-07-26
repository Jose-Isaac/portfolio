import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.boxLogo}>
          <strong className={styles.boxLogoText}>{`<José Isaac/>`}</strong>
        </div>

        <nav className={styles.menu}>
          <label htmlFor="menu-checkbox" className={styles.menuLabel}>
            Menu
            <div className={styles.boxArrow}></div>
          </label>
          <input
            type="checkbox"
            id="menu-checkbox"
            className={styles.menuCheckbox}
          />
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <a>Sobre mim</a>
            </li>
            <li className={styles.menuItem}>
              <a>Projetos</a>
            </li>
            <li className={styles.menuItem}>
              <a>Contato</a>
            </li>
            <li className={styles.menuItem}>
              <a>Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
