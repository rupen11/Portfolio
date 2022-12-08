import React from "react";
import styles from "../styles/About.module.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const About = () => {
    const percentage = 50;
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <span>About Me</span>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.subtitle}>Education Journey</div>
                <ul className={styles.timeline}>
                    <li>
                        <div className={styles.directionR}>
                            <div className={styles.flagWrapper}>
                                <span className={styles.flag}>GTU</span>
                                <span className={styles.timeWrapper}>
                                    <span className={styles.time}>
                                        2019 - present
                                    </span>
                                </span>
                            </div>
                            <div className={styles.desc}>
                                Bachlore of Engineering from GEC Modasa in
                                Computer Engineering <br />
                                pursuing with CGPA 6.54
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className={styles.directionL}>
                            <div className={styles.flagWrapper}>
                                <span className={styles.flag}>GSHSEB</span>
                                <span className={styles.timeWrapper}>
                                    <span className={styles.time}>
                                        2018 - 2019
                                    </span>
                                </span>
                            </div>
                            <div className={styles.desc}>
                                HSC in Science stream from Maharshi Gurukul,
                                Halvad <br />
                                75.50 Percentage in Board
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className={styles.directionR}>
                            <div className={styles.flagWrapper}>
                                <span className={styles.flag}>GSEB</span>
                                <span className={styles.timeWrapper}>
                                    <span className={styles.time}>
                                        2016 - 1017
                                    </span>
                                </span>
                            </div>
                            <div className={styles.desc}>
                                SSC (10th) from J.L. High School, Ahmedabad{" "}
                                <br />
                                67.33 Percentage in Board
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.content}>
                <div
                    className={styles.subtitle}
                    style={{ color: "rgb(69, 154, 138)" }}
                >
                    Language
                </div>
                <div className={styles.languageContainer}>
                    <div className={styles.languageContent}>
                        <div className={styles.languageCircle}>
                            <CircularProgressbar
                                value="85"
                                text="85%"
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                    textSize: "16px",
                                    pathTransitionDuration: 0.5,
                                    pathColor: `rgba(69, 154, 138, ${
                                        percentage / 100
                                    })`,
                                    textColor: "rgb(69, 154, 138)",
                                    trailColor: "#d6d6d6",
                                    backgroundColor: "#3e98c7",
                                })}
                            />
                        </div>
                        <div className={styles.languageDesc}>
                            <div className={styles.languageName}>English</div>
                            <div className={styles.languageType}>
                                Professional Working Proficiency
                            </div>
                        </div>
                    </div>
                    <div className={styles.languageContent}>
                        <div className={styles.languageCircle}>
                            <CircularProgressbar
                                value="95"
                                text="95%"
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                    textSize: "16px",
                                    pathTransitionDuration: 0.5,
                                    pathColor: `rgba(69, 154, 138, ${
                                        percentage / 100
                                    })`,
                                    textColor: "rgb(69, 154, 138)",
                                    trailColor: "#d6d6d6",
                                    backgroundColor: "#3e98c7",
                                })}
                            />
                        </div>
                        <div className={styles.languageDesc}>
                            <div className={styles.languageName}>Hindi</div>
                            <div className={styles.languageType}>
                                Full Professional Proficiency
                            </div>
                        </div>
                    </div>
                    <div className={styles.languageContent}>
                        <div className={styles.languageCircle}>
                            <CircularProgressbar
                                value="100"
                                text="100%"
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                    textSize: "16px",
                                    pathTransitionDuration: 0.5,
                                    pathColor: `rgba(69, 154, 138, ${
                                        percentage / 100
                                    })`,
                                    textColor: "rgb(69, 154, 138)",
                                    trailColor: "#d6d6d6",
                                    backgroundColor: "#3e98c7",
                                })}
                            />
                        </div>
                        <div className={styles.languageDesc}>
                            <div className={styles.languageName}>Gujarati</div>
                            <div className={styles.languageType}>
                                Native or Bilingual Proficiency
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
