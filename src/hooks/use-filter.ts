import { useState, useMemo } from 'react';
import { FILTERS } from '@utils/constant';
import axios from 'axios';
export const useFilter = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [filterSelected, setFilterSelected] = useState(FILTERS[0]);
    const [filterUrl, setFilterUrl] = useState('');
    const postFilter = async (data: any, type: string, fileName: string) => {
        setIsLoading(true);
        await axios
            .post(
                (process.env['NEXT_PUBLIC_API_URL'] ||
                    'http://localhost:6001') + `/filter/${type}`,
                {
                    ...data,
                },
                {
                    params: {
                        filename: fileName,
                    },
                }
            )
            .then((res) => {
                setFilterUrl('http://localhost:6001/dist/' + res.data.name);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return {
        filterSelected,
        setFilterSelected,
        postFilter,
        filterUrl,
        isLoading
    };
};
