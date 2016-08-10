# github-scraper

### Usage

```
git clone https://github.com/rajikaimal/github-scraper.git
cd github-scraper
npm install
npm install -g webpack
webpack
npm start
```

### Guidelines

 - **api** : directory for Node.JS API for fetching data from GitHub REST API
 - **src** : react-flux application specific components
  - actions : flux actions for managing actions within flux application
  - components : React.JS components (parent and child components)
  - constants : flux constants for identifying actions uniquely
  - dispatcher : Facebook implmentation of flux dispatcher
  - stores : flux stores for storing state
