// Import Next.js Link component for client-side navigation
import Link from "next/link";

// Import scoped styles for this page
import styles from "./page.module.scss";

// Homepage component
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Happy to see you here 😍</h1>
      <h2>Login to your account ASAP and begin your journey 🚀</h2>

      {/* Link to the login/auth page */}
      <Link href="/auth">Login page ➡️</Link>
    </div>
  );
}
