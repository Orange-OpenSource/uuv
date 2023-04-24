import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: translate({id: 'homepage.keyFeature.featureOne.title', message: 'Behaviour Driven'}),
        Svg: require('@site/static/img/scenario.svg').default,
        description: (
          <><Translate id="homepage.keyFeature.featureOne.message">Simplified expression of use cases</Translate></>
        ),
    },
    {
        title: translate({id: 'homepage.keyFeature.featureTwo.title', message: 'Web environment'}),
        Svg: require('@site/static/img/browser.svg').default,
        description: (
            <><Translate id="homepage.keyFeature.featureTwo.message">Any application that runs in a web browser is eligible</Translate></>
        ),
    },
    {
        title: translate({id: 'homepage.keyFeature.featureThree.title', message: 'User Centric'}),
        Svg: require('@site/static/img/user-centric.svg').default,
        description: (
            <><Translate id="homepage.keyFeature.featureThree.message">Checks in the DOM will be performed based on the accessible roles and attributes</Translate></>
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
