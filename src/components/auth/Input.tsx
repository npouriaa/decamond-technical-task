import styles from "../../assets/styles/auth/input.module.scss";

// Props type for input validation message
type InputProps = {
  inputError: string;
};

// Reusable input component for phone number entry
export default function Input({ inputError }: InputProps) {
  return (
    <div className={styles.inputCon}>
      {/* Phone number input field */}
      <input
        name="phone_number"
        type="text"
        placeholder="Phone Number (Iran phone number only)"
      />

      {/* Show validation error if present */}
      {inputError && <p>{inputError}</p>}
    </div>
  );
}
