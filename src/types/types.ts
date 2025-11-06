export type Message = {
  id: number;
  type: "user" | "ai";
  content: string;
};

export type MenuKey = "ai" | "download" | "size";

export type PosterState = "locked" | "loading" | "ready";

export type DisplayMode = "poster" | "sns";
