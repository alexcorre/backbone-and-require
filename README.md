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

Part 0: Quick start up with require.js
------------------

Run the app as is and load up the [page](http://localhost:8888). We've already set some stuff up for you including the script tag for require.js as seen just above part 0. Require then then loads data-main which has exercise 0 enabled. It attempts to load a module called 'Backbone'.

```javascript
require(['Backbone'], function(Backbone) {
  if (!Backbone) {
    alert('I Cant find backbone!');
  } else {
    alert('I found backbone');
  }
});
```

When you run the app main.js is attempting to require a module called 'Backbone'. Under the hood, require checks to see if there is a module named 'Backbone' defined and realizes there isnt so goes with the default behavior or fetching that + ".js" from the host.

![](https://github.com/alexcorre/backbone-and-require/raw/master/images/part0/error0.png)

Lets tell require where backbone.js actually is. At the top of main.js lets add some require paths configurations to tell require where to find our libs. 

As it turns out the latest versions of backbone, jquery, and underscore support AMD out of the box so all we have to do is tell require where to find them:

```javascript
// javascripts/main.js

requirejs.config({

  baseUrl: 'javascripts',

  paths: {
    'Backbone': 'lib/backbone',
    'underscore': 'lib/underscore',
    'jquery': 'http://code.jquery.com/jquery-2.1.0.min'
  }

});
```

Refresh the page and you should see:

![](https://github.com/alexcorre/backbone-and-require/raw/master/images/part0/success0.png)





