# React Redux Auth0 Kit

Minimal starter boilerplate project with React, Redux, React Router and Auth0 authentication

## News

I removed webpack, and the boilerplate now uses Facebook's `create-react-app` for all tooling (development server, testing, building). If you wish to use webpack instead, just run `yarn run eject`. See more on `create-react-app`'s [official docs](https://github.com/facebookincubator/create-react-app) about ejecting.

## Getting started

First [create an auth0 account](https://manage.auth0.com/). Then run the following commands. Make sure your `src/utils/config.js` file has the correct values from your auth0 account.

```bash
# Install the dependencies (use npm if you don't have yarn)
yarn install

# copy configuration and replace with your own
cp src/utils/config.example.js src/utils/config.js

# Run
yarn start
```

Open `http://localhost:3000` to see the app running.

## Features

### Auth0

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

### AuthService

The library `auth0-lock` provides the user authentication, and I also have a `src/utils/AuthService.js` class to wrap this Lock Widget usage and manage the localStorage items.

I'm using the latest Auth0 Lock 10 version in redirect mode, which means here's the flow:
* ->Login widget shows login panel
* ->Redirect to auth0 to check login creds
* ->Redirect back to localhost:3000/callback
* ->Instantiated AuthService waits for 'authenticated' event to fire
* ->Redirects back to homepage

### Libraries

This starter kit is minimal, only the strict necessary is added.

* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [create-react-app](https://github.com/facebookincubator/create-react-app)
* [babel](https://github.com/babel/babel)
* [eslint](http://eslint.org)

The starter kit includes a working example app that puts all of the above to use.

## Development

HMR is unfortunately not enabled during development, because `create-react-app` doesn't support it.

This boilerplate project includes React-friendly ESLint configuration. Run the following command to see linting errors:

`yarn run lint`

## Testing

`yarn test` to run all tests. I use jest/chai to run tests, and [enzyme](https://github.com/airbnb/enzyme) for unit testing React components.

## Deployment

Out of the box, this starter kit is deployable by serving the `~/build` folder generated by `yarn run build`.
