import React from "react";
import styles from "../styles/Technology.module.css";
import Image from "next/image";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const Technology = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <span>Skills & Technologies</span>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.technologyContainer}>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/react.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>ReactJS</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/react native.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>React Native</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/nodejs.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>NodeJS</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/express.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Express</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/mongodb.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>MongoDB</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/blockchain.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Blockchain</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/ethereum.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Ethereum</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/ganache.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Ganache</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/truffle.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Truffle</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/hardhat.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Hardhat</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/solidity.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Solidity</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/java.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Java</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/api.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Restful APIs</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/bootstrap.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Bootstrap</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/tailwind.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>tailwind</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/materialui.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Material UI</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/css.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>CSS</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/dart.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Dart</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/dsa.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>DSA</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/firebase.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Firebase</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/git.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Git</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/github.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Github</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/heroku.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Heroku</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/html.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>HTML</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/intellij.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Intellij</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/javascript.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Javascript</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/jsp.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>JSP</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/mysql.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>My SQL</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/netlify.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Netlify</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/nextjs.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>NextJS</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/nft.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>NFT</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/postman.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Postman</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/redux.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Redux</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/remix.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Remix</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/sanityio.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Sanity.io</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/servlets.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Servlet</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/sublime.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Sublime Text 3</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/thunderclient.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Thunder Client</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/typescript.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Typescript</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/vercel.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Vercel</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/vscode.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Visual Studio Code</span>
                </div>
                <div className={styles.techDetail}>
                    <Image
                        src="/tech/web3js.png"
                        alt="react icon"
                        width={100}
                        height={100}
                        className={styles.techImage}
                    />
                    <span className={styles.techName}>Web3.js</span>
                </div>
            </div>{" "}
        </div>
    );
};

export default Technology;
