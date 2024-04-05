import { defaultQueryOptions, loadPosts } from "@/api/load-posts";
import { LOAD_POSTS } from "@/graphql/queries/load-posts";
import { LOAD_POSTS_BY_TITLE } from "@/graphql/queries/load-posts-by-title";
import { PostsTemplate } from "@/templates/posts-template";
import { Metadata } from "next";

type PageProps = {
	searchParams: { q: string };
};

async function getData(searchParam: string) {
	const data = await loadPosts(
		LOAD_POSTS_BY_TITLE(searchParam, defaultQueryOptions)
	);

	return data;
}

export async function generateMetadata({
	searchParams,
}: PageProps): Promise<Metadata> {
	const data = await getData(searchParams.q);

	const settings = data.setting.data.attributes;

	return {
		title: `Pesquisa: ${searchParams.q} - ${settings.blogName}`,
		description: settings.blogDescription,
	};
}

export default async function Page({ searchParams }: PageProps) {
	const { setting, posts } = await getData(searchParams.q);

	return (
		<PostsTemplate
			settings={setting}
			posts={posts}
			options={{ filter_by: "title", slug: searchParams.q }}
		/>
	);
}
