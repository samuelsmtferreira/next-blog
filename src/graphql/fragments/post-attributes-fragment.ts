import { gql } from "graphql-request";

export const POST_ATTRIBUTES_FRAGMENT = gql`
	fragment PostAttributes on Post {
		slug
		content
		title
		excerpt
		cover {
			data {
				id
				attributes {
					alternativeText
					url
				}
			}
		}
		categories {
			data {
				id
				attributes {
					displayName
					slug
				}
			}
		}
		tags {
			data {
				id
				attributes {
					displayName
					slug
				}
			}
		}
		author {
			data {
				id
				attributes {
					displayName
					slug
				}
			}
		}
		allowComments
		createdAt
	}
`;
