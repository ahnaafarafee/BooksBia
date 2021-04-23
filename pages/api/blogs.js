import { getAllBlogs } from "../../services/sanity/api";

export default async function getBlogs(req, res) {
  const data = await getAllBlogs();
  res.status(200).json(data);
}
