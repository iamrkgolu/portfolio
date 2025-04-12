import React from "react";
import styles from "./Thumbnail.module.scss";
import Image from "next/image";
import Aboutus from "../Aboutus/Aboutus";
import Link from "next/link";
import Skills from "../Skills/Skills";
import Contact from "../Contactus/Contact";
import Footer from "../footer/Footer";
function Thumbnail() {
  return (
    <div className={styles["container"]}>
      {/* <div className={styles["logo-section"]}>
        <Image src={"/rlogo.jpg"} height={30} width={30} alt="r_logo" />
      </div> */}
      <div>
        <div className={styles["sal"]}>Hi, I am</div>
        <div className={styles["name"]}>Rahul Kumar</div>
        <div className={styles["deg"]}>Fullstack Developer</div>
      </div>
      <div>
        <div className={styles["box1"]}>
          <Link
            href={
              "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCpShlBVDNzSmWJVXGXpHXQgmBhFnTmWsFZKDlmbgGQPqcHKscPtGDHNtsSnRqJPKrzdvh"
            }
            target="_blank"
          >
            <Image src={"/atsign.png"} height={30} width={30} alt="at_sign" />
          </Link>
        </div>
        <div className={styles["box2"]}>
          <Link href={"https://github.com/iamrkgolu"} target="_blank">
            <Image
              src={"/githubsign.png"}
              height={30}
              width={30}
              alt="at_sign"
            />
          </Link>
        </div>
        <div className={styles["box3"]}>
          <Link
            href={"https://www.linkedin.com/in/rahul-kumar-ab01aa20b/"}
            target="_blank"
          >
            <Image
              src={"/linkedinsign.png"}
              height={30}
              width={30}
              alt="at_sign"
            />
          </Link>
        </div>
      </div>
      <div className={styles["left-section-design"]}>
        <nav className={styles["nav-bar"]}>
          <div className={styles["nav-container"]}>
            <div className={styles["each-nav-item"]}>
                <Link href={"#skills"} className={styles["each-nav-item"]}>
                Skills
                </Link>
            </div>
            <div className={styles["each-nav-item"]}>
                <Link href={"/Rahul Kumar(2101459).pdf"} target="_blank" className={styles["each-nav-item"]}>
                CV
                </Link>
            </div>
            <div className={styles["each-nav-item"]}>
              <span className={styles["contact"]}>
                <Link href={"#contact"} className={styles["contact"]}>
                Contact Me
                </Link>
              </span>
            </div>
          </div>
        </nav>
        <div className={styles["img"]}>
          <Image
            src={"/mine.png"}
            width={500}
            height={500}
            alt="background_image"
          ></Image>
        </div>
      </div>
      <div className={styles["part1"]}>
        <p className={styles["text"]}>
          Successful in implementing scalable and robust enterprise applications
          in major server platform such as cloud run and open-source frameworks
          Spring Boot and library Reactjs and database management systems
          (MySQL, PostgreSQL).
        </p>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact" style={{marginBottom:'5rem'}}>
          <Contact />
        </div>
        <div style={{marginTop:'10rem'}}>
        <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
