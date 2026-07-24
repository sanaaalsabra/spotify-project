import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.navbar}>
      <button className={styles.signUp}>Sign up</button>
      <button className={styles.logIn}>Log in</button>
    </header>
  );
}

export default Navbar;