"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

import FlipCard from "../../components/FlipCard";
import Card from "../../components/Card";

import matcha from "/public/images/matcha.png";
import activity from "/public/images/activity.png";

import styles from "../success/success.module.css";

// Extract the logic using useSearchParams into its own component
function SuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  const handleClick = () => {
    router.push("/loveletter");
  };

  const message =
    status === "accepted"
      ? "Wise choice... now click on the images below for a surprise"
      : "You didn't have a choice anyways :D now click on the images below for the surprise";

  const flipCards = [
    {
      image: "/images/biting.JPG",
      text: "You know I hate photos but for you, I will always take them with you ... well, 9/10 times ... depends how much sleep I have had.",
    },
    {
      image: "/images/kissing.JPG",
      text: "The image didnt size down well so this is a selfie of you I guess haha. I get to show you off on the web now ..",
    },
    {
      image: "/images/awkhug.jpg",
      text: "I look so tired in this pic but I am glad we got to support Kyla in her play. Even if I was falling asleep during it. You know I would always make the drive for you.",
    },
    {
      image: "/images/concert.jpg",
      text: "You were shining brighter than the sun and I was was deathly ill this day. I am glad we got to get good food and enjoy some time together at Bea&rsquo;s concert.",
    },
    {
      image: "/images/weirdface.jpg",
      text: "Why do I look so slow here lol. You look beautiful as always though.",
    },
    {
      image: "/images/backhug.jpg",
      text: "Another poorly sized photo from the Bea concert haha... You were smiling so bright as you always do. This upcoming year I would like to go to more concerts with you.",
    },
  ];

  return (
    <main className={styles.page}>
      <h1 className={styles["cal-sans-regular"] || ""}>{message}</h1>

      <div className={styles.grid}>
        {flipCards.map((card, i) => (
          <FlipCard key={i} imagePath={card.image} text={card.text} />
        ))}

        <Card imagePath={matcha} label="Matcha" route="/food" />
        <Card imagePath={activity} label="Activity" route="/activity" />
      </div>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <button
          onClick={handleClick}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            backgroundColor: "var(--primary)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Read the Love Letter 💌
        </button>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
