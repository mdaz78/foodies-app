import Image from "next/image";
import Link from "next/link";

import styles from "./main-header.module.css";

import logo from "@/assets/logo.png";
import MainHeaderBackground from "../main-header-background/main-header-background.component";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href={"/"} className={styles.logo}>
          <Image
            src={logo}
            alt="Food on a plate"
            width={100}
            height={100}
            priority
          />
          <h1>Foodies</h1>
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
