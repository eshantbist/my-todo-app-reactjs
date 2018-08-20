import Utils from './utils.js';

let todos=[];
const model={

    todos(){
	return todos;
    },

	addTodo(title){
		console.log("I am addingTodo");
		todos = todos.concat({
			id: Utils.uuid(),
			title: title,
			completed: false
		});

		console.log(todos);
	},

	save(todoToSave, text) {
		todos = todos.map(function (todo) {
			return todo !== todoToSave ? todo : Utils.extend({}, todo, {title: text});
		});
	},

	


}

export default model

