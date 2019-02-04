I have set this up as a web app so all that is needed to run and test the code is to download locally the app older, and launch index.html 
in a browser of your choosing, this contains all the views and files needed to test the application.

**1) Featured product**
    This is set via a JS check in the index.html file on line 87, you can change this by adding the product reference to the following
    `const featuredID = '0m8hjmd721';` 
    please not that this is case sensitive so you will need to ensure that there are no spaces at either end. 

**2) API Details**
    These can be amended/changed by entering the values into the constants on lines 179 and 180:
    ```
      const apiUrl = 'https://27gmrimn45.execute-api.eu-west-2.amazonaws.com/demos/leighton-demo-api?TableName=products';
      const headers = new Headers({
        'x-api-key': 'zQo4PPqD862IwDIQRZub8gX4dqjA3aW2DDhI6UF4',
      });
    ```
    
**Notes:**

I have added in all the files that I used during build but these aren't required for the actual testing/use of the application, to showcase
some of the skills an technologies I have used along the way.

During the course of building this I have learnt and used Node.js, NPM and GULP to automate thing such as browser testing and css
compiling using postcss. 

I also learnt about using mixins for responsive design using mobile first builds. 

I built a simple JS search functionality that will allow you to search the page for the data pulled from the API and it will hide products
that aren't relevant.

Any questions please feel free to contact me.

**Future changes**

To look at using local storage to cache the data to reduce the number of API calls and use the number of items/scanned items to prompt a 
rescan of the API if these values do not match.

Also to utilise local storage for the wishlist functionality so that if you clicked the heart icon it would remember this and only 
serve those products which were flagged. I originally thought about setting this in session/cookie data but that was PHP dependant.

Currency conversion (prices are not currently served by the API) and page sort order changes. I am not sure how to handle these at this time.
