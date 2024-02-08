"use strict";

/**
 * Moleculer ServiceBroker configuration file
 *
 * More info about options:
 *     https://moleculer.services/docs/0.14/configuration.html
 *
 *
 * Overwriting options in production:
 * ================================
 * 	You can overwrite any option with environment variables.
 * 	For example to overwrite the "logLevel" value, use `LOGLEVEL=warn` env var.
 * 	To overwrite a nested parameter, e.g. retryPolicy.retries, use `RETRYPOLICY_RETRIES=10` env var.
 *
 * 	To overwrite broker’s deeply nested default options, which are not presented in "moleculer.config.js",
 * 	use the `MOL_` prefix and double underscore `__` for nested properties in .env file.
 * 	For example, to set the cacher prefix to `MYCACHE`, you should declare an env var as `MOL_CACHER__OPTIONS__PREFIX=mycache`.
 *  It will set this:
 *  {
 *    cacher: {
 *      options: {
 *        prefix: "mycache"
 *      }
 *    }
 *  }
 *
 * @type {import('moleculer').BrokerOptions}
 */
module.exports = {
	namespace: "",
	nodeID: null,
	metadata: {},

	logger: {
		type: "Console",
		options: {
			// Using colors on the output
			colors: true,
			// Print module names with different colors (like docker-compose for containers)
			moduleColors: false,
			// Line formatter. It can be "json", "short", "simple", "full", a `Function` or a template string like "{timestamp} {level} {nodeID}/{mod}: {msg}"
			formatter: "full",
			// Custom object printer. If not defined, it uses the `util.inspect` method.
			objectPrinter: null,
			// Auto-padding the module name in order to messages begin at the same column.
			autoPadding: false
		}
	},

	logLevel: "info",

	transporter: null, //"AMQP"

	cacher: {
		type: 'Memory',
		options: {
			maxParamsLength: 60
		}
	},

	serializer: "JSON",

	requestTimeout: 30 * 1000,

	retryPolicy: {
		// Enable feature
		enabled: false,
		// Count of retries
		retries: 5,
		// First delay in milliseconds.
		delay: 100,
		// Maximum delay in milliseconds.
		maxDelay: 1000,
		// Backoff factor for delay. 2 means exponential backoff.
		factor: 2,
		// A function to check failed requests.
		check: err => err && !!err.retryable
	},

	maxCallLevel: 100,

	heartbeatInterval: 10,
	heartbeatTimeout: 30,

	contextParamsCloning: false,

	tracking: {
		enabled: false,
		shutdownTimeout: 5000,
	},

	disableBalancer: false,

	registry: {
		strategy: "RoundRobin",
		preferLocal: true
	},

	circuitBreaker: {
		enabled: false,
		threshold: 0.5,
		minRequestCount: 20,
		windowTime: 60,
		halfOpenTime: 10 * 1000,
		check: err => err && err.code >= 500
	},

	bulkhead: {
		enabled: false,
		concurrency: 10,
		maxQueueSize: 100,
	},

	validator: true,

	errorHandler: null,

	metrics: {
		enabled: true,
		reporter: {
			type: "Prometheus",
			options: {
				// HTTP port
				port: 3030,
				// HTTP URL path
				path: "/metrics",
				// Default labels which are appended to all metrics labels
				defaultLabels: registry => ({
					namespace: registry.broker.namespace,
					nodeID: registry.broker.nodeID
				})
			}
		}
	},

	tracing: {
		enabled: false,
		// Available built-in exporters: "Console", "Datadog", "Event", "EventLegacy", "Jaeger", "Zipkin"
		exporter: {
			type: "Console", // Cfonsole exporter is only for development!
			options: {
				// Custom logger
				logger: null,
				// Using colors
				colors: true,
				// Width of row
				width: 100,
				// Gauge width in the row
				gaugeWidth: 40
			}
		}
	},

	// Register custom middlewares
	middlewares: [],

	// Register custom REPL commands.
	replCommands: null,

	// Called after broker created.
	async created(broker) {

	},

	// Called after broker started.
	async started(broker) {

	},

	// Called after broker stopped.
	async stopped(broker) {

	}
};
