import { useEffect } from "react";

// This is a custom hook for dynamic title
const useTitle = title => {
    useEffect(()=>{
        document.title = title;
    },[title])
};

export default useTitle;