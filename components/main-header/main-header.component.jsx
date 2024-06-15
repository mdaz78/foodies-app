import Image from 'next/image';
import Link from 'next/link';

import styles from './main-header.module.css';

import logo from '@/assets/logo.png';
import MainHeaderBackground from './main-header-background/main-header-background.component';
import NavLink from './nav-link/nav-link.component';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href={'/'} className={styles.logo}>
          <Image src={logo} alt='Food on a plate' priority />
          <h1>Foodies</h1>
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
