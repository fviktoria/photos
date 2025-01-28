import fs from "fs";
import RSS from "rss";
import { PixelfedStatusType } from "../types/pixelfed";

export default async function generateRssFeed(allPosts: PixelfedStatusType[]) {
  const site_url = "https://photos.viky.at/";

  const feedOptions = {
    title: "photos by @vikal.fe",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  // Add each individual post to the feed.
  allPosts.map((post) => {
    feed.item({
      title: post.content,
      description: post.content,
      url: site_url,
      date: post.created_at,
    });
  });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
