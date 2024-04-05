import Link from "next/link";
import { Heading } from "../heading";
import { PostCardContainer, PostCardCover, PostCardExcerpt } from "./styles";
import { StrapiImage } from "@/types/strapi/strapi-image";

export type PostCardProps = {
	title: string;
	cover: StrapiImage;
	excerpt: string;
	slug: string;
};

export const PostCard = ({ title, cover, excerpt, slug }: PostCardProps) => {
	return (
		<PostCardContainer>
			<Link href={`/post/${slug}`}>
				<PostCardCover src={cover.data.attributes.url} alt={title} />
			</Link>

			<Heading as="h2" size="small">
				<Link href={`/post/${slug}`}>{title}</Link>
			</Heading>

			<PostCardExcerpt>{excerpt}</PostCardExcerpt>
		</PostCardContainer>
	);
};
