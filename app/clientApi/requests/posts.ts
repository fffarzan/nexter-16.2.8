import { Post } from '@/app/blog/types';
import { api } from '../api';
import { CreatePostData } from './types';

export const fetchAllPosts = async (): Promise<Post[]> => {
	const { data } = await api.get('/posts');
	return data.posts || data;
};

export const fetchPostById = async (postId: number): Promise<Post> => {
	const { data } = await api.get(`/posts/${postId}`);
	return data;
};

export const createPost = async (postData: CreatePostData): Promise<Post> => {
	const { data } = await api.post('/posts/add', postData);
	return data;
};
