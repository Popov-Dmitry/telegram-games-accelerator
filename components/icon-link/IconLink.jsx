"use client";

import styles from "./icon-link.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useWindowSize } from "@react-hook/window-size";

const IconLink = ({ href, text, size = "sm", icon }) => {
  const [ deviceWidth ] =  useWindowSize();

  return (
    <Link href={href} className={size === "sm" ? styles.small : styles.large}>
      <div>{text}</div>
      <Image
        src={icon}
        alt=""
        height={deviceWidth > 767 ? (size === "sm" ? 16 : 44) : 14}
        width={deviceWidth > 767 ? (size === "sm" ? 16 : 44) : 14}
      />
    </Link>
  );
};

export default IconLink;