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
          <HeaderCell>Select</HeaderCell>
          <HeaderCell onClick={() => sortVoter("firstName")}>First Name</HeaderCell>
          <HeaderCell onClick={() => sortVoter("lastName")}>Last Name</HeaderCell>
          <HeaderCell onClick={() => sortVoter("address")}>Address</HeaderCell>
          <HeaderCell onClick={() => sortVoter("city")}>City</HeaderCell>
          <HeaderCell onClick={() => sortVoter("county")}>County</HeaderCell>
          <HeaderCell>DOB (mm/dd/yyyy)</HeaderCell>
          <HeaderCell onClick={() => sortVoter("email")}>Email</HeaderCell>
          <HeaderCell>Phone</HeaderCell>
          <HeaderCell>Action</HeaderCell>
        </tr>
      </thead>
      <tbody>
        {voters.map(voter => editVoterId === voter.id
          ? <VoterEditRow key={voter.id} voter={voter} onSaveVoter={saveVoter} onCancelVoter={cancelVoter} />
          : <VoterViewRow key={voter.id} voter={voter} onEditVoter={editVoter} onDeleteVoter={deleteVoter} />)}
      </tbody>
      <tr>
        <button type="button"> Delete Selected </button>

      </tr>
    </table>
  );

};