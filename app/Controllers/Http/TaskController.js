'use strict'

const Task = use('App/Models/Task')

class TaskController {
	async index({view}){
		const tasks = await Task.all()

		return view.render('tasks.index',{
			tasks: tasks.toJSON()
		})
	}
}

module.exports = TaskController
