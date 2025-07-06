"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../assets/styles/dashboard/dashboard.module.scss";
import Button from "@/components/reusable/Button";
import Loader from "@/components/reusable/Loader";

// Define the expected structure of the user object
type CurrentUser = {
  name: {
    first: string;
    last: string;
    title: string;
  };
};

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    try {
      // Attempt to read and parse the user from localStorage
      const storedUser = localStorage.getItem("CURRENT_USER");
      const parsed: CurrentUser = JSON.parse(storedUser ?? "");
      

      // If user data is invalid or missing, redirect to login
      if (!parsed || typeof parsed !== "object" || !parsed.name) {
        router.replace("/auth");
        return;
      }

      // Valid user found — set state
      setUser(parsed);
    } catch {
      // On JSON parse error, redirect to login
      router.replace("/auth");
    }

    setLoading(false);
  }, [router]);

  // Handle user logout
  const logoutHandler = () => {
    localStorage.removeItem("CURRENT_USER");
    router.replace("/auth");
  };

  return (
    <>
      {/* Show loader while verifying user */}
      {loading && <Loader />}

      {/* Show dashboard only if user is authenticated */}
      {user && (
        <div className={styles.dashboardCon}>
          <h1>
            Welcome to the Dashboard <span>{user.name.first}</span>
          </h1>
          <h2>
            Current User: {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <Button handlerFunction={logoutHandler} type="button" text="Logout" />
        </div>
      )}
    </>
  );
}
