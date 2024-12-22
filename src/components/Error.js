import { useRouteError } from "react-router-dom";
const Error=()=>{
    const error=useRouteError();
return(
    <div className="Error-page">
        <div className="error-message">
             OOPS .... Something went wrong
        
        </div>
        <div className="error message">
            {error.status+" : "+" "+error.statusText}
        </div>
    </div>
)
}
export default Error;