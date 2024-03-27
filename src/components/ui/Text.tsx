import React from 'react';

interface TextProps {
  children: React.ReactNode;
}

function Text({ children }: TextProps): JSX.Element {
  return <span>{children}</span>;
}

export default Text;
