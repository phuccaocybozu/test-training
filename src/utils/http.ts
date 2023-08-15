import axios, { AxiosInstance } from "axios";


class Http {
    private static httpInstance: AxiosInstance;

    private constructor(){}
    static getInstance (){
        if(!Http.httpInstance){
            Http.httpInstance = axios.create();
        }

        return Http.httpInstance;
    }
}

export default Http.getInstance();