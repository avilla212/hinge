"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import PromptSection from "./PromptSection";

interface Prompt {
  prompt: string;
  answer: string;
}

interface ProfileProps {
  name: string;
  height: string;
  age: string;
  location: string;
  photos: string[];
  prompts: Prompt[];
}

export default function Profile({
  name,
  height,
  age,
  location,
  photos,
  prompts,
}: ProfileProps) {
  // track if profile should be fade
  const [isHidden, setIsHidden] = useState(false);
  const router = useRouter(); // handle page nav

  // called when checkmark is called
  const handleAccept = () => {
    setIsHidden(true);
    // navigate to success with a query string indicating the choice
    setTimeout(() => router.push("/success?status=accepted"), 500);
  };

  // rejection count
  const [rejectCount, setRejectCount] = useState(0);
  const [rejectionMessage, setRejectionMessage] = useState("");
  const rejectionPrompts = [
    "Why are you even clicking this, stop it...",
    "Seriously? again??? STOP",
    "Okay fine ... ",
  ];

  const handleReject = () => {
    if (rejectCount < rejectionPrompts.length) {
      setRejectionMessage(rejectionPrompts[rejectCount]);
      setRejectCount(rejectCount + 1);
    } else {
      setIsHidden(true);
      setTimeout(() => {
        router.push("/success?status=rejected");
      }, 500);
    }
  };

  return (
    <div className={`${styles.profileCard} ${isHidden ? styles.fadeOut : ''}`}>
      {/* First Photo */}
      <div className={styles.imageCard}>
        <img
          src={photos[0]}
          alt={`${name}'s photo 1`}
          className={styles.profilePhoto}
        />
      </div>

      {/* Name and Info */}
      <div className={styles.profileHeader}>
        <h2>{name}</h2>
        <div className={styles.profileDetails}>
          <span>Age: {age}</span>
          <span>Height: {height}</span>
          <span>Location: {location}</span>
        </div>
      </div>

      {/* Second Photo + First Prompt */}
      {photos[1] && (
        <div className={styles.imageCard}>
          <img
            src={photos[1]}
            alt={`${name}'s photo 2`}
            className={styles.profilePhoto}
          />
        </div>
      )}
      {prompts[0] && (
        <PromptSection prompt={prompts[0].prompt} answer={prompts[0].answer} />
      )}

      {/* Third Photo + Second Prompt */}
      {photos[2] && (
        <div className={styles.imageCard}>
          <img
            src={photos[2]}
            alt={`${name}'s photo 3`}
            className={styles.profilePhoto}
          />
        </div>
      )}
      {prompts[1] && (
        <PromptSection prompt={prompts[1].prompt} answer={prompts[1].answer} />
      )}

      {/* accept and rejection buttons */}
      <div className={styles.actionButtons}>
        <button className={styles.xButton} onClick={handleReject}>
          ❌
        </button>
        <button className={styles.xButton} onClick={handleAccept}>
          ✅
        </button>
      </div>

      {/* Rejection message displayed conditionally */}
      {rejectionMessage && (
        <p className={styles.rejectionPrompt}>{rejectionMessage}</p>
      )}
    </div>
  );
}
