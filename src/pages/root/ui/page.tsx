import React, { FC } from 'react';
import { Container } from '@/shared/ui';
import clsx from 'clsx';

export const RootPage: FC = () => {
  console.log(clsx('foo', true && 'foo-bar'));

  return (
    <div>
      <Container>content</Container>
    </div>
  );
};
