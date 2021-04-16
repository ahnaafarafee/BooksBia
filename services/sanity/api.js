import client from "./sanity";

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  "date": publishedAt,
  "coverImage": mainImage.asset->url
`;

export async function getAllBlogs() {
  const results = await client.fetch(`*[_type == "post"]{${blogFields}}`);
  return results;
}
