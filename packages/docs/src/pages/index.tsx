import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                <img className="hero__logo" src="img/uuv.png" height="150px"/>
                <h1 className="hero__title">{siteConfig.title}</h1>
                <h3>User centric Usecases Validator</h3>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Documentation
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Homepage`}
            description="Discovering your application by usecase validation">
            <HomepageHeader/>
            <main className={'homepage-feature'}>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
