import axios from 'axios';

// routes all API calls to the BFF layer through the `/api/server` endpoint.
export const api = axios.create({
	baseURL: '/api/server',
});
