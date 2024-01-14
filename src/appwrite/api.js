import {Client,Account,Databases,Storage,Avatars} from 'appwrite'

import{ID} from 'appwrite'

const appwriteConfig ={
    projectId:"65a1c62de35e9d7beaa7",
    url:"https://cloud.appwrite.io/v1",
    databaseId:"65a1d36c199d86ad47f8",
    collectionId:"65a1d38d7f4a45f0f24a"
}


const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

const database = new Databases(client);

export default async function setEmailId(email){
    try {

        const newEmail = await database.createDocument("65a1d36c199d86ad47f8"
        ,"65a1d38d7f4a45f0f24a",
        ID.unique(),
        {email:email});

        return newEmail;
        
    } catch (error) {
        console.log(error)
        
    }
}