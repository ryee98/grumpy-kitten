import React from 'react';

import { HeaderCell } from './misc';
import { VoterViewRow } from './VoterViewRow';
import { VoterEditRow } from './VoterEditRow';

export const VoterTable = (
  {
    voters, editVoterId,
    onEditVoter: editVoter, onDeleteVoter: deleteVoter,
    onSaveVoter: saveVoter, onCancelEditVoter: cancelEditVoter,
  }) => {

  return (
    <table>
      <thead>
        <tr>
          <HeaderCell>Id</HeaderCell>
          <HeaderCell>First Name</HeaderCell>
          <HeaderCell>Last Name</HeaderCell>
          <HeaderCell>Address</HeaderCell>
          <HeaderCell>City</HeaderCell>
          <HeaderCell>County</HeaderCell>
          <HeaderCell>DOB (mm/dd/yyyy)</HeaderCell>
          <HeaderCell>Email</HeaderCell>
          <HeaderCell>Phone</HeaderCell>
          <HeaderCell>Action</HeaderCell>
        </tr>
      </thead>
      <tbody>
        {voters.map(voter => editVoterId === voter.id
          ? <VoterEditRow key={voter.id} voter={voter} onSaveVoter={saveVoter} onCancelEditVoter={cancelEditVoter} />
          : <VoterViewRow key={voter.id} voter={voter} onEditVoter={editVoter} onDeleteVoter={deleteVoter} />)}
      </tbody>
    </table>
  );

};