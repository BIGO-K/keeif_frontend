const ios = {
    // iOS 네이티브 함수 호출
	run: function() {
		window.webkit?.messageHandlers.ios.postMessage({
			function: arguments[0],
			arguments: Array.prototype.slice.call(arguments, 1),
		});
	},
};

export default ios;