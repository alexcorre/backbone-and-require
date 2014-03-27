Backbone and Require Workshop
================
Lets learn about require.js and backbone.js basics through coding.

Backbone.js
-----------

Backbone.js gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface.

Read about it and get it [here](http://backbonejs.org/).

Require.js
----------
RequireJS is a JavaScript file and module loader. It is optimized for in-browser use, but it can be used in other JavaScript environments, like Rhino and Node. Using a modular script loader like RequireJS will improve the speed and quality of your code.

Read about it and get it [here](http://requirejs.org/).

Getting Started
---------------

To run a local server and see this code live in a browser, simply run

```bash
./server
```

And visit [http://localhost:8888](http://localhost:8888)

Exercise starting points are located in the **javascripts/exercises** directory while solutions are located in the **javascripts/solutions** directory.

There is code set up for you inside **javascripts/main.js** to get started and run the different exercises.

The code starts in a state without require.js set up. The solution for this section is located in **javascripts/main-solution.js**.  If you'd like to skip the require.js setup and tutorial and move on to backbone then change the following line in **index.html**

```xml
<script data-main="javascripts/main.js" src="/javascripts/lib/require.js"></script>
```

To:

```xml
<script data-main="javascripts/main-solution.js" src="/javascripts/lib/require.js"></script>
```


