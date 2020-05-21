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
          <HeaderCell>Make</HeaderCell>
          <HeaderCell>Model</HeaderCell>
          <HeaderCell>Year</HeaderCell>
          <HeaderCell>Color</HeaderCell>
          <HeaderCell>Price</HeaderCell>
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