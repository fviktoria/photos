import type { FC } from "react";

import styles from "./header.module.css";
import { Container } from "../container/container";
import { Links } from "../links/links";

export const Header: FC = () => {
  return (
    <Container>
      <header className="flex pt-4 pb-8 justify-between items-center">
        <h1 className={styles.heading}>photos by @vikal.fe</h1>
        <div className="hidden md:block">
          <Links />
        </div>
      </header>
    </Container>
  );
};
