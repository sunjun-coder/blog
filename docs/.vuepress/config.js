module.exports = {
  title: 'sunjun_技术笔记', // 设置网站标题
  base: '/blog/',
  description: 'Just for 记录工作和学习过程中的笔记', //描述
  dest: './dist',   // 设置输出目录
  port: 2333, //端口
  themeConfig: { //主题配置
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' }, // 导航条
      { text: '组件文档', link: '/baseComponents/' },
      {
        text: 'github',
        link: 'http://n3ro.pw/login'
      }
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/baseComponents/': [
        {
          title: 'Button 按钮',
          collapsable: false,
          children: [
              ['button/hosJoyButton','防重复点击按钮 hosjoy-button']
            
          ]
        },
        {
          title: 'Upload 上传',
          collapsable: false,
          children: [
            ['upload/hosJoyUpload','多文件上传 hosjoy-Upload']
          ]
        },
        {
          title: 'Table 大表哥',
          collapsable: false,
          children: [
            ['table/hosJoyTable','多文件上传 hosjoy-Table']
          ]
        }
      ]
    }
  }
}