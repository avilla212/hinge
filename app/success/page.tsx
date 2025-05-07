"use client";
import { useSearchParams } from "next/navigation";

import image from "/public/images/1.jpg";
import FlipCard from "../../components/FlipCard";
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
    </main>
  );
};

export default successPage;
