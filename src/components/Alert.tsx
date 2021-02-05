import React, { FC } from "react";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div>
      <div onClick={onClose}>Close</div>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
