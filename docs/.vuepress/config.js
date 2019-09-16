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
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            {
                text: 'External', link: 'https://github.com',
                ariaLabel: 'External Menu',
                items: [
                    { text: 'First', link: '/posts/' },
                    { text: 'Test', link: '/posts/test/test-post.md' }
                ]
            }
        ],
        repo: 'FelixMundial/felixmundial.github.io',
        sidebar: 'auto',
        sidebarDepth: 2,
        displayAllHeaders: true,
        lastUpdated: 'Last Updated'
    }
}
