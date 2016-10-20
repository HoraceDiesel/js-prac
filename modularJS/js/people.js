//no global variables, all in module
(function(){

	var people = ['Horace', 'Lamb'];

	var $el = $('#peopleModule');
	var $input = $el.find('input');
	var $button = $el.find('button');
	var $ul = $el.find('ul');
	var $p = $el.find('p');
	var template = $el.find('#people-template').html();

	//event binding
	$button.on('click', addPerson);
	$ul.on('click', 'i.del', deletePerson);

	_render();

	function _render(){
		let data = {
			people: people
		};
		$ul.html(Mustache.render(template, data));
		events.emit('PeopleAmountChanged', people.length );
	};

	function addPerson(){
		if($input.val()!= '') {
			people.push($input.val());
			$input.val('');
			$p.html('');
			_render();
		} else {
			$p.html('Enter your name');
			console.log(people);
		}
	};

	function deletePerson(event){
		$remove = (event.target).closest('li');
		$index = $ul.find('li').index($remove);
		people.splice($index, 1);
		_render();
	};

})();
