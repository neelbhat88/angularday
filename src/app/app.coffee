class App extends App
	@constructor = [
		'ngRoute'
    'ngAnimate'
		# coffeelint: disable=coffeescript_error
		<% if (useBackendless) { %>
		'ngMockE2E'
		<% } %>
		# coffeelint: enable=coffeescript_error
	]