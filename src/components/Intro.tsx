import styles from "./Intro.module.css";
import SimpleGallery from "./SimpleGallery";

import gallery3img6 from "../assets/gallery/sketch4-3.jpg";
import gallery3img8 from "../assets/gallery/sketch6.jpg";
import gallery3img9 from "../assets/gallery/watercolor-a-1.jpg";

const gallery3 = [
  { src: gallery3img6, alt: "Abstract sketch 4 part 3" },
  { src: gallery3img8, alt: "Abstract sketch 6" },
  { src: gallery3img9, alt: "Watercolor experiment A part 1" },
];

function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.hero}>
        <h1>A living sketchbook.</h1>
        <p className={styles.subtitle}>Practice, not perfection.</p>
      </div>

      <p className={styles.text}>
        As a recovering perfectionist, I spent years collecting beautiful
        notebooks and art supplies that sat untouched on my shelves out of fear
        that I would "ruin" them. Now, I'm leaving the pressure behind and
        learning to just embrace the chaos.
      </p>

      {/* Featured work gallery */}
      <SimpleGallery images={gallery3} />

      <p className={styles.text}>
        I'm learning to paint and draw. This space is a living record of that
        process: the messy sketches, the art-supply experiments, the failures,
        and the occasional successes.
      </p>
    </section>
  );
}

export default Intro;
