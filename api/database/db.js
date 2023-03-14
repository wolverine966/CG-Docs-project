import mongoose from "mongoose"



const Connection = async (username, password) => {
  const URL= `mongodb://${username}:${password}@ac-n2wo3yj-shard-00-00.qhvj8cw.mongodb.net:27017,ac-n2wo3yj-shard-00-01.qhvj8cw.mongodb.net:27017,ac-n2wo3yj-shard-00-02.qhvj8cw.mongodb.net:27017/?ssl=true&replicaSet=atlas-2nrl2v-shard-0&authSource=admin&retryWrites=true&w=majority`
    //const URL=`mongodb://0.0.0.0:27017/scanRes`;
    try{
           await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
           console.log('Database connected Successfully');
    } catch(error) {
               console.log('Error while connecting with thw database',error);
    }

}
export default Connection;