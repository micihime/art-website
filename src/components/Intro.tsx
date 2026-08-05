import styles from "./Intro.module.css";
import SimpleGallery from "./SimpleGallery";

// import gallery3img1 from "../assets/gallery/3/sketch1.jpg";
// import gallery3img2 from "../assets/gallery/3/sketch2.jpg";
// import gallery3img3 from "../assets/gallery/3/sketch3.jpg";
// import gallery3img4 from "../assets/gallery/3/sketch4-1.jpg";
// import gallery3img5 from "../assets/gallery/3/sketch4-2.jpg";
import gallery3img6 from "../assets/gallery/3/sketch4-3.jpg";
// import gallery3img7 from "../assets/gallery/3/sketch5.jpg";
import gallery3img8 from "../assets/gallery/3/sketch6.jpg";
import gallery3img9 from "../assets/gallery/3/watercolor-a-1.jpg";
// import gallery3img10 from "../assets/gallery/3/watercolor-a-2.jpg";
// import gallery3img11 from "../assets/gallery/3/watercolor-b-1.jpg";
// import gallery3img12 from "../assets/gallery/3/watercolor-b-2.jpg";

const gallery3 = [
  // { src: gallery3img1, alt: "Abstract sketch 1" },
  // { src: gallery3img2, alt: "Abstract sketch 2" },
  // { src: gallery3img3, alt: "Abstract sketch 3" },
  // { src: gallery3img4, alt: "Abstract sketch 4 part 1" },
  // { src: gallery3img5, alt: "Abstract sketch 4 part 2" },
  { src: gallery3img6, alt: "Abstract sketch 4 part 3" },
  // { src: gallery3img7, alt: "Abstract sketch 5" },
  { src: gallery3img8, alt: "Abstract sketch 6" },
  { src: gallery3img9, alt: "Watercolor experiment A part 1" },
  // { src: gallery3img10, alt: "Watercolor experiment A part 2" },
  // { src: gallery3img11, alt: "Watercolor experiment B part 1" },
  // { src: gallery3img12, alt: "Watercolor experiment B part 2" },
];

function Intro() {
  return (
    <section className={styles.intro}>
      <h1>Hi, I'm Miči.</h1>

      <p>
        As a recovering perfectionist, I spent years collecting beautiful
        notebooks and art supplies that sat untouched on my shelves out of fear
        that I would "ruin" them. Now, I'm leaving the pressure behind and
        learning to just embrace the chaos.
      </p>

      {/* Featured work gallery */}
      <SimpleGallery images={gallery3} />

      <p className={styles.lead}>
        I'm learning to paint and draw. This space is a living record of that
        process: the messy sketches, the art-supply experiments, the failures,
        and the occasional successes.
      </p>
    </section>
  );
}

export default Intro;
