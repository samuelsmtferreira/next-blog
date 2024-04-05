"use client";
import { StrapiPost } from "@/types/strapi/strapi-post";
import { PostCard } from "../post-card";
import { Grid, NotFound, PostsGridContainer } from "./styles";

export type PostsGridProps = {
	posts: StrapiPost[];
};

export const PostsGrid = ({ posts }: PostsGridProps) => {
	return (
		<PostsGridContainer>
			{posts.length === 0 && (
				<NotFound>Nenhum post encontrado aqui =(</NotFound>
			)}

			<Grid>
				{posts.length > 0 &&
					posts.map((post) => (
						<PostCard
							key={`post-card-${post.id}`}
							{...post.attributes}
						/>
					))}
			</Grid>
		</PostsGridContainer>
	);
};
