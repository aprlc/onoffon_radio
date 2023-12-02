export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/PPNeueMachina-Light.otf","fonts/PPNeueMachina-Regular.otf","fonts/PPNeueMachina-Ultrabold.otf","fonts/Toren-Mono.otf","fonts/Toren-Proportional.otf","manual_images/2023-11-15.md","manual_images/Capture-2023-11-24-175259.png","manual_images/Screenshot 2023-11-13 at 10.00.51 PM.png","manual_images/Screenshot 2023-11-20 at 4.00.33 PM.png","manual_images/Screenshot 2023-11-24 at 1.31.41 PM.png","manual_images/Screenshot 2023-11-24 at 1.32.30 PM.png","manual_images/Screenshot 2023-11-24 at 2.00.41 PM.png","manual_images/Screenshot 2023-11-24 at 2.02.18 PM.png","manual_images/Screenshot 2023-11-24 at 2.05.43 PM.png","manual_images/Screenshot 2023-11-24 at 5.46.19 PM.png","manual_images/Screenshot 2023-11-24 at 5.47.59 PM 1.png","manual_images/Screenshot 2023-11-24 at 5.47.59 PM.png","manual_images/Screenshot 2023-11-24 at 6.10.26 PM.png","manual_images/Screenshot 2023-11-25 at 2.31.16 AM.png","manual_images/Screenshot 2023-11-25 at 2.40.06 AM.png","manual_images/^1.md","radio_manual.pdf","robots.txt"]),
	mimeTypes: {".png":"image/png",".otf":"font/otf",".md":"text/markdown",".pdf":"application/pdf",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.dd013378.js","app":"_app/immutable/entry/app.9cab3ea5.js","imports":["_app/immutable/entry/start.dd013378.js","_app/immutable/chunks/index.e1371e31.js","_app/immutable/chunks/singletons.35da534c.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.9cab3ea5.js","_app/immutable/chunks/index.e1371e31.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/manual",
				pattern: /^\/manual\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
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
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
