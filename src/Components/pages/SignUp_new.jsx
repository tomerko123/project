import React from "react";
import './SignUp.css';

function SignUp_new() {

  const handleSubmit = (e) => {
  e.preventDefault(); 
  const firstName = e.target.firstName.value; 
  const lastName = e.target.lastName.value; 
  const id = e.target.id.value; 
  const Date_of_birth = e.target.Date_of_birth.value; 
  const parent_name = e.target.parent_name.value; 
  const mobile = e.target.mobile.value; 
  const email = e.target.email.value; 
  const payment = e.target.payment.value; 
  const group = e.target.group.value; 
  const yes = e.target.yes.value; 
  const no = e.target.no.value; 
  const info = e.target.no.value; 
  
    alert(`{First_Name: ${firstName} , Last_Name: ${lastName} , ID: ${id} , Date_of_birth: ${Date_of_birth}}`); 
  }; 

    return(
        <div className="SingUpPage">
           <form onSubmit={handleSubmit}>
            <div>
            <label>שם פרטי:
            <input type="text" name="firstName"/>
            </label>

            <label>שם משפחה:
            <input type="text" name="lastName"/>
            </label>

            
            
            <label> תעודת זהות:
            <input type="text" name="id"/>
            </label>

            <label> תאריך לידה:
            <input type="date" name="Date_of_birth"/>
            </label>

            

            </div>
            

        <div>
           <label> שם ההורה:
            <input type="text" name="parent_name"/>
            </label>


            <label> טלפון:
            <input type="tel" name="mobile"/>
            </label>

            <label> דואר אלקטרוני:
            <input type="email" name="email" />
            </label>
</div>

<div>

<label for="אופן תשלום">אופן תשלום:</label>

<select id="אופן תשלום" name="payment">
<option value="הוראת קבע באשראי">הוראת קבע באשראי</option>
        <option value="מזומן">מזומן</option>
        <option value="צ'קים">צ'קים</option>
</select>

</div>

<div>
<label for=" קבוצה ">בחר קבוצה :</label>

<select id="קבוצה " name="group">
<option value=" א-ג מתחילים ">א-ג מתחילים   </option>
        <option value=" ד-ו מתחילים">ד-ו מתחילים</option>
        <option value="ז' ומעלה מתחילים">ז' ומעלה מתחילים</option>
</select>

</div>


           


    
    
      <div className="takanon">
<p>
•	לא יינתן החזר כספי בגין היעדרות משיעור מכל סיבה שהיא.
</p>
<p>
•	מבלי לגרוע מהאמור בסעיף 1 לעיל, בגין היעדרות משיעורים לתקופה של מעל שלושה שבועות מסיבה בריאותית יינתן החזר כספי בהתאם, בכפוף להצגת אישור רפואי.
</p>
<p>
•	קיום החוג מותנה במספר מינימום של נרשמים.
</p>
<p>
•	אימונים שיבוטלו עקב גשם יוחזרו בימים בהם אינה מתקיימת פעילות ו/או חופשות – בהודעה מראש.
</p>
<p>
•	אין החזרים כספיים עבור חופשות וחגים.
</p>
<p>
•	ניתן לשלם באמצעות המחאות/מזומן(לכל השנה)/הוראת קבע באשראי.
</p>
<p>
•	תשלום חודש ספטמבר בהמחאה/מזומן/פייבוקס – חצי חודש (117 ₪).
</p>
<p>
•	תשלום מראש עבור כל שנת הפעילות ב10 תשלומים חודשיים(אוקטובר-יולי כולל) שווים ל5 לכל חודש.
</p>
<p>
•	את הצ'קים יש לרשום לכבוד : תומר קוזק .
</p>
<p>
•	לצורך הוראת קבע יישלח טופס מילוי פרטי אשראי ואישור במייל.
</p>
<p>
•	בהרשמת אח שני או יותר תינתן הנחה בגובה 5% ממחיר החוג הזול יותר.
</p>
<p>
•	הודעת ביטול רישום ניתן למסור עד ליום ה25 לכל חודש באמצעות הודעה למספר 054-4660075 .
</p>
<p>
•	באחריות השולח לוודא הגעת הודעת הביטול.
</p>
<p>
•	לא ניתן לבטל רטרואקטיבית.
</p>
<p>
•	החזר כספי יינתן מה1 לחודש שלאחר הודעת הביטול.
</p>
<p>
•	משתתף רשאי להשתתף בחוג עד תום החודש בו נמסרה הודעת הביטול.
</p>
<p>
•	לא יתאפשר ביטול חוג לאחר התאריך 31.3.2022.
</p>
<p>
•	פעילות החוג עד סוף יולי
</p>
</div>
<div>
      <label className="confirmTakanon"> מאשר תקנון
            <input type="checkbox" id="מאשר תקנון" name="מאשר תקנון" required/>
            </label>
      </div>


<div>
:הצהרת בריאות
<div>בחתימתי על התקנון הריני מצהיר כי מצב בריאות בני/בתי תקין ומאפשר לו לבצע מאמצים גופניים במסגרת פעילות החוג. </div>
<fieldset>
    

    <div>
      <input type="radio" id="yes" name="yes" value="כן" />
      <label for="כן">כן</label>
    </div>

    <div>
      <input type="radio" id="no" name="no" value="לא" />
      <label for="לא">לא</label>
    </div>

    </fieldset>

    <h5 className="health"> במקרה שהתשובה היא לא אנא פרט:
            
            </h5>
            <textarea name="info" id="" cols="50" rows="5"></textarea>
</div>

   

<input type="submit"></input>
            
           </form>
        </div>
        
        
    ); 

    
}


export default SignUp_new;
