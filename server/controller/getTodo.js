
const Todo = require('../models/Todo');

exports.getTodo = async(req,res)=>{
    try{
        const response = await Todo.find();
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Todos successfully fetched!!"

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

exports.getTodobyid = async(req,res)=>{
    try{
        const id = req.params.id;  
        const response = await Todo.findById(id);
        res.status(200).json(
            {
                success:true,
                data:response,
                message:`Todo ${id} successfully fetched!!`

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
