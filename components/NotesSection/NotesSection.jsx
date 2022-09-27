import React from "react";
import style from "./NotesSection.module.scss";
import LinkButton from "../LinkButton/LinkButton";

function NotesSection() {
  return (
    <div className={style.container}>
      <h2>Notes</h2>
      <p>My thinking about design, development and the way we work.</p>
      <LinkButton target="" title="Coming soon..." />
    </div>
  );
}

export default NotesSection;
