import { Container } from "@/components/container/container";
import "../../globals.css";
import { Providers } from "./providers";
import { getServerSession } from "next-auth";

export default async function Admin() {
  const session = await getServerSession();
  return (
    <Providers session={session}>
      <Container>Admin area</Container>
    </Providers>
  );
}
