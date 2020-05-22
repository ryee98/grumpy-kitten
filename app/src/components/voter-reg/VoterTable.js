import React from 'react';

import { HeaderCell } from './misc';
import { VoterViewRow } from './VoterViewRow';
import { VoterEditRow } from './VoterEditRow';

export const VoterTable = (
  {
    voters, editVoterId,
    onEditVoter: editVoter, onDeleteVoter: deleteVoter,
    onSaveVoter: saveVoter, onCancelVoter: cancelVoter,
    sortVoter: onSortVoter,
  }) => {

    const sortVoter = (sortColumn) => {
      console.log('sortVoter', sortColumn);
      onSortVoter(sortColumn);
    };

  return (
    <table>
      <thead>
        <tr>
          <HeaderCell>Id</HeaderCell>
          <HeaderCell onClick={() => sortVoter("FIRST_NAME")}>First Name</HeaderCell>
          <HeaderCell onClick={() => sortVoter("LAST_NAME")}>Last Name</HeaderCell>
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
          ? <VoterEditRow key={voter.id} voter={voter} onSaveVoter={saveVoter} onCancelVoter={cancelVoter} />
          : <VoterViewRow key={voter.id} voter={voter} onEditVoter={editVoter} onDeleteVoter={deleteVoter} />)}
      </tbody>
    </table>
  );

};