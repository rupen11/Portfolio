import Head from "next/head";
import Image from "next/image";
import { About, Navbar, Profile, Technology, Techstack } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <Profile />
            <About />
            <Technology />
            <Techstack />
        </div>
    );
}
/*
Profile
About - Education, language
Technology - master in
projects
contact - linkdin, discord, github, phonenumber, email, form
*/
