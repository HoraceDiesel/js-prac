//no global variables, all in module
// (function(){
	var people = {
		people: ['Horace', 'Lamb'],
		init: function(){
			this.cacheDOM();
			this.action();
			this.render();
		},
		cacheDOM: function(){
			this.$el = $('#peopleModule');
			this.$input = this.$el.find('input');
			this.$button = this.$el.find('button');
			this.$ul = this.$el.find('ul');
			this.$p = this.$el.find('p');
			this.template = this.$el.find('#people-template').html();
		},
		action: function(){
			this.$button.on('click', this.addPerson.bind(this));
			this.$ul.on('click', 'i.del', this.deletePerson.bind(this));
		},
		render: function(){
			let data = {
				people: this.people
			};
			this.$ul.html(Mustache.render(this.template, data));
		},
		addPerson: function(){
			if(this.$input.val()!= '') {
				this.people.push(this.$input.val());
				this.$input.val('');
				this.$p.html('');
				this.render();
			} else {
				this.$p.html('Enter your name');
			}
		},
		deletePerson: function(event){
			$remove = (event.target).closest('li');
			$index = this.$ul.find('li').index($remove);
			this.people.splice($index, 1);
			$remove.remove();
			console.log($index);
		}
	};

	people.init();
	
// })();

