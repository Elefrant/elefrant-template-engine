# elefrant-template-engine Component





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
