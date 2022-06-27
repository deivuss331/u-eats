# 🍕 U-Eats

[![🚀 Deploy on Github Pages](https://github.com/deivuss331/u-eats/actions/workflows/deploy-gh-pages.yml/badge.svg?branch=main)](https://github.com/deivuss331/u-eats/actions/workflows/deploy-gh-pages.yml)
![GitHub](https://img.shields.io/github/license/deivuss331/u-eats)
![GitHub package.json version](https://img.shields.io/github/package-json/v/deivuss331/u-eats)

App inspired by Uber Eats.

---

#### Note:
* recommended Node version: **18.0.0**
* see available scripts in `package.json`
* app works on mocked backend (msw + faker.js)

---

#### Pitfalls:

* missing order validation (user may order food from UK with delivery to Poland)

---

### Env variables:
* `REACT_APP_VERSION` - app version
* `REACT_APP_AUTHOR_NAME`
* `REACT_APP_AUTHOR_EMAIL`
* `REACT_APP_BING_MAPS_API_KEY` - get api key [here](https://www.bingmapsportal.com/)
* `REACT_APP_PROJECT_REPO_URL` - git repository url
* `REACT_APP_STRIPE_PUBLISHABLE_KEY` - stripe publishable key

---

_See available scripts in package.json_<br/>
_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)_
