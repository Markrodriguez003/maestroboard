// CSS
import "./css/Corkboard.css";

// COMPONENTS
import { Container } from "react-bootstrap"

/*----------------------------------------------------------------------------
|   ⚙️ Use: Corkboard panel container   
|   
|   🔧 Todo: User customized corkboard 
|
|   📦 Returns: JSX component
*----------------------------------------------------------------------------*/

function Corkboard({ children }) {

  return (



    <div className="corkboard-card-container shadow-lg"   >
      {children}
    </div >
  );
}

export default Corkboard;
