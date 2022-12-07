import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <span>About Me</span>
                <div className={styles.underline}></div>
            </div>
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
                            Bachlore of Engineering from GEC Modasa in Computer
                            Engineering <br />
                            pursuing with CGPA 6.57
                        </div>
                    </div>
                </li>

                <li>
                    <div className={styles.directionL}>
                        <div className={styles.flagWrapper}>
                            <span className={styles.flag}>GSHSEB</span>
                            <span className={styles.timeWrapper}>
                                <span className={styles.time}>2018 - 2019</span>
                            </span>
                        </div>
                        <div className={styles.desc}>
                            HSC in Science stream from Maharshi Gurukul, Halvad{" "}
                            <br />
                            75.50 Percentage in Board
                        </div>
                    </div>
                </li>

                <li>
                    <div className={styles.directionR}>
                        <div className={styles.flagWrapper}>
                            <span className={styles.flag}>GSEB</span>
                            <span className={styles.timeWrapper}>
                                <span className={styles.time}>2016 - 1017</span>
                            </span>
                        </div>
                        <div className={styles.desc}>
                            SSC (10th) from J.L. High School, Ahmedabad <br />
                            67.33 Percentage in Board
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default About;
