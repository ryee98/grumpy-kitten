import React from 'react';

import { DataCell } from './misc';

export const VoterViewRow = ({ voter, onEditVoter: editVoter, onDeleteVoter: deleteVoter }) => {

  return (
    <tr>
      <DataCell>{voter.id}</DataCell>
      <DataCell>{voter.firstName}</DataCell>
      <DataCell>{voter.lastName}</DataCell>
      <DataCell>{voter.street}</DataCell>
      <DataCell>{voter.city}</DataCell>
      <DataCell>{voter.county}</DataCell>
      <DataCell>{voter.dob}</DataCell>
      <DataCell>{voter.email}</DataCell>
      <DataCell>{voter.phone}</DataCell>
      <DataCell>
        <button type="button" onClick={() => editVoter(voter.id)}>
          Edit
        </button>
        <button type="button" onClick={() => deleteVoter(voter.id)}>
          Delete
        </button>
      </DataCell>
    </tr>
  );


};

