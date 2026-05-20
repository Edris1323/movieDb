import styles from "./MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Image_Base = "https://image.tmdb.org/t/p/w500"


// FIX 1: Pass 'movie' as a prop so the data is available
function MovieCard({ movie }) {
  // FIX 2: Changed parentheses () to brackets [] to make it a valid array
  const genres = ["Adventure", "Action", "Thriller"];

  return (
    <div className={styles.cardWrapper}>
      {/* poster image */}
      <img
        className={styles.poster}
        src={`${Image_Base}${movie?.poster_path}`}
        alt="poster image"
      />

      {/* hover card */}
      <div className={styles.hoverCard}>
        {/* img */}
        <img
          className={styles.hoverImage}
          src={`${Image_Base}${movie?.poster_path}`}
          alt="hover image"
        />

        {/* badge */}
        <div className={styles.badge}>Recently added</div>

        {/* button row */}
        <div className={styles.buttonsRow}>
          <FaCirclePlay
            className={styles.circleButon}
            color="white"
            size={40}
          />
          <BsPlusCircle
            className={styles.circleButon}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={styles.circleButon}
            color="white"
            size={40}
          />
          <IoIosArrowDropdownCircle
            className={styles.circleButtonsRow}
            color="white"
            size={40}
          />
        </div>

        {/* meta data row */}
        {/* FIX 3: Changed 'spam' to 'span' */}
        <div className={styles.metaRow}>
          <span className={styles.tag}>U/A 16+</span>
          <span className={styles.tag}>Movie</span>
          <span className={styles.tag}>HD</span>
        </div>

        {/* genres */}
        <div className={styles.geners}>
          {/* FIX 4: Fixed spelling from 'geners' to 'genres' */}
          {genres.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < genres.length - 1 && (
                  <span className={styles.dot}> • </span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
