import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageUrl: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Newsletter',
    imageUrl: 'https://tatodeskv2.consensotec.com.br/assets/img/tadeu.png',
    description: (
      <>
        Customer Experience no Setor Público
      </>
    ),
  },
  {
    title: 'Documentação',
    imageUrl: 'https://tatodeskv2.consensotec.com.br/assets/img/img01-welcome.jpg',
    description: (
      <>
       Tire suas dúvidas com a documentação da plataforma tatodesk.
      </>
    ),
  },
  {
    title: 'Canais',
    imageUrl: 'https://sofiamacedo.com/wp-content/uploads/2018/01/redes-sociais-gratis-mais-usadas.jpg',
    description: (
      <>
        Visite nossas redes sociais!
      </>
    ),
  },
];

function Feature({title, imageUrl, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageUrl} alt={title} className={styles.featureSvg}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
