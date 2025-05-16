"use client";
import { useSearchParams, useRouter } from "next/navigation";

import FlipCard from "../../components/FlipCard";
import Card from "../../components/Card";

import matcha from "/public/images/matcha.png";
import activity from "/public/images/activity.png";

import img1 from "/images/biting.jpg";
import img2 from "/images/kissing.jpg";
import img3 from "/images/awkhug.jpg";
import img4 from "/images/concert.jpg";
import img5 from "/images/weirdface.jpg";
import img6 from "/images/backhug.jpg";

import styles from "../success/success.module.css";

export default function SuccessPage() {
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
    { image: img1, text: "You know I hate photos but for you, I'll always take them ... well, 9/10 times .. depends how much sleep I've had." },
    { image: img2, text: "The image didn't size down well so this is a selfie of you I guess haha. I get to show you off on the web now >:D" },
    { image: img3, text: "I look so tired in this pic but I'm glad we got to support Kyla in her play. Even if I was falling asleep during it. You know I would always make the drive for you." },
    { image: img4, text: "You were shining brighter than the sun and I ... was deathly ill this day. I'm glad we got to get good food and enjoy some time together at bea's concert." },
    { image: img5, text: "Why do I look so slow here lol. You look beautiful as always though." },
    { image: img6, text: "Another poorly sized photo from the bea concert haha. You're smiling so bright as you always do. This upcoming year I would like to go to more concerts with you." },
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
