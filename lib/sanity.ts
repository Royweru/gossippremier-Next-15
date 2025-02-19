import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "2uuemyfh",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});