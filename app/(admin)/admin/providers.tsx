"use client";

import { AdminContextProvider } from "@/lib/providers/admin-provider";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { FC, PropsWithChildren } from "react";

type ProvidersProps = {
  session: Session | null;
};

export const Providers: FC<PropsWithChildren<ProvidersProps>> = ({
  session,
  children,
}) => {
  return (
    <SessionProvider session={session}>
      <AdminContextProvider>{children}</AdminContextProvider>
    </SessionProvider>
  );
};
