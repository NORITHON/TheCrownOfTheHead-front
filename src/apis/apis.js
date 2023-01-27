import axios from "axios"
// Login page
export const createClient = (data) => {
    const response = axios.post("http://localhost:8080/api/member" , data);

    return response;
}
// Login page
export const createDesigner = (data) => {
    const response = axios.post("http://localhost:8080/api/designer" , data);

    return response;
}
// Login page

export const getClients = async (data) =>{
    const response = await axios.post("http://localhost:8080/api/member/login",data);
    return response.data;
}

// Login page

export const getDesigners = async (data) =>{
    const response = await axios.post("http://localhost:8080/api/designer/login",data);

    return response.data;
}

// Upload page
export const createSample = (data) =>{
    const response = axios.post("http://localhost:8080/api/sample" , data)

    return response.data;
}

// Like page
export const getSamples = async () =>{
    const response = await axios.get("http://localhost:8080/api/sample");

    return response.data;
}

// manage popup page
export const createItem = (data) => {
    const response = axios.post("http://localhost:8080/api/item",data);

    return response;
}

// main page

export const getItems = async () => {
    const response = await axios.get("http://localhost:8080/api/item");

    return response.data;
}

// detail page

export const createFund = (data) => {
    const response = axios.post("http://localhost:8080/api/fund" , data);

    return response;
}