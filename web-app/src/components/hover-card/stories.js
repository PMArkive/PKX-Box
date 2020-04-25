import React from 'react';
import { HoverCard } from './index';

export default {
  title: 'HoverCard',
};

export const withChildren = () => <HoverCard>Test!</HoverCard>;

export const withDefaultElevation5 = () => {
  return (
    <HoverCard title="Title!" defaultElevation={5}>
      Test!
    </HoverCard>
  );
};
