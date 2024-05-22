
const Todo = require('../models/Todo');

exports.updateTodo = async(req,res)=>{
    try{
        const {id} = req.params;
        const{title,description,completed} = req.body;
        const response = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,completed,updatedAt:Date.now()}
        );
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry successfully Updated!!"

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