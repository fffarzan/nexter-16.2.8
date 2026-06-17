import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { CreatePostData, Post } from '../clientApi/requests/types';
import { createPost, fetchAllPosts, fetchPostById } from '../clientApi/requests/posts';

export const usePosts = () =>
	useQuery<Post[]>({
		queryKey: ['posts'],
		queryFn: fetchAllPosts,
	});

export const usePost = (postId: number) =>
	useQuery<Post>({
		queryKey: ['post', postId],
		queryFn: () => fetchPostById(postId),
		enabled: Boolean(postId),
	});

export const useCreatePost = () => {
	const queryClient = useQueryClient();

	return useMutation<Post, Error, CreatePostData>({
		mutationFn: createPost,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['posts'] });
		},
	});
};
