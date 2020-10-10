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

var precacheConfig = [["D:/git/myblog/public/2019/03/04/Redis实操笔记1.安装/index.html","5e58148d7046b6dfee74c6c4b62fc5f3"],["D:/git/myblog/public/2019/03/05/Redis实操笔记2.配置/index.html","db79a188be36a17a202186bf3552ca1c"],["D:/git/myblog/public/2019/03/06/Redis实操笔记3.搭建Redis集群/index.html","221a9b8912f19b2fa901cee36c2ffedc"],["D:/git/myblog/public/2019/03/07/Redis实操笔记4.数据库操作/index.html","97dcb0a768614142a7543e03b29c9fe9"],["D:/git/myblog/public/2019/03/07/Redis实操笔记5.String/index.html","a6ab8c53ab5a6458d8803bf28c49fb42"],["D:/git/myblog/public/2019/03/08/Redis实操笔记6.Hash/index.html","cbade8ea04fc79085f8baadda56a0768"],["D:/git/myblog/public/2019/03/09/Redis实操笔记7.List/index.html","0d62da9d7b9a55a26ada5b6741feb537"],["D:/git/myblog/public/2019/03/10/Redis实操笔记8.Set/index.html","6fdd8abe41a59a21ff90f27181d64761"],["D:/git/myblog/public/2019/03/11/Redis实操笔记9.SortedSet/index.html","206feb58d5da15a5b3cb51000235ec2f"],["D:/git/myblog/public/2019/05/03/注册中心—多级缓存设计/index.html","bc28070dca1a3607b9221801eb39a1eb"],["D:/git/myblog/public/2019/05/11/AQS组件原理及使用/index.html","35db1f6ab9d45f2d64293d4606537d34"],["D:/git/myblog/public/2019/05/12/CAS自旋/index.html","507f2a86ceee98d9953edc027eb8fa4b"],["D:/git/myblog/public/2019/05/12/synchronized/index.html","5b1130969e6eadb7136f9d1e8db5f39f"],["D:/git/myblog/public/2019/05/13/volatile/index.html","06a4470f5d5267ffc4d88becfd4bc046"],["D:/git/myblog/public/2019/06/02/JVM内存区/index.html","9867915183338986c016c4351fe7187f"],["D:/git/myblog/public/2019/06/04/Mybatis实战笔记1.SqlMapConfig.xml文件配置/index.html","f5fb65bd1ef38f71499d1dbbb5936e8a"],["D:/git/myblog/public/2019/06/05/Mybatis实战笔记2.简单的parameterType和resultType介绍/index.html","96db087a5033c2dd9d5cacbf437fb165"],["D:/git/myblog/public/2019/06/06/Mybatis实战笔记3.当传参传入多个参数时（4种方法）/index.html","147003ad9f48c84c734fad4b958d2034"],["D:/git/myblog/public/2019/06/06/Mybatis实战笔记4.resultMap的简单使用/index.html","19a87827083757e388851460b6e9921f"],["D:/git/myblog/public/2019/06/06/Redis分段锁优化/index.html","500d9a55b93e5d9788355a06fafc2f3f"],["D:/git/myblog/public/2019/06/06/Redis持久化/index.html","058f978c0454c2588d35276f0026b930"],["D:/git/myblog/public/2019/06/06/Redis缓存设计问题/index.html","d6c056e8f5cd527b01aede8df0fa7da8"],["D:/git/myblog/public/2019/06/07/Mybatis实战笔记5.多表查询、关联查询（resultMap）/index.html","ddb26a2fd7a376f9b1cb2a1781ea41f8"],["D:/git/myblog/public/2019/06/07/Redis集群模式/index.html","4449d355260d88fb3a59bd84683bab33"],["D:/git/myblog/public/2019/06/09/Mybatis实战笔记6.resultMap的继承和collection的使用/index.html","9b4b75cd64eb39fc2372e7d82706450b"],["D:/git/myblog/public/2019/06/10/Mybatis实战笔记7.模糊查询/index.html","155051d78fde7af69c3e9d4a8d3d8d73"],["D:/git/myblog/public/2019/06/11/Mybatis实战笔记8.自增长主键返回/index.html","62cc61799bc38133ec2fabb9ca08d1f6"],["D:/git/myblog/public/2019/06/13/Mybatis实战笔记9.开启二级缓存：cache/index.html","9420ac61aaa653f012fee2f738960411"],["D:/git/myblog/public/2019/06/14/Mybatis实战笔记10.懒加载机制/index.html","e62d13506dd7e3a4b0d8c9b29a148cec"],["D:/git/myblog/public/2019/06/15/Mybatis实战笔记11.比较全的多表查询/index.html","7528a56c7a02fc935a5fcb489c5b1f8f"],["D:/git/myblog/public/2019/06/16/Mybatis实战笔记12.sql片段/index.html","6034628e01f497f4283a5c0ac3c2a07f"],["D:/git/myblog/public/2019/06/17/Mybatis实战笔记13.多条件检索（动态sql语句）/index.html","e3dede4d32650e9acbdda13d77d4986c"],["D:/git/myblog/public/2019/06/19/Mybatis实战笔记14.多条数据操作/index.html","7963f5c65430cb8161576ac6e3e8927b"],["D:/git/myblog/public/2019/06/21/Mybatis实战笔记15.补充：trim标记/index.html","d1076ce7278800578324908b43f17d95"],["D:/git/myblog/public/2019/06/22/Java8新特性/index.html","96de4a6ef22dfaea2e6e1e55d0fa0a24"],["D:/git/myblog/public/2019/06/24/Mybatis实战笔记16.分页工具PagerHelper/index.html","6cfdc8edee02cc0d1f08cd842df5a863"],["D:/git/myblog/public/2019/07/01/Mysql性能优化/index.html","2d22eedb9b75c610e13904dcba9c192b"],["D:/git/myblog/public/2019/07/02/MySQL语句优化/index.html","b167fb97a499cdfae159bfc1db2e6234"],["D:/git/myblog/public/2019/07/04/SQL Select 语句完整的执行顺序/index.html","60e88688b0595b061992f033e8e78bf9"],["D:/git/myblog/public/2019/07/05/在千万级的数据库查询中，如何提高效率/index.html","98527d400d33e74bc05c00e2b9b8fbeb"],["D:/git/myblog/public/2019/07/07/过滤器、拦截器、切片异同点/index.html","9f111514adb418e1a5e6d23f99aef843"],["D:/git/myblog/public/2019/07/08/MySql进阶3.函数/index.html","a67ff400804f3b04eedcf5565b1f9cf4"],["D:/git/myblog/public/2019/07/10/MySql进阶1.变量/index.html","90bb2d5ee41eda37869eb1c6b1597a6f"],["D:/git/myblog/public/2019/07/11/MySql进阶2.存储过程/index.html","140d789a360f692aebb2cfef78afd4a3"],["D:/git/myblog/public/2019/07/12/MySql进阶4.流程控制/index.html","14bbdefc63e1219aba4cb3885c97c510"],["D:/git/myblog/public/2019/07/18/MySql进阶5.视图/index.html","4d4e7984528f0680c2318aaea9145516"],["D:/git/myblog/public/2019/07/20/MySql进阶6.索引失效/index.html","d07e3f9a02644dce47c31e5c8435a899"],["D:/git/myblog/public/2019/08/05/fastJson用法/index.html","dc1a55583c01dbe92db215a7e2b890c6"],["D:/git/myblog/public/2019/08/12/MySQL索引/index.html","f308938cccc935e548a7f99066cf0f89"],["D:/git/myblog/public/2019/08/13/ZooKeeper入门认知/index.html","6a5af4c682a21d43659f1e79c623858d"],["D:/git/myblog/public/2019/08/15/IDEA插件和模板/index.html","2bd90519225fc64e6a27489f8033c13f"],["D:/git/myblog/public/2019/08/16/Linux下查看日志命令/index.html","773956604e50d8fcd8cc295a96fd2404"],["D:/git/myblog/public/2019/08/18/List去重的几种方法/index.html","8b34a3f049358ae1cc8d2d4bddd5c400"],["D:/git/myblog/public/2019/08/20/IO模式/index.html","fa01a770e2c7fb6b8df1f624963b9310"],["D:/git/myblog/public/2019/08/21/排序算法/index.html","d355565bd7f50e80379dfb9f9f1ce8e9"],["D:/git/myblog/public/2019/08/23/链表实现栈/index.html","5c3a8d4a245c64c92a26a966d21f6182"],["D:/git/myblog/public/2019/08/25/MQ的高可用的降级方案/index.html","a9212153b4f8524fffc4392fdaa41342"],["D:/git/myblog/public/2019/09/01/秒杀系统/index.html","81212ebb239e4b591f2d7693c93197a9"],["D:/git/myblog/public/2019/09/21/分布式事务方案/index.html","65ab6bd938f07072573948ca65f25f81"],["D:/git/myblog/public/2019/09/22/分布式系ID方案/index.html","1e38db184435ca3f8edc27d174f7523c"],["D:/git/myblog/public/2019/09/22/分布式系统开发设计/index.html","5b4a257881e8b05b17290d799c9862af"],["D:/git/myblog/public/2019/09/22/微服务、分布式和集群的异同点/index.html","1678793fe722dff99ec854002845b7b8"],["D:/git/myblog/public/2019/09/23/分布式锁和分布式事务概念/index.html","0f6dbe293f2c5a891ef6c59e1df0fe92"],["D:/git/myblog/public/2019/09/24/MySQL乐观锁MVCC机制/index.html","1679908e4f84c652c79cb0209227155c"],["D:/git/myblog/public/2019/10/01/集合源码解析/index.html","20ea10c1be6efd609ee33f5d24a5738f"],["D:/git/myblog/public/2019/11/07/设计模式手册1.适配器模式/index.html","efbace50a900d96bb47ed0a7d29ce9c6"],["D:/git/myblog/public/2019/11/08/设计模式手册2.单例模式/index.html","a49f22819def9e9f521ed4c2ab89fc03"],["D:/git/myblog/public/2019/11/09/设计模式手册3.代理模式和AOP/index.html","44af9f7f8cbfabca6b7b7c443f564960"],["D:/git/myblog/public/2019/11/12/设计模式手册4.工厂模式/index.html","c1924bec15d4f4f5b75fc8b3924e1401"],["D:/git/myblog/public/2019/11/13/设计模式手册5.观察者模式/index.html","d5e7bff16dc0203c0c9f43596e3b37be"],["D:/git/myblog/public/2019/11/14/设计模式手册6.装饰者模式/index.html","5c437143def1d738d3a026cbe5c075e3"],["D:/git/myblog/public/2020/03/02/Docker命令/index.html","2a4c6dbf155eb87f2b6ef159a3487673"],["D:/git/myblog/public/2020/03/02/Docker进阶/index.html","3ca1400c11850f0ed674fa69f2d2c0d7"],["D:/git/myblog/public/2020/04/05/Kafka消息队列/index.html","1f9f930390f2276f0e96b91cc24b7bf2"],["D:/git/myblog/public/2020/04/06/微服务的高可用和线程池参数设计/index.html","c67b4d79bc5ac89285bbae8ed32fb3ae"],["D:/git/myblog/public/2020/04/10/Bean生命周期/index.html","d48450c08ec35bf0339dcdc5811b6c93"],["D:/git/myblog/public/2020/04/27/JVM垃圾回收/index.html","42496cedbf65ceec6036424c4d64d54d"],["D:/git/myblog/public/2020/05/05/Redission分布式锁/index.html","9681bf2e8314f4ca6451c76a1c8e3c1d"],["D:/git/myblog/public/2020/05/05/加解密算法/index.html","22670ae62ba7860b31921d10cff5576d"],["D:/git/myblog/public/2020/05/10/AQS抽象队列同步器/index.html","ca0a4df81fd569db3f0e3fa48a380e25"],["D:/git/myblog/public/2020/05/14/加解密流程/index.html","5af6a18ddf41c7147e2f3adf22b2544c"],["D:/git/myblog/public/2020/05/15/设计模式手册7.策略模式/index.html","b2155d5a7c50dcfb2b20a43dc62eac66"],["D:/git/myblog/public/2020/05/18/手写双向链表/index.html","62b551223c8d1b7c50e8a6243478e396"],["D:/git/myblog/public/2020/06/01/GC调优/index.html","973007140cb3eb4e225ad1c6985fabc2"],["D:/git/myblog/public/2020/06/10/可靠消息最终一致性方案/index.html","9b0193b04ec866b5e38bf2485ba3dcb2"],["D:/git/myblog/public/2020/10/08/ThreadLocal/index.html","6e77d125ed7bb2c60a80e6452e67357e"],["D:/git/myblog/public/about/index.html","b83eb8825444d26bdb83267ff9e004f4"],["D:/git/myblog/public/archives/2019/03/index.html","ddf19aa7875acb6b767523aaa504bee6"],["D:/git/myblog/public/archives/2019/03/page/2/index.html","a6c622677a61eecd9eeb8784f232b068"],["D:/git/myblog/public/archives/2019/05/index.html","7d8c1c7ba81c487caa3c6985a892d3f4"],["D:/git/myblog/public/archives/2019/06/index.html","847d06004383ba70116a4ba3a8f88a7c"],["D:/git/myblog/public/archives/2019/06/page/2/index.html","ba65a0e36edcd71b96a1c656b079cf1c"],["D:/git/myblog/public/archives/2019/06/page/3/index.html","b38d10050cd48acae3b0d3a17a55c08f"],["D:/git/myblog/public/archives/2019/07/index.html","bcdf389ebba370142dd76178dbe1c6fb"],["D:/git/myblog/public/archives/2019/07/page/2/index.html","5ae8e8febc8b8801497f4b9eeee75ac3"],["D:/git/myblog/public/archives/2019/08/index.html","1dadb1f873d4c3de73c44047185ab9e7"],["D:/git/myblog/public/archives/2019/08/page/2/index.html","a26d57cd2e05789c124d7a07aa5e0978"],["D:/git/myblog/public/archives/2019/09/index.html","88782161b023ab6801d659866c048f70"],["D:/git/myblog/public/archives/2019/10/index.html","254e5d52833ad3f8fc4514027f435871"],["D:/git/myblog/public/archives/2019/11/index.html","6727871e7ec60b29dc495588a307af5c"],["D:/git/myblog/public/archives/2019/index.html","e1be09adb8826b2ba51c1a9fa908619e"],["D:/git/myblog/public/archives/2019/page/2/index.html","d9bc45b78c4c9050db128d440cdcef22"],["D:/git/myblog/public/archives/2019/page/3/index.html","29d8c24d8e743fc57b60b01ebe72c0fc"],["D:/git/myblog/public/archives/2019/page/4/index.html","04a1992793930d6e3cfa70bafbf8c7fa"],["D:/git/myblog/public/archives/2019/page/5/index.html","785477241165c598939947dcfacae541"],["D:/git/myblog/public/archives/2019/page/6/index.html","1761ddc50fefadb45f2e138ad2a9a839"],["D:/git/myblog/public/archives/2019/page/7/index.html","e4aebdb5cb52a02005bfdc169daf743f"],["D:/git/myblog/public/archives/2019/page/8/index.html","007e13c0c6dfe9c5ad76d92840fb6b26"],["D:/git/myblog/public/archives/2019/page/9/index.html","399dca612bea0b350e3718a730fa0e53"],["D:/git/myblog/public/archives/2020/03/index.html","6dccd9b07f39a9dacfa21ca944621a56"],["D:/git/myblog/public/archives/2020/04/index.html","ff0c00652262a14d205809c510afdbd8"],["D:/git/myblog/public/archives/2020/05/index.html","8a1a17e3ae9c7e3dd2101e0f832dd190"],["D:/git/myblog/public/archives/2020/06/index.html","504c487c52ab4bada9c7cc3f4155fb88"],["D:/git/myblog/public/archives/2020/10/index.html","63daa0165d347bb30972aaa6b581da3a"],["D:/git/myblog/public/archives/2020/index.html","927745c27e09e073200d81fb6bce9314"],["D:/git/myblog/public/archives/2020/page/2/index.html","82f171b5e98418551005ed8d5a718fca"],["D:/git/myblog/public/archives/index.html","ea1d8136f52f6258099844492f952862"],["D:/git/myblog/public/archives/page/10/index.html","ea1d8136f52f6258099844492f952862"],["D:/git/myblog/public/archives/page/11/index.html","ea1d8136f52f6258099844492f952862"],["D:/git/myblog/public/archives/page/2/index.html","ea1d8136f52f6258099844492f952862"],["D:/git/myblog/public/archives/page/3/index.html","ea1d8136f52f6258099844492f952862"],["D:/git/myblog/public/archives/page/4/index.html","ea1d8136f52f6258099844492f952862"],["D:/git/myblog/public/archives/page/5/index.html","ea1d8136f52f6258099844492f952862"],["D:/git/myblog/public/archives/page/6/index.html","ea1d8136f52f6258099844492f952862"],["D:/git/myblog/public/archives/page/7/index.html","ea1d8136f52f6258099844492f952862"],["D:/git/myblog/public/archives/page/8/index.html","ea1d8136f52f6258099844492f952862"],["D:/git/myblog/public/archives/page/9/index.html","ea1d8136f52f6258099844492f952862"],["D:/git/myblog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/git/myblog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/git/myblog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/git/myblog/public/categories/GC调优/index.html","ad3ea68b3efe9fcc3f3eb5ce27dbd0a6"],["D:/git/myblog/public/categories/Java并发/index.html","41cdbbbb491168759f1ad18fcd093648"],["D:/git/myblog/public/categories/MyBatis/index.html","dbb59c226d789a1051e92dc84cfc1b9b"],["D:/git/myblog/public/categories/MyBatis/page/2/index.html","82810ae863da1576df422e4fab676b7a"],["D:/git/myblog/public/categories/MySql进阶/index.html","42c4871d8f524ad0085877f61e29df2b"],["D:/git/myblog/public/categories/Redis/index.html","9a0f4570f6d681812e5325a9586f6b02"],["D:/git/myblog/public/categories/Redis实操笔记/index.html","636eaa880cd291715a73a69b6ac45e3f"],["D:/git/myblog/public/categories/Redis实操笔记/page/2/index.html","578b14df0dcc7105baf280d803adfcaf"],["D:/git/myblog/public/categories/index.html","d60dedc49ac0425408200da5a43a5dda"],["D:/git/myblog/public/categories/分布式/index.html","2ef831d6daa3b2ae8ddbf9110ad9df9f"],["D:/git/myblog/public/categories/微服务/index.html","341e928c4c60dd5e0cc69a27b9e6f503"],["D:/git/myblog/public/categories/设计模式/index.html","1bb3d88c9219deb3ed3a3f10629358f5"],["D:/git/myblog/public/css/style.css","63d783cb64a4720f00c80bd91bc95bc5"],["D:/git/myblog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/git/myblog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/git/myblog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/git/myblog/public/friends/index.html","470223bfdbe6e2a533254f26327b49c7"],["D:/git/myblog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/git/myblog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/git/myblog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/git/myblog/public/index.html","ea260a8cc57cf02e6fecbb54be12080f"],["D:/git/myblog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/git/myblog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/git/myblog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/git/myblog/public/mylist/index.html","aedf87cb75c46c5e2fcdcf81f55c95d5"],["D:/git/myblog/public/mylist/一个下雨的清晨.html","4efb7f6c38cf69294971c42b19da9304"],["D:/git/myblog/public/mylist/一句话也不说.html","4bc9918944883606d4df9f58da4fc6ea"],["D:/git/myblog/public/mylist/一只猫老了.html","81246bb62e4357db839ca5e3a775978f"],["D:/git/myblog/public/mylist/一滴雨落下.html","bd303cf241636fbf73b1ef06ac58e0c8"],["D:/git/myblog/public/mylist/一片云把一屋子的梦扯开.html","9499b2f1bd1dc4f4c5754fc777d2f400"],["D:/git/myblog/public/mylist/三月会有最后一天吗.html","78f9483ca67ef4966d8bccd962aa4d66"],["D:/git/myblog/public/mylist/不会爱上一个梦.html","2f4e2d12a7646d777bf2b797cd9e13db"],["D:/git/myblog/public/mylist/今夜.html","f5cd128e22bdc4c0a71a2510516b2c26"],["D:/git/myblog/public/mylist/今夜你要去哪里.html","7e272f937b4aa5fa0b9736f1ae6c9af9"],["D:/git/myblog/public/mylist/你是温柔的女人.html","cc936cb0e7665763f394d170b56d033e"],["D:/git/myblog/public/mylist/你用手触碰一颗易碎的心.html","8cd1dc5d6bef7ff59ea1adfaae9cccbd"],["D:/git/myblog/public/mylist/你端坐屋子的一头.html","9ebc0645df289b963fe6249ca9b2f6fa"],["D:/git/myblog/public/mylist/你身处在这个初夏.html","fd40d59f0930e26b106d21bf7b49dd93"],["D:/git/myblog/public/mylist/八月的第一天.html","0d5af971318859ffacbdedd5bcc148b9"],["D:/git/myblog/public/mylist/写诗是一个人的事.html","efcb534fe17fa4cf932bc0b251ded445"],["D:/git/myblog/public/mylist/十六楼的阳台.html","58f026b321e6d1ec3b8d6b489894f2d5"],["D:/git/myblog/public/mylist/去年的这个时候.html","f4de38e9cc5f22008d6b62292752ffb2"],["D:/git/myblog/public/mylist/夏日走后.html","cc174b3b5ba0020503f949ad322dc809"],["D:/git/myblog/public/mylist/夜色之中.html","205bbd155b43fdeb0101a4445e1a9996"],["D:/git/myblog/public/mylist/天会下雨.html","3b26e3f56463edaca3b730dc7cee15d7"],["D:/git/myblog/public/mylist/天凉了.html","0eb3861ca1bec081cb6f920bfd247e0d"],["D:/git/myblog/public/mylist/如果这是春天.html","5327dc9d3b2bb2c243431dcfdd96be9f"],["D:/git/myblog/public/mylist/情人.html","17cfcf762685f1651648f9c23465f027"],["D:/git/myblog/public/mylist/把月光占为己有.html","a3d05e142f17711bcf6b648433d61d2a"],["D:/git/myblog/public/mylist/故事里的男人.html","f5d078f70335e82fac0aa9276a9f2948"],["D:/git/myblog/public/mylist/月光是新的.html","f74398784bb6fd6b7917ef1bab8476eb"],["D:/git/myblog/public/mylist/桃花开了.html","6f0d4871dce9743ef967032566d33fd3"],["D:/git/myblog/public/mylist/没有比这更悲伤的了.html","75939bc8b109d5ea32fd18f993193ebc"],["D:/git/myblog/public/mylist/起初.html","92ba2e91309b7d889954793e75023a34"],["D:/git/myblog/public/page/10/index.html","a0607963061ff49009d3d5fcda41118b"],["D:/git/myblog/public/page/11/index.html","bb4bfa9d797cce133219340c9a28a168"],["D:/git/myblog/public/page/2/index.html","bb417ce650c8d70e4f6254ece9999e67"],["D:/git/myblog/public/page/3/index.html","29292040bf5de71bccee5708f25d0e82"],["D:/git/myblog/public/page/4/index.html","5ba01f1e293804192ae008a0acfa3526"],["D:/git/myblog/public/page/5/index.html","ec6058107af5af12d87d58177bd95935"],["D:/git/myblog/public/page/6/index.html","fd129c5ad7089387ac06ff4ee7d0c8e6"],["D:/git/myblog/public/page/7/index.html","0c31af598a8607cb4aefe13c5cf79546"],["D:/git/myblog/public/page/8/index.html","d024d36baccedfb3f509deb873709ea0"],["D:/git/myblog/public/page/9/index.html","2d5ab993d08c6b32a4281557c7acf1ce"],["D:/git/myblog/public/tags/AOP/index.html","2143800b43bdcc798d796ef7a051d1ee"],["D:/git/myblog/public/tags/AQS/index.html","5a20b4ced00052f0ac2ec16532e29e38"],["D:/git/myblog/public/tags/Bean/index.html","f3eb3f00cc2cf92a3b24e7451029845c"],["D:/git/myblog/public/tags/CAS/index.html","43367913f585826cd8e718d6e854128b"],["D:/git/myblog/public/tags/Docker/index.html","d3020512707e0198e08c327925ad6e2d"],["D:/git/myblog/public/tags/Eruka/index.html","b45a61813f3d0560eb7ba1596ee50687"],["D:/git/myblog/public/tags/FastJson/index.html","c948db1946bd97b614703d641e39cbc8"],["D:/git/myblog/public/tags/GC/index.html","ef330f8993304ad42a21f52e87bda0b1"],["D:/git/myblog/public/tags/HashMap/index.html","57c3a35f6b38b160fb64515dfd86eb70"],["D:/git/myblog/public/tags/ID生成/index.html","ca0eb1c2d8814ae19cf0953dee444a90"],["D:/git/myblog/public/tags/IO模式/index.html","7af15c013ced8da6be82e67bf02bc4f1"],["D:/git/myblog/public/tags/Idea/index.html","e6918c2156554f3fa8f6f4115dc430d1"],["D:/git/myblog/public/tags/JVM/index.html","b850d2861513638c5077056ee238cfa2"],["D:/git/myblog/public/tags/Java8新特性/index.html","ccd9d45f04bebc378d58c15a38d14692"],["D:/git/myblog/public/tags/Java基础/index.html","6d84a8a04a44681efdc81e5fc00f7ab6"],["D:/git/myblog/public/tags/MySql/index.html","ef816a86710cfc3f4f9901af3db33474"],["D:/git/myblog/public/tags/MySql进阶/index.html","51a5af24a3ee8360d21e9054505823bf"],["D:/git/myblog/public/tags/RSA/index.html","2efdc9d54b38623de796c2cf8d4eddd7"],["D:/git/myblog/public/tags/Redis/index.html","ef05f1d424e3eeb7aa3c85e9d081aa84"],["D:/git/myblog/public/tags/Zookeeper/index.html","25498e802c459e418c0ac4b9c0d4a784"],["D:/git/myblog/public/tags/index.html","89e6a87599b045d529d3107cb59f4bb4"],["D:/git/myblog/public/tags/kafka/index.html","e2c0730ceeed30d2577810c59e717ad1"],["D:/git/myblog/public/tags/synchronized/index.html","08e57bfcc0168bc9a18161684d1306e1"],["D:/git/myblog/public/tags/volatile/index.html","a365b2604ada689401e586261e0c45f2"],["D:/git/myblog/public/tags/中间件/index.html","b7586f8b2e2418f7a2a9225cc4a93f89"],["D:/git/myblog/public/tags/事务/index.html","0e1d30d6a78b8cbdb019403614eacf63"],["D:/git/myblog/public/tags/分布式/index.html","7ff3a2751809db8cbcc097cfa063e0ba"],["D:/git/myblog/public/tags/加解密/index.html","f77703bbb31f2c9020f203c0b6fdb6a1"],["D:/git/myblog/public/tags/单例模式/index.html","e3f80d707dbad63c439cec61d98f70cf"],["D:/git/myblog/public/tags/国密/index.html","bcad567a3b3369c2b14a8217d2aa72d4"],["D:/git/myblog/public/tags/工具/index.html","dd8215face589154571148b473fef305"],["D:/git/myblog/public/tags/并发/index.html","5b83a06ba31762707fc28495fa7fc434"],["D:/git/myblog/public/tags/微服务/index.html","2845e5ad3e726d682c33dc05add17f6d"],["D:/git/myblog/public/tags/数据库/index.html","2475e160ecac3d03a1b2666ab13e2e74"],["D:/git/myblog/public/tags/消息队列/index.html","a93c23e2e32cb2827d225a5c5c148413"],["D:/git/myblog/public/tags/热门/index.html","406e94d09c2449e0f37f94d9e5aacc40"],["D:/git/myblog/public/tags/秒杀/index.html","1f9240815410442aacb8a4ccc50f40ac"],["D:/git/myblog/public/tags/算法/index.html","48db27640223c9c67bb3b32b04b77649"],["D:/git/myblog/public/tags/线程/index.html","eaa89824e8a1906c676aaec91d0c9bcd"],["D:/git/myblog/public/tags/缓存/index.html","d5b299090bed70c07044a3761279186d"],["D:/git/myblog/public/tags/过滤器/index.html","3db951464a1f4f3c9ebd31a8ca0a424b"],["D:/git/myblog/public/tags/集合/index.html","733f04b90457cb7d3e015d7290287ec9"]];
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







