/* eslint-disable indent */
import React from 'react';
import { feedbackpar, secondparp1, servicespar2 } from './paragraphs';
import terms from './copyright';

const Termsofusesection = () => {
  return (
    <div className="px-7 md:px-20 md:text-xl">
      <div className="py-5">
        <h3 className="text-titlegrey mb-4 text-lg md:text-xl font-bold">
          1. Terms of use
        </h3>
        <p className="text-subgrey text-base md:text-xl">
          These Terms of Use may only be modified by a written amendment signed
          by an authorized representative of Tozilla, or by the posting by
          Tozilla of a revised version in accordance with section 12. These
          Terms of Use, together with the Tozilla Privacy Policy, represent the
          complete and exclusive statement of the agreement between you and us.
          These Terms of Use supersede any proposal or prior agreement oral or
          written, and any other communications between you and Tozilla relating
          to the subject matter of these terms including any confidentiality or
          nondisclosure agreements.
        </p>
      </div>
      <div className="py-5">
        <p className="text-subgrey py-2 text-base md:text-xl">{secondparp1}</p>

        <p className="text-subgrey py-2 text-base md:text-xl">
          Tozilla does not warrant that the Services will meet your
          requirements; that the Services will be uninterrupted, timely, secure,
          or error-free; that the information provided through the Services is
          accurate, reliable or correct; that any defects or errors will be
          corrected; that the Services will be available at any particular time
          or location; or that the Services are free of viruses or other harmful
          components. You assume full responsibility and risk of loss resulting
          from your downloading and/or use of files, information, content or
          other material obtained from the Services.
        </p>
      </div>
      <div className="py-5">
        <p className="text-subgrey py-2 text-base md:text-xl">
          We reserve the right, at our sole discretion, to amend and update
          these Terms of Use at any time. We will notify our users of material
          changes to these Terms, at least 30 days prior to the change taking
          effect by posting a notice on our website where you access the
          Services. For non-material modifications, your continued use of the
          Services constitutes agreement to our revisions of these Terms of Use.
        </p>

        <p className="text-subgrey py-2 text-base md:text-xl">
          We reserve the right at any time and from time to time to modify or
          discontinue, temporarily or permanently, the Services (or any part of
          it) with or without notice.
        </p>
      </div>
      <div className="py-5">
        <h5 className="text-subgrey text-base md:text-xl font-bold">
          Services Description:
        </h5>
        <p className="text-subgrey py-2 md:text-xl text-base">
          If any part of these Terms of Use is held invalid or unenforceable,
          that portion of the Terms of Use will be construed to reflect the
          parties’ original intent. The remaining portions will remain in full
          force and effect. Any failure on the part of KNIME to enforce any
          provision of these Terms of Use will not be considered a waiver of our
          right to enforce such provision. Our rights under these Terms of Use
          will survive any termination of these Terms of Use.
        </p>

        <p className="text-subgrey py-2 md:text-xl text-base">{servicespar2}</p>
      </div>
      <div className="py-5">
        <p className="text-subgrey py-2 text-base md:text-xl">{feedbackpar}</p>
      </div>

      <div className="py-5">
        <h5 className="text-subgrey text-base md:text-xl font-bold">
          Copyright Infringement
        </h5>
        <p className="text-subgrey py-2 md:text-xl text-base">
          If you are a copyright owner and you believe that Content on Tozilla
          and/or available via the Services violates your rights, please contact
          us via.
        </p>

        <p className="text-subgrey py-2 md:text-xl text-base">
          You retain all moral rights to Your Content that you upload, publish,
          or submit to any part of the Services, including the rights of
          integrity and attribution. However, you waive these rights and agree
          not to assert them against us, to enable us to reasonably exercise the
          rights granted, but not otherwise.
        </p>
        <p className="text-subgrey py-2 md:text-xl text-base">
          To the extent these Terms of Use are not enforceable by applicable
          law, you grant Tozilla the rights we need to use Your Content without
          attribution and to make reasonable adaptations of Your Content as
          necessary to provide the Services.
        </p>
      </div>

      <div className="py-5">
        <h5 className="text-subgrey text-base md:text-xl font-bold">
          While using the Services, you agree that you will not under any
          circumstances:
        </h5>
        <ul className="list-disc text-subgrey md:text-xl md:pt-6 text-base px-5">
          {terms.map((term, index) => {
            return <li key={index}>{term.text}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Termsofusesection;
