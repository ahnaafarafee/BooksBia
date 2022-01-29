import client from "./sanity";

import imageUrlBuilder from "@sanity/image-url";

const blogFields = `
  title,
  subtitle,
  minutes,
  'slug': slug.current,
  "date": publishedAt,
  "author": author->{name, "image": image.asset->url},
  "coverImage": mainImage,
`;

const categoryFields = `
  title,
  description,
  slug
`;

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getAllCategories() {
  const results = await client.fetch(
    `*[_type == "category"] | {${categoryFields}}`
  );
  return results;
}

export async function getBlogsByCat(slug) {
  const result = await client.fetch(
    `
      *["${slug}" in categories[]->title] | order(_createdAt desc) {
        "categories": categories[]->title,
          title,
         'slug': slug.current,
          "author": author->{name, "image": image.asset->url},
          subtitle,
          "date": publishedAt,
        "coverImage": mainImage,
        }
      `
  );

  return result;
}

export async function getAllBlogs() {
  const results = await client.fetch(
    `*[_type == "post"] | order(_createdAt desc) {${blogFields}}`
  );
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
