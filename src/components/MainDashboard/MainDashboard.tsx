import { Avatar } from '@mui/material';
import Image from 'next/image';

import { CardsData } from '@/data/Data';
import MRIPlaceholder from '@/public/assets/images/mri-placeholder.jpeg';

import { Card } from '../Card/Card';
import styles from './MainDashboard.module.css';

const LastScan = () => {
  return (
    <div className={styles.lastScan}>
      <div className={styles.lastScan__info}>
        <div className={styles.lastScan__info__title}>Último registro</div>
        <div className={styles.lastScan__info__date}>25/3/2022</div>
        <div className={styles.lastScan__info__descripcion}>
          Clasificación: <span>Moderado</span>
        </div>
        <div className={styles.lastScan__info__descripcion}>
          Edad: <span>35 años</span>
        </div>
        <div className={styles.lastScan__info__descripcion}>
          Género: <span>Masculino</span>
        </div>
      </div>
      <div className={styles.lastScan__image}>
        <Image
          src={MRIPlaceholder}
          alt="lastScan"
          layout="fill" // required
          objectFit="cover" // change to suit your needs
        />
      </div>
    </div>
  );
};

export const MainDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__appbar}>
        <h1>Dashboard</h1>
        <Avatar />
      </div>

      <div className={styles.dashboard__cardsContainer}>
        {CardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
        <Card
          icon={<LastScan />}
          link={'/card'}
          className="last-scan"
          title=""
        />
      </div>
    </div>
  );
};
