import { useState } from 'react';
import axios from 'axios';
import { url } from 'inspector';
export const useUploadImage = () => {
    const [image, setImage] = useState<string | Blob | null>(null);
    const [urls, setUrls] = useState<string[]>([]);
    const [urlSelected, setUrlSelected] = useState('');
    const uploadToClient = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setImage(i);
        }
    };

    const uploadToServer = async (event: any) => {
        const body = new FormData();
        body.append('image', image as Blob);

        const response = await axios({
            url: 'http://localhost:6001/upload/post',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data: body,
        })
            .then((value) => {
                setUrls([
                    ...urls,
                    `http://localhost:6001/images/${value.data.name}`,
                ]);
            })
            .catch((err) => console.log(err));
    };
    return {
        uploadToServer,
        uploadToClient,
        urls,
        urlSelected,
        setUrlSelected,
    };
};
