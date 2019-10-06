module.exports = {
    base: '',
    title: 'Felix Mundial',
    description: 'github page powered by vuepress',
    head: [
        ['link', { rel: 'icon', href: '/icons/favicon.png' }]
    ],
    port: 9999,
    themeConfig: {
        nav: [
            { text: '👉Guide', link: '/guide/toc.md' },
            {
                text: 'Spring', link: 'https://spring.io',
                ariaLabel: 'Spring',
                items: [
                    { text: '404', link: '/posts/' },
                    { text: 'Test', link: '/posts/test/test-post.md' }
                ]
            },
            {
                text: 'Redis', link: 'https://redis.io',
                ariaLabel: 'Redis',
                items: [
                    { text: '404', link: '/posts/' },
                    { text: 'Test', link: '/posts/test/test-post2.md' }
                ]
            },
            {
                text: 'Docker', link: 'https://docker.io',
                ariaLabel: 'Docker',
                items: [
                    { text: '404', link: '/posts/' },
                    { text: 'Test', link: '/posts/test/test-post3.md' }
                ]
            }
        ],
        // repo: 'FelixMundial/felixmundial.github.io',
        sidebar: 'auto',
        sidebarDepth: 2,
        displayAllHeaders: true,
        smoothScroll: true,
        lastUpdated: '最近更新于'
    }
}
