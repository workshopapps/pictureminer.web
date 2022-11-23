/* eslint-disable indent */
import React from 'react';

const Subtext = () => {
  const para = `The following terms and conditions incorporated herein by reference
          (collectively, the "Terms of Use"), directs your access to and use of
          Tozilla including any content, functionality and services offered on
          or through Tozilla (collectively the "Services").`;

  const paratwo =
    'Please read the Terms of Use carefully before you start to use the Services. By using the Services, you accept and agree to be bound and abide by these Terms of Use. If you do not want to agree to these Terms of Use you must not access or use the Services.';
  return (
    <div className="px-5 md:px-20 mb-5">
      <div>
        <p className="text-subgrey pb-2 text-base md:text-xl">{para}</p>

        <p className="text-subgrey pt-2 text-base md:text-xl">{paratwo}</p>
      </div>
    </div>
  );
};

export default Subtext;
