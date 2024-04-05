"use client";
import { Comments } from "@/components/comments";
import { Post } from "../../components/post";
import { PostTags } from "../../components/post-tags";
import { StrapiPost } from "../../types/strapi/strapi-post";
import { StrapiSettings } from "../../types/strapi/strapi-settings";
import { BaseTemplate } from "../base-template";
import { PostTemplateTags } from "./styles";

export type PostTemplateProps = {
	settings: StrapiSettings;
	post: StrapiPost;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
	return (
		<BaseTemplate settings={settings}>
			<Post data={post} />

			<PostTemplateTags>
				<PostTags tags={post.attributes.tags.data} />
			</PostTemplateTags>

			<Comments
				title={post.attributes.title}
				slug={post.attributes.slug}
				id={post.id}
				allowComments={post.attributes.allowComments}
			/>
		</BaseTemplate>
	);
};
