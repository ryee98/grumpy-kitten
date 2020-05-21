import React, { useEffect } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { ContentSection } from '../blocks/ContentSection';
import { VoterTable } from '../voter-reg/VoterTable';
import { VoterForm } from '../voter-reg/VoterForm';

export const VoterRegistrationPage = ({
  voters, editVoterId,
  onRefreshVoters: refreshVoters,
  onAddVoter: addVoter,
  onSaveVoter: saveVoter,
  onDeleteVoter: deleteVoter,
  onEditVoter: editVoter,
  onCancelVoter: cancelVoter,
  headerText,
}) => {

   useEffect(() => {
     console.log('useEffects')
     refreshVoters();
   }, []);

  return (
    <>
      <SectionHeader headerText={headerText} />
      
      <ContentSection headerText="Registered Voter List">
        <VoterTable voters={voters} editVoterId={editVoterId}
          onEditVoter={editVoter} onDeleteVoter={deleteVoter}
          onSaveVoter={saveVoter} onCancelVoter={cancelVoter} />
      </ContentSection>

      <ContentSection headerText="Voter Registration Form">
        <VoterForm buttonText="Complete Registration" onSubmitVoter={addVoter} />
      </ContentSection>
    </>
  );

};
