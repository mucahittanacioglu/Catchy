import {useEffect, useState} from "react";
import axios from "axios";

// HTTP Get Request Hook
export function useGetData(url) {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(url).then((response) => {
            setLoading(false);
            setData(response.data)
        }).catch((err) => {
            setLoading(false);
            setError(err);
        })
    }, [url]);

    return {data, loading, error}

}

// // HTTP Post Request Hook
export function usePostData(url) {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const post = async(payload) => {
        // console.log("SendingRequest",url,payload)
        axios.post(url, payload).then((response) => {
            // console.log("success")
            setLoading(false);
            setData(response.data);
        }).catch((err) => {
            // console.log("errrors",err)
            setLoading(false);
            setError(err);
        })
    }
    return {data, loading, error,post};
}


// HTTP Delete Request Hook
export function useDeleteData(url) {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.delete(url).then((response) => {
            setLoading(false);
            setData(response.data)
        }).catch((err) => {
            setLoading(false);
            setError(err);
        })
    }, [url]);

    return {data, loading, error}
}