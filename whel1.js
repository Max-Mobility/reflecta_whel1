module.exports = function(reflecta, interfaceStart) {
	return {
		listPins: function() {
			try {
				reflecta.sendFrame([ interfaceStart + 0x00 ]);
			} catch (err) {
				console.log('list pins error:',err);
			}
		}
	};
};
