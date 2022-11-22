import { useState } from "react"
import { Storage } from "aws-amplify";
import { v4 as uuidv4 } from 'uuid';
import { API } from "aws-amplify";
// import * as mutations from '../graphql/mutations';
import {
    Predictions
} from '@aws-amplify/predictions';


export default function AddPost() {
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null)

    function generateUniqueFileName(file) {
        const extension = file.name.split('.').splice(-1, 1)[0];

        return `${uuidv4()}.${extension}`;
    }

   

    

   

    async function newPost() {

        

        try {
             // TODO: UPLOAD FILE

            // TODO: CREATE POST

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                newPost()
            }}>

                <div>
                    <textarea name="description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div>

                    <input type="file" name="file" accept="image/png, image/jpeg" onChange={e => setFile(e.target.files[0])} />

                </div>
                <input type="submit" value="Post" />
            </form>
        </div >
    );
};