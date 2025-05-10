"use client";
import { useSearchParams } from "next/navigation";

import image from "/public/images/1.jpg";
import matcha from "/public/images/matcha.png";
import city from "/public/images/city.png";
import activity from "/public/images/activity.png";

import FlipCard from "../../components/FlipCard";
import Card from "../../components/Card";
import React from "react";
import styles from "../success/success.module.css";

const successPage = () => {
  // access url query string
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  const message =
    status === "accepted"
      ? "Wise choice... now click on the images below for a suprise"
      : "You didn't have a choice anyways :D now click on the images below for the suprise";

  return (
    <main className={styles.page}>
      {/* message on top of screen */}
      <h1 className={styles["cal-sans-regular"] || ""}>{message}</h1>

      <div className={styles.grid}>
        {/* flip card component */}
        <FlipCard
          imagePath={image}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cras ac ornare turpis, vitae imperdiet mi. S
          ed non augue non enim imperdiet vulputate imperdiet congue nisi. Proin dapibus tempor pulvinar. "
        />

        <FlipCard
          imagePath={image}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cras ac ornare turpis, vitae imperdiet mi. S
          ed non augue non enim imperdiet vulputate imperdiet congue nisi. Proin dapibus tempor pulvinar. "
        />

        <FlipCard
          imagePath={image}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cras ac ornare turpis, vitae imperdiet mi. S
          ed non augue non enim imperdiet vulputate imperdiet congue nisi. Proin dapibus tempor pulvinar. "
        />

        <FlipCard
          imagePath={image}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cras ac ornare turpis, vitae imperdiet mi. S
          ed non augue non enim imperdiet vulputate imperdiet congue nisi. Proin dapibus tempor pulvinar. "
        />

        <FlipCard
          imagePath={image}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cras ac ornare turpis, vitae imperdiet mi. S
          ed non augue non enim imperdiet vulputate imperdiet congue nisi. Proin dapibus tempor pulvinar. "
        />

        <FlipCard
          imagePath={image}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cras ac ornare turpis, vitae imperdiet mi. S
          ed non augue non enim imperdiet vulputate imperdiet congue nisi. Proin dapibus tempor pulvinar. "
        />

        <Card imagePath={matcha} label="Matcha" route="/food" />

        {/* <Card imagePath={city} label="City" route="/city" /> */}

        <Card imagePath={activity} label="Activity" route="/activity" />
      </div>
    </main>
  );
};

export default successPage;
