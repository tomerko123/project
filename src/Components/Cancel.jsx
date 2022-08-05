import React from "react";

function SignUp_new() {
    // functions 
    return(
        <div>
           <form>
            <div>
            <label>שם פרטי:
            <input type="text" />
            </label>

            <label>שם משפחה:
            <input type="text" />
            </label>

            </div>
            <div>
            <label> תעודת זהות:
            <input type="text" />
            </label>

            <label> תאריך פרישה:
            <input type="date"/>
            </label>



</div>

   

<input type="submit"></input>
            
           </form>
        </div>
        
        
    ); 

    
}


export default SignUp_new;
