import { useState } from "react";
import "./App.css";

function App() {

// inside {} bkt akk are keys
const [formData, setFormData] =useState ({
  firstname:"", lastname:"", email:"", country:"India",
  streetAdress:"", city:"", state:"", postalCode:"",
  comments:false, candidates:false, offers:false,pushNotification:""
})

function changeHandler(event){
  const {name, value, checked, type} = event.target
  setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked : value }))
}

function submitHandler(event){
  event.preventDefault();

  console.log("Finally printing the value of Form Data");
  console.log(formData);
}

  return (
    <div className="flex flex-col items-center mt-2">

      <form onSubmit={submitHandler}>

        <label htmlFor="firstname">First Name</label> <br/>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Love"
          value={formData.firstname}
          onChange={changeHandler}
          className="outline"
        />

          <br />
          

        <label htmlFor="lastname">Last Name</label> <br/>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Babber"
          value={formData.lastname}
          onChange={changeHandler}
          className="outline"
        />

          <br />
          

        <label htmlFor="email">Email Address</label> <br/>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="akashkuber@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        />

        <br />


        <label htmlFor="country">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option>India</option>
          <option>United State</option>
          <option>Canada</option>
          <option>Maxico</option>
        </select>

        <br />
          

          <label htmlFor="streetAdress">Street Address</label> <br/>
          <input
            type="text"
            name="streetAdress"
            id="streetAdress"
            placeholder="B-25C"
            value={formData.streetAdress}
            onChange={changeHandler}
            className="outline"
          />

          <br />
          

          <label htmlFor="city">City</label> <br/>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Mahada colony"
            value={formData.city}
            onChange={changeHandler}
            className="outline"
          />

          <br />
          

          <label htmlFor="state">State / Province</label> <br/>
          <input
            type="text"
            name="state"
            id="state"
            placeholder="Bihar"
            value={formData.state}
            onChange={changeHandler}
            className="outline"
          />

          <br />
          

          <label htmlFor="postalCode">Postal Code</label> <br/>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            placeholder="110077"
            value={formData.postalCode}
            onChange={changeHandler}
            className="outline"
          />


<br />
<br />
          <fieldset>
            <legend>By Email</legend>

            {/* comments */}
            <div className="flex"> 

              <input
                id="comments"
                name="comments"
                type="checkbox"
                onChange={changeHandler}
                checked={formData.comments}
              />

              <div>
                <label htmlFor="comments">Comments</label>
                <p>Get notified when someones posts a commets on a posting.</p>
              </div>

            </div>

            {/* candidates */}
            <div className="flex"> 

              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                onChange={changeHandler}
                checked={formData.candidates}
              />

              <div>
                <label htmlFor="comments">Candidates</label>
                <p>Get notified when a candidate applies for a job.</p>
              </div>

            </div>

            {/* offers */}
            <div className="flex"> 

              <input
                id="offers"
                name="offers"
                type="checkbox"
                onChange={changeHandler}
                checked={formData.offers}
              />

              <div>
                <label htmlFor="comments">Offers</label>
                <p>Get notified when a candidate accepts or rejects an offer.</p>
              </div>

            </div>

          </fieldset>

<br />

          <fieldset>
            <legend>Push Notification</legend>
            <p>These are delivered via SMS to you mobile phone.</p>

            {/* Everything */}
            <input
            type="radio"
            id="pushEverything"
            name="pushNotification"
            value="Everything"
            onChange={changeHandler}
            />

            <label htmlFor="pushEverything">Everything</label>

            <br/>

            {/* Same as email */}
            <input
            type="radio"
            id="pushEmail"
            name="pushNotification" 
            value="same as email"
            onChange={changeHandler}
            />

            <label htmlFor="pushEmail">Same as email</label>


            <br/>

            {/* No push notification */}
            <input
            type="radio"
            id="pushNothing"
            name="pushNotification"
            value="No Push Notification"
            onChange={changeHandler}
            />

            <label htmlFor="pushNothing"> No Push Notification</label>

            
          </fieldset>

<br />
        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>



      </form>

    </div>
  );
}

export default App;
