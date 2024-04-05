import { gql } from "graphql-request";
import { SETTING_ATTRIBUTES_FRAGMENT } from "../fragments/setting-attributes-fragement";
import { POST_ATTRIBUTES_FRAGMENT } from "../fragments/post-attributes-fragment";
import { QueryOptions } from "../query-options";

export const LOAD_POSTS = (options: QueryOptions) => {
	return gql`
		${SETTING_ATTRIBUTES_FRAGMENT}
		${POST_ATTRIBUTES_FRAGMENT}
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
