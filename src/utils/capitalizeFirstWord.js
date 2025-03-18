/*----------------------------------------------------------------------------
|   ⚙️ Use: Simple function that capitalizes first letter in word
|        
|   🔧 Todo: 
|              
|   📦 Returns: Behavior (void) 
*----------------------------------------------------------------------------*/

export function capitalizeFirstWord(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
