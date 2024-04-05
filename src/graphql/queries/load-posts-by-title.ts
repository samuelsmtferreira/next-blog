import { gql } from "graphql-request";
import { POST_ATTRIBUTES_FRAGMENT } from "../fragments/post-attributes-fragment";
import { SETTING_ATTRIBUTES_FRAGMENT } from "../fragments/setting-attributes-fragement";
import { QueryOptions } from "../query-options";

export const LOAD_POSTS_BY_TITLE = (title: string, options: QueryOptions) => {
	return gql`
		${POST_ATTRIBUTES_FRAGMENT}
		${SETTING_ATTRIBUTES_FRAGMENT}
		query {
			setting {
				data {
					id
					attributes {
						...SettingAttributes
					}
				}
			}

			posts(
				pagination: {
					start: ${options.offset * options.limit}
					limit: ${options.limit}
				}

				filters: {
					title: {
						containsi: "${title}"
					}
				}
			) {
				data {
					id
					attributes {
						...PostAttributes
					}
				}
			}
		}
	`;
};
