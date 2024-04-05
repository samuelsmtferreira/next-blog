import { defaultQueryOptions, loadPosts } from "@/api/load-posts";
import { LOAD_POSTS } from "@/graphql/queries/load-posts";
import { PostsTemplate } from "@/templates/posts-template";
import { Metadata } from "next";

async function getData() {
	const data = await loadPosts(LOAD_POSTS(defaultQueryOptions));

	return data;
}

export async function generateMetadata(): Promise<Metadata> {
	const data = await getData();

	const settings = data.setting.data.attributes;

	return {
		title: settings.blogName,
		description: settings.blogDescription,
	};
}

export default async function Page() {
	const { setting, posts } = await getData();

	return <PostsTemplate settings={setting} posts={posts} />;
}
