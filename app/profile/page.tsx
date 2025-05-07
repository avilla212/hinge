'use client'; // ensure this runs on the client side

import { profile, printProfile } from '../../data/profile';
import styles from './page.module.css';
import Profile from './Profile'

// temp test 
console.log("Testing profile data");
printProfile(profile);

export default function Home() {
  return (
    <main className={styles.page}>
      <Profile
        name={profile.name}
        height={profile.height}
        age={profile.age}
        location={profile.location}
        photos={profile.photos}
        prompts={profile.prompts}
        // add more props here as needed
      />
    </main>
  );
}