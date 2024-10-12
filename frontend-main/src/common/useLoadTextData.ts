import {useMutation, useQuery} from "react-query";
import {ENV} from "../App";


export type useLoadTextDataT<TResponseDataT> = {
    onSuccess: (data: TResponseDataT) => void
    page: string
    key: any
}

type SaveTextPayload<ResponseDataT> = {
    page: string
    data: ResponseDataT
}


export const useLoadTextData = <ResponseDataT = any,>({onSuccess, page, key}: useLoadTextDataT<ResponseDataT>) => {

    const saveText = async (data: SaveTextPayload<ResponseDataT>) => {
        const response = await fetch(`${ENV.API_URL}/save-text`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to create user');
        }

        return response.json();
    }

    const { isLoading} = useQuery<ResponseDataT>({
        queryKey: key,
        queryFn: () =>
            fetch(`${ENV.API_URL}/text?page=${page}`).then((res) =>
                res.json(),
            ),
        onSuccess
    })

    const mutation = useMutation(saveText);
    return {isLoading, mutate: mutation.mutate}
}