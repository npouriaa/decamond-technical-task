import Form from "@/components/auth/Form";
import styles from "../../assets/styles/auth/auth.module.scss";
import { Metadata } from "next";

// Set metadata for SEO and browser tab title
export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

// Login page layout — renders the form component inside a styled container
export default function Auth() {
  return (
    <div className={styles.authContainer}>
      <Form />
    </div>
  );
}
