import React from 'react';

type HeadingLevel = 'h1' | 'h2' | 'p' | 'span';

interface TextProps {
  children: React.ReactNode;
  element?: HeadingLevel;
}

function Text({ children, element = 'span' }: TextProps): JSX.Element {
  const Element = element || 'span';
  return <Element>{children}</Element>;
}

export default Text;

