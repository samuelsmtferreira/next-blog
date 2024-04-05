import { Meta, StoryObj } from "@storybook/react";
import { Post } from "../../components/post";
import { postContentMock } from "../../mock/post-content-mock";

export default {
	title: "Post",
	component: Post,
} as Meta<typeof Post>;

type Story = StoryObj<typeof Post>;

export const Template: Story = {
	args: postContentMock,
	render: (args) => (
		<div>
			<Post {...args} />
		</div>
	),
};
