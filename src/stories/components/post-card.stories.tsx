import { Meta, StoryObj } from "@storybook/react";
import { PostCard } from "../../components/post-card";
import { postCardContentMock } from "../../mock/post-card-content-mock";

export default {
	title: "PostCard",
	component: PostCard,
} as Meta<typeof PostCard>;

type Story = StoryObj<typeof PostCard>;

export const Template: Story = {
	args: postCardContentMock,
	render: (args) => (
		<div style={{ maxWidth: "32rem" }}>
			<PostCard {...args} />
		</div>
	),
};
