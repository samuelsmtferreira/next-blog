import { Meta, StoryObj } from "@storybook/react";
import { LogoLink } from "../../components/logo-link";
import srcImg from "../../assets/otavio-miranda.png";

export default {
	title: "LogoLink",
	component: LogoLink,
} as Meta<typeof LogoLink>;

type Story = StoryObj<typeof LogoLink>;

export const ImageOnly: Story = {
	args: {
		text: "LogoLink",
		srcImg: srcImg.src,
		link: "http://localhost",
		newTab: false,
	},
	render: (args) => (
		<div>
			<LogoLink {...args} />
		</div>
	),
};

export const TextOnly: Story = {
	args: {
		text: "LogoLink",
		link: "http://localhost",
		newTab: false,
	},
	render: (args) => (
		<div>
			<LogoLink {...args} />
		</div>
	),
};
