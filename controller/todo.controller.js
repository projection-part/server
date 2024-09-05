import todo from '../model/todo.js';

export const addTodo = async (request, response)=>{
    try{
        const newTodo = await todo.create({
            data: request.body.data,
            createdAt: Date.now()
        })
        await newTodo.save();

        return response.status(200).json(newTodo);
    } 
    catch(error) {
        return response.status(500).json(error.message);
    }
}


export const getAllTodos = async (request, response)=>{
    try{
        const todos = await todo.find({}).sort({'createdAt': -1});

        return response.status(200).json(todos);
    } 
    catch(error) {
        return response.status(500).json(error.message);
    }
}

export const toggleTodoDone = async (request, response)=>{
    try{
        const todoRef = await todo.findById(request.params.id);
        const ttodo = await todo.findOneAndUpdate(
            {_id: request.params.id},
            {done: !todoRef.done}
        )
        await ttodo.save();
        return response.status(200).json(ttodo);
    } 
    catch(error) {
        return response.status(500).json(error.message);
    }
}


export const updateTodo = async (request, response)=>{
    try{
        await todo.findOneAndUpdate(
            {_id: request.params.id},
            {data: request.body.data}
        )
        const ttodo = await todo.findById(request.params.id);
        return response.status(200).json(ttodo);
    } 
    catch(error) {
        return response.status(500).json(error.message);
    }
}

export const deleteTodo = async (request, response)=>{
    try{
        const ttodo = await todo.findByIdAndDelete(request.params.id);
        return response.status(200).json(ttodo);
    } 
    catch(error) {
        return response.status(500).json(error.message);
    }
}