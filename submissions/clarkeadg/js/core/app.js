
var App = (function (Config, Request, Dispatcher, Store) {
	
	var App = blocks.Application({
		history: 'pushState'
	});

	App.config = Config;
	App.request = Request;
	App.dispatcher = Dispatcher;
	App.store = Store;
	App.stores = {};
	App.actions = {};

	return App;	

})(Config, Request, Dispatcher, Store);