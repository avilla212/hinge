/**
 * FlipCard compenent
 * ------------------
 * reusable interactive component designed for mobile/desktop layouts
 *
 * Behavior:
 * - Displays image on the front
 * - on click flips image to reveal a text description
 *
 * Usage:
 * <FlipCard
 * image = "/images/photo1.jpg"
 * text = "Lopsem ipsum blah blah blah"
 * />
 *
 * Props:
 * - image (string): path to image
 * - text (string): description text for photo
 */

"use client";

import { useState } from "react";
import React from "react";
import styles from "../app/success/success.module.css";
import { StaticImageData } from "next/image";

interface FlipCardProps {
  imagePath: string | StaticImageData;
  text: string;
}

const getImgSrc = (imagePath: string | StaticImageData): string =>
  typeof imagePath === "string" ? imagePath : imagePath.src;

export default function FlipCard({ imagePath, text }: FlipCardProps) {
  // default state will be false
  const [flipped, setFlipped] = useState(false);

  // on click we will toggle flipped state
  const handleFlip = () => {
    setFlipped(!flipped); // toggle between front/back
  };

  return (
    <div className={styles.cardWrapper} onClick={handleFlip}>
      <div className={`${styles.cardInner} ${flipped ? styles.flipped : ""}`}>
        {/* Front side image */}
        <div className={styles.cardFront}>
          <img
            src={getImgSrc(imagePath)}
            alt="Card image"
            className={styles.cardImage}
          />
        </div>

        {/* Backside text */}
        <div className={styles.cardBack}>
          <p className={styles.cardText}>{text}</p>
        </div>
      </div>
    </div>
  );
}
