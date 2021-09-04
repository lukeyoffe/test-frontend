import axios from "axios"

export default function getData(){
    console.log("Getting")
    return axios.get("http://localhost:3000/users/1")

}