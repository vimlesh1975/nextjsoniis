This is a test for hoisting nextjs app in iis running PHP website. And integrate nextjs app with existing PHP session.

As php website will be ruuning as main service in http://localhost our nextjs server should be on inside it. so in iis we create a vitual directory within default website.

Suppose we need to server from http://localhost/pbns/dmam/billing/payment

we need to make a virtual directory naming payment in c:/inetpub/wwwroot/pbns/dmam/billing/

server can be accessed on http://localhost/pbns/dmam/billing/payment

And in next.config.js 

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: 'pbns/dmam/billing/payment',
}

module.exports = nextConfig


put test folder in c:/inetpub/wwwroot/

to set seesion uncomment in index.php
//$_SESSION['user_id'] = 'JohnDoe mcs56yyyy655';
//$_SESSION['email'] = 'john.doe@example.com';

latter comment out 
