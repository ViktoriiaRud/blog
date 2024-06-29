import React from 'react';

import { Wrapper } from './container.styles';

export type IContainer = {
  asEl?: React.ElementType;
} & React.ComponentPropsWithoutRef<'div'>;

const Container = ({ asEl = 'div', children, ...delegated }: IContainer) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Container;
