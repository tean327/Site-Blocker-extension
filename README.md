# This little extension blocks you from going on certains website and search certain keyword

This is made with a manifest file in json made to tell chrome the name of the extension  the version of manifest we are using at which urls we can acces and put some changes , we also tell chrome which script we are using and which html/css files we are using. 
Then in content.js we need to find when we have to redirect the user, I've decided that my user will be redirected when he search or visit a website that is not allowed.
So for both I create a array of strings where I stock what I want to block. Then I have two functions looping for each variables inside the array and I check if it's equal to window.location.hostname (which  returns the domain name of the web host) to block site, and window.location.href (which  returns the URL of the current page) to block keywords. 
I hope this little explanation has helped you ! 
