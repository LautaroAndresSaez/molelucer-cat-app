"use strict";

/** @type {import('moleculer').ServiceSchema} */
module.exports = {
	name: 'cats',
	started() {
		this.cats = [];
	},
	actions: {
		create: {
			async handler(ctx) {
				this.logger.info({
					message: 'CALL create in node-2'
				})
				const cat = ctx.params;
				cat.id = crypto.randomUUID();
				this.cats.push(cat)
				return cat
			}
		},
		find: {
			async handler(ctx) {
				this.logger.info({
					message: 'CALL create in node-2'
				})
				return this.cats;
			}
		}
	}
}
