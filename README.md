![Friends of Trowel](https://raw.githubusercontent.com/Trowel/Trowel/master/media/dist/banners/friendsoftrowel-black-on-transparent.png)

# Trowel Alerts
[![npm version](https://badge.fury.io/js/trowel-Alerts.svg)](https://badge.fury.io/js/trowel)
[![Bower version](https://badge.fury.io/bo/trowel-Alerts.svg)](https://badge.fury.io/bo/trowel-Alerts)

The official Trowel Component for alerts
Alerts is a *Trowel Component*, please refer to the [Trowel doc](https://github.com/Trowel/Trowel/blob/master/doc/1-the-concept.md) for more informations about how works *Trowel Components*

## Getting Started
### Download
You can easily install *Trowel Alerts* by using npm, Yarn or Bower

```bash
# With bower
$ bower install trowel-alerts

# With npm
$ npm install trowel-alerts

# With yarn
$ yarn add trowel-alerts
```

You can also download a zip archive [right here](https://github.com/FriendsOfTrowel/Alerts/archive/master.zip).

### Installation
#### *Scss*
The main scss file to include to your main `.scss` file is located at the `./src/scss/alerts.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel Dependencies
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Components Alerts
@import './path/to/dependencies/trowel-alerts/src/scss/alerts.scss';
```

#### *CSS*
If you don't want to customize the trowel component in `scss` you can use the css file available at `./dest/css/alerts.css`. A minified version is available at the same location.

#### *JavaScript*
You have several javascript files for different use cases :
* The browser ready file is available at `./dest/javascript/alerts.js` (a minified version exists at `dest/javascript/alerts.min.js`)
* The script written in es2015 and ready to `import` is available at `./src/javascript/alerts.js`


#### *Twig template*
The twig template is located at the `./src/twig/alert.html.twig`.

## Usage
to be written

## Contributing
If you want to contribute you can checkout the contribution guide [over here](CONTRIBUTING.md)

## License
MIT © [Trowel](trowel.github.io)
