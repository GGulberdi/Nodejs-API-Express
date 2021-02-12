const express =require('express');
const uuid = require('uuid')
const users = require('../../project/UserData');
const router=express.Router();




router.get('/',(req,res)=>{ res.json(users)});

router.get('/:id',(req,res)=>{ 
  if (res){
    res.json(users.filter((user) => user.id === parseInt(req.params.id)))
  }else {
    res.sendStatus(400,'Invalid request')
  }
});

router.post('/',(req,res)=>{
 
    const newUser = {
            id: uuid.v4(),
            name: req.body.name,
            email: req.body.email,
          }
          if(!newUser.name|| !newUser.email){
            return res.sendStatus(400) 
          }e
            users.push(newUser)
        res.status(201).json(newUser)
          
        
       })
    
    
    // update user
    router.put('/:id',(req,res)=>{
      const found = users.some((user) => user.id ===(req.params.id));
      
      if (found){
        const updateUser= req.body;
        users.forEach((user)=>{
          if(user.id === parseInt(req.params.id)){
            user.name = updateUser.name?updateUser.name:user.name;
            user.email = updateUser.email?updateUser.email:user.email;
            res.json(user);
           }
        })
      }else{
        res.sendStatus(400)
      }
    })


  //Delete user

  router.delete('/:id',(req,res) =>{
    const found = users.some((user) => user.id ===(req.params.id));
    if (found){
     users = users.filter((user) => user.id === parseInt(req.params.id));
          res.json({msg: 'User deleted', users});
      }else{
      res.sendStatus(400)
    }

  })












module.exports = router;
