'use strict'

const Task = use('App/Models/Task')

class TaskController {
	async index({view}){
		const tasks = await Task.all()

		return view.render('tasks.index',{
			tasks: tasks.toJSON()
		})
	}

	async add({view}){
		return view.render('tasks.add')
	}

	async store({request, response, view}){
		const task = new Task()
		task.title = request.input('title')
		task.body = request.input('body')
		await task.save()

		return response.redirect('/tasks')
	}

	async details({params, view}){
		const task = await Task.find(params.id)
		return view.render('tasks.details',{
			task
		})
	}
}

module.exports = TaskController
