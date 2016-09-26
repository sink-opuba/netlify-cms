import React, { PropTypes } from 'react';
import { getSyntaxes } from './richText';
import MarkitupReactRenderer from './MarkitupReactRenderer';

const schema = {
  'mediaproxy': ({ token }) => (
    <img
        src={token.getIn(['data', 'src'])}
        alt={token.getIn(['data', 'alt'])}
    />
  )
};

const MarkdownPreview = ({ value }) => {
  if (value == null) {
    return null;
  }

  const { markdown } = getSyntaxes();
  return (
    <MarkitupReactRenderer
        value={value}
        syntax={markdown}
        schema={schema}
    />
  );
};

MarkdownPreview.propTypes = {
  value: PropTypes.string,
};

export default MarkdownPreview;
