import React, { useState } from "react";

function EventHandling1App()
{
    const [paragraph, setparagraph] =
    useState ('functional component');

    function onClick()
    {  setparagraph('Button Clicked');
    }

return (
<>   
 <p>{paragraph}</p>
<button onClick={onClick}>click me</button>
</>);
}
export default EventHandling1App;
