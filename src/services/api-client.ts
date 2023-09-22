import axios from "axios";

export interface FetchResponse<T>{
    count:number;
    results:T[];
}

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key:'cc10354eb236448c80a62b6aedd90d40'
    }
})