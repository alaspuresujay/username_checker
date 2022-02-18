import React from "react";
import styles from "../../styles/Card.module.css";
import { IconType } from "react-icons";
import Image from "next/image";

interface CardProps {
  label: string;
  LogoImage?: IconType;
  url: string;
  name: string;
  avatar_url: string;
  bio: string;
}

const Card = (data: CardProps) => {
  // console.log(data);
  return (
    <a href={data.url} className={styles.card}>
      <div className={styles.header}>
        {/* <Image src={FBLogo} alt="Facebook logo" width={50} height={50} /> */}
        <data.LogoImage className={styles.logo} size={30} />
        {/* {LogoImage} */}
        <h2>{data.label} &rarr;</h2>
      </div>
      <div className={styles.details}>
        {data.avatar_url && (
          <div className={styles.avatar}>
            <Image
              src={data.avatar_url}
              alt={data.name}
              width={50}
              height={50}
            />
          </div>
        )}
        <h3 className={styles.userFullName}>{data.name}</h3>
      </div>
      <p>
        {(data.bio && data?.bio.slice(0, 80)) + "..." ||
          "Learn about Next.js in an interactive course with quizzes!"}
      </p>
    </a>
  );
};

export default Card;
