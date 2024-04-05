import styled, { css } from "styled-components";
import { HeadingContainer } from "../heading/styles";

export const PostCardContainer = styled.div`
	${({ theme }) => css`
		${HeadingContainer} {
			margin: 0;
			margin-top: calc(${theme.spacings.small} - 0.6rem);
			margin-bottom: ${theme.spacings.small};
		}

		a {
			text-decoration: none;
			color: inherit;
			transition: all 300ms ease-in-out;
		}

		&:hover a {
			color: ${theme.colors.secondary};
		}

		&:hover img {
			opacity: 0.8;
		}
	`}
`;

export const PostCardCover = styled.img`
	max-width: 100%;
	transition: opacity 300ms ease-in-out;
`;

export const PostCardExcerpt = styled.p``;
