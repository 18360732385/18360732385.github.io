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

var precacheConfig = [["D:/git/myblog/public/2019/03/04/Redis实操笔记1.安装/index.html","cd14e034508fd845eb287d4dcc9aed10"],["D:/git/myblog/public/2019/03/05/Redis实操笔记2.配置/index.html","03cb5ea64f4501061d51f699d6126cbb"],["D:/git/myblog/public/2019/03/06/Redis实操笔记3.搭建Redis集群/index.html","f4db12c723d27e0f9985a3f6ec3599aa"],["D:/git/myblog/public/2019/03/07/Redis实操笔记4.数据库操作/index.html","d8f8f4b221b8e4f2bc9e3e205b49c421"],["D:/git/myblog/public/2019/03/07/Redis实操笔记5.String/index.html","943d89981bbba8b0f0132f807538b461"],["D:/git/myblog/public/2019/03/08/Redis实操笔记6.Hash/index.html","56a64163da1efc379a2af6f03dc57ce9"],["D:/git/myblog/public/2019/03/09/Redis实操笔记7.List/index.html","b254e010bfd195b2b551582d7860d9d2"],["D:/git/myblog/public/2019/03/10/Redis实操笔记8.Set/index.html","d98062c3389d38d73696d5271186a012"],["D:/git/myblog/public/2019/03/11/Redis实操笔记9.SortedSet/index.html","194e9d681124617590a0dcf9d6fd08e0"],["D:/git/myblog/public/2019/05/03/注册中心—多级缓存设计/index.html","67a63e9d940be3c70228b6cabe3a5586"],["D:/git/myblog/public/2019/05/11/AQS组件原理及使用/index.html","0428286ff2290af5e22fb5ef64d2f53e"],["D:/git/myblog/public/2019/05/12/CAS自旋/index.html","f3edd27f1ce9e49163c5d94c6a86ac3f"],["D:/git/myblog/public/2019/05/12/synchronized/index.html","1e7c20bd877573ab88c355858064990b"],["D:/git/myblog/public/2019/05/13/volatile/index.html","bc128157e3deab0cc3a4f11173f13140"],["D:/git/myblog/public/2019/06/02/JVM内存区/index.html","8182066afd713f5fd96b162999eac7b3"],["D:/git/myblog/public/2019/06/04/Mybatis实战笔记1.SqlMapConfig.xml文件配置/index.html","47bb68c0b1f8b8fd6b7061df7f485585"],["D:/git/myblog/public/2019/06/05/Mybatis实战笔记2.简单的parameterType和resultType介绍/index.html","3b79b80dcc846892629d06db64bbf8b4"],["D:/git/myblog/public/2019/06/06/Mybatis实战笔记3.当传参传入多个参数时（4种方法）/index.html","d5ea1cd4f02d8e9d446711235c4c4f03"],["D:/git/myblog/public/2019/06/06/Mybatis实战笔记4.resultMap的简单使用/index.html","cebfa28889843724124a43a5fc7e925b"],["D:/git/myblog/public/2019/06/06/Redis分段锁优化/index.html","a55a809db9135eded2d9881ee89e5d18"],["D:/git/myblog/public/2019/06/06/Redis持久化/index.html","e403853bff084c2587df27e41e6d0d36"],["D:/git/myblog/public/2019/06/06/Redis缓存设计问题/index.html","dfcd98bca848bf9328e4fd3a9ae2aae9"],["D:/git/myblog/public/2019/06/07/Mybatis实战笔记5.多表查询、关联查询（resultMap）/index.html","a0a9f20f79813e7d299c07d6bad6576e"],["D:/git/myblog/public/2019/06/07/Redis集群模式/index.html","3492db0dab66bb0e4cf58588da9e523b"],["D:/git/myblog/public/2019/06/09/Mybatis实战笔记6.resultMap的继承和collection的使用/index.html","c69ea64b240cdd6389fbbb7e8743ff9a"],["D:/git/myblog/public/2019/06/10/Mybatis实战笔记7.模糊查询/index.html","18632e6b1b91f725a731efa8e3316a0e"],["D:/git/myblog/public/2019/06/11/Mybatis实战笔记8.自增长主键返回/index.html","909cac19cd92090784e1004ad5ef213a"],["D:/git/myblog/public/2019/06/13/Mybatis实战笔记9.开启二级缓存：cache/index.html","728af5b8b569f0c69de4b60a18dbea8d"],["D:/git/myblog/public/2019/06/14/Mybatis实战笔记10.懒加载机制/index.html","4ec1941d6a5f2ed95fb01a68879b0d5c"],["D:/git/myblog/public/2019/06/15/Mybatis实战笔记11.比较全的多表查询/index.html","73b382c836c69345c929320015a6e6e4"],["D:/git/myblog/public/2019/06/16/Mybatis实战笔记12.sql片段/index.html","c5870c90184f6ab0cc65f644e27697f5"],["D:/git/myblog/public/2019/06/17/Mybatis实战笔记13.多条件检索（动态sql语句）/index.html","8d12b37c7b069a2092641d1378661706"],["D:/git/myblog/public/2019/06/19/Mybatis实战笔记14.多条数据操作/index.html","dfb50db267973b2c8a3879408c94a6e3"],["D:/git/myblog/public/2019/06/21/Mybatis实战笔记15.补充：trim标记/index.html","5570445bca8a4ca6d070ea27c685dfe6"],["D:/git/myblog/public/2019/06/22/Java8新特性/index.html","a0aa369af7615dab07da98ec732388d4"],["D:/git/myblog/public/2019/06/24/Mybatis实战笔记16.分页工具PagerHelper/index.html","883af2933ba23daf146e12765414abf7"],["D:/git/myblog/public/2019/07/01/Mysql性能优化/index.html","8c34ed0cc6afca25c9aa0ecb40ebeaa7"],["D:/git/myblog/public/2019/07/02/MySQL语句优化/index.html","abcc74782719a86b1b6192f9d60a0e7c"],["D:/git/myblog/public/2019/07/04/SQL Select 语句完整的执行顺序/index.html","b28d0587fc53c0feb91ca9b79be6f66c"],["D:/git/myblog/public/2019/07/05/在千万级的数据库查询中，如何提高效率/index.html","cb1dde0ec704fb7fdcf670ce71bfd451"],["D:/git/myblog/public/2019/07/07/过滤器、拦截器、切片异同点/index.html","228a383ea794ddc4652392a988049eb9"],["D:/git/myblog/public/2019/07/08/MySql进阶3.函数/index.html","cc7e0cfed424665f1b8c54166de46db9"],["D:/git/myblog/public/2019/07/10/MySql进阶1.变量/index.html","acdf7e80e736a32e8e73a9cd5a0f32f8"],["D:/git/myblog/public/2019/07/11/MySql进阶2.存储过程/index.html","de1c28faa4cc04b1a808a8a03b8463e3"],["D:/git/myblog/public/2019/07/12/MySql进阶4.流程控制/index.html","e222b49605c6351e43474ea9201b95f9"],["D:/git/myblog/public/2019/07/18/MySql进阶5.视图/index.html","a0cb728fcfb33f7199c1c1a4336d02f1"],["D:/git/myblog/public/2019/07/20/MySql进阶6.索引失效/index.html","a8c2ef31a8b651ffaf0d51a8e2780ba6"],["D:/git/myblog/public/2019/08/05/fastJson用法/index.html","44fe30c9edd29ea54d0a4fc9f0b70468"],["D:/git/myblog/public/2019/08/12/MySQL索引/index.html","9697acc32b7cef1d15bf26b0c31f4f40"],["D:/git/myblog/public/2019/08/13/ZooKeeper入门认知/index.html","cf3645751bc3dd7c0c8b245e4dddd4e6"],["D:/git/myblog/public/2019/08/15/IDEA插件和模板/index.html","ab319350afb17b0f87462f4e6c4c5ad0"],["D:/git/myblog/public/2019/08/16/Linux下查看日志命令/index.html","e6bed511426aed5518d44b88bb49d134"],["D:/git/myblog/public/2019/08/18/List去重的几种方法/index.html","a82f15f8c6d45217e22b54da1341ebd8"],["D:/git/myblog/public/2019/08/20/IO模式/index.html","dc96e7f0fe364649579be4e2492ba359"],["D:/git/myblog/public/2019/08/21/排序算法/index.html","c7e3f557e0fa5930695ea35e85ec63fe"],["D:/git/myblog/public/2019/08/23/链表实现栈/index.html","1516e08f10c6f21e876a91e8f645e89e"],["D:/git/myblog/public/2019/08/25/MQ的高可用的降级方案/index.html","41327d444383b4c3a62dfa62ff3c96cf"],["D:/git/myblog/public/2019/09/01/秒杀系统/index.html","98cc4cc98bd002418daf9844e62b18d2"],["D:/git/myblog/public/2019/09/21/分布式事务方案/index.html","ec7c010adacc314ffd24ee42efed61be"],["D:/git/myblog/public/2019/09/22/分布式系ID方案/index.html","7fec02ea385b2f762d9dfe89fb5eb70e"],["D:/git/myblog/public/2019/09/22/分布式系统开发设计/index.html","b6c450609769d86b53ce23748589a57d"],["D:/git/myblog/public/2019/09/22/微服务、分布式和集群的异同点/index.html","d7f066fa40a515826b12e2090036dc46"],["D:/git/myblog/public/2019/09/23/分布式锁和分布式事务概念/index.html","0a4d49b08a1535733c9245b9151e1936"],["D:/git/myblog/public/2019/09/24/MySQL乐观锁MVCC机制/index.html","ea88ca2574b5d8311f88df23ccfd0a03"],["D:/git/myblog/public/2019/10/01/集合源码解析/index.html","ec83df9df05d2c4208bc912b3a25a34b"],["D:/git/myblog/public/2019/11/07/设计模式手册1.适配器模式/index.html","d72766ec7966eecc22194da6d2fd62a7"],["D:/git/myblog/public/2019/11/08/设计模式手册2.单例模式/index.html","4fbd9958b1f1cedbe8068882ad8c1814"],["D:/git/myblog/public/2019/11/09/设计模式手册3.代理模式和AOP/index.html","ab6adf0fa2a15a9d791d4575c19568a4"],["D:/git/myblog/public/2019/11/12/设计模式手册4.工厂模式/index.html","0427479610fd68919afed3f195c2ac5a"],["D:/git/myblog/public/2019/11/13/设计模式手册5.观察者模式/index.html","7bf807fecea61dc70ab5c28e913c3d09"],["D:/git/myblog/public/2019/11/14/设计模式手册6.装饰者模式/index.html","d01ad257acfaa8ff367ae33608d37f20"],["D:/git/myblog/public/2020/03/02/Docker命令/index.html","757b67b374b29076f8c2f600892ee736"],["D:/git/myblog/public/2020/03/02/Docker进阶/index.html","68d6f811167f1841645387278ccbd8f1"],["D:/git/myblog/public/2020/04/05/Kafka消息队列/index.html","d7fb94f089c5773e1a6e7b91ab72aaf3"],["D:/git/myblog/public/2020/04/06/微服务的高可用和线程池参数设计/index.html","9b65954767803302e143e97b7d417894"],["D:/git/myblog/public/2020/04/27/JVM垃圾回收/index.html","c9ecdf61a930b73a0293273ab20f0a4f"],["D:/git/myblog/public/2020/05/05/Redission分布式锁/index.html","cd60e22e39440a4edce61eebae506d93"],["D:/git/myblog/public/2020/05/05/加解密算法/index.html","244ed10f3c412cdc84058a5153cfddaa"],["D:/git/myblog/public/2020/05/10/AQS抽象队列同步器/index.html","067e8f33f81bb60dfb6aa10d57d0533f"],["D:/git/myblog/public/2020/05/14/加解密流程/index.html","6f050be5ebe0e75570e84bee8e81e52c"],["D:/git/myblog/public/2020/05/15/设计模式手册7.策略模式/index.html","ae6dc83f34207aafe729c1bbf2a2a353"],["D:/git/myblog/public/2020/05/18/手写双向链表/index.html","33f8a496f23c71d9891e684ffcebc5b9"],["D:/git/myblog/public/2020/06/01/GC调优/index.html","5cb291828a4e58448c9f73bdd48ce6e4"],["D:/git/myblog/public/2020/06/10/可靠消息最终一致性方案/index.html","7ca4f346e192b46b22f0e7d082179432"],["D:/git/myblog/public/about/index.html","5534418b00cef27bf89bcc9d54189145"],["D:/git/myblog/public/archives/2019/03/index.html","52fd05f0710859a4ac5f67ef23f39c3f"],["D:/git/myblog/public/archives/2019/03/page/2/index.html","0728ed09a43b9bcfb391dbc4cef751f5"],["D:/git/myblog/public/archives/2019/05/index.html","5c847a64d6137985ff40096d09c5e84d"],["D:/git/myblog/public/archives/2019/06/index.html","25c9ec0921fe3624066d345f4b0d7185"],["D:/git/myblog/public/archives/2019/06/page/2/index.html","eca938f86ddfc3c93477d2c4dd4494a5"],["D:/git/myblog/public/archives/2019/06/page/3/index.html","58d8624000cd61a7da0d641ac5aa91e3"],["D:/git/myblog/public/archives/2019/07/index.html","e7df45fc6a760124e5ee93e615b346a0"],["D:/git/myblog/public/archives/2019/07/page/2/index.html","49ac6b567552fda411dffdc9ae53ec89"],["D:/git/myblog/public/archives/2019/08/index.html","5a15cc8894fb396e3ea97100d0a736c5"],["D:/git/myblog/public/archives/2019/08/page/2/index.html","f2f03cb77eca83096393e747ae2e5427"],["D:/git/myblog/public/archives/2019/09/index.html","4984d9a3eb41de717717a429034ee675"],["D:/git/myblog/public/archives/2019/10/index.html","e2c00612fc5f1bafd5fb6507b481801e"],["D:/git/myblog/public/archives/2019/11/index.html","0e94e16b08a51f82a71f9bcd6dfc5f3b"],["D:/git/myblog/public/archives/2019/index.html","1f55f590e82c91b7cff224e66482ec94"],["D:/git/myblog/public/archives/2019/page/2/index.html","66d7dc667d7a1f2966d3c2146186ee6d"],["D:/git/myblog/public/archives/2019/page/3/index.html","7d991f4a72ffc543b4ac3f1e9cb29f18"],["D:/git/myblog/public/archives/2019/page/4/index.html","2e6da4e0bc7deab749aa3c35273c4325"],["D:/git/myblog/public/archives/2019/page/5/index.html","c972e2a02de16a3a6d85f11eb4d5b519"],["D:/git/myblog/public/archives/2019/page/6/index.html","c8e6cc9097ea9f186c2e2bfde446fc29"],["D:/git/myblog/public/archives/2019/page/7/index.html","3abebdb8c9495ac68be0e974f60ea99d"],["D:/git/myblog/public/archives/2019/page/8/index.html","c4bfb6b0bb1e3fa62757350bca45d942"],["D:/git/myblog/public/archives/2019/page/9/index.html","5306b32663752e531784d1a4eb2d5daf"],["D:/git/myblog/public/archives/2020/03/index.html","bb553ec3b86a8c6379e6110eee657cba"],["D:/git/myblog/public/archives/2020/04/index.html","3afafb3e9e5a722018107d5e484f3a48"],["D:/git/myblog/public/archives/2020/05/index.html","639c5517003ad999d2dd95300caf4781"],["D:/git/myblog/public/archives/2020/06/index.html","d3f7c11f9df1ae62526adcf47eb00be9"],["D:/git/myblog/public/archives/2020/index.html","09e96f6ca4dad3377ea460a8f7e509a4"],["D:/git/myblog/public/archives/2020/page/2/index.html","c7af38e7eb591acfd0af4017f6550eb5"],["D:/git/myblog/public/archives/index.html","f3d7a88480d468ab607853500bb5b86d"],["D:/git/myblog/public/archives/page/10/index.html","f3d7a88480d468ab607853500bb5b86d"],["D:/git/myblog/public/archives/page/11/index.html","f3d7a88480d468ab607853500bb5b86d"],["D:/git/myblog/public/archives/page/2/index.html","f3d7a88480d468ab607853500bb5b86d"],["D:/git/myblog/public/archives/page/3/index.html","f3d7a88480d468ab607853500bb5b86d"],["D:/git/myblog/public/archives/page/4/index.html","f3d7a88480d468ab607853500bb5b86d"],["D:/git/myblog/public/archives/page/5/index.html","f3d7a88480d468ab607853500bb5b86d"],["D:/git/myblog/public/archives/page/6/index.html","f3d7a88480d468ab607853500bb5b86d"],["D:/git/myblog/public/archives/page/7/index.html","f3d7a88480d468ab607853500bb5b86d"],["D:/git/myblog/public/archives/page/8/index.html","f3d7a88480d468ab607853500bb5b86d"],["D:/git/myblog/public/archives/page/9/index.html","f3d7a88480d468ab607853500bb5b86d"],["D:/git/myblog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/git/myblog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/git/myblog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/git/myblog/public/categories/GC调优/index.html","ac2c820d6eab91461a6c14ec7c528dee"],["D:/git/myblog/public/categories/Java并发/index.html","afadbfbea1de6cfceee94ee6ddbf66c3"],["D:/git/myblog/public/categories/MyBatis/index.html","2a3d9f2ef081be2467705a480df6b385"],["D:/git/myblog/public/categories/MyBatis/page/2/index.html","5f2ec80b7486451407b1e501ec55d597"],["D:/git/myblog/public/categories/MySql进阶/index.html","6b8bea0c098ed87b2a5495317a54ad58"],["D:/git/myblog/public/categories/Redis/index.html","2d9fbd7c84958e74fdd8e1bb4a24fa1e"],["D:/git/myblog/public/categories/Redis实操笔记/index.html","c143ab54a97e796216398b83dff91c78"],["D:/git/myblog/public/categories/Redis实操笔记/page/2/index.html","e67d9a243a0b5b91fffe49d90a30d1d6"],["D:/git/myblog/public/categories/index.html","9ae4939d8ada137fbb400cd89f6895ee"],["D:/git/myblog/public/categories/分布式/index.html","3fe7b48898bdb10a4212a4c709c34900"],["D:/git/myblog/public/categories/微服务/index.html","5f58401acb77cfaf33fbdebade9a284f"],["D:/git/myblog/public/categories/设计模式/index.html","2e4c4aa6702b855c95634d03a3b542db"],["D:/git/myblog/public/css/style.css","63d783cb64a4720f00c80bd91bc95bc5"],["D:/git/myblog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/git/myblog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/git/myblog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/git/myblog/public/friends/index.html","3fc9013856b50d39781e3fac34d380f8"],["D:/git/myblog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/git/myblog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/git/myblog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/git/myblog/public/index.html","63ca85ed57183d9fcd8712053008461e"],["D:/git/myblog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/git/myblog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/git/myblog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/git/myblog/public/mylist/index.html","ff2337b3b6aa1756156aaf54e815f44b"],["D:/git/myblog/public/mylist/一个下雨的清晨.html","254d1c0f4bd1c58f1d5f9d32b028a2d9"],["D:/git/myblog/public/mylist/一句话也不说.html","c065704502bc79a791c298031f9622d7"],["D:/git/myblog/public/mylist/一只猫老了.html","09fabf016590f7e3afe778b5c2388e94"],["D:/git/myblog/public/mylist/一滴雨落下.html","71fa5245e3bbdc907c8db05fd7c0d651"],["D:/git/myblog/public/mylist/一片云把一屋子的梦扯开.html","0bab2a750fdd09e3e86e5647b42215d9"],["D:/git/myblog/public/mylist/三月会有最后一天吗.html","ae5fa195bdfd795816bc223d24c413da"],["D:/git/myblog/public/mylist/不会爱上一个梦.html","92d16d574db32c534fca3faedeed0bd2"],["D:/git/myblog/public/mylist/今夜.html","825051cc754341a02bb8504c609ff77f"],["D:/git/myblog/public/mylist/今夜你要去哪里.html","2741993fdcf36e9ff6f86f3e373f9f3c"],["D:/git/myblog/public/mylist/你是温柔的女人.html","937092b670d9818e575616bb94d1687f"],["D:/git/myblog/public/mylist/你用手触碰一颗易碎的心.html","27f79b5def723a9a1bd793be9eef227e"],["D:/git/myblog/public/mylist/你端坐屋子的一头.html","4e4ad5daa7dcf4ee23432c8f3e593f2a"],["D:/git/myblog/public/mylist/你身处在这个初夏.html","1812c064a0a4eadd66c3222ea297447b"],["D:/git/myblog/public/mylist/八月的第一天.html","5b7c4526d9b7b7dbdf406c95ea5d3be2"],["D:/git/myblog/public/mylist/写诗是一个人的事.html","4def87f2fac55afcb757051ff6dd2a35"],["D:/git/myblog/public/mylist/十六楼的阳台.html","00337c56bfba2eff3b73f538948b0235"],["D:/git/myblog/public/mylist/去年的这个时候.html","9f0fa9414efa5087be86c63ab3eb10db"],["D:/git/myblog/public/mylist/夏日走后.html","7ee86e6906bffc47cbc6f85f93596298"],["D:/git/myblog/public/mylist/夜色之中.html","1727aaab16267e67c96d5cf689e2e8c4"],["D:/git/myblog/public/mylist/天会下雨.html","63be31f9f57ef307fdf8dc928b556d8b"],["D:/git/myblog/public/mylist/天凉了.html","3b907281350e03a63b03dd4a87ec7c03"],["D:/git/myblog/public/mylist/如果这是春天.html","212e527b4dc6edf70ddf2563ecf5dcc2"],["D:/git/myblog/public/mylist/情人.html","5fdaa059d093a94715f75c591367f7d4"],["D:/git/myblog/public/mylist/把月光占为己有.html","1ecf60cffbcb63c08b5670783c1d70c7"],["D:/git/myblog/public/mylist/故事里的男人.html","ad1bb11481c0821a4ecbba4847ff874c"],["D:/git/myblog/public/mylist/月光是新的.html","fd1e25f61bea561718b57427e09db2c1"],["D:/git/myblog/public/mylist/桃花开了.html","3cddf38da2c6c311a16e8e0b982420bd"],["D:/git/myblog/public/mylist/没有比这更悲伤的了.html","b797f30cecf36e79853aacd009278586"],["D:/git/myblog/public/mylist/起初.html","de81010855cbe792a4156a226b84dd98"],["D:/git/myblog/public/page/10/index.html","a30bcfdd37e2de8be77bb9ea1ba4ff44"],["D:/git/myblog/public/page/11/index.html","8399efd99af286c3cbd603a66e303922"],["D:/git/myblog/public/page/2/index.html","a364d1c6797434925a423ad6597e763e"],["D:/git/myblog/public/page/3/index.html","0e5474dc1f141aed67b0d2e2f5df2990"],["D:/git/myblog/public/page/4/index.html","f031fd41a0b9a931d1936bd0b38c2be5"],["D:/git/myblog/public/page/5/index.html","538c23b20c8f341621d5a6f1c3f644c2"],["D:/git/myblog/public/page/6/index.html","bd95983ebbaa46065586f01e05e7969f"],["D:/git/myblog/public/page/7/index.html","400d0e621bdce11adba8f14a617d07b9"],["D:/git/myblog/public/page/8/index.html","630807fe02940f44072138b98ca9d971"],["D:/git/myblog/public/page/9/index.html","6e438cf9f8593982bb7b32a02ddc4a7c"],["D:/git/myblog/public/tags/AOP/index.html","53d6ed711421b0c2f37591e4fb85eaa0"],["D:/git/myblog/public/tags/AQS/index.html","230c9582395580bd8e6a43a291fef1c6"],["D:/git/myblog/public/tags/CAS/index.html","aa2602813f23efa97c025a636f68364e"],["D:/git/myblog/public/tags/Docker/index.html","6634399260f420328d66f1e539214a5d"],["D:/git/myblog/public/tags/Eruka/index.html","deab264803b9fa6bb16de93afcb122d8"],["D:/git/myblog/public/tags/FastJson/index.html","37482d471c3a381db777dad5d50fbcdf"],["D:/git/myblog/public/tags/GC/index.html","56a887a6a942da3f33889796fedc19dc"],["D:/git/myblog/public/tags/HashMap/index.html","4a2e08e9237f662fd615056aa276571b"],["D:/git/myblog/public/tags/ID生成/index.html","5d24f0b0fe1a3fd3c6e5b0ee8ba6775d"],["D:/git/myblog/public/tags/IO模式/index.html","ad1b3981293e4391b698762455396c0e"],["D:/git/myblog/public/tags/Idea/index.html","cae25c160073aa7a3c400b28854f38af"],["D:/git/myblog/public/tags/JVM/index.html","a737ab80c3f3dbb977e9e804b3268b50"],["D:/git/myblog/public/tags/Java8新特性/index.html","62a8d6d224257eba874da8f90c919f97"],["D:/git/myblog/public/tags/Java基础/index.html","aff04246b06563b889183f9ee8433c13"],["D:/git/myblog/public/tags/MySql/index.html","628cf908dabae6610da65167160105f3"],["D:/git/myblog/public/tags/MySql进阶/index.html","30d2265b7207a40297d6de4ca03713cd"],["D:/git/myblog/public/tags/RSA/index.html","bf070167fa853ec1c7314c5730c02bba"],["D:/git/myblog/public/tags/Redis/index.html","4e9658e7a3b4e4d8d96775dbc265aa90"],["D:/git/myblog/public/tags/Zookeeper/index.html","c42864c065f7f24d765e77c3b609fe10"],["D:/git/myblog/public/tags/index.html","19c9d053a6ea41ce675fdfc6b64b502e"],["D:/git/myblog/public/tags/kafka/index.html","de094f435d56316ce80496ad0e2e8f38"],["D:/git/myblog/public/tags/synchronized/index.html","974d990589d82d19539ac2f86e0bcc02"],["D:/git/myblog/public/tags/volatile/index.html","c62ddc8708b9c5febf8a437ee686f434"],["D:/git/myblog/public/tags/中间件/index.html","7d518b37bddf79f3d2e126a71a716b11"],["D:/git/myblog/public/tags/事务/index.html","2d0b12643516c7fd4f847494dbf96112"],["D:/git/myblog/public/tags/分布式/index.html","03ec2d140612c833a850e73a6c92149c"],["D:/git/myblog/public/tags/加解密/index.html","d22234039999b9258a3a13be18691508"],["D:/git/myblog/public/tags/单例模式/index.html","88f20d6272466f3dd359b8d5f379f3be"],["D:/git/myblog/public/tags/国密/index.html","93f9d5b4d10540c0828258f25f4961cc"],["D:/git/myblog/public/tags/工具/index.html","87a440cac72c33f8d5b8713b4c843317"],["D:/git/myblog/public/tags/并发/index.html","6eebc7c4d927d760fb2e592fd36c89e8"],["D:/git/myblog/public/tags/微服务/index.html","a842707709b4e73f6a14171aaf6c1e6d"],["D:/git/myblog/public/tags/数据库/index.html","e78790a3619e3bdd9ab41da4a55565ce"],["D:/git/myblog/public/tags/消息队列/index.html","4c96e4f99d77f328e3e3a9436b3b3a83"],["D:/git/myblog/public/tags/热门/index.html","4fb016304881ddaa67192565fbdea4e5"],["D:/git/myblog/public/tags/秒杀/index.html","8027d5c7ad82b8c4d39949bbbf86a7be"],["D:/git/myblog/public/tags/算法/index.html","4a3bdba203db68d34f4ea625dee4a864"],["D:/git/myblog/public/tags/线程/index.html","d9ce3dd635d56be890a1e7ddf0b90be5"],["D:/git/myblog/public/tags/缓存/index.html","a5bdf808c240534f94e42cce5b9918c9"],["D:/git/myblog/public/tags/过滤器/index.html","08447daa9d0c53fb4fda741bb62df640"],["D:/git/myblog/public/tags/集合/index.html","1df7f1be69130734bf317c750e642180"]];
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







