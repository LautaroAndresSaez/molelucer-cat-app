

module.exports = {
	name: 'doNothing',
	actions: {
		process: {
			async handler(ctx) {
				return ctx.params
			}
		}
	}
}
