"use client";
import { StrapiSettings } from "../../types/strapi/strapi-settings";
import { BaseTemplate } from "../base-template";
import { PostsGrid } from "../../components/posts-grid";
import { StrapiPosts } from "@/types/strapi/strapi-posts";
import { Button, ButtonContainer } from "./styles";
import { useEffect, useState } from "react";
import { defaultQueryOptions, loadPosts } from "@/api/load-posts";
import { LOAD_POSTS } from "@/graphql/queries/load-posts";
import { LOAD_POSTS_BY_AUTHOR } from "@/graphql/queries/load-posts-by-author";
import { LOAD_POSTS_BY_CATEGORY } from "@/graphql/queries/load-posts-by-category";
import { LOAD_POSTS_BY_TAG } from "@/graphql/queries/load-posts-by-tag";
import { LOAD_POSTS_BY_TITLE } from "@/graphql/queries/load-posts-by-title";

export type PostsTemplateProps = {
	settings: StrapiSettings;
	posts: StrapiPosts;
	options?: {
		filter_by: "author" | "category" | "tag" | "title";
		slug: string;
	};
};

export const PostsTemplate = ({
	settings,
	posts,
	options,
}: PostsTemplateProps) => {
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [noMorePosts, setNoMorePosts] = useState(false);
	const [statePosts, setStatePosts] = useState(posts.data);
	const [offset, setOffset] = useState(defaultQueryOptions.offset);

	const handleLoadMore = async () => {
		setButtonDisabled(true);

		const newOptions = {
			...defaultQueryOptions,
			offset: offset + 1,
		};

		let newPosts = [];
		if (options?.filter_by === "author") {
			const query = LOAD_POSTS_BY_AUTHOR(options.slug, newOptions);
			newPosts = (await loadPosts(query)).posts.data;
		} else if (options?.filter_by === "category") {
			const query = LOAD_POSTS_BY_CATEGORY(options.slug, newOptions);
			newPosts = (await loadPosts(query)).posts.data;
		} else if (options?.filter_by === "tag") {
			const query = LOAD_POSTS_BY_TAG(options.slug, newOptions);
			newPosts = (await loadPosts(query)).posts.data;
		} else if (options?.filter_by === "title") {
			const query = LOAD_POSTS_BY_TITLE(options.slug, newOptions);
			newPosts = (await loadPosts(query)).posts.data;
		} else {
			const query = LOAD_POSTS(newOptions);
			newPosts = (await loadPosts(query)).posts.data;
		}

		setOffset(offset + 1);

		setStatePosts([...statePosts, ...newPosts]);

		if (newPosts.length < defaultQueryOptions.limit) {
			setButtonDisabled(true);
			setNoMorePosts(true);

			return;
		}

		setButtonDisabled(false);
	};

	return (
		<BaseTemplate settings={settings}>
			<PostsGrid posts={statePosts} />

			{statePosts && statePosts.length ? (
				<ButtonContainer>
					<Button onClick={handleLoadMore} disabled={buttonDisabled}>
						{noMorePosts ? "Sem mais posts" : "Carregar mais"}
					</Button>
				</ButtonContainer>
			) : null}
		</BaseTemplate>
	);
};
