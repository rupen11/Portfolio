import Head from "next/head";
import Image from "next/image";
import { About, Navbar, Profile } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <Profile />
            <About />
        </div>
    );
}
/*
Profile
About - Education, Interest, Hobbie, language, currently
Technology
projects
contact - linkdin, discord, github, phonenumber, email, form
*/
