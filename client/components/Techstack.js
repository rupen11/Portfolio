import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import styles from "../styles/Techstack.module.css";

const Techstack = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <span>Tech Stack</span>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.progressContent}>
                <div className={styles.progressContainer}>
                    <div className={styles.progressCircle}>
                        <CircularProgressbar
                            value="82"
                            text="82%"
                            styles={buildStyles({
                                strokeLinecap: "butt",
                                textSize: "16px",
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(69, 154, 78, ${82 / 100})`,
                                textColor: "rgb(69, 154, 78)",
                                trailColor: "#d6d6d6",
                                backgroundColor: "#3e98c7",
                            })}
                        />
                    </div>
                    <span
                        className={styles.progressName}
                        style={{ color: "rgb(69, 154, 78)" }}
                    >
                        Data Structure & Alog.
                    </span>
                </div>
                <div className={styles.progressContainer}>
                    <div className={styles.progressCircle}>
                        <CircularProgressbar
                            value="97"
                            text="97%"
                            styles={buildStyles({
                                strokeLinecap: "butt",
                                textSize: "16px",
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(115, 62, 199, ${97 / 100})`,
                                textColor: "rgb(115, 62, 199)",
                                trailColor: "#d6d6d6",
                                backgroundColor: "#3e98c7",
                            })}
                        />
                    </div>
                    <span
                        className={styles.progressName}
                        style={{ color: "rgb(115, 62, 199)" }}
                    >
                        Web Development
                    </span>
                </div>
                <div className={styles.progressContainer}>
                    <div className={styles.progressCircle}>
                        <CircularProgressbar
                            value="78"
                            text="78%"
                            styles={buildStyles({
                                strokeLinecap: "butt",
                                textSize: "16px",
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(199, 62, 194, ${78 / 100})`,
                                textColor: "rgb(199, 62, 194)",
                                trailColor: "#d6d6d6",
                                backgroundColor: "#3e98c7",
                            })}
                        />
                    </div>
                    <span
                        className={styles.progressName}
                        style={{ color: "rgb(199, 62, 194)" }}
                    >
                        Blockchain Development
                    </span>
                </div>
                <div className={styles.progressContainer}>
                    <div className={styles.progressCircle}>
                        <CircularProgressbar
                            value="80"
                            text="80%"
                            styles={buildStyles({
                                strokeLinecap: "butt",
                                textSize: "16px",
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(199, 62, 62, ${80 / 100})`,
                                textColor: "rgb(199, 62, 62)",
                                trailColor: "#d6d6d6",
                                backgroundColor: "#3e98c7",
                            })}
                        />
                    </div>
                    <span
                        className={styles.progressName}
                        style={{ color: "rgb(199, 62, 62)" }}
                    >
                        Applicattion Development
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Techstack;
