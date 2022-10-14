import { Image } from "react-bootstrap"
import Loading from  "../../Assets/images/icon.png"
import {Spinner} from "react-bootstrap"
const Loader = () => {
    return (
         <div className = "loaders-contain" >

             <div style={{
                 height:'100vh',
                 display:'flex',
                 alignItems:'center',
                 justifyContent:'center',
             }}>
<Spinner animation="border" variant="secondary"/>
             </div>
        </div>
         )
}
export default Loader