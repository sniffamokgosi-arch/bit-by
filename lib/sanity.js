import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  useCdn: process.env.NODE_ENV === 'production'
}
export const sanityClient = createClient(sanityConfig);
const builder = imageUrlBuilder(sanityClient);
export const urlFor = (src) => builder.image(src);
