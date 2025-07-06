import styles from "../../assets/styles/global/button.module.scss";

// Props type definition for the reusable button
type ButtonProps = {
  text: string; // Button label
  type: "button" | "submit" | "reset"; // Native HTML button types
  handlerFunction?: () => void; // Optional click handler
};

// Reusable button component
const Button = ({ text, type, handlerFunction = () => {} }: ButtonProps) => {
  return (
    <button
      onClick={() => handlerFunction()} // Execute handler if provided
      className={styles.btn} // Apply scoped SCSS styles
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
