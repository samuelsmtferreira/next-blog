"use client";
import { HeadingContainer } from "./styles";

export interface HeadingProps {
	children: React.ReactElement | string;
	colorDark?: boolean;
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	size?: "small" | "medium" | "big" | "huge";
	isUppercase?: boolean;
}

export const Heading = ({
	children,
	colorDark = true,
	as = "h1",
	size = "huge",
	isUppercase = false,
}: HeadingProps) => {
	return (
		<HeadingContainer
			$colorDark={colorDark}
			as={as}
			size={size}
			$isUppercase={isUppercase}
		>
			{children}
		</HeadingContainer>
	);
};
