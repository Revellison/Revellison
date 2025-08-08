import styles from './xmark.module.css';

const Xmark = ({ animationDuration = '4s' }) => {
  return (
    <div 
      className={styles['xmark-container']}
      style={{ '--animation-duration': animationDuration }}
    >
      <img src="/xmark.svg" alt="xmark" className={styles['xmark-img']} />
    </div>
  );
};

export default Xmark;
