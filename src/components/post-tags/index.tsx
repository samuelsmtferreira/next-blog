"use client";
import Link from "next/link";
import { PostTagsContainer } from "../post-tags/styles";
import { StrapiMetadata } from "@/types/strapi/strapi-tags";

export type PostTagsProps = {
	tags?: StrapiMetadata[];
};

export const PostTags = ({ tags = [] }: PostTagsProps) => {
	if (tags.length === 0) {
		return null;
	}

	return (
		<PostTagsContainer>
			tags:
			{tags.map((tag) => {
				return (
					<span key={tag.id}>
						<Link href={`/tag/${tag.attributes.slug}`}>
							{tag.attributes.displayName}
						</Link>
					</span>
				);
			})}
		</PostTagsContainer>
	);
};
