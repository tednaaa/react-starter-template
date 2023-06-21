import React, { FC } from 'react';

import { CounterTwo } from './counter-two/counter-two';

export const RootPage: FC = () => {
  return <CounterTwo count={0} />;
};
