/*----------------------------------------------------------------------------
|   ⚙️ Use: Formates an ISO date/time string to be more readable  
|                     
|   🔧 Todo: Add more time customization options               
| 
|   📦 Returns: Formatted String of date / time  
*----------------------------------------------------------------------------*/
export function dateTransform(date, includeTime) {
  // IF NO VALID DATE IS PASSED SEND ERROR
  if (!date) {
    return "****-**-**";
  }

  if (includeTime) {
    // IF INCLUDE TIME IS TRUE, RETURN YR | MONTH | DAY + HOURS + SECOND FORMATTED STRING
    return (
      date.slice(0, 4) +
      date.slice(4, 8) +
      date.slice(8, 10) +
      " | " +
      date.slice(11, 19)
    );
  } else {
    // ELSE SEND ONLY YR | MONTH | DAY
    return date.slice(0, 4) + date.slice(4, 8) + date.slice(8, 10);
  }
}
