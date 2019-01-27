import getScreenshot from '../lib/getScreenshot'

export function handler(event, context, callback) {
	return callback(null, {
		statusCode: 200,
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(event)
	  })
}