/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/git/myblog/public/2019/05/03/注册中心—多级缓存设计/index.html","7dddfba3405533e9f924cc63595add07"],["D:/git/myblog/public/2019/05/10/AQS抽象队列同步器/index.html","444a048fe58a804ce3513904dc494304"],["D:/git/myblog/public/2019/05/11/AQS组件原理及使用/index.html","50df0e28ac3da5e7b754068b6545559b"],["D:/git/myblog/public/2019/05/12/CAS自旋/index.html","31fda53999e2732bc6178125655a0242"],["D:/git/myblog/public/2019/05/12/synchronized/index.html","2e694c42351e124580b357ce15229e41"],["D:/git/myblog/public/2019/05/13/volatile/index.html","f87cc1218461a3135f5170a8b10f0ac3"],["D:/git/myblog/public/2019/06/01/GC调优/index.html","2d5148ac03400f84cfede2252bfc4e3b"],["D:/git/myblog/public/2019/06/02/JVM内存区/index.html","d37f6866340045286504dcf401ef361f"],["D:/git/myblog/public/2019/06/02/JVM垃圾回收/index.html","b6c41f1ae9318cfdf4f00881e17bb6bc"],["D:/git/myblog/public/2019/06/04/Mybatis实战笔记1.SqlMapConfig.xml文件配置/index.html","61a23b5a6198dc9b090b5c89157674f5"],["D:/git/myblog/public/2019/06/05/Mybatis实战笔记2.简单的parameterType和resultType介绍/index.html","eff155c8638d93c0c5217b240e48e396"],["D:/git/myblog/public/2019/06/06/Mybatis实战笔记3.当传参传入多个参数时（4种方法）/index.html","cacacc091a52e22424f2a14982451f5a"],["D:/git/myblog/public/2019/06/06/Mybatis实战笔记4.resultMap的简单使用/index.html","01252fa9e5972640ab81762b3d134c54"],["D:/git/myblog/public/2019/06/06/Redis分段锁优化/index.html","fa607fefeaec928f5057f56d89c5fc9c"],["D:/git/myblog/public/2019/06/06/Redis持久化/index.html","4d4f86ea484874aa37212db6339f6907"],["D:/git/myblog/public/2019/06/06/Redis缓存设计问题/index.html","e91ccbcee0d5b49494c5cc6c16209ef9"],["D:/git/myblog/public/2019/06/07/Mybatis实战笔记5.多表查询、关联查询（resultMap）/index.html","c95277ad57afcede74685eaa9980e7c1"],["D:/git/myblog/public/2019/06/07/Redis集群模式/index.html","a74d6d1ab43a0cdd9da55938aa85b631"],["D:/git/myblog/public/2019/06/09/Mybatis实战笔记6.resultMap的继承和collection的使用/index.html","1d6588dd3b49c20a76e195110d63e775"],["D:/git/myblog/public/2019/06/10/Mybatis实战笔记7.模糊查询/index.html","50e03e726911fa712d722458cf9e69ca"],["D:/git/myblog/public/2019/06/10/可靠消息最终一致性方案/index.html","e1cef7f081e1b70e65c62524376a18c3"],["D:/git/myblog/public/2019/06/11/Mybatis实战笔记8.自增长主键返回/index.html","7c14ad050b334d88899702e01305738a"],["D:/git/myblog/public/2019/06/13/Mybatis实战笔记9.开启二级缓存：cache/index.html","e4d0e1ecbb92261e0501e969879bc338"],["D:/git/myblog/public/2019/06/14/Mybatis实战笔记10.懒加载机制/index.html","2b44e75d7c62ff7d6f944a19fd51dfb4"],["D:/git/myblog/public/2019/06/15/Mybatis实战笔记11.比较全的多表查询/index.html","31168c7fa263f84952303e91f8c8e1c7"],["D:/git/myblog/public/2019/06/16/Mybatis实战笔记12.sql片段/index.html","eab2959cc9ca6b99fef4b836377c23de"],["D:/git/myblog/public/2019/06/17/Mybatis实战笔记13.多条件检索（动态sql语句）/index.html","a3e27b297c44a995ac6bdb6881cdc5b7"],["D:/git/myblog/public/2019/06/19/Mybatis实战笔记14.多条数据操作/index.html","75c82792505a0b936d8efbb7cee77e93"],["D:/git/myblog/public/2019/06/21/Mybatis实战笔记15.补充：trim标记/index.html","6153239bf0c2f540ac03416aded4b99b"],["D:/git/myblog/public/2019/06/22/Java8新特性/index.html","7577863857081cad707a7964804166a7"],["D:/git/myblog/public/2019/06/24/Mybatis实战笔记16.分页工具PagerHelper/index.html","609ce9d8d686c2d2e3d48e1ed7375898"],["D:/git/myblog/public/2019/07/01/Mysql性能优化/index.html","d1e5ea04b6074fa4f57fba50da24aa0d"],["D:/git/myblog/public/2019/07/02/MySQL语句优化/index.html","630823b7a15cee7927cf95ff6d1c9203"],["D:/git/myblog/public/2019/07/04/SQL Select 语句完整的执行顺序/index.html","5bb138403c677e24a7a69c97e1929e88"],["D:/git/myblog/public/2019/07/05/Kafka消息队列/index.html","9717b902d3d6616f091c590ca32a11f3"],["D:/git/myblog/public/2019/07/05/在千万级的数据库查询中，如何提高效率/index.html","7ef914bd8bf0c56013220aec352445a7"],["D:/git/myblog/public/2019/07/07/过滤器、拦截器、切片异同点/index.html","5cb0de42f2dbea48ae3bbc8323422d4e"],["D:/git/myblog/public/2019/07/08/MySql进阶3.函数/index.html","173ee4c43e2fb3ac088b278b5a0cc57f"],["D:/git/myblog/public/2019/07/10/Bean生命周期/index.html","ab15faf67d904b87d7be3cc751699d83"],["D:/git/myblog/public/2019/07/10/MySql进阶1.变量/index.html","e4790bdefb794b6ae08a6d1a10423c98"],["D:/git/myblog/public/2019/07/11/MySql进阶2.存储过程/index.html","1de1967568d7a5a2e6e510f257a030fc"],["D:/git/myblog/public/2019/07/12/MySql进阶4.流程控制/index.html","a98f756559fff6a7e61a7aa90199cb55"],["D:/git/myblog/public/2019/07/18/MySql进阶5.视图/index.html","b66478793d3cc70c3d31f58228cb7f75"],["D:/git/myblog/public/2019/07/20/MySql进阶6.索引失效/index.html","649a39d1b3a889c2607916ba8fa95d1f"],["D:/git/myblog/public/2019/08/05/fastJson用法/index.html","96c557c1c64cc320345dddab5b426197"],["D:/git/myblog/public/2019/08/12/MySQL索引/index.html","3e76ae35adf70632b598cbe2a06bba41"],["D:/git/myblog/public/2019/08/13/ZooKeeper入门认知/index.html","2e4ee57cb998cc2a0f5f4cd06810d900"],["D:/git/myblog/public/2019/08/15/IDEA插件和模板/index.html","8e1b9889f523c08a4ebd46d458038e9d"],["D:/git/myblog/public/2019/08/16/Linux下查看日志命令/index.html","e7a2285cbd12f417b09a2f750cccd263"],["D:/git/myblog/public/2019/08/18/List去重的几种方法/index.html","0d09d7c157da0998d24bb6734ed65571"],["D:/git/myblog/public/2019/08/18/手写双向链表/index.html","29cab653c5e679cb560e2215efb58677"],["D:/git/myblog/public/2019/08/20/IO模式/index.html","f34e2d81abe91dd81dbb637b81350c97"],["D:/git/myblog/public/2019/08/21/排序算法/index.html","4690575aece7164f8a122b3f4cf82df6"],["D:/git/myblog/public/2019/08/23/链表实现栈/index.html","3d0b0bc66bedf096ba533d89c52ed3ea"],["D:/git/myblog/public/2019/08/25/MQ的高可用的降级方案/index.html","0d32668d230dc7938c81018efedac469"],["D:/git/myblog/public/2019/09/01/秒杀系统/index.html","891bb7f30ec907ed98cbbf72518e6a23"],["D:/git/myblog/public/2019/09/21/分布式事务方案/index.html","e15d191970adb614425968960b878faa"],["D:/git/myblog/public/2019/09/22/分布式系ID方案/index.html","53b986e09ce5f9522ad83a7dbde9078c"],["D:/git/myblog/public/2019/09/22/分布式系统开发设计/index.html","c2cc6b764f3f704c4302fb6cadfe2650"],["D:/git/myblog/public/2019/09/22/微服务、分布式和集群的异同点/index.html","bee7e42e9df8cf8b9953aba763ad9052"],["D:/git/myblog/public/2019/09/23/分布式锁和分布式事务概念/index.html","8749cf78605a68ede4f382b8b0190fe9"],["D:/git/myblog/public/2019/09/24/MySQL乐观锁MVCC机制/index.html","7757c1f9ef58c8a00d871607614fe3c0"],["D:/git/myblog/public/2019/10/01/集合源码解析/index.html","5002c4a0da2ed1e662bb898b7c38d16c"],["D:/git/myblog/public/2019/10/05/加解密算法/index.html","3405df082599273055706da8cf17d8d6"],["D:/git/myblog/public/2019/10/06/微服务的高可用和线程池参数设计/index.html","9a2839d415e1b9d1a54c95118197dfd3"],["D:/git/myblog/public/2019/10/14/加解密流程/index.html","18cddfe408501d4e14a08040a7f6d1ed"],["D:/git/myblog/public/2019/11/07/设计模式手册1.适配器模式/index.html","d5a61ff43008bc6750766d0a423906ef"],["D:/git/myblog/public/2019/11/08/设计模式手册2.单例模式/index.html","6d9c4302d3ae54252209cb15b3a277b9"],["D:/git/myblog/public/2019/11/09/设计模式手册3.代理模式和AOP/index.html","949842c8136bc10d69ebd9b4e036c7b3"],["D:/git/myblog/public/2019/11/12/设计模式手册4.工厂模式/index.html","dfc2b0f84ecffd9bfe2827ccacb85725"],["D:/git/myblog/public/2019/11/13/设计模式手册5.观察者模式/index.html","6085549c62a47fc771e9005618526525"],["D:/git/myblog/public/2019/11/14/设计模式手册6.装饰者模式/index.html","236599fc2fc17b9b95d0a37456bcba39"],["D:/git/myblog/public/2019/11/15/设计模式手册7.策略模式/index.html","5b27d996ca160372093833de6b917df7"],["D:/git/myblog/public/2020/03/02/Docker命令/index.html","8cc9ea6eae86585e2a3a9b57e87cc138"],["D:/git/myblog/public/2020/03/02/Docker进阶/index.html","d935ccaeeee71375bfbd91649ad3cca7"],["D:/git/myblog/public/2020/05/05/Redission分布式锁/index.html","e2d93fb21ea2c427c4eb379b25c19479"],["D:/git/myblog/public/about/index.html","0f5eaa6e9e5885339465f11badb26012"],["D:/git/myblog/public/archives/2019/05/index.html","704b1b7edf4e9f0aba69decb5367d1cf"],["D:/git/myblog/public/archives/2019/06/index.html","48b715fd578a86918159b4f0f1c0c929"],["D:/git/myblog/public/archives/2019/06/page/2/index.html","714079975b28d65308870d10fed365d7"],["D:/git/myblog/public/archives/2019/06/page/3/index.html","9a1c5582f9913359574a7bdc26318f20"],["D:/git/myblog/public/archives/2019/06/page/4/index.html","df401101477b5cf0659e542d7729fe36"],["D:/git/myblog/public/archives/2019/07/index.html","cba7bf458228cef9056495c5075b5ebf"],["D:/git/myblog/public/archives/2019/07/page/2/index.html","372ad6fae351770739011b527823c166"],["D:/git/myblog/public/archives/2019/08/index.html","511376704c5c3b63b356bf26dbc7a77c"],["D:/git/myblog/public/archives/2019/08/page/2/index.html","e150ce2ac370cdebb241e29c326e19a4"],["D:/git/myblog/public/archives/2019/09/index.html","911a0e5e4932d9025ff13c5080695d89"],["D:/git/myblog/public/archives/2019/10/index.html","81014251535ddcd7b36cc878449cfbd8"],["D:/git/myblog/public/archives/2019/11/index.html","6d30575bddb8b951271865fb580480a4"],["D:/git/myblog/public/archives/2019/index.html","1feaf728db869547c2824916e401ac1c"],["D:/git/myblog/public/archives/2019/page/10/index.html","f08bdfae69579a1291d6c71199c06477"],["D:/git/myblog/public/archives/2019/page/2/index.html","80f9912050acd035360e67bd900a6898"],["D:/git/myblog/public/archives/2019/page/3/index.html","90fea8095a3b1b16d5c9f6ca2c458bd3"],["D:/git/myblog/public/archives/2019/page/4/index.html","3269aa2bfa0429e8b9817aeade33bfec"],["D:/git/myblog/public/archives/2019/page/5/index.html","cd18463c32498a080cbf334e0cdd3f28"],["D:/git/myblog/public/archives/2019/page/6/index.html","0ae2d37e717b95fee4d6136296a8628a"],["D:/git/myblog/public/archives/2019/page/7/index.html","70b542283ca25b4e169f397c7c0d050d"],["D:/git/myblog/public/archives/2019/page/8/index.html","33718c95ed3e705a8857be70f9984bb8"],["D:/git/myblog/public/archives/2019/page/9/index.html","3f9368b557d94ef83330139f313fb211"],["D:/git/myblog/public/archives/2020/03/index.html","3d576934286367516a8f7767396d8589"],["D:/git/myblog/public/archives/2020/05/index.html","c292b8c6b0d4286be32e53b047518886"],["D:/git/myblog/public/archives/2020/index.html","6ce5e6746176de064f4db8b3bcc191ea"],["D:/git/myblog/public/archives/index.html","a197a6ed917cdd7b8f98dbcb553e6ab3"],["D:/git/myblog/public/archives/page/10/index.html","a197a6ed917cdd7b8f98dbcb553e6ab3"],["D:/git/myblog/public/archives/page/2/index.html","a197a6ed917cdd7b8f98dbcb553e6ab3"],["D:/git/myblog/public/archives/page/3/index.html","a197a6ed917cdd7b8f98dbcb553e6ab3"],["D:/git/myblog/public/archives/page/4/index.html","a197a6ed917cdd7b8f98dbcb553e6ab3"],["D:/git/myblog/public/archives/page/5/index.html","a197a6ed917cdd7b8f98dbcb553e6ab3"],["D:/git/myblog/public/archives/page/6/index.html","a197a6ed917cdd7b8f98dbcb553e6ab3"],["D:/git/myblog/public/archives/page/7/index.html","a197a6ed917cdd7b8f98dbcb553e6ab3"],["D:/git/myblog/public/archives/page/8/index.html","a197a6ed917cdd7b8f98dbcb553e6ab3"],["D:/git/myblog/public/archives/page/9/index.html","a197a6ed917cdd7b8f98dbcb553e6ab3"],["D:/git/myblog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/git/myblog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/git/myblog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/git/myblog/public/categories/GC调优/index.html","572ad933ef770bb1346c88cc2c0879a8"],["D:/git/myblog/public/categories/Java并发/index.html","1950f6e6b4474e9d7a86c399210e1df1"],["D:/git/myblog/public/categories/MyBatis/index.html","4822ec1162fd3a51880adff90c229b61"],["D:/git/myblog/public/categories/MyBatis/page/2/index.html","43f2fd9db4dbb86d1405d608dce84a50"],["D:/git/myblog/public/categories/MySql进阶/index.html","0b252608106013039c2314e47e29cb26"],["D:/git/myblog/public/categories/Redis/index.html","0db9fbbf6d8810a20e5eabb8fe0157a8"],["D:/git/myblog/public/categories/index.html","8a2ec397735a6301cb39ae3e7c348cd2"],["D:/git/myblog/public/categories/分布式/index.html","afeb9009c1a2b1100e64325052de3f3b"],["D:/git/myblog/public/categories/微服务/index.html","06bcc585e5a8c2f2be2c6eb18ac6b361"],["D:/git/myblog/public/categories/设计模式/index.html","6973e7ffbb34a9371747afe53932db8c"],["D:/git/myblog/public/css/style.css","63d783cb64a4720f00c80bd91bc95bc5"],["D:/git/myblog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/git/myblog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/git/myblog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/git/myblog/public/friends/index.html","f1a08512ecbe53c29273ab336cc35a64"],["D:/git/myblog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/git/myblog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/git/myblog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/git/myblog/public/index.html","583a110bd1e5d2cd719a6cc6f9982bb4"],["D:/git/myblog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/git/myblog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/git/myblog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/git/myblog/public/page/10/index.html","7d8135c950c91c26772fd9cb8f82bd9c"],["D:/git/myblog/public/page/2/index.html","7ff33095f08fe0ed473e50ecf5cdd4f8"],["D:/git/myblog/public/page/3/index.html","f5a041923dff26635919c1271a463c8d"],["D:/git/myblog/public/page/4/index.html","b7f58a52e304224a419b06ef72f33779"],["D:/git/myblog/public/page/5/index.html","55d7f27f69fbcbf90376fcb056b51049"],["D:/git/myblog/public/page/6/index.html","d27eef203c3729dcf2b2be9b016abd41"],["D:/git/myblog/public/page/7/index.html","2fe69cea563dc4cbffe246c0045d5fd6"],["D:/git/myblog/public/page/8/index.html","695f1d828c37c3cc15fc1d34b54ad326"],["D:/git/myblog/public/page/9/index.html","b65cc9f3d3c25c60ca730e9c31315313"],["D:/git/myblog/public/tags/AOP/index.html","b98e60b51a2042d634d913b70c842ef8"],["D:/git/myblog/public/tags/AQS/index.html","ee9f8fc805b46360771463bc9b59250e"],["D:/git/myblog/public/tags/Bean/index.html","f21e49a308701c0e7822bafebce1a7d1"],["D:/git/myblog/public/tags/CAS/index.html","acebc4f6c8ca2b6c13842fa8f9b8a430"],["D:/git/myblog/public/tags/Docker/index.html","958d9f9c4f43d3a376579a181d4aa36a"],["D:/git/myblog/public/tags/Eruka/index.html","6721fb891e717a11fe00b1c27c8993a5"],["D:/git/myblog/public/tags/FastJson/index.html","95bd10e17d71e84b1c097de253b0c4c3"],["D:/git/myblog/public/tags/GC/index.html","2e416065b6d3e3bc1ff65e2cdd28a7f5"],["D:/git/myblog/public/tags/HashMap/index.html","456e863c41069999be516be5ff6e3f57"],["D:/git/myblog/public/tags/ID生成/index.html","dd18c2b6f066aaaf29204742f3b3e131"],["D:/git/myblog/public/tags/IO模式/index.html","966b07367bf623783e80206d9b748b5b"],["D:/git/myblog/public/tags/Idea/index.html","5570b9f21f2f92eeb0783e3e104cfcd7"],["D:/git/myblog/public/tags/JVM/index.html","48152348d92d329ccbde259e723a8605"],["D:/git/myblog/public/tags/Java8新特性/index.html","02ab018be6d416f1e2e37b3d470572a4"],["D:/git/myblog/public/tags/Java基础/index.html","254cb7fee34ab021b16869655ddfafc1"],["D:/git/myblog/public/tags/MySql/index.html","039138f48048e9baa190acee93f6531b"],["D:/git/myblog/public/tags/MySql进阶/index.html","643810d03a11c9bdfba18b5aa54f0503"],["D:/git/myblog/public/tags/RSA/index.html","79bd7a67b5e1cd9045c374f24ca61ac8"],["D:/git/myblog/public/tags/Redis/index.html","a95f3d137e4ef266605f7536d8a35dae"],["D:/git/myblog/public/tags/Zookeeper/index.html","933a0a804f7ce97224602e49f059a978"],["D:/git/myblog/public/tags/index.html","58eca6f5be01eaf1c4fd9891b86118ba"],["D:/git/myblog/public/tags/kafka/index.html","c31d1f06b52a021faa604056eaaf7cbb"],["D:/git/myblog/public/tags/synchronized/index.html","818c5bf221f3261220f864b093c8a321"],["D:/git/myblog/public/tags/volatile/index.html","034422f7c07bb8c60e0ebf0f838a1db0"],["D:/git/myblog/public/tags/中间件/index.html","056648f190a87b70fb42094a845f09ee"],["D:/git/myblog/public/tags/事务/index.html","eb78cc5da9e1ea028b70f61bf9e5a878"],["D:/git/myblog/public/tags/分布式/index.html","f3c03ff77c60a4e2b53ddf44f1577f99"],["D:/git/myblog/public/tags/加解密/index.html","d4710530fdff4fbccb37ba185576837d"],["D:/git/myblog/public/tags/单例模式/index.html","082dda36ace570f381a2cde2d04c1655"],["D:/git/myblog/public/tags/国密/index.html","cff53a5b2c17b3820fcdea0164f2eec0"],["D:/git/myblog/public/tags/工具/index.html","001aaf3f8da300d98ee2edd1e8a7b450"],["D:/git/myblog/public/tags/并发/index.html","e2b5535d9e0e6d6a4a76ed6801f7e9b4"],["D:/git/myblog/public/tags/微服务/index.html","f74843670f6792efa82123a15cbb3dc5"],["D:/git/myblog/public/tags/数据库/index.html","83cebdcbcd3243195f209b5dc0fa62b5"],["D:/git/myblog/public/tags/消息队列/index.html","7f94e8c510da3e33c715156a1f7a1eac"],["D:/git/myblog/public/tags/热门/index.html","b0455e355e66ddbb30bf5a6f2eacd30a"],["D:/git/myblog/public/tags/秒杀/index.html","ee5e87d1e83f5194ae24fc655afe49e6"],["D:/git/myblog/public/tags/算法/index.html","2e1f0a9e12439983f2fee7fa0fb2c0a4"],["D:/git/myblog/public/tags/线程/index.html","203857847e59accba3478db2730f79aa"],["D:/git/myblog/public/tags/缓存/index.html","685b570a60bf83c972d43698173b6845"],["D:/git/myblog/public/tags/过滤器/index.html","375932fcd36cf2689380b2dfc4b27ed9"],["D:/git/myblog/public/tags/集合/index.html","040db9d8faa0771ffb35bd1efcfc3931"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







