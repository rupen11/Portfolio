import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [currentActive, setCurrentAcive] = useState("Home");
    const [toggleActive, setToggleActive] = useState(false);

    const handleNav = (e) => setCurrentAcive(e.target.innerHTML);
    const toggleMenu = () => setToggleActive(!toggleActive);

    return (
        <div className={styles.navbar}>
            <div className={styles.navLeft}>
                <div className={styles.logo}>
                    <h1>
                        Rupen <span>Jarsaniya</span>
                    </h1>
                </div>
            </div>
            <div className={styles.navRight}>
                <ul className={styles.nav}>
                    <li className={styles.navLink}>
                        <Link
                            href="/"
                            className={`${
                                currentActive === "Home" && styles.active
                            }`}
                            onClick={handleNav}
                        >
                            Profile
                        </Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link
                            href="/"
                            className={`${
                                currentActive === "Portfolio" && styles.active
                            }`}
                            onClick={handleNav}
                        >
                            About
                        </Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link
                            href="/"
                            className={`${
                                currentActive === "Contact" && styles.active
                            }`}
                            onClick={handleNav}
                        >
                            Technology
                        </Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link
                            href="/"
                            className={`${
                                currentActive === "Join" && styles.active
                            }`}
                            onClick={handleNav}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link
                            href="/"
                            className={`${
                                currentActive === "Blog" && styles.active
                            }`}
                            onClick={handleNav}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div
                    className={`${styles.hamburgerMenu} ${
                        toggleActive && styles.active
                    }`}
                    onClick={toggleMenu}
                >
                    <div className={styles.bar}></div>
                </div>

                <ul
                    className={`${styles.toggleNav} ${
                        toggleActive && styles.active
                    }`}
                >
                    <li className={styles.toggleNavLink}>
                        <Link href="/">
                            <Image
                                src="/profile.gif"
                                alt="profile icon"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </li>
                    <li className={styles.toggleNavLink}>
                        <Link href="/">
                            <Image
                                src="/coffee-cup.gif"
                                alt="profile icon"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </li>
                    <li className={styles.toggleNavLink}>
                        <Link href="/">
                            <Image
                                src="/idea.gif"
                                alt="profile icon"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </li>
                    <li className={styles.toggleNavLink}>
                        <Link href="/">
                            <Image
                                src="/bar-chart.gif"
                                alt="profile icon"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </li>
                    <li className={styles.toggleNavLink}>
                        <Link href="/">
                            <Image
                                src="/search.gif"
                                alt="profile icon"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
