import { PixelfedStatusType } from "@/lib/types/pixelfed";
import { FC } from "react";
import { getImageSizes } from "@/lib/util/image-sizes";
import { Image } from "@/components/image/image";

import styles from "./pixelfed-media.module.css";

type PixelfedMediaProps = {
  media: PixelfedStatusType["media_attachments"][number];
  caption?: string;
};

export const PixelfedMedia: FC<PixelfedMediaProps> = ({ media, caption }) => {
  return (
    <div>
      <div className={styles.mediaWrapper}>
        <Image
          key={media.id}
          src={media.url}
          alt={""}
          width={media.meta.original.width}
          height={media.meta.original.height}
          sizes={getImageSizes({
            sm: "100vw",
            md: "50vw",
            fallback: "33vw",
          })}
        />
        <div className={styles.mediaCaption}>{caption}</div>
      </div>
    </div>
  );
};
