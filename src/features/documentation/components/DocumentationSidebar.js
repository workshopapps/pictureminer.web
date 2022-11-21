import React from 'react';
import ScrollspyNav from 'react-scrollspy-nav';
import './DocumentationSidebar.scss';
const DocumentationSidebar = ({ sectionIds, linkTexts }) => {
  return (
    <div className="documentation-sidebar">
      <h3 className="documentation-sidebar_title">On this page</h3>
      <div>
        <ScrollspyNav
          scrollTargetIds={sectionIds}
          activeNavClass="documentation-sidebar_active"
          scrollDuration="500"
        >
          {linkTexts.map((link, index) => (
            <a href={`#${sectionIds[index]}`} key={index} className="documentation-sidebar_section">
              {link}
            </a>
          ))}
        </ScrollspyNav>
      </div>
    </div>
  );
};

export default DocumentationSidebar;
