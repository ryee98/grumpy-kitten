import React, { useEffect } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { ContentSection } from '../blocks/ContentSection';
import { VoterTable } from '../voter-reg/VoterTable';

export const VoterListPage = ({
  voters, editVoterId,
  onRefreshVoters: refreshVoters,
  onSaveVoter: saveVoter,
  onDeleteVoter: deleteVoter,
  onEditVoter: editVoter, onSort,
  onCancelVoter: cancelVoter,
  headerText,
}) => {

   useEffect(() => {
     refreshVoters();
   }, []);

  return (
    <>
      <SectionHeader headerText={headerText} />
      <ContentSection headerText="Registered Voters">
        <VoterTable voters={voters} editVoterId={editVoterId}
          onEditVoter={editVoter} onDeleteVoter={deleteVoter}
          onSaveVoter={saveVoter} onCancelVoter={cancelVoter}
          sortVoter={onSort} />
      </ContentSection>
    </>
  );

};
