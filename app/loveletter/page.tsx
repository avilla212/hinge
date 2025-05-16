"use client";
import TalkingImage from "@/components/TalkingImage";

export default function LoveLetterPage() {
  return (
    <main
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "2rem",
        lineHeight: "1.8",
      }}
    >
      <h1
        style={{ fontSize: "2rem", textAlign: "center", marginBottom: "2rem" }}
      >
        💌 A Letter from the Heart
      </h1>

      {/* Optional Header Image */}
      {/* <Image src="/images/your-image.jpg" width={700} height={400} alt="Love header" style={{ borderRadius: '12px', marginBottom: '2rem' }} /> */}

      <p>
        Dear Kate, let me first apologize for how cheap this website looks haha,
        you know my creative skills are not the bets at all. I wanted to do
        something a little different for our two years and I couldn&rsquo;t
        think of a better way than this, some flowers and a day filled with
        activities to celebrate two very ... very ....... long years. Just
        kidding. Anyways, I could always continue to add to this website so
        maybe we can finally have our own personal yelp, online photo collage
        etc ... I am beyond lucky to have crossed paths with you.
      </p>
      <TalkingImage
        src="/images/tongueout.jpg"
        alt="Memory 1"
        quote="Burritos .... enough said"
      />

      <p>
        I love so many things about you, I love the way you laugh while you
        scroll tiktok or the face you make when I find out what you want to eat.
        I love the way you&rsquo;ve talked about your loved ones and those close
        to you since the day I met you. I love how you always get shit done, no
        matter what is thrown your way. Even if you may complain or need a
        shoulder to lean on, you always get it done ... I hope I can always be
        that shoulder for you. I love how you are always happy to be with me
        just as I am with you. I love how much we have grown together in this
        two years ... even though we had to face some harsh realities about
        ourself in the beginning. I love hearing all the little details about
        your day, the good and the bad. I love getting to spend nights with you
        and I love getting called out on my inadequacies by you. Thank you for
        still choosing me.
      </p>

      {/*  Talking image #1 */}
      <TalkingImage
        src="/images/flash.jpg"
        alt="Memory 1"
        quote="Our quiet and intimate sushi date. You look so pretty here."
      />

      <p>
        I wish I could spam this webpage with words but you would be scrolling
        forever. I remember when we first started dating and I was so scared
        though I don&rsquo;t think I told you I was. I was scared because it had
        been so long and I had been in some terrible relationships and I was
        scared that I wouldn&rsquo;t be up to par for you. Of course, at the
        start, we both were scared ... and It showed. I can&rsquo;t believe we
        made it through that bullshit. Now, the only time anything happens is
        when you or I are being petty haha. Even when that happens, you put in
        the effort to communicate which was night and day to how it was before
        ... and I am the one lacking sometimes ... I love you so much. I hope to
        spend this life and every one after with you.
      </p>

      {/*  Talking image #2 */}
      <TalkingImage
        src="/images/BCD.jpg"
        alt="Memory 2"
        quote="Where we first met ... yet we still haven't eaten there ..."
      />

      <p>
        I hope that down the line, we get to live our dreams together, travel
        with your family and mine and that you get to realize that your hard
        work paid off and you no longer have to deal with the bullshit you do on
        a day to day basis. You deserve so much and I promise you I am working
        harder and harder each day to be able to support our dreams. One day you
        will be living your best life, bringing smiles to people&rsquo;s faces
        by giving them hairstyles that make them confident in their own skin and
        making BANK from it. You deserve every bit of happiness and success this
        world has to offer and I hope I can contribute to that.
      </p>

      {/*  Talking image #2 */}
      <TalkingImage
        src="/images/innout.jpg"
        alt="Memory 2"
        quote="The In-n-out where I asked you to be my girlfriend .. I think ... "
      />

      <footer
        style={{ marginTop: "3rem", textAlign: "center", fontStyle: "italic" }}
      >
        — Yours, always, big forehead man.
      </footer>
    </main>
  );
}
