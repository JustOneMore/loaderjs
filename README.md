LoaderJS
========

Lets you load the text (literally) of other files by just one line of 
JavaScript. No test, just 1 simple explanation:

1. Include de loaderjs.js file, just like (note that the code must be 
loaded synchronously!):
  <script async="false" src="path/to/the/file/loaderjs.js"></script>

2. And then, just one fresh line and magic is done:
  <script async="false">//Again, note the synchronisity... COOL!!
  LoaderJS.include("path/to/my/other/file.html");
  </script>

3. And BUM!!! Simplest modularity has just arrived to the web!!!!
