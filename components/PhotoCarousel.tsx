import styles from '../app/page.module.css';

interface Props {
    photos: string[];
    altText?: string;
}

export default function PhotoCarousel({ photos, altText } : Props) {
    return (
        <img
        // count to keep track of the current photo index
        // set to 0 for now, we will implement the carousel functionality later
        src={photos[0]} // for now just show the first photo
        alt={altText || "Profile photo"}
        className={styles.profilePhoto}
        />
    )
}