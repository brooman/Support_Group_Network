import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
  
  const {information, sections} = props

  return (
    <footer className="footer">
      <div className="sections">
        {sections.map((section, index) => {
          return (
            <div className="section" key={index}>
              <h3 className="title">{section.title}</h3>
                {section.links.map((item, index) => {
                  return <a key={index} className="link" href={item.link}>{item.text}</a>    
                })}
            </div>
          )
        })}
      </div>  
      <div className="bottom">
        {information.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
        
    </footer>
  );
};

Footer.propTypes = {
  information: PropTypes.array,
  sections: PropTypes.array,
};

export default Footer;