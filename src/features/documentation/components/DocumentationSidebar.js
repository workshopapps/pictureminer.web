import React from 'react';
import ScrollspyNav from 'react-scrollspy-nav';
import PropTypes from 'prop-types';
import './DocumentationSidebar.scss';
const DocumentationSidebar = (props) => {
  return (
    <div className="documentation-sidebar">
      <h3 className="documentation-sidebar_title">On this page</h3>
      <div>
        <ScrollspyNav
          scrollTargetIds={props.sectionIds}
          activeNavClass="documentation-sidebar_active"
          scrollDuration="500"
        >
          {props.linkTexts.map((link, index) => (
            <a
              href={`#${props.sectionIds[index]}`}
              key={index}
              className="documentation-sidebar_section"
            >
              {link}
            </a>
          ))}
        </ScrollspyNav>
      </div>
    </div>
  );
};

DocumentationSidebar.propTypes = {
  sectionIds: PropTypes.array,
  linkTexts: PropTypes.array,
};

export default DocumentationSidebar;
