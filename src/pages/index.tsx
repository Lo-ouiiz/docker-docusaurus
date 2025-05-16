import React from "react";
import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          Une documentation complète pour apprendre Docker étape par étape.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction"
          >
            🚀 Commencer avec Docker
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({
  title,
  to,
  description,
  icon,
}: {
  title: string;
  to: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className={clsx("card", styles.featureCard)}>
        <div className="card__body">
          <h3 className={styles.cardTitle}>
            <span className={styles.icon}>{icon}</span>{" "}
            <Link to={to}>{title}</Link>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Accueil"
      description="Documentation claire et structurée pour apprendre Docker, les Dockerfiles, Docker Compose et plus."
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <Feature
                title="Introduction"
                to="/docs/introduction"
                description="Présentation de Docker, objectifs et cas d'usage."
                icon="📘"
              />
              <Feature
                title="Concepts de base"
                to="/docs/docker-vs-vm"
                description="Comprendre les différences entre VM et Docker, et ce qu'est un conteneur."
                icon="🧱"
              />
              <Feature
                title="Dockerfile"
                to="/docs/dockerfile-structure"
                description="Apprenez à construire des images personnalisées avec Dockerfile."
                icon="🛠️"
              />
            </div>
            <div className="row">
              <Feature
                title="Commandes utiles"
                to="/docs/commandes"
                description="Les principales commandes Docker pour le quotidien."
                icon="💻"
              />
              <Feature
                title="Docker Compose"
                to="/docs/compose-definition"
                description="Orchestration multi-conteneurs avec Docker Compose."
                icon="📦"
              />
              <Feature
                title="Docker sur Windows"
                to="/docs/windows"
                description="Particularités de l'installation et de l'utilisation sur Windows."
                icon="⚙️"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
