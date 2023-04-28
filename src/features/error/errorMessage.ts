import {useState} from "react";
import {ErrorValues} from "../../component/ui/Error";

const useError = () => {
    const [error, setError] = useState<ErrorValues>()

    return [error, setError]
}

export default useError