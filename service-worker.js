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

var precacheConfig = [["D:/git/myblog/public/2019/05/03/注册中心—多级缓存设计/index.html","0ca134450677fedcaa9d808f87442a78"],["D:/git/myblog/public/2019/05/10/AQS抽象队列同步器/index.html","a2158ecfebbb8c2adbfc76df7334f0a0"],["D:/git/myblog/public/2019/05/11/AQS组件原理及使用/index.html","b58c7ac2bce50265769c2ac9e57ab65f"],["D:/git/myblog/public/2019/05/12/CAS自旋/index.html","75739f9ce6462d5ffc7df04f5ed82d0b"],["D:/git/myblog/public/2019/05/12/synchronized/index.html","c41988fd597981227e6710317fc308c7"],["D:/git/myblog/public/2019/05/13/volatile/index.html","d0191b4161fa1edd560ab6ad5d4c0a39"],["D:/git/myblog/public/2019/06/01/GC调优/index.html","f8c1bc58c66161018d9665e81a4dd934"],["D:/git/myblog/public/2019/06/02/JVM内存区/index.html","d6c41cc46aec6acc42f42a909a2154f6"],["D:/git/myblog/public/2019/06/02/JVM垃圾回收/index.html","e6759b64f7761f088a497eb3b1e6e6b2"],["D:/git/myblog/public/2019/06/04/Mybatis实战笔记1.SqlMapConfig.xml文件配置/index.html","22ba57ed93330de689bc71918ee43f9d"],["D:/git/myblog/public/2019/06/05/Mybatis实战笔记2.简单的parameterType和resultType介绍/index.html","15471228231b21dbeba4908408264cbd"],["D:/git/myblog/public/2019/06/06/Mybatis实战笔记3.当传参传入多个参数时（4种方法）/index.html","e1d78b780dcf31ba86ac0f1eb96e06db"],["D:/git/myblog/public/2019/06/06/Mybatis实战笔记4.resultMap的简单使用/index.html","f7e7795f9c3e152579fad190db6cdcc7"],["D:/git/myblog/public/2019/06/06/Redis分段锁优化/index.html","ac38c0ceba7ed870d46ed15c5ae5639a"],["D:/git/myblog/public/2019/06/06/Redis持久化/index.html","0f26d3d7f2e3c2c28bfe2c91883a7da3"],["D:/git/myblog/public/2019/06/06/Redis缓存设计问题/index.html","ba9bdb6c5f5b54eab0a51c5f3e6214f2"],["D:/git/myblog/public/2019/06/07/Mybatis实战笔记5.多表查询、关联查询（resultMap）/index.html","e3c13a35c2b322a61150699e1533129a"],["D:/git/myblog/public/2019/06/07/Redis集群模式/index.html","c6b1e7e4e626a3602fded10182b21d30"],["D:/git/myblog/public/2019/06/09/Mybatis实战笔记6.resultMap的继承和collection的使用/index.html","6a586e8433b8c7b4db2f88e67fc4885f"],["D:/git/myblog/public/2019/06/10/Mybatis实战笔记7.模糊查询/index.html","21e3e8b88e212f3e41c2d0f3e32c32de"],["D:/git/myblog/public/2019/06/10/可靠消息最终一致性方案/index.html","6dfc9370bf7ddfc60f684f14b3751d57"],["D:/git/myblog/public/2019/06/11/Mybatis实战笔记8.自增长主键返回/index.html","4bcd60b497c5a11f8902d7f7c511feaf"],["D:/git/myblog/public/2019/06/13/Mybatis实战笔记9.开启二级缓存：cache/index.html","855d3ae701be2b45b54a193632543d4b"],["D:/git/myblog/public/2019/06/14/Mybatis实战笔记10.懒加载机制/index.html","4116ce1b929ea032c9e373b150a5e589"],["D:/git/myblog/public/2019/06/15/Mybatis实战笔记11.比较全的多表查询/index.html","e5b33fb2467c233fc48fc9b055f41012"],["D:/git/myblog/public/2019/06/16/Mybatis实战笔记12.sql片段/index.html","8108db72346f0a919004cdd48a379c09"],["D:/git/myblog/public/2019/06/17/Mybatis实战笔记13.多条件检索（动态sql语句）/index.html","4ff2d25163e1fb37a87474f828584c6a"],["D:/git/myblog/public/2019/06/19/Mybatis实战笔记14.多条数据操作/index.html","99a22b3ef6b6beab8bf1c237ba62b75a"],["D:/git/myblog/public/2019/06/21/Mybatis实战笔记15.补充：trim标记/index.html","74792670c4b63757c0438abf9893844a"],["D:/git/myblog/public/2019/06/22/Java8新特性/index.html","fa15f91067139f9191b062498ef67e9e"],["D:/git/myblog/public/2019/06/24/Mybatis实战笔记16.分页工具PagerHelper/index.html","9d63562cc5f792b17f0e54ef25a4163a"],["D:/git/myblog/public/2019/07/01/Mysql性能优化/index.html","191f0d013274fe009d53ae63b64cc574"],["D:/git/myblog/public/2019/07/02/MySQL语句优化/index.html","6af7625851381f170c6b74decf3b1e8d"],["D:/git/myblog/public/2019/07/04/SQL Select 语句完整的执行顺序/index.html","45b5155fa0833b172d092f9f2b4db5c0"],["D:/git/myblog/public/2019/07/05/Kafka消息队列/index.html","267bf9cf1881c231307521b7e262d62c"],["D:/git/myblog/public/2019/07/05/在千万级的数据库查询中，如何提高效率/index.html","a83c2e7b415c1216fbd72f153c1f066a"],["D:/git/myblog/public/2019/07/07/过滤器、拦截器、切片异同点/index.html","e3b553ab3f60ddb83d02f58aaae5fd85"],["D:/git/myblog/public/2019/07/08/MySql进阶3.函数/index.html","3592d67fff75c00e74335af73a569fbc"],["D:/git/myblog/public/2019/07/10/Bean生命周期/index.html","5995c5e8ce50066fb0d142904551d2d2"],["D:/git/myblog/public/2019/07/10/MySql进阶1.变量/index.html","e97fc45b3a21ed721718172881aec1c8"],["D:/git/myblog/public/2019/07/11/MySql进阶2.存储过程/index.html","5c9fa426698ef62f48336ee776c9f41c"],["D:/git/myblog/public/2019/07/12/MySql进阶4.流程控制/index.html","1874eebe11216f696697f821a75b9c62"],["D:/git/myblog/public/2019/07/18/MySql进阶5.视图/index.html","52fe8c144a0860d8f2994f0618585cdb"],["D:/git/myblog/public/2019/07/20/MySql进阶6.索引失效/index.html","d405ef13c1599429b9361cc4c3df5b7b"],["D:/git/myblog/public/2019/08/05/fastJson用法/index.html","66d7a00ad9a4701bde8f763231bd3b8a"],["D:/git/myblog/public/2019/08/12/MySQL索引/index.html","0d1551bcd2bba3bb374ef1a283cdb63f"],["D:/git/myblog/public/2019/08/13/ZooKeeper入门认知/index.html","58cfb5ae2797b88d8af5ccba90983697"],["D:/git/myblog/public/2019/08/15/IDEA插件和模板/index.html","915459ca99b9fd69e73768f742f80146"],["D:/git/myblog/public/2019/08/16/Linux下查看日志命令/index.html","dc952a93e74c46eff4f7181e5b612230"],["D:/git/myblog/public/2019/08/18/List去重的几种方法/index.html","252e914f6550bb1ed7f5a6aa57cba044"],["D:/git/myblog/public/2019/08/18/手写双向链表/index.html","287f16667fe71e95ca703f0536751df9"],["D:/git/myblog/public/2019/08/20/IO模式/index.html","07d4985d3bc4b44d7d3e1ea97ca3fb29"],["D:/git/myblog/public/2019/08/21/排序算法/index.html","978ffd641e1e2ddc52b8d137891b4c43"],["D:/git/myblog/public/2019/08/23/链表实现栈/index.html","2b76eb8dd8b1b5880d350a0f8d63fdf7"],["D:/git/myblog/public/2019/08/25/MQ的高可用的降级方案/index.html","573b25d8cdd0ed9875d96040af324da3"],["D:/git/myblog/public/2019/09/01/秒杀系统/index.html","8dc465e88791f471eefbec974ff3443e"],["D:/git/myblog/public/2019/09/21/分布式事务方案/index.html","1e7fb9da50573ef777cbda36005de7fe"],["D:/git/myblog/public/2019/09/22/分布式系ID方案/index.html","154c6132d7187e57e14cd5ac856c7b13"],["D:/git/myblog/public/2019/09/22/分布式系统开发设计/index.html","d3d9517a5e7852469e0cd7c373a0dfa9"],["D:/git/myblog/public/2019/09/22/微服务、分布式和集群的异同点/index.html","cd546f444bf3e4c49c38e8e3a629ab7d"],["D:/git/myblog/public/2019/09/23/分布式锁和分布式事务概念/index.html","b84662883a505f518de5233782da43e2"],["D:/git/myblog/public/2019/09/24/MySQL乐观锁MVCC机制/index.html","fbedfaf4d39cfc9526e2fb7914443da1"],["D:/git/myblog/public/2019/10/01/集合源码解析/index.html","20cde38f8e3bcfd088393bb5dca3953e"],["D:/git/myblog/public/2019/10/05/加解密算法/index.html","efe8f302919dc94755ce665590376c34"],["D:/git/myblog/public/2019/10/06/微服务的高可用和线程池参数设计/index.html","57906dde9ceb67318567a737cb7c2b6b"],["D:/git/myblog/public/2019/10/14/加解密流程/index.html","aa16aaf6e9b92116cd8d1dd2fbe18807"],["D:/git/myblog/public/2019/11/07/设计模式手册1.适配器模式/index.html","11d39e468b2e5ba29583fba77019f7dd"],["D:/git/myblog/public/2019/11/08/设计模式手册2.单例模式/index.html","4f7b9bf6384132feb5f6a1ee57167c47"],["D:/git/myblog/public/2019/11/09/设计模式手册3.代理模式和AOP/index.html","b76b2b52713017fcfe70e94a8fa06cf1"],["D:/git/myblog/public/2019/11/12/设计模式手册4.工厂模式/index.html","b8ab6f7f52c0cd962b7ae2f57ad87073"],["D:/git/myblog/public/2019/11/13/设计模式手册5.观察者模式/index.html","ffe0a7d71a417a9c5a19f8f6d92c9477"],["D:/git/myblog/public/2019/11/14/设计模式手册6.装饰者模式/index.html","7ec3c29e9fc07b2e43a104e2576e554b"],["D:/git/myblog/public/2019/11/15/设计模式手册7.策略模式/index.html","82378d4060ec620837773f2ee1bbfa7a"],["D:/git/myblog/public/2020/03/02/Docker命令/index.html","9d07533ae315e187c2a1718a91dcd615"],["D:/git/myblog/public/2020/03/02/Docker进阶/index.html","f263f38b984985b20f17171f1cf917a1"],["D:/git/myblog/public/2020/05/05/Redission分布式锁/index.html","f1a0a120cbbbbc92909ce9777131fd2e"],["D:/git/myblog/public/about/index.html","0e4cbadae20283de8c666fbc2756aa20"],["D:/git/myblog/public/archives/2019/05/index.html","91b1b3efdef4885fa4663e83bbd1485a"],["D:/git/myblog/public/archives/2019/06/index.html","5aa408de58ffbbb41921ce8bd8e656cb"],["D:/git/myblog/public/archives/2019/06/page/2/index.html","6498f8797a4e0d72c038ada27c7350d9"],["D:/git/myblog/public/archives/2019/06/page/3/index.html","5253fe14874fcdb08b2e4c637e6ec9e7"],["D:/git/myblog/public/archives/2019/06/page/4/index.html","00ef99ae6786c5acf9af2e6553fb189f"],["D:/git/myblog/public/archives/2019/07/index.html","69634e61859e6e12c3d27557fdd511bb"],["D:/git/myblog/public/archives/2019/07/page/2/index.html","c7f11a1261e7ac069b0c82082e36c677"],["D:/git/myblog/public/archives/2019/08/index.html","289cab1f3f30ae3c5144974abaa9efd6"],["D:/git/myblog/public/archives/2019/08/page/2/index.html","d833221ab41c68650a3e1a00c5f4ad68"],["D:/git/myblog/public/archives/2019/09/index.html","2a96c2fbfa987df1dd6fc1ba4a06fac0"],["D:/git/myblog/public/archives/2019/10/index.html","6503885107825b4edb51803720578947"],["D:/git/myblog/public/archives/2019/11/index.html","d99d95779753c3f9dfacfdc619df05ed"],["D:/git/myblog/public/archives/2019/index.html","42322d77534c6f687f338ba4b0286385"],["D:/git/myblog/public/archives/2019/page/10/index.html","028fed41fc05ebed4aa8f1d3018661d4"],["D:/git/myblog/public/archives/2019/page/2/index.html","bf17ce9f9fb09f869f2cd9f52cefb08f"],["D:/git/myblog/public/archives/2019/page/3/index.html","bd55cb319c560e8431488c204757a105"],["D:/git/myblog/public/archives/2019/page/4/index.html","0fec201c0f357c6c890117e645f81c09"],["D:/git/myblog/public/archives/2019/page/5/index.html","b37cd073de15636abbf3da92f831be56"],["D:/git/myblog/public/archives/2019/page/6/index.html","b662bac5e353d855bbb7ece6fe26d4b8"],["D:/git/myblog/public/archives/2019/page/7/index.html","45fab7ec3e5ecc3576cea070ca05eb3a"],["D:/git/myblog/public/archives/2019/page/8/index.html","52f60d79f1cfd76051597e26a18a2d86"],["D:/git/myblog/public/archives/2019/page/9/index.html","6aa3d6f113e1c6b12fe8166a490464b9"],["D:/git/myblog/public/archives/2020/03/index.html","160d57c7cce0c6309481a128550f0b45"],["D:/git/myblog/public/archives/2020/05/index.html","932168e429b86fb7084509e30ccb0a6a"],["D:/git/myblog/public/archives/2020/index.html","030be34c7a9712ed4538a36ffa8c5e86"],["D:/git/myblog/public/archives/index.html","2643dec0a5cd696052e35d8724e30339"],["D:/git/myblog/public/archives/page/10/index.html","2643dec0a5cd696052e35d8724e30339"],["D:/git/myblog/public/archives/page/2/index.html","2643dec0a5cd696052e35d8724e30339"],["D:/git/myblog/public/archives/page/3/index.html","2643dec0a5cd696052e35d8724e30339"],["D:/git/myblog/public/archives/page/4/index.html","2643dec0a5cd696052e35d8724e30339"],["D:/git/myblog/public/archives/page/5/index.html","2643dec0a5cd696052e35d8724e30339"],["D:/git/myblog/public/archives/page/6/index.html","2643dec0a5cd696052e35d8724e30339"],["D:/git/myblog/public/archives/page/7/index.html","2643dec0a5cd696052e35d8724e30339"],["D:/git/myblog/public/archives/page/8/index.html","2643dec0a5cd696052e35d8724e30339"],["D:/git/myblog/public/archives/page/9/index.html","2643dec0a5cd696052e35d8724e30339"],["D:/git/myblog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/git/myblog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/git/myblog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/git/myblog/public/categories/GC调优/index.html","57aa39412e3dcf9933bf7136f989159f"],["D:/git/myblog/public/categories/Java并发/index.html","f0d1f341d9f987bbf4e654df7c56d573"],["D:/git/myblog/public/categories/MyBatis/index.html","cd1d71acfcc33a4fd4d91cb9bb44b2af"],["D:/git/myblog/public/categories/MyBatis/page/2/index.html","5d1d7ed9229eb330a67ed780b9a2a769"],["D:/git/myblog/public/categories/MySql进阶/index.html","fab601aa84a8d793be905814dfba1fb8"],["D:/git/myblog/public/categories/Redis/index.html","66e311be49475ecba3c5efb9e52b87af"],["D:/git/myblog/public/categories/index.html","9c27ef64e5185fa052fb274139837380"],["D:/git/myblog/public/categories/分布式/index.html","63f45992935bdb014cc93dbdc2a2afa9"],["D:/git/myblog/public/categories/微服务/index.html","bd9a1e379ed01288db0f081062aea31a"],["D:/git/myblog/public/categories/设计模式/index.html","92e0630412233cf7792469f17e6e5752"],["D:/git/myblog/public/css/style.css","63d783cb64a4720f00c80bd91bc95bc5"],["D:/git/myblog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/git/myblog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/git/myblog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/git/myblog/public/friends/index.html","3f39ec85ba7e3b59ab8fcc898e401711"],["D:/git/myblog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/git/myblog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/git/myblog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/git/myblog/public/index.html","289772be2294bf589564f629c360ec48"],["D:/git/myblog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/git/myblog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/git/myblog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/git/myblog/public/page/10/index.html","8c0242fc9502ed3ab3521419f6f1bc04"],["D:/git/myblog/public/page/2/index.html","5e99a94ecd3c6e09a5934630582407d7"],["D:/git/myblog/public/page/3/index.html","701a85f232cfc0bc426ebafdeed1692a"],["D:/git/myblog/public/page/4/index.html","5ad90b9828e6bcee433ec36318471dd0"],["D:/git/myblog/public/page/5/index.html","025cb997fdbb0f48dfce3f68fd2abd0d"],["D:/git/myblog/public/page/6/index.html","5c506a30fbdb1e5aa3ba8b68a4e2196d"],["D:/git/myblog/public/page/7/index.html","730c81f28ff08f43e841cedef7457ae3"],["D:/git/myblog/public/page/8/index.html","92282e13b60910f0f6267654106408a9"],["D:/git/myblog/public/page/9/index.html","a372e3cb5f12f1860fd81d295ee80b02"],["D:/git/myblog/public/tags/AOP/index.html","984660dd71de02391cf9e2184afbf87d"],["D:/git/myblog/public/tags/AQS/index.html","47aa0b336f347a778036517ef2c6b1d7"],["D:/git/myblog/public/tags/Bean/index.html","a589393528269d8d08861ac02582b0b0"],["D:/git/myblog/public/tags/CAS/index.html","64905a350af28ed941a3bd5032db3636"],["D:/git/myblog/public/tags/Docker/index.html","bcc50980c2ce18ce4277645e19665a28"],["D:/git/myblog/public/tags/Eruka/index.html","13a5f1aea6cdd017ad78a690b3eb1891"],["D:/git/myblog/public/tags/FastJson/index.html","3fda7ec8fafb38a739452dbc2d4b9bab"],["D:/git/myblog/public/tags/GC/index.html","2abd4f6086b8e47fb84bff84f6ccb271"],["D:/git/myblog/public/tags/HashMap/index.html","281779968af977bce016b898e1963222"],["D:/git/myblog/public/tags/ID生成/index.html","e1db27487f6dc3578a7a241251211c8e"],["D:/git/myblog/public/tags/IO模式/index.html","2db8604e4adb42e1e5107c2b9630de6b"],["D:/git/myblog/public/tags/Idea/index.html","20f3a947188c34712604429545334253"],["D:/git/myblog/public/tags/JVM/index.html","cfb2e261373a2f8976651bb4937403c5"],["D:/git/myblog/public/tags/Java8新特性/index.html","36972c4b4165971e40a2d073176d88a5"],["D:/git/myblog/public/tags/Java基础/index.html","0288d2a56570061a320eecb03c9ee20a"],["D:/git/myblog/public/tags/MySql/index.html","f564cb1c2247f20202748b6403c71edf"],["D:/git/myblog/public/tags/MySql进阶/index.html","2f82cb3256d64946d8203b063d7aae47"],["D:/git/myblog/public/tags/RSA/index.html","1df016e7004940550187240bde3ac663"],["D:/git/myblog/public/tags/Redis/index.html","eae6639a6b0f534a54df7576ffb20788"],["D:/git/myblog/public/tags/Zookeeper/index.html","d0d38f17d2128a7a0c172d9927f36834"],["D:/git/myblog/public/tags/index.html","c18d95db38b08efceeedc9c0840aa038"],["D:/git/myblog/public/tags/kafka/index.html","ce34915797f409c0a9a2d7e66599369a"],["D:/git/myblog/public/tags/synchronized/index.html","3143e6276b226d60d09391bdd95bbcc8"],["D:/git/myblog/public/tags/volatile/index.html","e2f73e0849bcbca62b5b9b139f7c21a3"],["D:/git/myblog/public/tags/中间件/index.html","c3adf742671e19bfcf82d78a9b408e7e"],["D:/git/myblog/public/tags/事务/index.html","653278e7404673733538e8cc9d54f072"],["D:/git/myblog/public/tags/分布式/index.html","351e340de833701ab14aa6b7e59094a0"],["D:/git/myblog/public/tags/加解密/index.html","c825454751f95112d34446914c616db7"],["D:/git/myblog/public/tags/单例模式/index.html","3b80f031fd7c9c843f02e97c9a3399bd"],["D:/git/myblog/public/tags/国密/index.html","c610d2f00b124c5b4d62da1197ee29e8"],["D:/git/myblog/public/tags/工具/index.html","cd4e5a5d0ff879badedd7162998cdbd8"],["D:/git/myblog/public/tags/并发/index.html","fb07150ccd232bd0ee9c0f3649391ed2"],["D:/git/myblog/public/tags/微服务/index.html","cebbc2c203171af7f8ecca6926cc7cfd"],["D:/git/myblog/public/tags/数据库/index.html","377a49921863540551d8bb41a9681f00"],["D:/git/myblog/public/tags/消息队列/index.html","ba5893fc6f8c6d02bf30973cb734def0"],["D:/git/myblog/public/tags/热门/index.html","e2699ed33530607079f86e1e31cdeac7"],["D:/git/myblog/public/tags/秒杀/index.html","5a3ea79cf6eab5c4563404361e1de423"],["D:/git/myblog/public/tags/算法/index.html","49f6df0f207ea80b56e5253547ad64ea"],["D:/git/myblog/public/tags/线程/index.html","2f36440bf7539359f9341ffb3cad4f10"],["D:/git/myblog/public/tags/缓存/index.html","2d1ecc13218d9b3007efcd4c505916f7"],["D:/git/myblog/public/tags/过滤器/index.html","7fb154b6f500a9171300567c21385a16"],["D:/git/myblog/public/tags/集合/index.html","aee72a31bbf9f137f23446f8233a56e9"]];
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







