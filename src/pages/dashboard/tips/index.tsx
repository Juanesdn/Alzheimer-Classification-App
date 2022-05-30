/* eslint-disable react/no-unescaped-entities */
import Appbar from '@/components/Appbar/Appbar';
import { tipsData } from '@/data/Data';

import styles from './Tips.module.css';

const Tips = () => {
  return (
    <>
      <Appbar title="Consejos" />
      <div className={styles.consejos}>
        {tipsData.map((tip) => (
          <a
            target="_blank"
            key={tip.id}
            href={tip.link}
            className="mb-10 flex w-full flex-col items-center rounded-lg border bg-white/80 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row"
            rel="noreferrer"
          >
            <img
              className="h-56 w-full rounded-t-lg object-cover md:w-48 md:rounded-none md:rounded-l-lg"
              src={tip.image}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className={styles.consejos__title}>{tip.title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {tip.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

Tips.isDashboard = true;

export default Tips;
