This is a test for hoisting nextjs app in iis running PHP website. And integrate nextjs app with existing PHP session.

As php website will be ruuning as main service in http://localhost our nextjs server should be on inside it. so in iis we create a sub sub website within default website.

server can be accessed on http://localhost/nextjs

because in next.config.js 

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/nextjs',
}

module.exports = nextConfig


put test folder in c:/inetpub/wwwroot/

to set seesion uncomment in index.php
//$_SESSION['user_id'] = 'JohnDoe mcs56yyyy655';
//$_SESSION['email'] = 'john.doe@example.com';

latter comment out 
