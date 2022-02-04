import {useState} from "react";
import Tester2 from "./Tester2";

const Tester = () => {
    console.log("rendered1");
    const [state, setState] = useState<Object>({});
    console.log("rendered2");


    return(
        <div>
            <div onClick={()=>{setState({})}}>버튼</div>
            <div></div>
            <Tester2/>
        </div>
    )
}

export default Tester;