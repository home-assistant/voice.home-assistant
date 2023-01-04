import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>How we build Voice</>,
    description: (
      <>
        The Home Assistant Voice Portal is our developer documentation for
        everything related to voice. It is a collection of guides, tutorials and
        reference material for developers who want to contribute, integrate or
        build on top of the voice experience of Home Assistant.
      </>
    ),
  },
  {
    title: <>Documentation Structure</>,
    description: (
      <>
        <b>
          <a href="/docs/overview">Overview.</a>
        </b>{" "}
        Introduction to all the different parts that make voice work in Home
        Assistant.
        <br />
        <b>
          <a href="/docs/intents">Intents.</a>
        </b>{" "}
        How the intention of your voice command is matched to an action, and
        executed.
        <br />
        <b>
          <a href="/docs/contributing">Contributing your language.</a>
        </b>{" "}
        Learn how you can help us make Home Assistant better for everyone by
        improving support for your language.
      </>
    ),
  },
  {
    title: <>Our goal</>,
    description: (
      <>
        <p>
          It is our goal to let users control Home Assistant in their own
          language. Our #1 priority is supporting different languages. People
          need to be able to speak in their own language, as that is the most
          accessible and only acceptable language for a voice assistant for the
          smart home.
        </p>
        <p>
          <a
            href="https://www.home-assistant.io/blog/2022/12/20/year-of-voice/"
            target="_blank"
          >
            Learn more.
          </a>
        </p>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--5", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Home Assistant Voice Portal`}
      description="Use your voice to control your home"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={clsx("col col--5")}>
              <img
                className={styles.heroLogo}
                alt="Home Assistant Logo"
                src="/img/logo-white.svg"
              />
            </div>
            <div className={clsx("col col--5")}>
              <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
              <p className={styles.heroTagline}>{siteConfig.tagline}</p>
              <p>
                <a
                  className={styles.heroText}
                  href="https://www.home-assistant.io"
                >
                  Looking to use voice with Home Assistant? Go to the normal
                  website
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
