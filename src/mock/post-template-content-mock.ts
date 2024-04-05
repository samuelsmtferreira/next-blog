import { PostTemplateProps } from "../templates/post-template";
import { data } from "../mock/data.json";

export const postTemplateContentMock = {
	settings: data.setting,
	post: data.posts[0],
} as PostTemplateProps;
