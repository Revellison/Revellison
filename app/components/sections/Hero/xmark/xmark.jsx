import styles from './xmark.module.css';
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
const Xmark = ({ animationDuration = '4s' }) => {
  return (
    <div 
      className={styles['xmark-container']}
      style={{ '--animation-duration': animationDuration }}
    >
<img src={`${prefix}/xmark.svg`} alt="xmark" className={styles['xmark-img']} />
    </div>
  );
};

export default Xmark;
