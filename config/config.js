var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "伍孝飞(Wu,Xiaofei)",
    // sex: "男",
    // age: "22",
    // phone: "19870887127",
    email: "1337675840@qq.com",
    address: "ShanghaiTech University",
    // qq: "1637318597",
    log: "Happycoder",
    // excpect_work: "Java/Go后端开发",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "明天不一定会更好，但要坚信更好的明天一定会来。",
        "要做的事情总找得出时间和机会，不愿意做的事情也总能找得出借口。",
        "Gor For It!",
        "有智者立长志，无志者长立志。",
        "那些过去的眼泪终将风干在记忆里。",
        "真相，是为了剿灭幻想。",
        "我欲将心向明月，奈何明月照沟渠。",
        "春风得意马蹄疾，一日看尽长安花。",
        "天凉好个秋！",
        "老骥伏枥，志在千里。烈士暮年，壮心不已。",
        "老当益壮，宁移白首之心。穷且益坚，不坠青云之志。",
        "我们必须拿我们所有的， 去换我们所没有的",
        "蒹葭苍苍，白露为霜；所谓伊人，在水一方。",
        "数风流人物，还看今朝！"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "The miracle appear in bad luck<br>",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>I am Wu Xiaofei. I completed my undergraduate studies in Computer Science /and Technology at Northeast University, and pursued my graduate studies at ShanghaiTech University. My research focuses on computer vision, human behavior prediction, and interactive human-computer interaction.</p>" 
        // "<p>我有着较多的Java编程经验，计算机基础知识掌握扎实，能够在工作中很好的完成自己的任务。此外，我有着充满激情的工作态度，团队协同作战能力强，同时我也具备独立开发的能力，擅于发现并解决问题。我的执行力强、责任感高、集体荣誉感强、敢于担当，能够接受加班或出差等安排</p>" +
        // "<p>十分期待与您的联系!</p>",
        ,


    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */
    // skills: [
    //     ["Java", 80, "red"],
    //     ["GoLang", 77, "blue"],
    //     ["SQL", 75, "#1abc9c"],
    //     ["HTML5", 67, "rgba(0,0,0)"],
    //     ["CSS3", 60, "yellow"],
    //     ["JavaScript", 70, "pink"]
    // ],


    // /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    // skills_description: "<ul>" +
    //     "     <li>操作系统、计算机网络等编程基础知识良好。</li>" +
    //     "     <li>熟练掌握Java基础。</li>" +
    //     "     <li>熟悉JavaIO、多线程、集合等基础框架。</li>" +
    //     "     <li>了解JVM原理。</li>" +
    //     "     <li>熟悉Go语言开发基本知识。</li>" +
    //     "     <li>熟悉SQL语句编写以及调优。</li>" +
    //     "     <li>熟悉基本Linux命令操作。</li>" +
    //     "     <li>熟悉Spring、ibatis、struts等框架的使用，了解其原理与机制。</li>" +
    //     "     <li>熟悉缓存、消息等机制。</li>" +
    //     "     <li>了解分布式系统的设计与应用。</li>" +
    //     "     <li>熟悉HTML、CSS、JavaScript以及相应前端知识。</li>" +
    //     " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/xgboost-predernn.png", "http://www.c-s-a.org.cn/html/2022/10/8731.html", "中文核心", "时序预测"],

    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    // work: [
    //     //如果您内有工作经历，您可以采取下列写法
    //     // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

    //     ["2020/7/1 — 2021/8/10", "<br>阎王殿实习生",
    //         "<p><strong>阎王殿研发部</strong></p>" +
    //         "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>" +
    //         "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
    //     ],

    //     ["2020/7/1 — 2021/8/10", "<br>阎王殿实习生",
    //         "<p><strong>阎王殿研发部</strong></p>" +
    //         "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>" +
    //         "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
    //     ]
    // ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2023", "上海科技大学","Admitted to ShanghaiTech University"],
        ["2022", "CCPC区域赛 银奖","CCPC Regional Competition Silver Award"],
        ["2022", "robocom机器人开发者大赛国家二等奖", "The National Second Prize of Robocom Robot Developer Contest"],
        ["2021", "程序设计天梯赛个人国家三等奖", "National Third Prize in Program Design Ladder Competition"],
        ["2020", "辽宁省程序设计竞赛金奖", "Gold Award of Liaoning Province Programming Competition"],
        ["2019", "东北大学", "Admitted to Northeastern University"],
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        // ["./svg/LeetCode.svg", "https://leetcode-cn.com/u/happysnaker/", "我的力扣主页"],
        ["./svg/github.svg", "https://github.com/wxf-0415", "我的GitHub主页"],
        // ["./svg/博客.svg", "http://1.15.234.109:8000", "我的个人博客"],
        // ["./svg/掘金.svg", "https://juejin.cn/user/3853167638625000", "我的掘金主页"],
        ["./svg/知乎.svg", "https://www.zhihu.com/people/79-24-97-64", "我的知乎主页"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}