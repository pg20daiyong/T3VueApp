## Getting Started

# LiveOps - Objectives

- The objective is to create a multi-user LiveOps system based on an simulated game. Specifically,
  develop a system that allows users to change game values live for any instance of the game, and
  display the current status of all players in the game via charts and graphs - Welcome to "LiveOps”.

### Main Component

                                      +--------------------+
        +----------------------------->  MainComponent.js  <-----------------------------+
        |                   +--------->(Vue Root Component)<---------+                   |
        |                   |         +---------+----------+         |                   |
        |                   |                   ^                    |                   |
        |                   |                   |                    |                   |

+-------+-------+ +-------+-------+ +-------+-------+ +--------+------+ +--------+------+
| Header.vue | | Navbar.vue | | xxxxxxx.vue | | xxxxxx.vue | | xxxxxxx.vue |
|(Vue Component)| |(Vue Component)| |(Vue Component)| |(Vue Component)| |(Vue Component)|
+---------------+ +---------------+ +-------+-------+ +---------------+ +---------------+
^
|
+--------------------------------------------------------------|-------------+
| +---------------+ +----------------+ +---------------| +---------------||
| | Analysis.vue | | LiveView.js | | Operation.js | | Overview.js ||
| |(Vue Component)| | (Vue Component)| |(Vue Component)| |(Vue Component)||
| +---------------+ +----------------+ +-----------==--+ +-----------==--+|
| |
| Sub+Components |
+----------------------------------------------------------------------------+

## Application Structure

### Project Folder

```
        ├── /dist                    # auto generated don't touch
        |
        ├── /node_modules
        |
        ├── /src
        |   ├── App.vue               # main entry vue application
        |   ├── main.js               # main entry to vue application
        |   ├── filter.js
        |   ├── registerServiceWorker.js
        |   ├── router.js             # router vue application
        |   ├── store.js
        |   ├── /components           # things you resuse everywhere, parameterize with props (new html)
        |   |   ├── Header.vue
        |   |   ├── Navbar.vue
        |   |   ├── sampleComponent.vue
        |   |   ├── Sidebar.vue
        |   ├── /mixins
        |   |   ├── controller.js
        |   |   └── result.js
        |   └── /routes               # edges that the user may navigate to
        |       ├── Analysis.vue      # analysis screen
        |       ├── Liveview.vue      # liveview screen
        |       ├── Operation.vue     # operation screen
        |       └── Overview.vue      # overview screen
        |
        └── /public
            ├── index.html            # html5 app entry
            ├── /assets                # .png or .jpg files
            |   ├── vfs_logo.phg
            |   └── <my_image.png> ... # images naming convention
            |
            └── /css                   # where all styling lives
                ├── media.css
                ├── style.cs
                ├── style_base.css
                └── ...


### HTML and Styling


## Deployment


## Built With
* **Vue.js** - The web framework used.
* **Axios.js** - Promise based HTTP client used for AJAX.

## Authors
* **Daiyong Kim** - LiveOps Application Development using Vew.JavaScript
* **Clinton Jay Ramonida** - *Integrated Vue.js 2.0, (Expanded from HTML5AppTemplate).*
* **Scott Henshaw** - *Initial work (HTML5AppTemplate).*

## Github
- https://github.com/pg20daiyong/T3VueApp

## how to operate
 - Download URL
 - goto client directory
 - node app
 - goto root directory
 - run> vue ui
 - You have to start from Operation first

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Caveats
-
```
