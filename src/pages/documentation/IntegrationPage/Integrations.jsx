import React from 'react';
import DocumentationHero from '../../../features/documentation/components/DocumentationHero';
import DocumentNav from '../../../features/documentation/components/DocumentNav';
import DocumentationSidebar from '../../../features/documentation/components/DocumentationSidebar';

const Integrations = () => {
  return (
    <div className="integration_wrapper">
      <DocumentNav />
      <DocumentationHero
        headerText="Integration"
        paragraphText="An overview of Minergram Integration, uses and procedures"
      />
      <div className="flex">
        <div className="p-[3rem]" style={{ flex: '80%' }}>
          <p className="mt-4 sm:text-xl">Document / Integration</p>
          <br />
          <br />
          <h1 className="text-3xl mb-6 font-semibold" id="Introduction">
            Introduction
          </h1>
          <hr className="border-top-width-2 border-black" />
          <p className="text-xl mt-5">
            Get started with Minergram integration and explore various benefits
            of picture mining
          </p>
          <br />
          <br />
          <br />

          <h1 className="text-3xl mb-6 font-semibold" id="Overview">
            Overview
          </h1>
          <p className="text-xl leading-8">
            API integration can be defined as the process of creating a means
            for two or more APIs to share data and communicate with each other
            without human interruption. It involves the use of APIs to enable
            communication between two web tools or applications. It allows
            organizations to automate their systems, enhance the seamless
            sharing of data, and integrate current applications.
          </p>
          <br />
          <br />
          <p className="text-xl leading-8">
            API integration has become pivotal in the modern world due to the
            explosion of cloud-based products and apps. As such, organizations
            need to create a connected system where data will be relayed
            flawlessly between various software tools without the need to do it
            manually. API integration has proved to be the much-needed solution
            as it allows the sharing of process and enterprise data among
            applications in a given ecosystem. It improves the flexibility of
            information and service delivery, as well as makes the embedding of
            content from different sites and apps easy. An API acts as the
            interface that permits the integration of two applications.
          </p>
          <br />
          <br />
          <br />
          <br />
          <h1 className="text-3xl mb-6 font-semibold" id="Usage">
            Uses of APIs
          </h1>
          <p className="text-xl leading-8">
            From applications and data, all the way to business ecosystems, APIs
            are quickly becoming a mainstay in most enterprise integration
            strategies. Here are just four of the countless ways your business
            can start looking at APIs to facilitate integration.
          </p>
          <br />
          <br />
          <h1 className="text-3xl mb-6 font-semibold">
            1 - APIs for Configuration, Administration, and Monitoring of
            Products
          </h1>
          <p className="text-xl leading-8">
            When someone discusses “headless administration,” this type of API
            integration is what they are referring to. A “headless” environment
            is a computer that operates without a monitor, graphical user
            interface (GUI), or other devices, such as a keyboard or even a
            mouse.
          </p>
          <br />
          <br />
          <p className="text-xl leading-8">
            This type of API allows you to do any type of administration with
            your cloud that you can do through an administrative GUI. You can
            run the system “headless” and manage it without having to go to a
            keyboard and literally touch things. All data management
            functionality is available today through REST APIs.
          </p>
          <br />
          <br />
          <p className="text-xl leading-8">
            Rather than using the GUI to update your trading partners, AS2
            connections, or to manage your certificates, you would use an API to
            accomplish those tasks. Instead, a clearer way to think about it is
            to treat the scenario as if it were an administering API that
            automates several key product tasks, including:
          </p>
          <br />
          <ul className="text-xl leading-8">
            <li>Manage</li>
            <li>Configure</li>
            <li>Setup</li>
          </ul>
          <br />
          <br />
          <h1 className="text-3xl mb-6 font-semibold">
            2 - APIs to Upload and Download Files
          </h1>
          <p className="text-xl leading-8">
            If you take a look at data movement capabilities, typically you will
            start with multiple secure communications protocols. These protocols
            are wide-ranging, used for file-based integration, and include FTP,
            SFTP, AS2, as well as is often the case, a secure portal for
            person-to-system file flows. If you want to upload a file, you can
            use REST APIs to accomplish that, as well as supportive APIs that
            can be set to programmatically upload and download the files to and
            from the integration platform. These types of APIs are relevant to
            how a company can operate within the traditional data movement and
            support versatile and flexible file-based integration scenarios in
            their environment.
          </p>
          <br />
          <br />
          <br />
          <h1 className="text-3xl mb-6 font-semibold leading-10">
            3 - Using Tools to Connect Other Systems Together Using Their APIs
          </h1>
          <p className="text-xl leading-8">
            The third example revolves around the APIs that are provided by
            other systems, versus those in-house. Some of the most popular
            examples of core enterprise systems include Salesforce with
            approximately 20 percent of the global CRM market, and NetSuite, a
            consistently dominant name in the ERP field, to name a few. In this
            case, Salesforce and NetSuite present those APIs allowing a company
            to consume them to do some sort of application-basedcloud
            integration.
          </p>
          <br />
          <br />
          <br />
          <h1 className="text-3xl mb-6 font-semibold">
            4 - Using Cleo Tools to Provide APIs for use by Other Systems
          </h1>
          <p className="text-xl leading-8">
            The fourth and final example is actually the other side of the
            previous example, where an enterprise would use the systems APIs.
            Here, the enterprise presents the APIs for others to access. For
            instance, providing an API to order products. Someone at Salesforce
            wants someone to be able to access their environment, to be able to
            do operations using a program through their APIs. So how do they do
            it?
          </p>
          <br />
          <br />
          <h1 className="text-3xl mb-6 font-semibold leading-8" id="Procedure">
            API Integration Procedure
          </h1>
          <p className="text-xl leading-8">
            Regardless of the API integration tool you choose, you must follow a
            particular process that features three essential parts.
          </p>
          <br />
          <br />
          <p className="text-xl leading-8">
            For starters, you need to evaluate your goals and all your business
            processes. You need to identify the pain points and identify how
            integrating two or more software platforms can help eradicate these
            problems. It is vitally essential to understand that the individuals
            who can help you determine how integration can benefit your
            enterprise are software analysts and system administrators.
          </p>
          <br />
          <br />
          <p className="text-xl leading-8">
            When you have determined and spelled out your goals, you can now
            start the development process. Your developers can progress to build
            a custom application that will interact with the identified software
            platform APIs to establish new functionalities that help accomplish
            your goals.
          </p>
          <br />
          <br />
          <p className="text-xl leading-8">
            Finally, you need to perform some tests on your system to ensure
            that the integration app is up to the task and is bug-free.
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

        <section className="max-sm:hidden" style={{ flex: '10%' }}>
          <DocumentationSidebar
            sectionIds={['Introduction', 'Overview', 'Usage', 'Procedures']}
            linkTexts={['Introduction', 'Overview', 'Usage', 'Procedures']}
          />
        </section>
      </div>
    </div>
  );
};

export default Integrations;
