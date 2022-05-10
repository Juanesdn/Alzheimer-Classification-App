import styles from './Card.module.css';

interface IMainProps {
  title: string;
  link: string;
  icon: React.ReactNode;
  className?: string;
}

export const Card = (props: IMainProps) => {
  return (
    <div className={`${props.className} ${styles.card}`}>
      {props.icon}
      {props.title}
    </div>
  );
};
