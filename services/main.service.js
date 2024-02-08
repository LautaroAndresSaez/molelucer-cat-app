"use strict";



/** @type {import('moleculer').ServiceSchema} */
module.exports = {
	name: 'main',
	actions: {
		create: {
			rest: 'POST /',
			async handler(ctx) {
				return this.broker.call('cats.create', ctx.params)
			}
		},
		find: {
			rest: 'GET /',
			async handler() {
				return this.broker.call('cats.find');
			}
		}
	}
}
