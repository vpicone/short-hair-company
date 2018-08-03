import React from 'react';
import Router from 'next/router';

import * as gtag from '../lib/gtag';

Router.onRouteChangeComplete = url => {
  gtag.pageview(url);
};

const Page = ({ children }) => <React.Fragment>{children}</React.Fragment>;

export default Page;
