import axios from "axios";
import {useEffect, useState} from "react";

const useFetch = url => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(res.data)
                setIsPending(false)
            })
            .catch(err => {
                setIsPending(false)
                setError(err)
            })

    },[url])
    return {data, error, isPending}
}
export default useFetch