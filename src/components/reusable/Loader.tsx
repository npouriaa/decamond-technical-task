import styles from "../../assets/styles/global/loader.module.scss";

// Simple loader/spinner component used during loading states
export default function Loader() {
  return (
    <div className={styles.loaderCon}>
      {/* Animated spinner element */}
      <span className={styles.loader}></span>
    </div>
  );
}
