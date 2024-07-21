const p = "modulepreload",
	f = function (r) {
		return "/" + r;
	},
	c = {},
	h = function (l, a, g) {
		let s = Promise.resolve();
		if (a && a.length > 0) {
			document.getElementsByTagName("link");
			const o = document.querySelector("meta[property=csp-nonce]"),
				n = o?.nonce || o?.getAttribute("nonce");
			s = Promise.all(
				a.map((e) => {
					if (((e = f(e)), e in c)) return;
					c[e] = !0;
					const i = e.endsWith(".css"),
						m = i ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${e}"]${m}`)) return;
					const t = document.createElement("link");
					if (
						((t.rel = i ? "stylesheet" : p),
						i || ((t.as = "script"), (t.crossOrigin = "")),
						(t.href = e),
						n && t.setAttribute("nonce", n),
						document.head.appendChild(t),
						i)
					)
						return new Promise((u, d) => {
							t.addEventListener("load", u),
								t.addEventListener("error", () =>
									d(
										new Error(
											`Unable to preload CSS for ${e}`,
										),
									),
								);
						});
				}),
			);
		}
		return s
			.then(() => l())
			.catch((o) => {
				const n = new Event("vite:preloadError", { cancelable: !0 });
				if (
					((n.payload = o),
					window.dispatchEvent(n),
					!n.defaultPrevented)
				)
					throw o;
			});
	};
(
	await h(async () => {
		const { initializeApp: r } = await import("./index.esm.BoasBFnU.js");
		return { initializeApp: r };
	}, [])
).initializeApp({
	apiKey: "AIzaSyDpn058kd0BegNgWJQfu4-Ic3uPcxOo8Ds",
	authDomain: "intakenomnom.firebaseapp.com",
	projectId: "intakenomnom",
	storageBucket: "intakenomnom.appspot.com",
	messagingSenderId: "202279542282",
	appId: "1:202279542282:web:bf1170d8ad82adca2f49f3",
	measurementId: "G-26MC2VW3GM",
});
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.BFx8Coqp.js.map
