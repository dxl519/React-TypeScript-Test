import { useId } from "react";
import { FooterList, FooterProps } from "../../models/type";

export const Footer: React.FC<FooterProps> = ({ amount }) => {
  const footerList: FooterList[] = [
    { id: 0, text: "全部" },
    { id: 1, text: "选中" },
    { id: 2, text: "未选中" },
  ];

  return (
    <div className="footer">
      <div>{amount}</div>
      <ul className="footer-list">
        {footerList.map((item: FooterList) => {
          return <li key={useId()}>{item.text}</li>;
        })}
      </ul>
    </div>
  );
};
