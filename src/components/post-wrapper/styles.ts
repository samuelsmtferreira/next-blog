import styled, { css, DefaultTheme } from "styled-components";

export type PostWrapperContainerProps = {
	size: "max" | "content";
};

const postContainerStyles = {
	max: (theme: DefaultTheme) => css`
		max-width: ${theme.sizes.max};
	`,
	content: (theme: DefaultTheme) => css`
		max-width: ${theme.sizes.content};
	`,
};

export const PostWrapperContainer = styled.div<PostWrapperContainerProps>`
	${({ theme, size }) => css`
		width: 100%;
		margin: 0 auto;
		padding: 0 ${theme.spacings.large};
		${postContainerStyles[size](theme)}
	`}
`;
