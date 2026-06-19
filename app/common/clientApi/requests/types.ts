export type Post = {
	id: number;
	userId: number;
	title: string;
	body: string;
};

export type CreatePostData = {
	title: string;
	body: string;
	userId: number;
};
