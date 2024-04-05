import { loadPost } from "@/api/load-post";
import { PostTemplate } from "@/templates/post-template";
import { Metadata } from "next";

type PageProps = {
	params: { slug: string };
};

async function getData(slug: string) {
	const data = await loadPost(slug);

	return data;
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { settings, post } = await getData(params.slug);

	return {
		title: post.attributes.title,
		description: post.attributes.excerpt,
	};
}

export default async function Page({ params }: PageProps) {
	const { settings, post } = await getData(params.slug);

	return <PostTemplate post={post} settings={settings} />;
}
