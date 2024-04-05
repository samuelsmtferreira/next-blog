import { request } from "graphql-request";
import { StrapiSettings } from "../types/strapi/strapi-settings";
import { config } from "../config";
import { StrapiPosts } from "@/types/strapi/strapi-posts";
import { QueryOptions } from "@/graphql/query-options";

export type StrapiPostsAndSettings = {
	setting: StrapiSettings;
	posts: StrapiPosts;
};

export const defaultQueryOptions: QueryOptions = { limit: 3, offset: 0 };

export const loadPosts = async (
	query: string
): Promise<StrapiPostsAndSettings> => {
	const data = await request<StrapiPostsAndSettings>(
		config.graphqlURL,
		query
	);

	return data;
};
