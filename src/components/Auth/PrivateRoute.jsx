/* eslint-disable object-curly-newline */
import Router from 'next/router';
import React from 'react';

const login = '/sign-in'; // Define your login route address.

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */

let User = '';

if (typeof window !== 'undefined') {
  User = JSON.parse(localStorage && localStorage?.getItem('user')) || '';
}

const checkUserAuthentication = () => ({
  auth: !!User?.password,
});
// change null to { isAdmin: true } for test it.
export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    const userAuth = await checkUserAuthentication();

    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, { Location: login });
        context.res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({ ...context, auth: userAuth });
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};
