import {useState} from "react";

const Tester2 = () => {
    console.log("rendered2-1");
    const [state, setState] = useState<number>(1);
    console.log("rendered2-2");


    return(
        <div>
            <div onClick={()=>{setState(1)}}>버튼</div>
            <div>{state}</div>
        </div>
    )
}

export default Tester2;