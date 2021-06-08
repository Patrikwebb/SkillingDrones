# App

App front-end

## Run project

- `npm install` - installs all dependencies.
- `npm start` - starts a development server accessible from the browser. The server notices changes made to files and reloads automatically.
- `npm run build` - compiles the web app into a production ready build.
- `npm run stats:gen` - generates statistics about your web app.
- `npm run stats:open` - visualize the statistics. Should be called after `stats:gen`.

## Development server

_URL and PORT_

> http://localhost:3000/

### What's included

_ReactJS with Hooks API_

- Webpack configuration for Hot-reload, Bundeling, SVG, Images and Fonts
- Prettier code formatting
- Typescript for JS
- Info, Warning and error toast with React-Toast
- Pages
  - Drone List
  - Drone Detail's
- React components
  - Button
  - Icon
  - NavigatioHeader + Burger meny
  - Toast
- SystemContext that handles response design in Javascript
- Sass Mixins that handles response design in CSS

### Styleguide

Common styles is inherit from https://tailwindcss.com/

### TODOs

- [ ] Font
- [ ] Clean up components
- [ ] Clean up styling
- [ ] Add table component
- [ ] Responsive design / Header
- [ ] Responsive design / Search field
- [ ] Social media footer
- [ ] API connection
- [ ] Icon color on Burger menu
- [ ] Social media footer in Burger menu
- [ ] Searchable input field
- [ ] Dropdown with sort
- [ ] URL Component / Home / Drone List
- [ ] EXTRA - Message icon on bell
- [ ] EXTRA - Add polling to Drone Page

### Improvements

- [ ] Split up comon styling
- [ ] Use for example Tailwind instead of writing our own styles
