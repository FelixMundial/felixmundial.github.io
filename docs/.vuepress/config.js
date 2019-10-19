module.exports = {
    base: '',
    title: 'Felix Mundial',
    description: 'github page powered by vuepress',
    head: [
        ['link', { rel: 'icon', href: '/icons/favicon.png' }]
        // ['script', { src: '//cdn.jsdelivr.net/npm/leancloud-storage@3.13.0/dist/av-min.js'}],
        // ['script', { src: '//unpkg.com/valine/dist/Valine.min.js'}]
    ],
    port: 9999,
    themeConfig: {
        nav: [
            { text: '<i class="el-icon-discount"></i> Archives', link: '/guide/toc.md' },
            {
                text: 'Java', link: 'https://docs.oracle.com/javase/9/docs/api/overview-summary.html',
                ariaLabel: 'Java',
                items: [
                    { text: '<i class="el-icon-unlock"></i> 404', link: '/posts/' },
                    { text: '<i class="el-icon-collection-tag"></i> Test', link: '/posts/test/test-post.md' }
                ]
            },
            {
                text: 'Redis', link: 'https://redis.io',
                ariaLabel: 'Redis',
                items: [
                    { text: 'Test', link: '/posts/test/test-post2.md' }
                ]
            },
            {
                text: 'Docker', link: 'https://docker.io',
                ariaLabel: 'Docker',
                items: [
                    { text: 'Test', link: '/posts/test/test-post3.md' }
                ]
            },
            {
                text: '<span class="history">Historia Europae</span>', link: 'https://www.google.com',
                ariaLabel: 'History',
                items: [
                    { text: '<span class="cihma">Cambridge illustrated History of the Middle Ages (350-950)</span>', link: '/posts/classics/cambridge-illustrated-history-of-the-middle-ages-1.md' },
                    { text: '<span class="rome">Quo usque pro Roma ibis</span>', link: '/posts/' }
                ]
            },
            {
                text: '<span class="dnd">Dungeons & Dragons</span>', link: 'https://dnd.wizards.com/',
                ariaLabel: 'D&D',
                items: [
                    { text: 'Dungeons & Dragons 2E', link: '/posts/' }
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
