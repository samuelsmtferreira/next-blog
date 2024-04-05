"use client";
import { StrapiImage } from "@/types/strapi/strapi-image";
import { ArticleMeta, ArticleMetaProps } from "../article-meta";
import { Heading } from "../heading";
import { ArticleHeaderContainer, Excerpt, Cover } from "./styles";

export type ArticleHeaderProps = {
	title: string;
	excerpt: string;
	cover: StrapiImage;
} & ArticleMetaProps;

export const ArticleHeader = ({
	title,
	excerpt,
	cover,
	author,
	categories,
	createdAt,
}: ArticleHeaderProps) => {
	return (
		<ArticleHeaderContainer>
			<Heading size="huge">{title}</Heading>
			<Excerpt>{excerpt}</Excerpt>
			<Cover src={cover.data.attributes.url} alt={title} />
			<ArticleMeta
				categories={categories}
				author={author}
				createdAt={createdAt}
			/>
		</ArticleHeaderContainer>
	);
};
