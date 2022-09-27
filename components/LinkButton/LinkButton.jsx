import React from "react";
import Link from "next/link";
import style from "./LinkButton.module.scss";

function LinkButton({ target, title }) {
  if (!target) {
    return <div className={style.disabledLinkButton}>{title}</div>;
  }

  return (
    <Link href={target}>
      <a className={style.linkButton}>{title}</a>
    </Link>
  );
}

export default LinkButton;
