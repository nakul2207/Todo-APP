
const Todo = require('../models/Todo');

exports.createTodo = async(req,res)=>{
    try{
        const{title,description,completed} = req.body;
        const response = await Todo.create({title,description,completed});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry successfully created!!"

            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err);

        res.status(500).json({
            success:false,
            data:"Internal server Error",
            message:err.message
        })
    }
}