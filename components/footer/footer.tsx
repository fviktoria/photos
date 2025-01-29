"use client";

import { FC } from "react";
import { Container } from "../container/container";
import { Links } from "../links/links";

export const Footer: FC = () => {
  return (
    <Container>
      <footer>
        <Links />
      </footer>
    </Container>
  );
};
