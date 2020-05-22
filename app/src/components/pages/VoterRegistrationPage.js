import React, { useEffect } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { ContentSection } from '../blocks/ContentSection';
import { VoterForm } from '../voter-reg/VoterForm';

export const VoterRegistrationPage = ({
  onRefreshVoters: refreshVoters,
  onAddVoter: addVoter,
  headerText,
}) => {

   useEffect(() => {
     console.log('useEffects')
     refreshVoters();
   }, []);

  return (
    <>
      <SectionHeader headerText={headerText} />
      
      <ContentSection headerText="Voter Registration Form">
        <VoterForm buttonText="Complete Registration" onSubmitVoter={addVoter} />
      </ContentSection>
    </>
  );

};
