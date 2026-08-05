import styles from "./SimpleGallery.module.css";

interface SimpleGalleryImage {
  src: string;
  alt: string;
}

interface SimpleGalleryProps {
  images: SimpleGalleryImage[];
}

function SimpleGallery({ images }: SimpleGalleryProps) {
  return (
    <section className={styles.gallery}>
      {images.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={styles.image}
        />
      ))}
    </section>
  );
}

export default SimpleGallery;
