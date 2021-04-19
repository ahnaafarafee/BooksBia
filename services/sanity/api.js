import client from "./sanity";

import imageUrlBuilder from "@sanity/image-url";

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  "date": publishedAt,
  "author": author->{name, "image": image.asset->url},
  "coverImage": mainImage.asset->url,
`;

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getAllBlogs() {
  const results = await client.fetch(`*[_type == "post"]{${blogFields}}`);
  return results;
}

export async function getBlogBySlug(slug) {
  const result = await client
    .fetch(
      `*[_type == "post" && slug.current == $slug] {
      ${blogFields}
      body[]{..., "asset": asset->}
    }`,
      { slug }
    )
    .then((res) => res?.[0]);

  return result;
}
