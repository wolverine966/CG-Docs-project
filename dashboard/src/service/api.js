import axios from 'axios';


const URL='http://localhost:8000';
export const addScan = async (data) =>{
    try{
       return await axios.post(`${URL}/add`, data);
       
    } catch(error) {
        console.log('Error while calling add scan result api',error);
    }

}

export const getScan = async () => {
    try{
        return await axios.get(`${URL}/list`);
    } catch(error) {
        console.log('Error while calling getScan API',error);
    }
}