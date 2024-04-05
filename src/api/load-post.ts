import { config } from "@/config";
import { LOAD_POSTS_BY_SLUG } from "@/graphql/queries/load-posts-by-slug";
import { StrapiPost } from "@/types/strapi/strapi-post";
import { StrapiPosts } from "@/types/strapi/strapi-posts";
import { StrapiSettings } from "@/types/strapi/strapi-settings";
import request from "graphql-request";
import { defaultQueryOptions } from "./load-posts";

type StrapiPostAndSettings = {
	setting: StrapiSettings;
	posts: StrapiPosts;
};

type LoadPostResponse = {
	settings: StrapiSettings;
	post: StrapiPost;
};

export const loadPost = async (slug: string): Promise<LoadPostResponse> => {
	const data = await request<StrapiPostAndSettings>(
		config.graphqlURL,
		LOAD_POSTS_BY_SLUG(slug, defaultQueryOptions)
	);

	return {
		settings: data.setting,
		post: data.posts.data[0],
	};
};
