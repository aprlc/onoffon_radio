export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/PPNeueMachina-Light.otf","fonts/PPNeueMachina-Regular.otf","fonts/PPNeueMachina-Ultrabold.otf","fonts/Toren-Mono.otf","fonts/Toren-Proportional.otf","radio_manual.pdf","robots.txt"]),
	mimeTypes: {".png":"image/png",".otf":"font/otf",".pdf":"application/pdf",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.43de6e0b.js","app":"_app/immutable/entry/app.df9742f4.js","imports":["_app/immutable/entry/start.43de6e0b.js","_app/immutable/chunks/index.f8b2907f.js","_app/immutable/chunks/singletons.71592ceb.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.df9742f4.js","_app/immutable/chunks/index.f8b2907f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/manual",
				pattern: /^\/manual\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/sitemap.xml/_server.js')
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
