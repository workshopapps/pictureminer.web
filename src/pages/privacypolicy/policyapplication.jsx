import React from 'react';
import { datalist, server } from './datalist';

const Policyapp = () => {
  return (
    <div className="px-7 md:px-20 md:text-xl">
      <div className="py-5">
        <h3 className="text-titlegrey mb-4 text-lg md:text-xl font-bold">
          1. Privacy Policy
        </h3>
        <p className="text-subgrey font-bold text-base md:text-xl">
          To whom does this policy apply?
        </p>
        <p className="text-subgrey pt-4 text-base md:text-xl">
          This policy applies to everyone who uses our services.
        </p>
      </div>
      <div className="py-5">
        <h3 className="text-titlegrey mb-4 text-lg md:text-xl font-bold">
          What information do we collect, and where do we get it from?
        </h3>
        <p className="text-subgrey text-base md:text-xl">
          We consider it important that visitors of Tozilla’s Website, members
          of the Tozilla Community as well as job applicants are informed as to
          when, for what purposes and which personal data are processed. The use
          of certain services we offer may require personal data. Personal data
          is therefore processed only under certain circumstances and for
          specific purposes. Personal data means any information relating to an
          identified or identifiable natural person (e.g. name, address,
          telephone number, date of birth or email address). Hereinafter
          referred to as data.
        </p>
      </div>

      <div className="py-5">
        <p className="text-subgrey text-base md:text-xl">{server}</p>
      </div>

      <div className="py-5">
        <p className="text-subgrey text-base font-bold md:text-xl">
          We process log-files for technical and security reasons. (IP address
          of the visitor, time stamp (date, time, time zone), location and name
          of the requested file, HTTP status code (e.g. file sent successfully,
          file not found), size of the requested file, web page which referred
          the visitor to our website).
        </p>
      </div>

      <div className="py-5">
        <p className="text-subgrey text-base md:text-xl">
          We process your data for direct marketing purposes. (contact
          information: first name, last name, email address; qualification:
          Individual or business; ticket: Data Scientists (Basic): first name,
          last name, email address, job title, company; information on how you
          got to know about the online course: Tozilla website, Tozilla email,
          Tozilla partner, Work colleague / existing Tozilla user, Facebook,
          Twitter, XING, LinkedIn, Other; consent to updates: Tozilla blog)
        </p>
      </div>

      <div className="py-5">
        <p className="text-subgrey text-base md:text-xl">
          In general, we only disclose your personal data to third parties in so
          far as we have a legitimate interest in doing so, it is necessary to
          perform the contract we have with you or if you have given your
          consent. Furthermore, your data may be disclosed to third parties in
          so far as we may be obliged to do so pursuant to legal provisions or
          an enforceable administrative or court order.
        </p>

        <p className="text-subgrey pt-4 text-base md:text-xl">
          We use third party service providers for data processing. Service
          providers are generally involved as so-called Processors, who may only
          process the personal data of the visitor of our website, our clients
          or job applications in accordance with our instructions. For example,
          your contact details may be passed along to a service provider in
          order to give you access to a Webinar in which you requested
          participation.
        </p>
      </div>

      <div className="py-5">
        <p className="text-subgrey text-lg font-bold md:text-xl">
          Data protection rights
        </p>

        <ul className="list-disc text-subgrey pt-5 md:text-xl md:pt-6 text-base px-5">
          {datalist.map((data, index) => {
            return (
              <li className="py-8" key={index}>
                {data.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Policyapp;
