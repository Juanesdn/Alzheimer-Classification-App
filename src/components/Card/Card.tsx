import { useRouter } from 'next/router';

import styles from './Card.module.css';

interface IMainProps {
  title: string;
  link?: string;
  icon: React.ReactNode;
  className?: string;
}

export const Card = (props: IMainProps) => {
  const router = useRouter();
  return (
    <div
      className={`${props.className} ${styles.card} ${
        !props.link ? '!cursor-default disabled:hover' : ''
      }`}
      onClick={() => (props.link ? router.push(props.link) : null)}
    >
      {props.icon}
      {props.title}
    </div>
  );
};
