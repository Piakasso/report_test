import { Button } from "react-bootstrap";

const CustomButton = ({ children, variant, onClick, disabled }) => {
  return (
    <Button
      variant={variant}
      className="m-2"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
