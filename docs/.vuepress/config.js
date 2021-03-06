// noinspection JSNonASCIINames,NonAsciiCharacters
module.exports = {
	base: '',
	title: 'Felix Mundial的杂烩图书馆',
	description: 'github page powered by Vuepress',
	head: [['link', { rel: 'icon', href: '/icons/favicon.png' }]],
	port: 9999,
	themeConfig: {
		nav: [
			{
				text: '<i class="el-icon-discount"></i> Archives',
				link: '/guide/toc.md'
			},
			{
				text: '算法',
				link: 'https://leetcode-cn.com',
				ariaLabel: 'Leetcode',
				items: [
					{
						text: '<i class="iconfont icon-leetcode"></i> Leetcode',
						link: '/posts/leetcode/leetcode101.md'
					}
				]
			},
			{
				text: '<i class="iconfont icon-java"></i> Java',
				link: '',
				ariaLabel: 'Java',
				items: [
					{
						text: '并发',
						link: '/posts/java/concurrency.md'
					},
					{
						text: 'JVM',
						link: '/posts/java/jvm.md'
					},
					{
						text: 'Spring',
						link: '/posts/java/spring.md'
					},
					{
						text: 'Spring MVC',
						link: '/posts/java/springmvc.md'
					},
					{
						text: 'Spring Boot',
						link: '/posts/java/springboot.md'
					}
				]
			},
			{
				text: '<i class="iconfont icon-database"></i> 数据库',
				link: '',
				ariaLabel: 'Database',
				items: [
					{
						text: '<i class="iconfont icon-mysql"></i> MySQL',
						link: '/posts/database/mysql.md'
					},
					{
						text: '<i class="iconfont icon-redis"></i> Redis',
						link: '/posts/database/redis.md'
					}
				]
			}
			// {
			// 	text: '<span class="history">Historia Europae</span>',
			// 	link: 'https://www.google.com',
			// 	ariaLabel: 'History',
			// 	items: [
			// 		{
			// 			text: '<span class="cihma1">Cambridge illustrated History of the Middle Ages </span> (350-950)',
			// 			link: '/posts/history/cambridge-illustrated-history-of-the-middle-ages-1.md'
			// 		},
			// 		{
			// 			text:
			// 				'<span class="cihma2">Cambridge illustrated History of the Middle Ages </span> (950-1250)',
			// 			link: '/posts/history/cambridge-illustrated-history-of-the-middle-ages-2.md'
			// 		},
			// 		{
			// 			text:
			// 				'<span class="cihma3">Cambridge illustrated History of the Middle Ages </span> (1250-1520)',
			// 			link: '/posts/history/cambridge-illustrated-history-of-the-middle-ages-3.md'
			// 		},
			// 		{
			// 			text: '<span class="rome">A Companion to Greco-Roman and Late Antique Egypt</span>',
			// 			link: '/posts/history/companion-to-greco-roman-and-late-antique-egypt.md'
			// 		}
			// 	]
			// }
			// {
			// 	text: '<span class="dnd">Dungeons & Dragons</span>',
			// 	link: 'https://dnd.wizards.com/',
			// 	ariaLabel: 'D&D',
			// 	items: [{ text: 'AD&D2e', link: '/posts/' }]
			// }
		],
		// repo: 'FelixMundial/felixmundial.github.io',
		sidebar: 'auto',
		sidebarDepth: 3,
		displayAllHeaders: true,
		smoothScroll: true,
		lastUpdated: '最近更新于'
	},
	plugins: [
		['@vuepress/back-to-top'],
		['@vuepress/nprogress'],
		[
			'vuepress-plugin-auto-sidebar',
			{
				titleMode: 'titlecase', // 标题模式
				collapsable: true, // 设置为true,开启折叠
				// sidebarDepth: 0, // 标题的深度
				collapseList: [
					// 折叠的路由列表
					// "/frontend/css/"
				],
				uncollapseList: [
					// 不折叠的路由列表
				]
			}
		],
		[
			'vuepress-plugin-comment',
			{
				choosen: 'valine',
				options: {
					el: '#vcomments',
					appId: 'OyEwiSXFOs1WnNX6Lx10u5Hg-MdYXbMMI',
					appKey: 'EF0v3tzUoWLEPo4USkMdhdHu',
					avatar: 'retro',
					path: '<%- window.location.pathname %>',
					placeholder: '欢迎留言与我分享您的想法...',
					recordIP: true,
					visitor: true, // 阅读量统计
					// 设置Bilibili表情包地址
					emojiCDN: '//i0.hdslb.com/bfs/emote/',
					// 表情title和图片映射
					emojiMaps: {
						口罩: 'https://i0.hdslb.com/bfs/emote/3ad2f66b151496d2a5fb0a8ea75f32265d778dd3.png',
						微笑: 'https://i0.hdslb.com/bfs/emote/685612eadc33f6bc233776c6241813385844f182.png',
						笑: 'https://i0.hdslb.com/bfs/emote/81edf17314cea3b48674312b4364df44d5c01f17.png',
						呲牙: 'https://i0.hdslb.com/bfs/emote/b5a5898491944a4268360f2e7a84623149672eb6.png',
						OK: 'https://i0.hdslb.com/bfs/emote/4683fd9ffc925fa6423110979d7dcac5eda297f4.png',
						星星眼: 'https://i0.hdslb.com/bfs/emote/63c9d1a31c0da745b61cdb35e0ecb28635675db2.png',
						哦呼: 'https://i0.hdslb.com/bfs/emote/362bded07ea5434886271d23fa25f5d85d8af06c.png',
						歪嘴: 'https://i0.hdslb.com/bfs/emote/4384050fbab0586259acdd170b510fe262f08a17.png',
						嫌弃: 'https://i0.hdslb.com/bfs/emote/de4c0783aaa60ec03de0a2b90858927bfad7154b.png',
						喜欢: 'https://i0.hdslb.com/bfs/emote/8a10a4d73a89f665feff3d46ca56e83dc68f9eb8.png',
						酸了: 'https://i0.hdslb.com/bfs/emote/92b1c8cbceea3ae0e8e32253ea414783e8ba7806.png',
						大哭: 'https://i0.hdslb.com/bfs/emote/2caafee2e5db4db72104650d87810cc2c123fc86.png',
						害羞: 'https://i0.hdslb.com/bfs/emote/9d2ec4e1fbd6cb1b4d12d2bbbdd124ccb83ddfda.png',
						无语: 'https://i0.hdslb.com/bfs/emote/44667b7d9349957e903b1b62cb91fb9b13720f04.png',
						疑惑: 'https://i0.hdslb.com/bfs/emote/b7840db4b1f9f4726b7cb23c0972720c1698d661.png',
						辣眼睛: 'https://i0.hdslb.com/bfs/emote/35d62c496d1e4ea9e091243fa812866f5fecc101.png',
						调皮: 'https://i0.hdslb.com/bfs/emote/8290b7308325e3179d2154327c85640af1528617.png',
						喜极而泣: 'https://i0.hdslb.com/bfs/emote/485a7e0c01c2d70707daae53bee4a9e2e31ef1ed.png',
						奸笑: 'https://i0.hdslb.com/bfs/emote/bb84906573472f0a84cebad1e9000eb6164a6f5a.png',
						偷笑: 'https://i0.hdslb.com/bfs/emote/6c49d226e76c42cd8002abc47b3112bc5a92f66a.png',
						大笑: 'https://i0.hdslb.com/bfs/emote/ca94ad1c7e6dac895eb5b33b7836b634c614d1c0.png',
						阴险: 'https://i0.hdslb.com/bfs/emote/ba8d5f8e7d136d59aab52c40fd3b8a43419eb03c.png',
						捂脸: 'https://i0.hdslb.com/bfs/emote/6921bb43f0c634870b92f4a8ad41dada94a5296d.png',
						囧: 'https://i0.hdslb.com/bfs/emote/12e41d357a9807cc80ef1e1ed258127fcc791424.png',
						呆: 'https://i0.hdslb.com/bfs/emote/33ad6000d9f9f168a0976bc60937786f239e5d8c.png',
						抠鼻: 'https://i0.hdslb.com/bfs/emote/cb89184c97e3f6d50acfd7961c313ce50360d70f.png',
						惊喜: 'https://i0.hdslb.com/bfs/emote/0afecaf3a3499479af946f29749e1a6c285b6f65.png',
						惊讶: 'https://i0.hdslb.com/bfs/emote/f8e9a59cad52ae1a19622805696a35f0a0d853f3.png',
						笑哭: 'https://i0.hdslb.com/bfs/emote/c3043ba94babf824dea03ce500d0e73763bf4f40.png',
						妙啊: 'https://i0.hdslb.com/bfs/emote/b4cb77159d58614a9b787b91b1cd22a81f383535.png',
						doge: 'https://i0.hdslb.com/bfs/emote/bba7c12aa51fed0199c241465560dfc2714c593e.png',
						滑稽: 'https://i0.hdslb.com/bfs/emote/d15121545a99ac46774f1f4465b895fe2d1411c3.png',
						吃瓜: 'https://i0.hdslb.com/bfs/emote/4191ce3c44c2b3df8fd97c33f85d3ab15f4f3c84.png',
						打call: 'https://i0.hdslb.com/bfs/emote/431432c43da3ee5aab5b0e4f8931953e649e9975.png',
						点赞: 'https://i0.hdslb.com/bfs/emote/1a67265993913f4c35d15a6028a30724e83e7d35.png',
						鼓掌: 'https://i0.hdslb.com/bfs/emote/895d1fc616b4b6c830cf96012880818c0e1de00d.png',
						尴尬: 'https://i0.hdslb.com/bfs/emote/cb321684ed5ce6eacdc2699092ab8fe7679e4fda.png',
						冷: 'https://i0.hdslb.com/bfs/emote/cb0ebbd0668640f07ebfc0e03f7a18a8cd00b4ed.png',
						灵魂出窍: 'https://i0.hdslb.com/bfs/emote/43d3db7d97343c01b47e22cfabeca84b4251f35a.png',
						委屈: 'https://i0.hdslb.com/bfs/emote/d2f26cbdd6c96960320af03f5514c5b524990840.png',
						傲娇: 'https://i0.hdslb.com/bfs/emote/010540d0f61220a0db4922e4a679a1d8eca94f4e.png',
						疼: 'https://i0.hdslb.com/bfs/emote/905fd9a99ec316e353b9bd4ecd49a5f0a301eabf.png',
						吓: 'https://i0.hdslb.com/bfs/emote/9c10c5ebc7bef27ec641b8a1877674e0c65fea5d.png',
						生病: 'https://i0.hdslb.com/bfs/emote/0f25ce04ae1d7baf98650986454c634f6612cb76.png',
						吐: 'https://i0.hdslb.com/bfs/emote/06946bfe71ac48a6078a0b662181bb5cad09decc.png',
						嘘声: 'https://i0.hdslb.com/bfs/emote/e64af664d20716e090f10411496998095f62f844.png',
						捂眼: 'https://i0.hdslb.com/bfs/emote/c5c6d6982e1e53e478daae554b239f2b227b172b.png',
						思考: 'https://i0.hdslb.com/bfs/emote/cfa9b7e89e4bfe04bbcd34ccb1b0df37f4fa905c.png',
						再见: 'https://i0.hdslb.com/bfs/emote/fc510306bae26c9aec7e287cdf201ded27b065b9.png',
						翻白眼: 'https://i0.hdslb.com/bfs/emote/eba54707c7168925b18f6f8b1f48d532fe08c2b1.png',
						哈欠: 'https://i0.hdslb.com/bfs/emote/888d877729cbec444ddbd1cf4c9af155a7a06086.png',
						奋斗: 'https://i0.hdslb.com/bfs/emote/bb2060c15dba7d3fd731c35079d1617f1afe3376.png',
						墨镜: 'https://i0.hdslb.com/bfs/emote/3a03aebfc06339d86a68c2d893303b46f4b85771.png',
						撇嘴: 'https://i0.hdslb.com/bfs/emote/531863568e5668c5ac181d395508a0eeb1f0cda4.png',
						难过: 'https://i0.hdslb.com/bfs/emote/a651db36701610aa70a781fa98c07c9789b11543.png',
						抓狂: 'https://i0.hdslb.com/bfs/emote/4c87afff88c22439c45b79e9d2035d21d5622eba.png',
						生气: 'https://i0.hdslb.com/bfs/emote/3195714219c4b582a4fb02033dd1519913d0246d.png',
						视频卫星: 'https://i0.hdslb.com/bfs/emote/dce6fc7d6dfeafff01241924db60f8251cca5307.png',
						'11周年': 'https://i0.hdslb.com/bfs/emote/d3b2d5dc028c75ae4df379f4c3afbe186d0f6f9b.png',
						鸡腿: 'https://i0.hdslb.com/bfs/emote/c7860392815d345fa69c4f00ef18d67dccfbd574.png',
						干杯: 'https://i0.hdslb.com/bfs/emote/8da12d5f55a2c7e9778dcc05b40571979fe208e6.png',
						爱心: 'https://i0.hdslb.com/bfs/emote/ed04066ea7124106d17ffcaf75600700e5442f5c.png',
						锦鲤: 'https://i0.hdslb.com/bfs/emote/643d6c19c8164ffd89e3e9cdf093cf5d773d979c.png',
						胜利: 'https://i0.hdslb.com/bfs/emote/b49fa9f4b1e7c3477918153b82c60b114d87347c.png',
						加油: 'https://i0.hdslb.com/bfs/emote/c7aaeacb21e107292d3bb053e5abde4a4459ed30.png',
						保佑: 'https://i0.hdslb.com/bfs/emote/fafe8d3de0dc139ebe995491d2dac458a865fb30.png',
						抱拳: 'https://i0.hdslb.com/bfs/emote/89516218158dbea18ab78e8873060bf95d33bbbe.png',
						响指: 'https://i0.hdslb.com/bfs/emote/1b5c53cf14336903e1d2ae3527ca380a1256a077.png',
						支持: 'https://i0.hdslb.com/bfs/emote/3c210366a5585706c09d4c686a9d942b39feeb50.png',
						拥抱: 'https://i0.hdslb.com/bfs/emote/41780a4254750cdaaccb20735730a36044e98ef3.png',
						怪我咯: 'https://i0.hdslb.com/bfs/emote/07cc6077f7f7d75b8d2c722dd9d9828a9fb9e46d.png',
						跪了: 'https://i0.hdslb.com/bfs/emote/f2b3aee7e521de7799d4e3aa379b01be032698ac.png',
						黑洞: 'https://i0.hdslb.com/bfs/emote/e90ec4c799010f25391179118ccd9f66b3b279ba.png',
						老鼠: 'https://i0.hdslb.com/bfs/emote/8e6fb491eb1bb0d5862e7ec8ccf9a3da12b6c155.png',
						'2020': 'https://i0.hdslb.com/bfs/emote/dc709fac0d361370bcf0d36d32adb97df7c95824.png',
						福到了: 'https://i0.hdslb.com/bfs/emote/5de5373d354c373cf1617b6b836f3a8d53c5a655.png',
						加油武汉: 'https://i0.hdslb.com/bfs/emote/eb966aaa5b690d3f9308a9f936f5b5a72a7f956b.png',
						粽子: 'https://i0.hdslb.com/bfs/emote/177999fb7d70d891fbf63b161f26b272e08dc1de.png',
						月饼: 'https://i0.hdslb.com/bfs/emote/89b19c5730e08d6f12fadf6996de5bc2e52f81fe.png',
						高兴: 'https://i0.hdslb.com/bfs/emote/416570a8aca7be12fb2c36e4b846906653f6d294.png',
						气愤: 'https://i0.hdslb.com/bfs/emote/069b029d17a086ab475fd331697a649e234850bb.png',
						耍帅: 'https://i0.hdslb.com/bfs/emote/d7a38b08d1f1cc35b19c35041f29ffcc48808e87.png',
						酷仔: 'https://i0.hdslb.com/bfs/emote/390100ada4659b4516984d386499fb22c0025084.png',
						画风突变: 'https://i0.hdslb.com/bfs/emote/ba4de7a3f97644038b15195bdc9f82a8fd118e77.png',
						十周年: 'https://i0.hdslb.com/bfs/emote/1eacd3f7816e70aff9c1b1a2e9605240466f599b.png',
						福: 'https://i0.hdslb.com/bfs/emote/802429a301ac5b35a0480d9526a070ce67cd8097.png',
						赞了: 'https://i0.hdslb.com/bfs/emote/40ded585bbd6328fc390076b5de224fd38b46793.png',
						暗中观察: 'https://i0.hdslb.com/bfs/emote/80a752e0718db211e4135b4ba821813f4c151e2c.png',
						么么哒: 'https://i0.hdslb.com/bfs/emote/2f418440776e88605ddc426eac898202c1f5fa4d.png',
						哭哭: 'https://i0.hdslb.com/bfs/emote/cbf36e518f1d50618f6d054aa69993ecc339fe8f.png',
						饿了: 'https://i0.hdslb.com/bfs/emote/ff91ea94adf7c5b04db305c18d17b444f7360059.png',
						问号: 'https://i0.hdslb.com/bfs/emote/a905b58b32016a1f0ff7d9193b62749f0d491707.png',
						嘿嘿: 'https://i0.hdslb.com/bfs/emote/8a15a45e228179f912ce11dbd5478f6ad54e9854.png',
						卖萌: 'https://i0.hdslb.com/bfs/emote/a0d37b43d1e786ba811d9b0ae590c479dcce6c44.png',
						喵: 'https://i0.hdslb.com/bfs/emote/eb46e78c9d86ccbe9842f0235c7cb4f4e0e80a57.png',
						'tv-白眼': 'https://i0.hdslb.com/bfs/emote/c1d59f439e379ee50eef488bcb5e5378e5044ea4.png',
						'tv-doge': 'https://i0.hdslb.com/bfs/emote/6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png',
						'tv-坏笑': 'https://i0.hdslb.com/bfs/emote/1f0b87f731a671079842116e0991c91c2c88645a.png',
						'tv-难过': 'https://i0.hdslb.com/bfs/emote/87f46748d3f142ebc6586ff58860d0e2fc8263ba.png',
						'tv-生气': 'https://i0.hdslb.com/bfs/emote/26702dcafdab5e8225b43ffd23c94ac1ff932654.png',
						'tv-委屈': 'https://i0.hdslb.com/bfs/emote/d04dba7b5465779e9755d2ab6f0a897b9b33bb77.png',
						'tv-斜眼笑': 'https://i0.hdslb.com/bfs/emote/911f987aa8bc1bee12d52aafe62bc41ef4474e6c.png',
						'tv-呆': 'https://i0.hdslb.com/bfs/emote/fe1179ebaa191569b0d31cecafe7a2cd1c951c9d.png',
						'tv-发怒': 'https://i0.hdslb.com/bfs/emote/34ba3cd204d5b05fec70ce08fa9fa0dd612409ff.png',
						'tv-惊吓': 'https://i0.hdslb.com/bfs/emote/0d15c7e2ee58e935adc6a7193ee042388adc22af.png',
						'tv-呕吐': 'https://i0.hdslb.com/bfs/emote/9f996894a39e282ccf5e66856af49483f81870f3.png',
						'tv-思考': 'https://i0.hdslb.com/bfs/emote/90cf159733e558137ed20aa04d09964436f618a1.png',
						'tv-微笑': 'https://i0.hdslb.com/bfs/emote/70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png',
						'tv-疑问': 'https://i0.hdslb.com/bfs/emote/0793d949b18d7be716078349c202c15ff166f314.png',
						'tv-大哭': 'https://i0.hdslb.com/bfs/emote/23269aeb35f99daee28dda129676f6e9ea87934f.png',
						'tv-鼓掌': 'https://i0.hdslb.com/bfs/emote/1d21793f96ef4e6f48b23e53e3b9e42da833a0f6.png',
						'tv-抠鼻': 'https://i0.hdslb.com/bfs/emote/c666f55e88d471e51bbd9fab9bb308110824a6eb.png',
						'tv-亲亲': 'https://i0.hdslb.com/bfs/emote/a8111ad55953ef5e3be3327ef94eb4a39d535d06.png',
						'tv-调皮': 'https://i0.hdslb.com/bfs/emote/b9c41de8e82dd7a8515ae5e3cb63e898bf245186.png',
						'tv-笑哭': 'https://i0.hdslb.com/bfs/emote/1abc628f6d4f4caf9d0e7800878f4697abbc8273.png',
						'tv-晕': 'https://i0.hdslb.com/bfs/emote/5443c22b4d07fb1907ccc610c8e6db254f2461b7.png',
						'tv-点赞': 'https://i0.hdslb.com/bfs/emote/f85c354995bd99e28fc76c869bfe42ba6438eff4.png',
						'tv-害羞': 'https://i0.hdslb.com/bfs/emote/a37683fb5642fa3ddfc7f4e5525fd13e42a2bdb1.png',
						'tv-睡着': 'https://i0.hdslb.com/bfs/emote/8b196675b53af58264f383c50ad0945048290b33.png',
						'tv-色': 'https://i0.hdslb.com/bfs/emote/61822c7e9aae5da76475e7892534545336b23a6f.png',
						'tv-吐血': 'https://i0.hdslb.com/bfs/emote/09dd16a7aa59b77baa1155d47484409624470c77.png',
						'tv-无奈': 'https://i0.hdslb.com/bfs/emote/ea8ed89ee9878f2fece2dda0ea8a5dbfe21b5751.png',
						'tv-再见': 'https://i0.hdslb.com/bfs/emote/180129b8ea851044ce71caf55cc8ce44bd4a4fc8.png',
						'tv-流汗': 'https://i0.hdslb.com/bfs/emote/cead1c351ab8d79e9f369605beb90148db0fbed3.png',
						'tv-偷笑': 'https://i0.hdslb.com/bfs/emote/bb690d4107620f1c15cff29509db529a73aee261.png',
						'tv-抓狂': 'https://i0.hdslb.com/bfs/emote/fe31c08edad661d63762b04e17b8d5ae3c71a757.png',
						'tv-黑人问号': 'https://i0.hdslb.com/bfs/emote/45821a01f51bc867da9edbaa2e070410819a95b2.png',
						'tv-困': 'https://i0.hdslb.com/bfs/emote/241ee304e44c0af029adceb294399391e4737ef2.png',
						'tv-打脸': 'https://i0.hdslb.com/bfs/emote/56ab10b624063e966bfcb76ea5dc4794d87dfd47.png',
						'tv-闭嘴': 'https://i0.hdslb.com/bfs/emote/c9e990da7f6e93975e25fd8b70e2e290aa4086ef.png',
						'tv-鄙视': 'https://i0.hdslb.com/bfs/emote/6e72339f346a692a495b123174b49e4e8e781303.png',
						'tv-腼腆': 'https://i0.hdslb.com/bfs/emote/89712c0d4af73e67f89e35cbc518420380a7f6f4.png',
						'tv-馋': 'https://i0.hdslb.com/bfs/emote/fc7e829b845c43c623c8b490ee3602b7f0e76a31.png',
						'tv-可爱': 'https://i0.hdslb.com/bfs/emote/9e55fd9b500ac4b96613539f1ce2f9499e314ed9.png',
						'tv-发财': 'https://i0.hdslb.com/bfs/emote/34db290afd2963723c6eb3c4560667db7253a21a.png',
						'tv-生病': 'https://i0.hdslb.com/bfs/emote/8b0ec90e6b86771092a498c54f09fc94621c1900.png',
						'tv-流鼻血': 'https://i0.hdslb.com/bfs/emote/c32d39db2737f89b904ca32700d140a9241b0767.png',
						'tv-尴尬': 'https://i0.hdslb.com/bfs/emote/7cfa62dafc59798a3d3fb262d421eeeff166cfa4.png',
						'tv-大佬': 'https://i0.hdslb.com/bfs/emote/093c1e2c490161aca397afc45573c877cdead616.png',
						'tv-流泪': 'https://i0.hdslb.com/bfs/emote/7e71cde7858f0cd50d74b0264aa26db612a8a167.png',
						'tv-冷漠': 'https://i0.hdslb.com/bfs/emote/b9cbc755c2b3ee43be07ca13de84e5b699a3f101.png',
						'tv-皱眉': 'https://i0.hdslb.com/bfs/emote/72ccad6679fea0d14cce648b4d818e09b8ffea2d.png',
						'tv-鬼脸': 'https://i0.hdslb.com/bfs/emote/0ffbbddf8a94d124ca2f54b360bbc04feb6bbfea.png',
						'tv-调侃': 'https://i0.hdslb.com/bfs/emote/4bc022533ef31544ca0d72c12c808cf4a1cce3e3.png',
						'tv-目瞪口呆': 'https://i0.hdslb.com/bfs/emote/0b8cb81a68de5d5365212c99375e7ace3e7891b7.png',
						'热词系列-知识增加':
							'https://i0.hdslb.com/bfs/emote/142409b595982b8210b2958f3d340f3b47942645.png',
						'热词系列-好家伙':
							'https://i0.hdslb.com/bfs/emote/63ec80dea3066bd9f449ba999ba531fa61f7b4eb.png',
						'热词系列-芜湖起飞':
							'https://i0.hdslb.com/bfs/emote/78d04c6ce78a613c90d510cd45fe7e25c57ba00b.png',
						'热词系列-爷青回':
							'https://i0.hdslb.com/bfs/emote/a26189ff1e681bddef7f6533f9aabe7604731a3e.png',
						'热词系列-梦幻联动':
							'https://i0.hdslb.com/bfs/emote/4809416be5ca787c2ec3e897e4fd022a58da6e0e.png',
						'热词系列-泪目': 'https://i0.hdslb.com/bfs/emote/bba3703ab90b7d16fe9dbcb85ed949db687f8331.png',
						'热词系列-保护': 'https://i0.hdslb.com/bfs/emote/55f8f6445ca7c3170cdfc5b16036abf639ce9b57.png',
						'热词系列-害怕': 'https://i0.hdslb.com/bfs/emote/d77e2de26da143249f0c0ad7a608c27152c985bf.png',
						'热词系列-爱了爱了':
							'https://i0.hdslb.com/bfs/emote/2a165b555ba20391316366c664ed7891883dc5aa.png',
						'热词系列-吹爆': 'https://i0.hdslb.com/bfs/emote/b528220f9c37256ed6a37f05bf118e44b08b81e5.png',
						'热词系列-三连': 'https://i0.hdslb.com/bfs/emote/21f15fe11b7a84d2f2121c16dec50a4e4556f865.png',
						'热词系列-可以': 'https://i0.hdslb.com/bfs/emote/e08543c71202b36c590094417fcfbb80c3506cd8.png',
						'热词系列-希望没事':
							'https://i0.hdslb.com/bfs/emote/6c0d2e6c486d1ba5afd6204a96e102652464a01d.png',
						'热词系列-打卡': 'https://i0.hdslb.com/bfs/emote/a9cf77c78e1b9b40aa3ed4862402fba008ee2f51.png',
						'热词系列-skr': 'https://i0.hdslb.com/bfs/emote/bd285ff94db16ad52557c3effe930d64663e8375.png',
						'热词系列-battle':
							'https://i0.hdslb.com/bfs/emote/f2f81c8e47db6252becd633a5d1ee14e15df2ea8.png',
						'热词系列-DNA': 'https://i0.hdslb.com/bfs/emote/f6eb74f8230588f61a298af89061a7d75c5762e5.png',
						'热词系列-妙啊': 'https://i0.hdslb.com/bfs/emote/0e98299d7decf5eaffad854977946075c3e91cb8.png',
						'热词系列-这次一定':
							'https://i0.hdslb.com/bfs/emote/a01ca28923daa7cc896c42f27deb4914e20dd572.png',
						'热词系列-AWSL': 'https://i0.hdslb.com/bfs/emote/c37f88cf799f9badf9d84b7671dc3dd98c0fc0c2.png',
						'热词系列-递话筒':
							'https://i0.hdslb.com/bfs/emote/98e6950e39fbb4dd1c576042063ca632074070ba.png',
						'热词系列-你细品':
							'https://i0.hdslb.com/bfs/emote/535e00658e7e47966f154d3a167fa2365ebc4321.png',
						'热词系列-咕咕': 'https://i0.hdslb.com/bfs/emote/d8065c2e7ce48c929317a94553499a46fecc262a.png',
						'热词系列-标准结局':
							'https://i0.hdslb.com/bfs/emote/3de98174b510cf7dc5fd1bd08c5d881065e79137.png',
						'热词系列-危': 'https://i0.hdslb.com/bfs/emote/5cc6c3357c4df544dd8de9d5c5c0cec97c7c9a56.png',
						'热词系列-张三': 'https://i0.hdslb.com/bfs/emote/255a938f39cea625032b6650036b31aa26c50a3c.png',
						'热词系列-害': 'https://i0.hdslb.com/bfs/emote/cbe798a194612958537c5282fcca7c3bcd2aa15c.png',
						'热词系列-我裂开了':
							'https://i0.hdslb.com/bfs/emote/29bd57ec4e8952880fea6c9e47aee924e91f10c4.png',
						'热词系列-有内味了':
							'https://i0.hdslb.com/bfs/emote/7ca61680a905b5b6e2e335c630e725b648b03b4d.png',
						'热词系列-猛男必看':
							'https://i0.hdslb.com/bfs/emote/c97064450528a0e45c7e7c365a15fbb13fd61d8c.png',
						'热词系列-奥力给':
							'https://i0.hdslb.com/bfs/emote/c9b8683827ec6c00fea5327c9bec14f581cef2aa.png',
						'热词系列-问号': 'https://i0.hdslb.com/bfs/emote/c1d1e76c12180adc8558f47006fe0e7ded4154bb.png',
						'热词系列-我哭了':
							'https://i0.hdslb.com/bfs/emote/9e0b3877d649aaf6538fbdd3f937e240a9d808e4.png',
						'热词系列-高产': 'https://i0.hdslb.com/bfs/emote/9db817cba4a7f4a42398f3b2ec7c0a8e0c247c42.png',
						'热词系列-我酸了':
							'https://i0.hdslb.com/bfs/emote/a8cbf3f6b8cd9377eeb15b9172f3cd683b2e4650.png',
						'热词系列-真香': 'https://i0.hdslb.com/bfs/emote/e68497c775feaac1c3b1a6cd63a50cfb11b767c4.png',
						'热词系列-我全都要':
							'https://i0.hdslb.com/bfs/emote/d424d1ad8d14c1c9b8367842bc68c658b9229bc1.png',
						'热词系列-神仙UP':
							'https://i0.hdslb.com/bfs/emote/a49e0d0db1e7d35a0f7411be13208951ab448f03.png',
						'热词系列-你币有了':
							'https://i0.hdslb.com/bfs/emote/84820c2b147a8ca02f3c4006b63f76c6313cbfa0.png',
						'热词系列-不愧是你':
							'https://i0.hdslb.com/bfs/emote/9ff2e356797c57ee3b1675ade0883d2d2247be9b.png',
						'热词系列-锤': 'https://i0.hdslb.com/bfs/emote/35668cc12ae25b9545420e4a85bf21a0bfc03e5d.png',
						'热词系列-秀': 'https://i0.hdslb.com/bfs/emote/50782fbf5d9b7f48f9467b5c53932981e321eedc.png',
						'热词系列-爷关更':
							'https://i0.hdslb.com/bfs/emote/faad40c56447f1f8abcb4045c17ce159d113d1fd.png',
						'热词系列-有生之年':
							'https://i0.hdslb.com/bfs/emote/f41fdafe2d0fbb8e8bc1598d2cf37e355560103a.png',
						'热词系列-镇站之宝':
							'https://i0.hdslb.com/bfs/emote/24e7a6a6e6383c987215fb905e3ee070aca259b5.png',
						'热词系列-我太南了':
							'https://i0.hdslb.com/bfs/emote/a523f3e4c63e4db1232365765d0ec452f83be97e.png',
						'热词系列-完结撒花':
							'https://i0.hdslb.com/bfs/emote/ea9db62ff5bca8e069cd70c4233353a802835422.png',
						'热词系列-大师球':
							'https://i0.hdslb.com/bfs/emote/f30089248dd137c568edabcb07cf67e0f6e98cf3.png',
						'热词系列-知识盲区':
							'https://i0.hdslb.com/bfs/emote/ccc94600b321a28116081e49ecedaa4ee8728312.png',
						'热词系列-“狼火”':
							'https://i0.hdslb.com/bfs/emote/33ccd3617bfa89e9d1498b13b7542b63f163e5de.png',
						'热词系列-你可真星':
							'https://i0.hdslb.com/bfs/emote/54c8ddff400abfe388060cabfbb579280fdea1be.png',
						'2233娘-大笑': 'https://i0.hdslb.com/bfs/emote/16b8794be990cefa6caeba4d901b934a227ee3b8.png',
						'2233娘-吃惊': 'https://i0.hdslb.com/bfs/emote/d1628c43d35b1530c0504a643ff80b6189fa0a43.png',
						'2233娘-大哭': 'https://i0.hdslb.com/bfs/emote/476a2a60f6e337b8c0697a592e0aa82781f6b33b.png',
						'2233娘-耶': 'https://i0.hdslb.com/bfs/emote/d7178e258a0efc969b65ccc2b1322fb235f5dff4.png',
						'2233娘-卖萌': 'https://i0.hdslb.com/bfs/emote/ea893aa25355de95ab4f03c2dad3f0c58d0c159e.png',
						'2233娘-疑问': 'https://i0.hdslb.com/bfs/emote/0b41f509351958dbb63d472fec0132d1bd03bd14.png',
						'2233娘-汗': 'https://i0.hdslb.com/bfs/emote/247cd9df8cdf84b18368c21e3b2dd374e84c0927.png',
						'2233娘-困惑': 'https://i0.hdslb.com/bfs/emote/714eeb4eae0d0933b4ff08b7df788b1982f6b940.png',
						'2233娘-怒': 'https://i0.hdslb.com/bfs/emote/f31953119c51b9748016440ac0b632f779929b37.png',
						'2233娘-委屈': 'https://i0.hdslb.com/bfs/emote/d9d0bf9d358af8d5761093ec66d4e3f60d963a63.png',
						'2233娘-郁闷': 'https://i0.hdslb.com/bfs/emote/485203fe7100f2c8fc40b2800a18fe20b35f2f1a.png',
						'2233娘-第一': 'https://i0.hdslb.com/bfs/emote/3754ee6e5985bd0bd7dfb668981f2a8733398ebd.png',
						'2233娘-喝水': 'https://i0.hdslb.com/bfs/emote/695bf5429472049b52c1e0de586f8a2511195a23.png',
						'2233娘-吐魂': 'https://i0.hdslb.com/bfs/emote/e999af499edf38a91ca68b1a9d2f97042c1d6734.png',
						'2233娘-无言': 'https://i0.hdslb.com/bfs/emote/fdb5870f32cfaf7949e0f88a13f6feba4a48b719.png',
						'小电视-笑': 'https://i0.hdslb.com/bfs/emote/f80d384875183dfe2e24be13011c595c0210d273.png',
						'小电视-发愁': 'https://i0.hdslb.com/bfs/emote/05e279abbf3f72d5cc45548504a4220c5514b8b9.png',
						'小电视-赞': 'https://i0.hdslb.com/bfs/emote/86ccf6d0b5480169bf80f3582fae09d7ed455c06.png',
						'小电视-差评': 'https://i0.hdslb.com/bfs/emote/38456e3bde2839b00b536a8be13934fa57c8e298.png',
						'小电视-嘟嘴': 'https://i0.hdslb.com/bfs/emote/6fd437f547ef1e4f231ff475d02f58bb94cef5a5.png',
						'小电视-汗': 'https://i0.hdslb.com/bfs/emote/5c150cec77eae1b05d5ca46526450ff3beeb44d2.png',
						'小电视-害羞': 'https://i0.hdslb.com/bfs/emote/de3aee88f7b6cc20ba9480c96c02f83a844381a9.png',
						'小电视-吃惊': 'https://i0.hdslb.com/bfs/emote/05188008ea84c70d94e0076e28de15bf56f4c441.png',
						'小电视-哭泣': 'https://i0.hdslb.com/bfs/emote/938bdf98df945576ae88e2a22931db07ded9e663.png',
						'小电视-太太喜欢':
							'https://i0.hdslb.com/bfs/emote/eb41a8c04840e4f77e76a4bff7a29ac89c432f4e.png',
						'小电视-好怒啊': 'https://i0.hdslb.com/bfs/emote/68d524b7e515396b6563d320fb710c64abfb1063.png',
						'小电视-困惑': 'https://i0.hdslb.com/bfs/emote/6853161f0eab3332b874ab7c6c0311035b7538f3.png',
						'小电视-我好兴奋':
							'https://i0.hdslb.com/bfs/emote/a695fe1301aab2675ab6f6e34757c25a863a8617.png',
						'小电视-思索': 'https://i0.hdslb.com/bfs/emote/f8219e484d5a55787c3f1722dc3112d0eba03a69.png',
						'小电视-无语': 'https://i0.hdslb.com/bfs/emote/fbd12affebfdaadd3d721bffdb685a6b1ee71219.png'
						// ... 更多表情
					}
				}
			}
		]
	]
};
