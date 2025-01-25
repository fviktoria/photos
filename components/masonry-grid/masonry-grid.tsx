"use client";

import { ComponentProps, FC, PropsWithChildren } from "react";
import { Masonry } from "react-masonry";

import styles from "./masonry-grid.module.css";

type MasonryGridProps = ComponentProps<typeof Masonry>;

export const MasonryGrid: FC<PropsWithChildren<MasonryGridProps>> = ({
  children,
}) => {
  return (
    <div className={styles.wrapper}>
      <Masonry>{children}</Masonry>
    </div>
  );
};
