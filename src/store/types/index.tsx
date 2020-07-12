export type NewsLetter = "daily" | "weekly" | "monthly";

export interface RegisterStoreState {
  name: string;
  age: number;
  email: string;
  newsletter: NewsLetter;
}
