import axios from "axios";

const getAll=async ()=>{
    const result=await axios.get('http://localhost:8964/_api/locationList')
    return result.data
}
export default {getAll}
