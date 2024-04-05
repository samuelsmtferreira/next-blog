import { gql } from "graphql-request";

export const SETTING_ATTRIBUTES_FRAGMENT = gql`
	fragment SettingAttributes on Setting {
		blogName
		blogDescription
		logo {
			data {
				id
				attributes {
					alternativeText
					url
				}
			}
		}
		menuLink {
			id
			text
			link
			newTab
		}
		text
	}
`;
