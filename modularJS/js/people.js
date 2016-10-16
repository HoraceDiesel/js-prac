function(){
	var people = {
		people: [],
		init: function(){
			this.cacheDOM();
		},
		cacheDOM: function(){
			this.$el = $('#peopleModule');
			this.$input = $el.find('input');
			this.$btn = $el.find('button');
		},
	};

	people.init();
}();