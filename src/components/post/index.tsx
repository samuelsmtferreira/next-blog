"use client";
import { StrapiPost } from "@/types/strapi/strapi-post";
import { ArticleHeader } from "../article-header";
import { HtmlComponent } from "../html-component";
import { PostWrapper } from "../post-wrapper";
import { PostContainer } from "./styles";

type PostProps = {
	data: StrapiPost;
};

export const Post = ({ data }: PostProps) => {
	const { attributes } = data;

	return (
		<PostContainer>
			<PostWrapper size="max">
				<ArticleHeader
					author={attributes.author.data}
					categories={attributes.categories.data}
					title={attributes.title}
					excerpt={attributes.excerpt}
					cover={attributes.cover}
					createdAt={attributes.createdAt}
				/>
			</PostWrapper>

			<PostWrapper size="content">
				<HtmlComponent html={attributes.content} />
			</PostWrapper>
		</PostContainer>
	);
};
