import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styleCss from './test.css';

const test = (props) => {
  return (
    <div styleName="test">test</div>
  );
};

test.propTypes = {
};

export default cssModules(test, styleCss, { allowMultiple: true });
