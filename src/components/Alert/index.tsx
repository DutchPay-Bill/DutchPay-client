import Alert from "@mui/material/Alert";

interface AlertProps {
  severity: "error" | "warning" | "info" | "success";
  message: string;
}

const CustomAlert: React.FC<AlertProps> = ({ severity, message }) => {
  return <Alert severity={severity}>{message}</Alert>;
};

export default CustomAlert;
