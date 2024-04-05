import { ArticleHeaderProps } from "../components/article-header";
import { data } from "./data.json";

const { title, excerpt, cover, author, categories, createdAt } = data.posts[0];

export const articleHeaderContentMock = {
	title,
	excerpt,
	cover,
	author,
	categories,
	createdAt,
} as ArticleHeaderProps;
