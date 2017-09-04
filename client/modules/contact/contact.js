import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styleCss from './contact.css';

const contact = (props) => {
  return (
    <div styleName="contact">contact</div>
  );
};

contact.propTypes = {
};

export default cssModules(contact, styleCss, { allowMultiple: true });
