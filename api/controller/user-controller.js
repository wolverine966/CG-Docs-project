
import scan from '../model/scan-model.js';

export const addScan = async (request, response) => {
    
    const user = request.body;
   const newUser = new scan(user);

   try{
       await  newUser.save();
       response.status(201).json(newUser);
   } catch(error){
     response.status(409).json({ message: error.message}); 

   }
}

export const getScan = async (request,response) => {
  try{

    const users = await scan.find({});
    response.status(200).json(users);
  }catch(error) {
    response.status(404).json({ message: error.message});
  }
}