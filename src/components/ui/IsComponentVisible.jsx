
import { useEffect, useState } from "react";

/*----------------------------------------------------------------------------
|   ⚙️ Use: Component observer to determine if component is visible 
|        
|   🔧 Todo:    
|
|   📦 Returns: Boolean value  
*----------------------------------------------------------------------------*/

export function IsComponentVisible(ref) {

  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return IsComponentVisible;
}