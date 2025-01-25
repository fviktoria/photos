import type { FC, PropsWithChildren } from "react";

import styles from "./container.module.css";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className={`${styles.container} p-4`}>{children}</div>;
};
