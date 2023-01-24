# CAS FEE ADV Design System: Team Helloworld

![Deploy Storybook](https://github.com/smartive-education/design-system-component-library-helloworld/actions/workflows/storybook.yml/badge.svg)
![Release Component Library](https://github.com/smartive-education/design-system-component-library-helloworld/actions/workflows/release.yml/badge.svg)

This is a repository for the CAS FEE ADV design system part at [Ostschweizer Fachhochschule](https://www.ost.ch/de/weiterbildung/weiterbildungsangebot/informatik/software-engineering-testing/cas-frontend-engineering-advanced). 
The main goal of the CAS is to rebuild a Twitter clone called Mumble by applying all the tools and knowledge learned in the lectures to create 
an application from the beginning to the end.


## Table of Content
* [General Info](#general-info)
* [Technology Stack](#technology-stack)
* [Installation Guide](#installation-guide)
* [Usage of the Components](#usage-of-the-components)
* [Component Development](#component-development)
* [Deployment](#deployment)
* [Project History and Status](#project-history-and-status)
* [Technical improvements](#technical-improvements)
* [Personal improvements for next project](#personal-improvements-for-next-project)
* [Authors](#authors)

## General Info

This project is Storybook with Tailwind based React component library that provides
a reusable and maintainable set of UI components. The latest published [ Storybook version is here](https://smartive-education.github.io/design-system-component-library-helloworld/?path=/story/design-tokens-branding-app-icon--page).

## Technology Stack

The tools and libraries that are used:
* `Storybook`: Is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time.
* `@storybook/react`: Is a UI development environment for your React components. With it, you can visualize different states of your UI components and develop them interactively.
* `Tailwind CSS`: Is a framework for quickly building and customizing applications without writing custom CSS.
* `Headless UI`: Is a set of completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.
* `Typescript`: Is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
* `ESLint`: Is a tool to identify and fix problems with your JavaScript code.
* `Pretier`: Is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing.
* `GitHub`: Is a distributed version-control platform where users can collaborate on or adopt open source code projects.


## Installation Guide

In order to make use of this UI component library package there are some prerequisites.
The following tools and libraries gave to be installed before.

### Create a Next.js App

```console
npx create-next-app@latest --typescript
```

To find more detailed information see [Create Next App](https://nextjs.org/docs/api-reference/create-next-app) or [Next.js on Windows](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nextjs-on-wsl).

### Authenticating GitHub Registry

To install the UI component library package you need a personal GitHub Access Token.

* Create a GitHub [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Create a new `.npmrc` file in the root of your repository
* Add the key and the declaration of the owner to your project. Replace TOKEN with your access token. 

```console
@smartive-education:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TOKEN
```

To find more detailed information see [Working with the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry).

### Install UI component library 

The UI component library package is set up as follows

```console
npm install @smartive-education/design-system-component-library-hello-world-team@latest
```

### Install Tailwind CSS with PostCSS
The UI component library is based on Tailwind CSS as a PostCSS plugin. This is the most 
seamless way to integrate it with build tools. 

```console
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
To find more detailed information see [Get started with Tailwind CSS](https://tailwindcss.com/docs/installation/using-postcss)

### Configure Tailwind CSS

You need to configure your installed `tailwind.config.js` to make the design tokens available from the installed package (UI component) as preset. 
Additionally, to apply the design tokens the content path as to be configured, too.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('@smartive-education/design-system-component-library-hello-world-team/tailwind'),
  ],
  content: [
    './node_modules/@smartive-education/design-system-component-library-hello-world-team/dist/components/**/*.{js,ts,jsx,tsx}'
  ],
  ...
}
```
Further to make use of the tailwind utility class add into your applications main entry CSS file

```css
@import '@smartive-education/design-system-component-library-hello-world-team/dist/global";
```

## Usage of the Components

To use a component import it from the UI component library. Here is an example

```javascript
import { Button, MumbleIconComponent } from "@smartive-education/design-system-component-library-hello-world-team";

const MyComponent = () => {
  return (
      <Button
        label="Click me"
        onClick={function noRefCheck(){}}
        size="M"
        variant="gradient"
      >
        <MumbleIconComponent />
      </Button>
  );
};
```

export default MyComponent;

## Component Development 

This is a guide for developing components 
* Clone or download the UI component library [Hello World](https://github.com/smartive-education/design-system-component-library-helloworld)
* Run `npm install` or `npm ci` to install the project dependencies
* Run `npm run storybook` to start a local instance on port 6006.

## Deployment

This repository is configured to automatically deploy your design system
to GitHub Pages and the component library to the GitHub package registry.

Please ensure the following prerequisites are met:

- Storybook
  - Your `package.json` contains a `build-storybook` script
  - The resulting build is located in the `storybook-static` directory
- Component Library
  - Your `package.json` contains a `build` script
  - When trying with `npm pack`, all your required files are included in the resulting tarball
  - Your `package.json` file contains the correct _scope_ for your package (`@smartive-education`)
  - The `package.json` file contains the correct registry

## Project History and Status

Our projects follow the conventions of the [Semantic Versioning  2.0.0](https://semver.org/)

### Commit conventions

The commit messages are [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) / [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)

### Structure

Our design systems package follows the [Atomic Design Principles](https://xd.adobe.com/ideas/process/ui-design/atomic-design-principles-methodology-101/).
The reason to build this component library in this methodology was the clean division of the components and
the mostly positive experience using it this methodology.

## Technical improvements
- Add missing animation
- Add unit tests

## Personal improvements for next project
- Create more tickets and prioritize them to be able to work more structured.
- Have a look at the evaluation criteria already at the start of the project.
- Strictly use defined coding conventions.
- Not getting influenza and covid again. (Carole ;-))

## Authors
[Carole Hug](https://github.com/CaroleHug)

[Mehmet Ali Bekooglu](https://github.com/malib)