import React from 'react'
import styles from '@/styles/main.module.css'
import { CiLogin } from "react-icons/ci";
import { TbMenuDeep } from "react-icons/tb";

const Navbar1 = () => {
  return (
    <div className={styles.navbar}>
      <a href="/">
        <h3>Navbar1</h3>
      </a>
      <div className={styles.navlinks}>
        <a href="/">Home</a>
        <a href="/libraries">Libraries</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <a href="/auth/login">
        Login/Signup
        <CiLogin />
      </a>
      <div className={styles.menuBtn} style={{}}>
        <TbMenuDeep />
      </div>
    </div>
  )
}

export default Navbar1