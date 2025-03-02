import { createClient } from "next-sanity";
// In a separate file like lib/sanity.ts
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';



export const client = createClient({
  projectId: "2uuemyfh",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});


// Create an image URL builder instance

const { projectId, dataset } = client.config();
export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;