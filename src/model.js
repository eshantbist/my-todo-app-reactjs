import Utils from './utils.js';

export default class Model {


    constructor() {
    	this.todos_list=[];
	}


    todos(){
		return this.todos_list;
    }

	addTodo(title){
		console.log("I am addingTodo");
		this.todos_list = this.todos_list.concat({
			id: Utils.uuid(),
			title: title,
			completed: false
		});

		
		console.log(this.todos_list);
	}

	save(todoToSave, text) {
		this.todos_list = this.todos_list.map(function (todo) {
			return todo !== todoToSave ? todo : Utils.extend({}, todo, {title: text});
		});
		console.log(this.todos_list)
	}

	destroy(todo){
		this.todos_list = this.todos_list.filter(function (candidate) {
			return candidate !== todo;
		});
		console.log(this.todos_list)
	}
	
	toggle(todoToToggle){
		this.todos_list = this.todos_list.map(function (todo) {
			return todo !== todoToToggle ?
				todo :
				Utils.extend({}, todo, {completed: !todo.completed});
		});
		console.log(this.todos_list);

	}
	


}

