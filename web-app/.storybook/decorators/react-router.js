import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const reactRouterDecorator = (storyFn) => (
  <BrowserRouter>{storyFn()}</BrowserRouter>
);
