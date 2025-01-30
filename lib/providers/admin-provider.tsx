"use client";

import { useSession } from "next-auth/react";
import { createContext, useContext } from "react";

import type { FC, PropsWithChildren } from "react";

export const AdminContext = createContext({});

export const AdminContextProvider: FC<PropsWithChildren> = ({ children }) => {
  //   const value = useMemo(() => ({}), []);

  const session = useSession();

  if (session.status === "authenticated") {
    return <AdminContext.Provider value={{}}>{children}</AdminContext.Provider>;
  }

  return <a href="/api/auth/signin">Sign in</a>;
};

export function usePageContext() {
  const context = useContext(AdminContext);

  if (!context)
    throw new Error(
      "Admin context must be used inside an admin context provider."
    );

  return context;
}
