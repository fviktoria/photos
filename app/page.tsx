import { Container } from "@/components/container/container";
import { Image } from "@/components/image/image";
import { pixelfedClient } from "@/lib/api/pixelfed/pixelfed-client";
import { getImageSizes } from "@/lib/util/image-sizes";
import { notFound } from "next/navigation";

export default async function Home() {
  const data = await pixelfedClient.getStatuses();

  if (!data) notFound();

  return (
    <Container>
      <div className="grid grid-cols-3 gap-4">
        {data.map((item) =>
          item.media_attachments.map((media) => (
            <Image
              key={media.id}
              src={media.url}
              alt={""}
              width={media.meta.original.width}
              height={media.meta.original.height}
              sizes={getImageSizes({ md: "33vw", fallback: "33vw" })}
            />
          ))
        )}
      </div>
    </Container>
  );
}
