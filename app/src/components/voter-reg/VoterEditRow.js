import React from 'react';

import { DataCell } from './misc';
import { useForm } from '../../hooks/useForm';

export const VoterEditRow = ({ voter, onSaveVoter, onCancelVoter: cancelVoter }) => {

  const [ voterForm, change ] = useForm({
    ...voter
  });

  const saveVoter = () => {
    onSaveVoter({
      ...voterForm,
      id: voter.id,
    });
  };

  return (
    <tr>
      <DataCell>{voter.id}</DataCell>
      <DataCell>
        <input type="text" id="fname-input" name="firstName" value={voterForm.firstName} onChange={change} />
      </DataCell>
      <DataCell>
        <input type="text" id="lname-input" name="lastName" value={voterForm.lastName} onChange={change} />
      </DataCell>
      <DataCell>
        <input type="text" id="street-input" name="street" value={voterForm.street} onChange={change} />
      </DataCell>
      <DataCell>
        <input type="text" id="city-input" name="city" value={voterForm.city} onChange={change} />
      </DataCell>
      <DataCell>
        <input type="text" id="county-input" name="county" value={voterForm.county} onChange={change} />
      </DataCell>
      <DataCell>
         <input type="text" id="dob-input" name="dob" value={voterForm.dob} onChange={change} />
      </DataCell>
      <DataCell>
        <input type="text" id="email-input" name="email" value={voterForm.email} onChange={change} />
      </DataCell>
      <DataCell>
        <input type="text" id="phone-input" name="phone" value={voterForm.phone} onChange={change} />
      </DataCell>
      <DataCell>
        <button type="button" onClick={saveVoter}>
          Save
        </button>
        <button type="button" onClick={cancelVoter}>
          Cancel
        </button>
      </DataCell>
    </tr>

  );


};