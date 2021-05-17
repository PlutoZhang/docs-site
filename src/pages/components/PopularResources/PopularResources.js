import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const data = [
  {
    title: "Download Zowe",
    link: "",
    lightIcon: "img/download-zowe-light-icon.png",
    darkIcon: "img/download-zowe-dark-icon.png",
    description: (
      <>
        Zowe has both server and client components, which you can install
        independently.
      </>
    ),
  },
  {
    title: "Try Zowe",
    link: "",
    lightIcon: "img/try-zowe-light-icon.png",
    darkIcon: "img/try-zowe-dark-icon.png",
    description: <>Get your hands on a Zowe trial on demand at no charge.</>,
  },
];

function Resource({ title, link, lightIcon, darkIcon, description }) {
  return (
    <div className={clsx("col col--4 padding--lg", styles.posRelative)}>
      <img
        className="margin-left--xs lightTheme"
        alt="icons"
        style={{ height: "70px", width: "70px" }}
        src={useBaseUrl(lightIcon)}
      />
      <img
        className="margin-left--xs darkTheme"
        alt="icons"
        style={{ height: "70px", width: "70px" }}
        src={useBaseUrl(darkIcon)}
      />
      <p>{description}</p>
      <a className={clsx("margin-top--sm", styles.posAbsolute)} href={link}>
        {title}
      </a>
    </div>
  );
}

function PopularResources() {
  return (
    <>
      {data && data.length > 0 && (
        <section id={clsx(styles.features)}>
          <div className="container">
            <h2
              className="text--center padding-bottom--md"
              style={{ fontSize: "2rem" }}
            >
              Popular resources
            </h2>
            <div className={clsx("row")}>
              {data.map((props, idx) => (
                <Resource key={idx} {...props} />
              ))}
              <div
                className={clsx(
                  "col col--4 padding--lg display-flex",
                  styles.posRelative
                )}
              >
                <iframe
                  src="https://www.youtube.com/embed/7XpOjREP8JU"
                  className={clsx(styles.responsiveIframe)}
                  title="Introduction to Zowe"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <a
                  className={clsx("margin-top--sm", styles.posAbsolute)}
                  href="https://www.youtube.com/embed/7XpOjREP8JU"
                >
                  Get an overview of Zowe
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default PopularResources;
