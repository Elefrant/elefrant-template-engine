# elefrant-template-engine Component

[![wercker status](https://app.wercker.com/status/d5bc1cf28aa25b0850a4af4a44eaf8f2/s/master "wercker status")](https://app.wercker.com/project/bykey/d5bc1cf28aa25b0850a4af4a44eaf8f2)

[![Dependency Status](https://gemnasium.com/Elefrant/elefrant-template-engine.svg)](https://gemnasium.com/Elefrant/elefrant-template-engine)


## Usage

Use template engine(swig) to render a html page with Elefrant.
The component is registered, and it possible to use:

```js
templateEngine(res, path, data); // Render html
```

or

```js
var templateEngine = elefrant.resolve('templateEngine');
templateEngine(res, path, data); // Render html
```


## Launch tests

Just put in the console: `npm test`


## License

MIT © [Elefrant](http://elefrant.com/#/license)
