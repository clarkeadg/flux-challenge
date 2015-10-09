
(function (App, Jedis) {

	App.View('Jedis', {
		options: {
			route: blocks.route('/'),
			url: 'templates/jedis.html'
		},

		jedis: Jedis().extend('filter', function (jedi) {
			var include = true;
			return include;
		}).extend('step', function () {
			var pages = blocks.range(1, this.jedis.view().length / this.take());
			this.pages(pages.length ? pages : [1]);
		}).extend('skip', function () {
			return (this.page() - 1) * this.take();
		}).extend('take', function () {
			return this.take();
		}).read(
		),
		
		pages: blocks.observable([]),

		page: blocks.observable(1),

		take: blocks.observable(5),

		world: blocks.observable('Unknown'),

		init: function () {
			var page = this.page;
		},

		resetPage: function () {
			this.page(1);
		},

		pagePlus: function () {
			//console.log('pagePlus');
			if (this.page() < this.pages().length) {
				this.page(this.page() + 1);
			}
		},

		pageMinus: function () {
			//console.log('pageMinus');
			if (this.page() > 1) {
				this.page(this.page() - 1);
			}
		},

		setPage: function(e, page) {
			this.page(page);
		}
	});	

})(App, Jedis);