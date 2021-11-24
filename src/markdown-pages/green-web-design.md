---
slug: "/blog/green-web-design"
date: "2021-11-23"
title: "Green Web Design"
---

I built this site to be as minimal as possible — the smaller the web page, the less energy is required to view it. According to a really amazing  <a href="https://www.websitecarbon.com/" target="_blank">tool</a> developed by Digital Wholesome, the average web page tested produces 1.76 grams of CO2 per page view. For a site that carries 10,000 page views per month, that's 211 kg of CO2 per year. 

Thanks to the minimalist design of this site, my homepage releases only <a href="https://www.websitecarbon.com/website/daniellesubject-com/" target="_blank">0.04g of CO2 per page</a> visit — that's a difference of 206.2 kg annually compared to the average website.

Before I get into the nitty gritty of how I did this, let's talk about what happens when you type in a URL and hit "enter".

A web page is built using HTML, CSS and usually some JavaScript. HTML is a markup language, meaning it is the reason you see pieces of information displayed on a web page. For example, images, paragraph text, titles, and other pieces of a page are displayed using HTML. The HTML is also responsible for telling search engines and browsers what is on the page. For example: <pre><code>< img src="./fakeimagepath" alt="dog running with a stick" /></code></pre> This code snippet tells the browser there's an image with some alt text, now display it. It's the skeletal makeup of a web page. 

CSS adds the styling. All of the colours and pretty effects you see are the result of CSS styling. It's the visual features of a webpage. 

JavaScript allows us to interact with a web page. It adds functionality to otherwise static elements. To tie all of this together, think of a "submit" button. That button exists because HTML told it to with a <code>< button ></code> tag that has an attribute <code>title="submit"</code>. It's probably not a black and white element — we added colour to the button and maybe some fancy shading thanks to CSS styling. Finally, the button works thanks to JavaScript, which tells it to do something on submit.

Cool Dani, so what?

Well, when you type in a url and hit "enter," all of those files that contain the HTML, CSS, and JS code are transferred to your browser from a server and read to build the web page before you. Every time these files are transferred, energy is consumed. 

Distance matters too. The further the files have to transfer (let's say the server is in Austalia and the web page is being loaded in Canada) the more energy is consumed. 

Browsers already do a few things to lighten the load. One is called "caching." Browsers remember content that has been downloaded so it's not downloaded all over again. An example of this is the header of a webpage that's repeated across the site. Instead of fetching the header's logo in every page load, the browser downloads it once and remembers it. 

So, where do we as web page creators come in? We need to limit the amount of data that needs to be transferred to build a web page, as well as compress the data that is transferred even more than the browser already does (files are transferred at a reduced size already, but we can take it even further).

Now you understand how a web page is loaded — let's dive into how this site was made to reduce its web page size. 

<h3>For starters, this is a static site.</h3> 

This site was built with GatsbyJS, which is a static site generator built in React. 

What does that mean? Let's go back to the explanation of a web page I gave you earlier in this post. A browser is served html, css, and javascript files that are used to build what you're looking at. This is the definition of how a static website is generated, known as client-side processing. The browser (aka the client) makes a request to the web server for info, and is sent back files that tell it how to render the web page. The pages are pre-rendered and most of the content is cached. There's nothing much else to it. 

Dynamic web pages are what you usually see. They're usually called "web applications." They have a higher level of interactivity than a static site. Dynamic sites use something called "server-side processing," which means there's a middle person in the file transfer process commonly referred to as the application server. This time, the client (your browser) sends a request to the web server, but instead of the web server sending its response directly back to the client, it dispatches the request to the application server. The app server will probably add an extra step of requesting data from a database, then sends its response back to the web server, which sends everything back to the client. In this case, the HTML file is dynamically loaded, meaning it was built by the application server instead of the web server. 

Okay, that's a lot of technical talk, but now that you know the basics you can see a very simplified view of how dynamic sites would use more power to generate than a static site. 

I'm not advocating for everyone to throw away dynamic web building and go back to static websites. There is a time and a place for both. Dynamic websites are useful when you're dealing with data, such as an ecommerce site, or when you don't want to code your site from scratch, instead using a content management system like WordPress. In my case, there was no need for a dynamic site. This is just a website made up of a bunch of static pages, which didn't take long to build because GatsbyJS has great docs (and I didn't get paid to say that).

<h3>Simplified design</h3>

My website kind of looks like it was built in 1999, and that was on purpose. By keeping the UI as simple as possible, I've made it easier for browsers to generate my web pages. I've accomplished this using a few different techniques. 

<h3>Fewer font variations</h3>

Every time you add a fancy font style to your site, that's one more request that has to be sent and more file weight is added. By sticking to system fonts, which are the fonts already installed on your device, I've taken some load off of the browser and basically told it to default to whatever font its most comfortable with, regardless of what operating system is being used. 

<h3>Limited the use of images as much as possible</h3>

Images are one of the biggest contributing factors to the amount of data transferred on the web. 

<h3>Implemented "lazy-loading" on images</h3>

Lazy loading is a term used to describe delaying initialization of resources such as images. Basically, lazy loading images reduces the time it takes a web page to load as well as its page weight because it means the images will only be loaded if the user needs them. 

<h3>Optimized images</h3>

I used a tool called TinyPNG to reducing the size of the images I used as much as possible without it being obvious to the site user. 

<h3>Limited use of JavaScript</h3>

I reduced the need for JS as much as possible, which improves processing time

Aside from page size, another factor that comes into play when talking about a website's carbon footprint is usability, and this includes Search Engine Optimization (SEO) and accessibility. For example, the less time a user takes to browse for what they need, the less power they are using. If a site has good SEO, it won't take long for a user to find it. The same can be said for a website that has clear navigation, labels, and content. Additionally, if a site has good SEO that positively impacts accessibility, since writing clear and concise alt text makes it easier for a screen reader to go through a web page. Less time browsing means less unnecessary page loads and screentime = less energy consumed.


<h3>Final Thoughts</h3>

I didn't write this post to tell you how to build a site. I'm not asking you to build an HTML-looking web page from the 90s either (although nostalgia is hot nowadays). My goal is to encourage others to think about the long term impact of short term choices. Whether you have a Wordpress blog, an ecommerce site, or a company page, what can you do to reduce that page weight? Can you simplify your UI to reduce the need for so many custom fonts and images? How can you improve SEO to make it easier for user's to find what they need, improving both user experience and environmental impact? The more we embed these values into what we build for the web, the closer we will be to creating a more sustainable web for the future. 
        



