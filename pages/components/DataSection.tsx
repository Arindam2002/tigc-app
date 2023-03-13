import styles from "@/styles/DataSection.module.css";

const DataSection = () => {
  return (
    <div className={styles.parentContainer}>
      <h2
        style={{
          fontSize: "1.2rem",
          paddingBottom: "1rem",
          paddingLeft: "1rem",
          fontWeight: "100"
        }}
      >
        Data & Analytics
      </h2>
      <div className={styles.container}>
        <div className={styles.box}>
          <h2>pH</h2>
          <p>6</p>
        </div>
        <div className={styles.box}>
          <h2>Oxygen</h2>
          <p>5 mg/L</p>
        </div>
        <div className={styles.box}>
          <h2>ORP</h2>
          <p>100mV</p>
        </div>
        <div className={styles.box}>
          <h2>Temperature</h2>
          <p>50°C</p>
        </div>
        <div className={styles.box}>
          <h2>Humidity</h2>
          <p>20%</p>
        </div>
        <div className={styles.box}>
          <h2>Atm. Pressure</h2>
          <p>1 atm</p>
        </div>
      </div>
    </div>
  );
};

export default DataSection;
