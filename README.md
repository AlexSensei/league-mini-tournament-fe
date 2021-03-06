# **_VivifyIdeas NextJS boilerplate_**

If you are using our NextJS boilerplate we recommend you use it with our [laravel](https://github.com/Vivify-Ideas/laravel-boilerplate) boilerplate.

## **Built in functions**

- HTTPS mode in dev
- Redux & Saga
- Formik & Yup
- Immerjs
- Sign in
- Sign up
- Facebook sign in
- Google sign in
- Forgot & reset password
- Internationalization
- Edit profile

## **TBD**

- Change password

## **Code structure and technologies**

For our forms we use [Formik](https://github.com/jaredpalmer/formik), and for validation we use [Yup](https://github.com/jquense/yup).

In components folder there are some examples of our forms, they all use custom text inputs which are located in `components/shared/formFields`, and in `validation` folder you will find some `Yup` validation examples.

    ├── components
    ├──── auth
    ├──── shared
    ├─────── formFields
    ├────────── PasswordInputWithLabel.js
    ├────────── TextInputWithLabel.js
    └── validation

For state management we use [React Redux](https://github.com/reduxjs/react-redux) with [Redux Saga](https://github.com/redux-saga/redux-saga) and [Reselect](https://github.com/reduxjs/reselect).

    ├── store
    ├──── actions
    ├──── index.js
    ├──── reducer
    ├──── selectors
    └──── sagas

For localization we have `$t` wrapper around [I18n-js](https://github.com/fnando/i18n-js) library.

To use it all you need to do is:

```
import $t from 'path to i18n folder';

$t('common.ok');
```

For `RouteGuard` we use HOC, you can find examples in `utils/hoc`.

Logged in user is beeing `server side rendered` you can find the code in `pages/_app.js` in `getInitialProps` method.
