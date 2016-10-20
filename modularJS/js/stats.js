(function(){
	var people = 0;

	//cachingDOM
	var $stats = $('#statsModule');
	var template = $('#stats-template').html();

	//bind events/pubsub
	events.on('PeopleAmountChanged', function(count){
		setPeople(count);
	});

	render();

	function render(){
		let data = {
			people: people
		};
		$stats.html(Mustache.render(template, {people: people}));
	}

	function setPeople(count){
		people = count;
		render();
	}

})();