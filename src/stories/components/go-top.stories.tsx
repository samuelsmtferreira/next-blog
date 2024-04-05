import { Meta, StoryObj } from "@storybook/react";
import { GoTop } from "../../components/go-top";

export default {
	title: "GoTop",
	component: GoTop,
} as Meta<typeof GoTop>;

type Story = StoryObj<typeof GoTop>;

export const Template: Story = {
	render: () => (
		<div style={{ height: "400vh" }}>
			<h1>Lorem ipsum dolor sit, amet</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
				doloremque qui eum maxime magni omnis sit, aliquam soluta
				distinctio nam dignissimos praesentium ut sunt porro incidunt
				molestias libero ab consectetur.
			</p>
			<h1>Lorem ipsum dolor sit, amet</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
				doloremque qui eum maxime magni omnis sit, aliquam soluta
				distinctio nam dignissimos praesentium ut sunt porro incidunt
				molestias libero ab consectetur.
			</p>
			<h1>Lorem ipsum dolor sit, amet</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
				doloremque qui eum maxime magni omnis sit, aliquam soluta
				distinctio nam dignissimos praesentium ut sunt porro incidunt
				molestias libero ab consectetur.
			</p>
			<h1>Lorem ipsum dolor sit, amet</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
				doloremque qui eum maxime magni omnis sit, aliquam soluta
				distinctio nam dignissimos praesentium ut sunt porro incidunt
				molestias libero ab consectetur.
			</p>
			<h1>Lorem ipsum dolor sit, amet</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
				doloremque qui eum maxime magni omnis sit, aliquam soluta
				distinctio nam dignissimos praesentium ut sunt porro incidunt
				molestias libero ab consectetur.
			</p>
			<h1>Lorem ipsum dolor sit, amet</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
				doloremque qui eum maxime magni omnis sit, aliquam soluta
				distinctio nam dignissimos praesentium ut sunt porro incidunt
				molestias libero ab consectetur.
			</p>
			<h1>Lorem ipsum dolor sit, amet</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
				doloremque qui eum maxime magni omnis sit, aliquam soluta
				distinctio nam dignissimos praesentium ut sunt porro incidunt
				molestias libero ab consectetur.
			</p>
			<GoTop />
		</div>
	),
};
