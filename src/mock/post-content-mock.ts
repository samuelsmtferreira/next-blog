import { PostProps } from "../components/post";
import { data } from "./data.json";

const { title, excerpt, cover, content, author, categories, createdAt } =
	data.posts[0];

export const postContentMock = {
	title,
	excerpt,
	cover,
	content,
	author,
	categories,
	createdAt,
} as PostProps;
