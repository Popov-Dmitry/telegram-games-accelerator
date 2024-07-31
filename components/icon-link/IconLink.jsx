import styles from "./icon-link.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";


const IconLink = ({ href, text, size = "sm", icon }) => {
  return (
    <Link href={href} className={size === "sm" ? styles.small : styles.large}>
      <div>{text}</div>
      <Image
        src={icon}
        alt=""
        height={size === "sm" ? 16 : 44}
        width={size === "sm" ? 16 : 44}
      />
    </Link>
  );
};

export default IconLink;