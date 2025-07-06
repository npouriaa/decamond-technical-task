"use client";

import { useState } from "react";
import styles from "../../assets/styles/auth/form.module.scss";
import Input from "@/components/auth/Input";
import Button from "@/components/reusable/Button";
import Loader from "../reusable/Loader";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Form() {
  const router = useRouter();

  // State to manage phone input validation error
  const [inputError, setInputError] = useState<string>("");

  // Placeholder for storing user info (can be useful if needed later)
  const [user, setUser] = useState(null);

  // Track loading and generic error states
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Iranian mobile number validation regex
  const phonePattern = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;

  // Fetch user data from external API and store in localStorage
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://randomuser.me/api/?results=1&nat=us");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const fetchedUser = data.results[0];

      // Store user data locally for session tracking
      localStorage.setItem("CURRENT_USER", JSON.stringify(fetchedUser));
      setUser(fetchedUser);

      // Redirect to dashboard after login
      router.push("/dashboard");
    } catch (err) {
      setError("failed");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission and validate phone number before fetching data
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const phone = formData.get("phone_number") as string;

    if (phone !== "") {
      if (!phonePattern.test(phone)) {
        setInputError("Phone number is not valid");
      } else {
        setInputError("");
        fetchData();
      }
    } else {
      setInputError("Please input your phone number");
    }
  };

  return (
    <>
      {/* Show loader while fetching user data */}
      {loading && <Loader />}

      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1>Login</h1>
          <h2>Welcome back</h2>
        </div>

        {/* Auth form */}
        <form className={styles.authForm} onSubmit={handleSubmit}>
          <Input inputError={inputError} />
          {error && <p className={styles.errorText}>{error}</p>}
          <Button text="Login" type="submit" />
        </form>

        {/* Navigation back to homepage */}
        <Link href="/">Back to home page</Link>
      </div>
    </>
  );
}
