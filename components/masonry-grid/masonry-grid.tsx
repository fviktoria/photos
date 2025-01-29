"use client";

import { FC, PropsWithChildren } from "react";

import { useMasonry } from "@/lib/hooks/use-masonry";

type MasonryGridProps = PropsWithChildren;

export const MasonryGrid: FC<PropsWithChildren<MasonryGridProps>> = ({
  children,
}) => {
  const ref = useMasonry();
  return (
    <div
      ref={ref}
      className="grid items-start gap-4 sm:grid-cols-2 md:grid-cols-3"
    >
      {children}
    </div>
  );
};
