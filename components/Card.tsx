' use client '

import React from 'react';
import styles from '../app/success/success.module.css'
import { useRouter } from 'next/navigation'
import { StaticImageData } from 'next/image'
/**
 * Card component
 * --------------------
 * Reusable component similar to FlipCard althought it wont flip
 * 
 * Behavior: 
 * - Will display images that can be clicked
 * - On click will lead to different actions
 * 
 * Usage:
 * <Card
 * - image (string): path to image
 * - 
 */

interface CardProps {
    imagePath: string | StaticImageData;
    route: string;
    label: string;
}

const getImgSrc = (imagePath: string | StaticImageData): string => 
    typeof imagePath === "string" ? imagePath : imagePath.src;


export default function Card({ imagePath, route, label }: CardProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(route);
    }

    return (
        <div className={styles.cardWrapper} onClick={handleClick}>
            <div className={styles.cardFront}>
                <img src={getImgSrc(imagePath)} alt={label} className={styles.cardImage} />
            </div>
        </div>
    )

}