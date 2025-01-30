import { Container } from "@/components/container/container";
import { MasonryGrid } from "@/components/masonry-grid/masonry-grid";
import { PixelfedMedia } from "@/components/pixelfed-media/pixelfed-media";
import { pixelfedClient } from "@/lib/api/pixelfed/pixelfed-client";
import generateRssFeed from "@/lib/util/rss";
import { notFound } from "next/navigation";

export default async function Home() {
  const data = await pixelfedClient.getStatuses();
  generateRssFeed(data);

  if (!data) notFound();

  return (
    <Container>
      <MasonryGrid>
        {data.map((item) =>
          item.media_attachments.map((media) => (
            <PixelfedMedia
              key={media.id}
              media={media}
              caption={item.content}
            />
          ))
        )}
      </MasonryGrid>
    </Container>
  );
}
