import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Behaviour Driven',
        Svg: require('@site/static/img/scenario.svg').default,
        description: (
          <>
            Expression des scénarios d'utilisation simplifiée.
          </>
        ),
    },
    {
        title: 'Environnement Web',
        Svg: require('@site/static/img/browser.svg').default,
        description: (
            <>
                Toute application qui s'exécute dans un navigateur web est éligible.
            </>
        ),
    },
    {
        title: 'User Centric',
        Svg: require('@site/static/img/user-centric.svg').default,
        description: (
            <>
                Vérifications dans le DOM seront effectués en s'appuyant sur les rôles et attributs accessibles.
            </>
        )
    }
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={`homepage-feature-img ${styles.featureSvg}`} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
