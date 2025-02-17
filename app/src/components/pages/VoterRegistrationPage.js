import React, { useEffect } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { ContentSection } from '../blocks/ContentSection';
import { VoterForm } from '../voter-reg/VoterForm';
import voterRegPageStyles from "./VoterRegistrationPage.module.css";


export const VoterRegistrationPage = ({
  onRefreshVoters: refreshVoters,
  onAddVoter: addVoter,
  headerText,
}) => {

   useEffect(() => {
     refreshVoters();
   }, []);

  return (
    <>
      <SectionHeader headerText={headerText} />
      
      <ContentSection>
          <div className={voterRegPageStyles.formContainer}>
            <VoterForm buttonText="Complete Registration" onSubmitVoter={addVoter} />
         </div>
      </ContentSection>
    </>
  );

};
