import styles from "./hero.module.css";

const Hero = () => {
  return (
    <main className={styles.heroContainer}>
      <div>This is a hero 1</div>
      <div>This is a hero 2</div>
      <div>This is a hero 3</div>
    </main>
  );
};

export default Hero;
