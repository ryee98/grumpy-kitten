import React from 'react';

import { useForm } from '../../hooks/useForm';
 
export const VoterForm = ({ buttonText, onSubmitVoter }) => {

  const [ voterForm, change, resetVoterForm ] = useForm({
    firstName: '', lastName: '', street: '', city: '', county: '', dob: '', email: '', phone: '',
  });

  const submitVoter = () => {
    onSubmitVoter({ ...voterForm });
    resetVoterForm();
  };

  return (
    <form>
      <div>
        <label htmlFor="fname-input">First Name:</label>
        <input type="text" id="fname-input"
          name="firstName" value={voterForm.firstName} onChange={change} />
      </div>
      <div>
        <label htmlFor="lname-input">Last Name:</label>
        <input type="text" id="lname-input"
          name="lastName" value={voterForm.lastName} onChange={change} />
      </div>
      <div>
        <label htmlFor="street-input">Street Address:</label>
        <input type="text" id="street-input"
          name="street" value={voterForm.street} onChange={change} />
      </div>
      <div>
        <label htmlFor="city-input">City:</label>
        <input type="text" id="city-input"
          name="city" value={voterForm.city} onChange={change} />
      </div>
      <div>
        <label htmlFor="county-input">County:</label>
        <input type="text" id="county-input"
          name="county" value={voterForm.county} onChange={change} />
      </div>
      <div>
        <label htmlFor="dob-input">Date of birth (mm/dd/yyyy):</label>
        <input type="text" id="dob-input"
          name="dob" value={voterForm.dob} onChange={change} />
      </div>
      <div>
        <label htmlFor="email-input">Email Address:</label>
        <input type="text" id="email-input"
          name="email" value={voterForm.email} onChange={change} />
      </div>
      <div>
        <label htmlFor="phone-input">Phone Number:</label>
        <input type="text" id="phone-input"
          name="phone" value={voterForm.phone} onChange={change} />
      </div>
      <button type="button" onClick={submitVoter}>{buttonText}</button>
    </form>
  );

};

VoterForm.defaultProps = {
  buttonText: 'Complete Registration',
};