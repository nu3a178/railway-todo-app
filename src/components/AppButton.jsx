import { Link } from "react-router-dom";
import "./AppButton.css";
import { useHistory } from "react-router-dom";

export const AppButton = ({
  label,
  type = "button",
  target,
  color = "default",
  onClick,
  disabled,
}) => {
  if (type === "submit") {
    return (
      <button
        type="submit"
        className={`app_button app_button_${color}`}
        disabled={disabled}
      >
        {label}
      </button>
    );
  }
  if (target) {
    return (
      <Link className={`app_button app_button_${color}`} to={target}>
        {label}
      </Link>
    );
  }
  return (
    <button
      type="button"
      className={`app_button app_button_${color}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
