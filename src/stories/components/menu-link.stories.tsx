import { Meta, StoryObj } from "@storybook/react";
import { MenuLink } from "../../components/menu-link";
import { theme } from "../../styles/theme";

export default {
	title: "MenuLink",
	component: MenuLink,
} as Meta<typeof MenuLink>;

type Story = StoryObj<typeof MenuLink>;

export const Template: Story = {
	parameters: {
		backgrounds: {
			default: "light",
		},
	},
	args: {
		children: "MenuLink",
		link: "https://www.google.com.br/",
	},
	render: (args) => (
		<div
			style={{
				maxWidth: "320px",
				background: theme.colors.primary,
				padding: theme.spacings.large,
			}}
		>
			<MenuLink {...args} />
			<MenuLink {...args} />
			<MenuLink {...args} />
			<MenuLink {...args} />
		</div>
	),
};
