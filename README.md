# Sun Group

A recruitment task for Sun Group. Made using React, styled-components, Typescript and React Hook Form. 

The project was made using Atomic Design methodology, sorting components into Atoms, Molecules, Organisms, Templates and Pages, which has it's own folders in src folder. There is also Styled folder, which contains all styled components and assets, which is host to some data available throughout entire project, like global styles, literals, mocked data, regex patterns or types.

## CSS

Styled-components was used for CSS in this project. All styled-components files are in src/styled folder. In src/assets/App.style.ts are GlobalStyles and variables used in project like mediaQueries.

Project also uses bootstrap, which was included via CDN in public/index.html file. It is also a file, where font was added.

## Form

React Hook Form was used in form section of the page. It's hooks were used to update data in the form without passing setState function to child components. It also required adding Typescript to the project.

## Starting up

After pulling the repository it is required to install node_modules with the following command in repository folder:

```sh
$ npm install
```

After it is done, the project can be started by using following command:

```sh
$ npm start
```

The project should open automatically on http://localhost:3000/