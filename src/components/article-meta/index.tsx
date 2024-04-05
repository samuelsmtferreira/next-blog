"use client";
import Link from "next/link";
import { StrapiMetadata } from "@/types/strapi/strapi-tags";
import { formatDate } from "../../utils/format-date";
import { ArticleMetaContainer } from "./styles";

export type ArticleMetaProps = {
	createdAt: string;
	author?: StrapiMetadata;
	categories?: StrapiMetadata[];
};

export const ArticleMeta = ({
	createdAt,
	author = undefined,
	categories = [],
}: ArticleMetaProps) => {
	return (
		<ArticleMetaContainer>
			<p>
				{author && (
					<>
						<span>Por </span>
						<Link href={`/author/${author.attributes.slug}`}>
							{author.attributes.displayName}
						</Link>
						<span className="separator"> | </span>
					</>
				)}

				<time dateTime={createdAt}>{formatDate(createdAt)}</time>

				{categories.length > 0 && (
					<>
						<span className="separator"> | </span>
						<span className="categories">
							{categories.map((category) => {
								return (
									<span
										key={`article-meta-cat-${category.id}`}
									>
										<Link
											href={`/category/${category.attributes.slug}`}
										>
											{category.attributes.displayName}
										</Link>
									</span>
								);
							})}
						</span>
					</>
				)}
			</p>
		</ArticleMetaContainer>
	);
};
