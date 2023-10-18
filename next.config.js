/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "img.icons8.com",
            "static.vecteezy.com",
            "reallygooddesigns.com",
            "img.freepik.com"
    
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "bnetcmsus-a.akamaihd.net",
                port: '',
                pathname: '/cms/blog_header/ba/BAJ98XHDA71G1692052270191.png',
            },
            {
                protocol: 'https',
                hostname: "static.vecteezy.com",
                port: '',
                pathname: '/system/resources/previews/005/559/915/original/cute-penguin-waving-hand-cartoon-icon-illustration-animal-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg',
            },
            {
                protocol: 'https',
                hostname: "img.freepik.com",
                port: '',
                pathname: '/premium-vector/cute-grim-reaper-holding-candy-basket-cartoon-icon-illustration-people-holiday-icon-concept-isolated-flat-cartoon-style_138676-2933.jpg?w=1380',
            },
          ],
      
    }
}

module.exports = nextConfig
