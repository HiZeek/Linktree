import React from "react";
import './Button.css';

const Button = () => {
  const btnList = [
    {
      id: "twitter",
      path: "https://twitter.com/IsaacIdibia",
      name: "Twitter",
    },
    {
      id: "btn__zuri",
      path: "https://training.zuri.team/",
      name: "Zuri Team",
    },
    {
      id: "books",
      path: "http://books.zuri.team/",
      name: "Zuri Books",
    },
    {
      id: "book__python",
      path: "https://books.zuri.team/",
      name: "Python Books",
    },
    {
      id: "pitch",
      path: "https://background.zuri.team/",
      name: "Background Check for Coders",
    },
    {
      id: "book__design",
      path: "https://books.zuri.team/design-rules",
      name: "Design Books",
    },
  ];

  const btns = btnList.map((btn) => (
    <li key={btn.id} id={btn.id} className="btn-container">
      <a href={btn.path} target="_blank" rel="noreferrer">
        {btn.name}
      </a>
    </li>
  ));

  return <ul>{btns}</ul>;
};

export default Button;
