import client from "./sanity";

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  "date": publishedAt,
  "author": author->{name, "image": image.asset->url},
  "coverImage": mainImage.asset->url
`;

export async function getAllBlogs() {
  const results = await client.fetch(`*[_type == "post"]{${blogFields}}`);
  return results;
}
