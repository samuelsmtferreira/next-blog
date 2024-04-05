import { StrapiImage } from "./strapi-image";
import { StrapiMetadata } from "./strapi-tags";

export type StrapiPost = {
	id: string;
	attributes: {
		slug: string;
		content: string;
		title: string;
		excerpt: string;
		cover: StrapiImage;
		categories: {
			data: StrapiMetadata[];
		};
		tags: {
			data: StrapiMetadata[];
		};
		author: {
			data: StrapiMetadata;
		};
		allowComments: boolean;
		createdAt: string;
	};
};
