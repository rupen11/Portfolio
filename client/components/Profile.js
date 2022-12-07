import React from "react";
import styles from "../styles/Profile.module.css";
import Typewriter from "typewriter-effect";
import Image from "next/image";

const Profile = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperLeft}>
                <h1 className={styles.title}>
                    Hi, Welcome to My Personal Space.
                </h1>
                <div className={styles.subTitle}>
                    <div className={styles.mainText}>I'm</div>{" "}
                    {/* <Typewriter
                        options={{
                            strings: [
                                "Fullstack Developer.",
                                "Blockchain Developer.",
                                "MERN Developer.",
                                "React-Native Developer.",
                            ],
                            autoStart: true,
                            loop: true,
                            skipAddStyles: true,
                            wrapperClassName: styles.professionTitle,
                            cursorClassName: styles.professionTitleCursor,
                        }}
                        pasteString="Hello"
                        onInit={(typewriter) => {
                            typewriter.pauseFor(1000).deleteAll().start();
                        }}
                    /> */}
                </div>
                <button className={styles.profileBtn} role="button">
                    Donwnload CV
                </button>
            </div>
            <div className={styles.wrapperRight}>
                <div className={styles.profileImageWrapper}>
                    <Image
                        src="/mypic.png"
                        alt="My Pic"
                        width={500}
                        height={500}
                        className={styles.profileImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;
