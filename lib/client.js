import SanityClient from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "sbgdtj69",
  dataset: "production",
  apiVersion: "2022-05-29",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
// npm install --save @sanity/image-url

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
