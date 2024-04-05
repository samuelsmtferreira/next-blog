import { Meta, StoryObj } from "@storybook/react";
import { PostTags } from "../../components/post-tags";
import { postTagsContentMock } from "../../mock/post-tags-content-mock";

export default {
	title: "PostTags",
	component: PostTags,
} as Meta<typeof PostTags>;

type Story = StoryObj<typeof PostTags>;

export const Template: Story = {
	args: postTagsContentMock,
	parameters: {
		layout: "fullscreen",
	},
	render: (args) => (
		<div style={{ padding: "0 2.4rem" }}>
			<PostTags {...args} />
		</div>
	),
};
