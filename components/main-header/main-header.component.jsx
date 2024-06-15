import Image from "next/image";
import Link from "next/link";

import style from "./main-header.module.css";

import logo from "@/assets/logo.png";
import MainHeaderBackground from "../main-header-background/main-header-background.component";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={style.header}>
        <Link href={"/"} className={style.logo}>
          <Image
            src={logo}
            alt="Food on a plate"
            width={100}
            height={100}
            priority
          />
          <p>Foodies</p>
        </Link>

        <nav className={style.nav}>
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
