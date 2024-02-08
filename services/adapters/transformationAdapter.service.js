

module.exports = {
	name: 'transformationAdapter',
	actions: {
		process: {
			async handler(ctx) {
				return this.broker.call('doNothing.process', ctx.params)
			}
		}
	}
}
