import { error } from '@sveltejs/kit';

export function load() {
	// const postsModules = import.meta.glob('./manual.md', { eager: true });
	const postsModules = import.meta.glob('../../README.md', { eager: true });
    
	let posts = Object.values(postsModules)[0];
    
	// Filtering for current post item

	if (!posts) {
		throw error(404, 'This page does not exist');
	} else {
		return {
			posts
		};
	}
}