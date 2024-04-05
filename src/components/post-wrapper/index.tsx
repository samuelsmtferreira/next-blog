"use client";
import { PostWrapperContainer } from "./styles";

export type PostWrapperProps = {
	children: React.ReactNode;
	size: "max" | "content";
};

export const PostWrapper = ({ children, size }: PostWrapperProps) => {
	return <PostWrapperContainer size={size}>{children}</PostWrapperContainer>;
};
