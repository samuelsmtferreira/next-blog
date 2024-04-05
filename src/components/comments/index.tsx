import * as Styled from "./styles";
import { DiscussionEmbed } from "disqus-react";
import { config } from "@/config";

export type CommentsProps = {
	id: string;
	slug: string;
	title: string;
	allowComments: boolean;
};

export const Comments = ({ id, slug, title, allowComments }: CommentsProps) => {
	if (!allowComments) return null;

	const commentsConfig = {
		url: `${config.url}/post/${slug}`,
		identifier: id,
		title: title,
		language: "pt_BR",
	};

	return (
		<Styled.Wrapper>
			<DiscussionEmbed
				shortname="samuel-next-blog"
				config={commentsConfig}
			/>
		</Styled.Wrapper>
	);
};
