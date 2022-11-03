import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = () => {
  const btnList = [
    {
      id: "btn__twitter",
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
      name: "Zuri Books - this is where you find books about design and coding",
    },
    {
      id: "book__python",
      path: "https://books.zuri.team/python-for-beginners?ref_id=HiZeek",
      name: "Python Books",
    },
    {
      id: "pitch",
      path: "https://background.zuri.team/",
      name: "Want a Background Check for Coders? Click Now!",
    },
    {
      id: "book__design",
      path: "https://books.zuri.team/design-rules",
      name: "Get a Free Design Book from Zuri",
    },
    {
      id: "contact",
      path: "/contact",
      name: "Contact Me",
    },
  ];

  const btns = btnList.map((btn) => (
    <li key={btn.id} id={btn.id} className="btn-container">
      {btn.id !== "contact" ? (
        <a href={btn.path} target="_blank" rel="noreferrer">
          {btn.name}
        </a>
      ) : (
        <Link to={btn.path}>
          {btn.name}
        </Link>
      )}
    </li>
  ));

  return <ul>{btns}</ul>;
};

export default Button;
