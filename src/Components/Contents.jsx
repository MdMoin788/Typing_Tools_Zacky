import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UserContentsDemand } from '../Redux/Action';
const Contents = () => {
    // { paragraghsName: "", timing: "" }

 
    const Contents = useSelector((store) => store.contents.Contents)
    console.log('Contents contese se', Contents);
    let res = Contents.join(" ")
    
    return (
        <div>
            {res }
        </div>
    )
}
export default Contents
