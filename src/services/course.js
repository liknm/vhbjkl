import axios from "axios";
const baseUrl='http://127.0.0.1:8964/_api/'
async function getAll(){
    const response=await axios.get(baseUrl+'course')
    return response.data
}
export default {getAll}
