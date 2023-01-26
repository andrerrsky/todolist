export type Item = {
  type: string;
};

export type Post = {
  _id: string;
  title: string;
  content: string;
  active: boolean;
  imageLink: string | undefined;
};

export type Tale = {
  _id: string;
  title: string;
  content: string;
  active: boolean;
  category: string;
};

export type FAQ = {
  _id: string;
  title: string;
  content: string;
  active: boolean;
};

export type EBookAttributes = {
  readTime: string;
};

export type EBook = {
  _id: string;
  title: string;
  link: string | undefined;
  active: boolean;
  imageLink: string | undefined;
  attributes: Array<EBookAttributes>;
  restrictedPayment: boolean;
};

export enum AnamneseItemTypes {
  TEXT_FEEDBACK = "text_feedback",
  SELECT_ONE = "select_one",
  FACES = "faces",
  SELECT_MULTIPLE = "select_multiple",
  TEXT_FREE = "text_free",
  NUMBER = "number",
}

export type AnamneseItemEmotions = {
  title: string;
  value: number;
  key: "angry" | "sad" | "neutral" | "happy" | "excited";
};

export type AnamneseItem = {
  _id: string;
  title?: string;
  text?: string;
  type:
    | "text_feedback"
    | "select_one"
    | "faces"
    | "select_multiple"
    | "text_free"
    | "number";
  values?: Array<string>;
  emotions?: Array<AnamneseItemEmotions>;
  order: number;
};

export enum TrainningItemTypes {
  CLASS = "class",
  EXERCISE = "exercise",
}

export type TrainningStep = {
  _id: string;
  title: string;
  type: "class" | "exercise";
  file: string;
  order: number;
  description?: string;
  content?: string;
  free?: boolean;
};

export type Trainning = {
  _id: string;
  name: string;
  steps: TrainningStep[];
  order: number;
  __v: number;
  createdAt: string;
  updatedAt: string;
};
