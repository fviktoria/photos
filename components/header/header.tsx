import type { FC } from "react";

import styles from "./header.module.css";
import { Container } from "../container/container";

export const Header: FC = () => {
  return (
    <Container>
      <header className="flex pt-4 pb-8">
        <h1 className={styles.heading}>photos by @vikal.fe</h1>
      </header>
    </Container>
  );
};
