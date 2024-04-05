import { defaultQueryOptions, loadPosts } from "@/api/load-posts";
import { LOAD_POSTS_BY_CATEGORY } from "@/graphql/queries/load-posts-by-category";
import { PostsTemplate } from "@/templates/posts-template";
import { Metadata } from "next";

type PageProps = {
	params: { slug: string };
};

async function getData(category: string) {
	const data = await loadPosts(
		LOAD_POSTS_BY_CATEGORY(category, defaultQueryOptions)
	);

	return data;
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const data = await getData(params.slug);

	const settings = data.setting.data.attributes;

	return {
		title: settings.blogName,
		description: settings.blogDescription,
	};
}

export default async function Page({ params }: PageProps) {
	const { setting, posts } = await getData(params.slug);

	return (
		<PostsTemplate
			settings={setting}
			posts={posts}
			options={{
				filter_by: "category",
				slug: params.slug,
			}}
		/>
	);
}
