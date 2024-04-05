import styled, { css } from "styled-components";

export const BaseTemplateContainer = styled.div``;

export const BaseTemplateHeader = styled.div`
	${({ theme }) => css`
		margin-top: ${theme.spacings.xhuge};
		padding: 0 ${theme.spacings.large};
	`}
`;

export const BaseTemplateSearchContainer = styled.div`
	${({ theme }) => css`
		margin: 0 auto;
		margin-bottom: ${theme.spacings.xlarge};
		padding: 0 ${theme.spacings.large};
		max-width: 120rem;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	`}
`;

export const SearchInput = styled.input`
	${({ theme }) => css`
		padding: 0.5rem ${theme.spacings.small};
	`}
`;

export const BaseTemplateContent = styled.div`
	${({ theme }) => css`
		max-width: 120rem;
		width: 100%;
		margin: 0 auto;
		margin-bottom: ${theme.spacings.large};
	`}
`;

export const BaseTemplateFooter = styled.div`
	${({ theme }) => css`
		max-width: 120rem;
		width: 100%;
		margin: 0 auto;
		padding: ${theme.spacings.large};
	`}
`;
