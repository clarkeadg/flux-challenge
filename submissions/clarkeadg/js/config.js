 
 var Config = {
 	actions: {
 		comments: {
 			'addComment': '',
 			'addReply': ''
 		}
 	},
 	keys: {
 		ENTER_KEY: 13,
		ESCAPE_KEY: 27
 	},
	api: {
		websocket: 'ws://localhost:4000',
		host: 'http://localhost:3000/',
		get: {
			jedis: 'dark-jedis/',
			jedi: 'dark-jedis/{{id}}'			
		}		
	}
};
