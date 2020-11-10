# Passport Social Auth

### In here, I have created social authentication with Passport and Node.js. In this application, I have only implemented Twitter, LinkedIn and GitHub Authentications.

## Requirements

* Node.js

## Credentials

* LinkedIn

<p>Navigate to <a href="https://www.linkedin.com/developer/apps/">LinkedIn Developers</a> to register a new application. Just enter dummy info, make sure to add the callback - http://127.0.0.1:3000/auth/linkedin/callback - and update the config within the app:</p>

* Twitter
<p>Navigate to <a href="https://apps.twitter.com/">Twitter Developer Page </a>and create an new app, adding in the correct callback URL, and add the given client ID and Secret Key to the _config.js file</p>

* GitHub
<p>Navigate to <a href="https://apps.twitter.com/">GitHub Developer Settings </a>and create an new app, adding in the correct callback URL, and add the given client ID and Secret Key to the _config.js file</p>

## Run this Application

To run this application, 

* clone this repository `git clone https://github.com/dinushchathurya/passport-social-auth` 

* Then `cd passport-social-auth`

* Run `npm install`

* Then goto "_config test.js" file and rename it as "_config.js"

* Paste your IDs in _config.js

* Then run `nodemon app.js`

* Then visit "http://localhost:3000"

## Contact

For further more clarifications or regarding any issues, please contact me via my E-Mail.

## License

Copyright (c) 2020 <a href="https://dinushchathurya.github.io/">Dinush Chathurya</a> and <a href="https://codingtricks.io/">codingtricks.io</a>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Blog

https://codingtricks.io/

<p ><h2 align="center">Happy<i class="fa fa-heart" style="color:red;"></i> Coding<i class="fa fa-code" style="color:orange;"> </i></h2></p>
