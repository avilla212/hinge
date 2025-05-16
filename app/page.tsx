"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

import React from "react";

const mockUsers: Record<string, string> = {
  hinge: "bcd",
  user1: "test1",
};

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    const lowercaseUser = username.toLowerCase();
    const lowercasePass = password.toLowerCase();
    // ?. operator allows us to safely access a property or method only if the value
    // before isnt null or undefined
    const storedPass = mockUsers[lowercaseUser]?.toLowerCase();
    if (storedPass && storedPass === lowercasePass) {
      router.push("/profile");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.title}>Login</h1>
        {/* username */}
        <input
          type="text"
          placeholder="Where we matched .."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />

        {/* password */}
        <input
          type="text"
          placeholder="Building we met infront of ..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />

        {/* login button */}
        <button className={styles.button} onClick={handleLogin}>
          Log In
        </button>

        {/* error message */}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </main>
  );
}
