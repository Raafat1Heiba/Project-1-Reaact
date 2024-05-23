import "../index.sass";
import { ReactNode } from "react";
import { X } from "lucide-react";
import { AlertTypes } from "../../../type/type";

interface IProps {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}
const Alert = ({ type, icon, title, description, children }: IProps) => {
  return (
    <>
      <div className={type}>
        <div className="alert-header">
          {icon}
          <h3>{title}</h3>
          <span>
            <X className="close" />
          </span>
        </div>

        {children ? children : <p>{description}</p>}
      </div>
    </>
  );
};

export default Alert;
