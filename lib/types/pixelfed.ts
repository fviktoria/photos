export type PixelfedStatusType = {
  id: string;
  uri: string;
  url: string;
  in_reply_to_id: string | null;
  in_reply_to_account_id: string | null;
  reblog: boolean | null;
  content: string;
  created_at: string;
  emojis: unknown[];
  reblogs_count: number;
  favourites_count: number;
  reblogged: boolean;
  favourited: boolean;
  muted: boolean;
  sensitive: boolean;
  spoiler_text: string;
  visibility: "public" | string;
  application: { name: string; website: unknown | null };
  language: unknown | null;
  mentions: unknown[];
  tags: unknown[];
  poll: unknown | null;
  edited_at: unknown | null;
  account: PixelfedAccountType;
  replies_count: number;
  media_attachments: PixelfedMediaType[];
  bookmarked: boolean;
};

type PixelfedAccountType = {
  id: string;
  username: string;
  acct: string;
  display_name: string;
  discoverable: boolean;
  locked: boolean;
  followers_count: number;
  following_count: number;
  statuses_count: number;
  note: string;
  url: string;
  avatar: string;
  created_at: string;
  avatar_static: string;
  bot: boolean;
  emojis: unknown[];
  fields: unknown[];
  header: boolean;
  header_static: boolean;
  last_status_at: unknown | null;
};

type PixelfedMediaType = {
  id: string;
  type: string | "image";
  url: string;
  remote_url: unknown | null;
  preview_url: string;
  text_url: unknown | null;
  meta: {
    focus: { x: number; y: number };
    original: {
      width: number;
      height: number;
      size: string;
      aspect: number;
    };
  };
  description: unknown | null;
  blurhash: string;
};
