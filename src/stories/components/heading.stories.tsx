import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "../../components/heading";

export default {
	title: "Heading",
	component: Heading,
} as Meta<typeof Heading>;

type Story = StoryObj<typeof Heading>;

export const Light: Story = {
	parameters: {
		backgrounds: {
			default: "light",
		},
	},
	args: {
		children: "O texto está escuro",
		colorDark: true,
	},
	render: (args) => <Heading {...args} />,
};

export const Dark: Story = {
	parameters: {
		backgrounds: {
			default: "dark",
		},
	},
	args: {
		children: "O texto está claro",
		colorDark: false,
	},
	render: (args) => <Heading {...args} />,
};
