import axios from "axios";

const services = {
    getCategories : function(){
        try{
            return axios.get('https://api.thecatapi.com/v1/categories')
        }
        catch(error){
            console.log("errors>>>" ,error);
        }
    },
    getImages : function(id){
        try{
            return axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=2&category_ids=${id}`)
        }
        catch(error){
            console.log("erors>>>", error);
        }
    }
}

export default services