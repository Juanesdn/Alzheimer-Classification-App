import moment from 'moment';
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import { getLastMRI } from '@/data/api';
import { CardsData } from '@/data/Data';
import { MRIResponse, SessionProps } from '@/types';

import Appbar from '../Appbar/Appbar';
import { Card } from '../Card/Card';
import styles from './MainDashboard.module.css';

type LastScanProps = {
  lastScan: MRIResponse;
};

const LastScan = ({ lastScan }: LastScanProps) => {
  const getClassification = (classification: string) => {
    switch (classification) {
      case 'MildDemented':
        return 'Demencia leve';
      case 'ModerateDemented':
        return 'NonDemented';
      case 'VeryMildDemented':
        return 'Demencia muy leve';
      case 'NonDemented':
        return 'No hay demencia';
      default:
        return 'No identificado';
    }
  };
  return (
    <div className={styles.lastScan}>
      <div className={styles.lastScan__info}>
        <div className={styles.lastScan__info__title}>Último registro</div>
        <div className={styles.lastScan__info__date}>
          {moment(lastScan.createdAt).format('DD/MM/YYYY')}
        </div>
        <div className={styles.lastScan__info__descripcion}>
          Clasificación:{' '}
          <span>{getClassification(lastScan.mri!.classification)}</span>
        </div>
        <div className={styles.lastScan__info__descripcion}>
          Edad: <span>{lastScan.mri!.age} años</span>
        </div>
        <div className={styles.lastScan__info__descripcion}>
          Género: <span>{lastScan.mri!.genre}</span>
        </div>
      </div>
      <img
        className={styles.lastScan__image}
        src={lastScan.mri!.image}
        alt=""
      />
    </div>
  );
};

export const MainDashboard = () => {
  const [lastScan, setLastScan] = useState<MRIResponse | null>(null);

  const getLastScan = async () => {
    const session = await getSession();
    if (!session) {
      return;
    }
    const {
      accessToken,
      user: { userId },
    } = session as unknown as SessionProps;
    const response = await getLastMRI(accessToken as string, userId as string);
    setLastScan(response);
  };

  useEffect(() => {
    getLastScan();
  }, []);

  return (
    <>
      <Appbar title="Dashboard" />
      <div className={styles.dashboard__cardsContainer}>
        <Card
          icon={
            lastScan && lastScan.code !== 401 ? (
              <LastScan lastScan={lastScan} />
            ) : (
              <FaInfoCircle />
            )
          }
          className="last-scan"
          title={
            lastScan && lastScan.code === 401 ? 'No hay último registro' : ''
          }
        />
        {CardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </>
  );
};
