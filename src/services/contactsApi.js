import axios from "axios";
const instance = axios.create({
    baseURL: 'https://65809ec13dfdd1b11c41d732.mockapi.io',
})

export async function fetchContacts() {
    const { data } = await instance.get("/contacts");
    return data;
}

export async function addContact(name,number) {
    const response = await instance.post("/contacts", {name, number});
    return response; 
}

export async function deleteContact(contactId) {
    const response = await instance.delete(`/contacts/${contactId}`);
    return response.data; 
}