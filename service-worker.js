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

var precacheConfig = [["D:/git/myblog/public/2019/03/04/Redis实操笔记1.安装/index.html","2b6680639ee363d73010203f3c447657"],["D:/git/myblog/public/2019/03/05/Redis实操笔记2.配置/index.html","a00ac13506034f1f2696bb5c40486574"],["D:/git/myblog/public/2019/03/06/Redis实操笔记3.搭建Redis集群/index.html","48e83ba9147729b46db0f04dfe93ff0a"],["D:/git/myblog/public/2019/03/07/Redis实操笔记4.数据库操作/index.html","fe12f637881769912b930c0a5763d5e1"],["D:/git/myblog/public/2019/03/07/Redis实操笔记5.String/index.html","27be9ff98f27d8e044039e9b5a3b03c2"],["D:/git/myblog/public/2019/03/08/Redis实操笔记6.Hash/index.html","dcb556ae2a4eac954e151a7b8c06e818"],["D:/git/myblog/public/2019/03/09/Redis实操笔记7.List/index.html","7b620c814985515464484a453d98c3a6"],["D:/git/myblog/public/2019/03/10/Redis实操笔记8.Set/index.html","d17c40a5fd2b5efdc23f78f405bca0ce"],["D:/git/myblog/public/2019/03/11/Redis实操笔记9.SortedSet/index.html","b9c86f29d114be295cdbd67daa998d36"],["D:/git/myblog/public/2019/05/03/注册中心—多级缓存设计/index.html","14be5c1e4d72bfa44d5330b224d1208c"],["D:/git/myblog/public/2019/05/11/AQS组件原理及使用/index.html","2a59d2b382830ea09d501e6dc4b1a69b"],["D:/git/myblog/public/2019/05/12/CAS自旋/index.html","329d40450bd6af65a6e743d19ae57ceb"],["D:/git/myblog/public/2019/05/12/synchronized/index.html","30eab0fd214dd5961d95c21fd6568f0b"],["D:/git/myblog/public/2019/05/13/volatile/index.html","2172df78924e738b51245f4e0fe899b2"],["D:/git/myblog/public/2019/06/02/JVM内存区/index.html","9867915183338986c016c4351fe7187f"],["D:/git/myblog/public/2019/06/04/Mybatis实战笔记1.SqlMapConfig.xml文件配置/index.html","94e734caaae57b1873b61086bf0618c8"],["D:/git/myblog/public/2019/06/05/Mybatis实战笔记2.简单的parameterType和resultType介绍/index.html","31d900a49a5af8f425982b98a51da485"],["D:/git/myblog/public/2019/06/06/Mybatis实战笔记3.当传参传入多个参数时（4种方法）/index.html","147003ad9f48c84c734fad4b958d2034"],["D:/git/myblog/public/2019/06/06/Mybatis实战笔记4.resultMap的简单使用/index.html","19a87827083757e388851460b6e9921f"],["D:/git/myblog/public/2019/06/06/Redis分段锁优化/index.html","ae7e318a629b93c4d50df018b497d84a"],["D:/git/myblog/public/2019/06/06/Redis持久化/index.html","4dcfd447cefeb3c6122d67d5d5f7f065"],["D:/git/myblog/public/2019/06/06/Redis缓存设计问题/index.html","28381bdf987a48920c244699cb369ea4"],["D:/git/myblog/public/2019/06/07/Mybatis实战笔记5.多表查询、关联查询（resultMap）/index.html","ddb26a2fd7a376f9b1cb2a1781ea41f8"],["D:/git/myblog/public/2019/06/07/Redis集群模式/index.html","65f952e127bef17cc4ee47ce203eff7c"],["D:/git/myblog/public/2019/06/09/Mybatis实战笔记6.resultMap的继承和collection的使用/index.html","9b4b75cd64eb39fc2372e7d82706450b"],["D:/git/myblog/public/2019/06/10/Mybatis实战笔记7.模糊查询/index.html","155051d78fde7af69c3e9d4a8d3d8d73"],["D:/git/myblog/public/2019/06/11/Mybatis实战笔记8.自增长主键返回/index.html","62cc61799bc38133ec2fabb9ca08d1f6"],["D:/git/myblog/public/2019/06/13/Mybatis实战笔记9.开启二级缓存：cache/index.html","9420ac61aaa653f012fee2f738960411"],["D:/git/myblog/public/2019/06/14/Mybatis实战笔记10.懒加载机制/index.html","e62d13506dd7e3a4b0d8c9b29a148cec"],["D:/git/myblog/public/2019/06/15/Mybatis实战笔记11.比较全的多表查询/index.html","7528a56c7a02fc935a5fcb489c5b1f8f"],["D:/git/myblog/public/2019/06/16/Mybatis实战笔记12.sql片段/index.html","c4391c90ff64c446e38559939c0cdcd7"],["D:/git/myblog/public/2019/06/17/Mybatis实战笔记13.多条件检索（动态sql语句）/index.html","e3dede4d32650e9acbdda13d77d4986c"],["D:/git/myblog/public/2019/06/19/Mybatis实战笔记14.多条数据操作/index.html","7963f5c65430cb8161576ac6e3e8927b"],["D:/git/myblog/public/2019/06/21/Mybatis实战笔记15.补充：trim标记/index.html","d1076ce7278800578324908b43f17d95"],["D:/git/myblog/public/2019/06/22/Java8新特性/index.html","96de4a6ef22dfaea2e6e1e55d0fa0a24"],["D:/git/myblog/public/2019/06/24/Mybatis实战笔记16.分页工具PagerHelper/index.html","6cfdc8edee02cc0d1f08cd842df5a863"],["D:/git/myblog/public/2019/07/01/Mysql性能优化/index.html","2d22eedb9b75c610e13904dcba9c192b"],["D:/git/myblog/public/2019/07/02/MySQL语句优化/index.html","b167fb97a499cdfae159bfc1db2e6234"],["D:/git/myblog/public/2019/07/04/SQL Select 语句完整的执行顺序/index.html","60e88688b0595b061992f033e8e78bf9"],["D:/git/myblog/public/2019/07/05/在千万级的数据库查询中，如何提高效率/index.html","98527d400d33e74bc05c00e2b9b8fbeb"],["D:/git/myblog/public/2019/07/07/过滤器、拦截器、切片异同点/index.html","d5a0c2dfa22857c24c85469ba95f264d"],["D:/git/myblog/public/2019/07/08/MySql进阶3.函数/index.html","698321e762db9f6725c3a36ce1f70db3"],["D:/git/myblog/public/2019/07/10/MySql进阶1.变量/index.html","ae7c32f24331cef49eeaca54b4f2a5b6"],["D:/git/myblog/public/2019/07/11/MySql进阶2.存储过程/index.html","8b94e1999e36b5b54c39c14be4d29dbd"],["D:/git/myblog/public/2019/07/12/MySql进阶4.流程控制/index.html","f8a071ad905d235690e2fe2ddc2f47d2"],["D:/git/myblog/public/2019/07/18/MySql进阶5.视图/index.html","f801e5fb4fc8cc86e92a6b17e7fe6011"],["D:/git/myblog/public/2019/07/20/MySql进阶6.索引失效/index.html","3eb1ae0c801cc356c81a958e3ccc28d5"],["D:/git/myblog/public/2019/08/05/fastJson用法/index.html","dc1a55583c01dbe92db215a7e2b890c6"],["D:/git/myblog/public/2019/08/12/MySQL索引/index.html","f308938cccc935e548a7f99066cf0f89"],["D:/git/myblog/public/2019/08/13/ZooKeeper入门认知/index.html","c5c29ddc002ca723ce212e4cf87d50d7"],["D:/git/myblog/public/2019/08/15/IDEA插件和模板/index.html","2bd90519225fc64e6a27489f8033c13f"],["D:/git/myblog/public/2019/08/16/Linux下查看日志命令/index.html","773956604e50d8fcd8cc295a96fd2404"],["D:/git/myblog/public/2019/08/18/List去重的几种方法/index.html","8b34a3f049358ae1cc8d2d4bddd5c400"],["D:/git/myblog/public/2019/08/20/IO模式/index.html","fa01a770e2c7fb6b8df1f624963b9310"],["D:/git/myblog/public/2019/08/21/排序算法/index.html","d355565bd7f50e80379dfb9f9f1ce8e9"],["D:/git/myblog/public/2019/08/23/链表实现栈/index.html","5c3a8d4a245c64c92a26a966d21f6182"],["D:/git/myblog/public/2019/08/25/MQ的高可用的降级方案/index.html","a9212153b4f8524fffc4392fdaa41342"],["D:/git/myblog/public/2019/09/01/秒杀系统/index.html","de7cb46bf3b4752858e011540935e9f3"],["D:/git/myblog/public/2019/09/21/分布式事务方案/index.html","65ab6bd938f07072573948ca65f25f81"],["D:/git/myblog/public/2019/09/22/分布式系ID方案/index.html","377e0a76716f1460c3a4b8534f984b75"],["D:/git/myblog/public/2019/09/22/分布式系统开发设计/index.html","5b4a257881e8b05b17290d799c9862af"],["D:/git/myblog/public/2019/09/22/微服务、分布式和集群的异同点/index.html","1678793fe722dff99ec854002845b7b8"],["D:/git/myblog/public/2019/09/23/分布式锁和分布式事务概念/index.html","0f6dbe293f2c5a891ef6c59e1df0fe92"],["D:/git/myblog/public/2019/09/24/MySQL乐观锁MVCC机制/index.html","1679908e4f84c652c79cb0209227155c"],["D:/git/myblog/public/2019/10/01/集合源码解析/index.html","20ea10c1be6efd609ee33f5d24a5738f"],["D:/git/myblog/public/2019/11/07/设计模式手册1.适配器模式/index.html","15ce8cb298cb9045ee6b879f485c42e5"],["D:/git/myblog/public/2019/11/08/设计模式手册2.单例模式/index.html","1c3b43abd7edf747bfc9a119260478e7"],["D:/git/myblog/public/2019/11/09/设计模式手册3.代理模式和AOP/index.html","b30214d7c235c6575281c43170e2d3de"],["D:/git/myblog/public/2019/11/12/设计模式手册4.工厂模式/index.html","caf06345bb53e6e3ead41010bf89d48e"],["D:/git/myblog/public/2019/11/13/设计模式手册5.观察者模式/index.html","5438e55e6f005a3dcc78c7f6c7a6142f"],["D:/git/myblog/public/2019/11/14/设计模式手册6.装饰者模式/index.html","13704e238765ceb2560f40069a227c2e"],["D:/git/myblog/public/2020/03/02/Docker命令/index.html","2a4c6dbf155eb87f2b6ef159a3487673"],["D:/git/myblog/public/2020/03/02/Docker进阶/index.html","3ca1400c11850f0ed674fa69f2d2c0d7"],["D:/git/myblog/public/2020/04/05/Kafka消息队列/index.html","9309109e1f6be8e6bc6da12fde1f3c12"],["D:/git/myblog/public/2020/04/06/微服务的高可用和线程池参数设计/index.html","c67b4d79bc5ac89285bbae8ed32fb3ae"],["D:/git/myblog/public/2020/04/10/Bean生命周期/index.html","98dc145eedc39f4731befa497b301251"],["D:/git/myblog/public/2020/04/27/JVM垃圾回收/index.html","3efc9f39f01aefe04afad1cff350591e"],["D:/git/myblog/public/2020/05/05/Redission分布式锁/index.html","f9b5e1f4a7685ed0c07c9ada1654983e"],["D:/git/myblog/public/2020/05/05/加解密算法/index.html","22670ae62ba7860b31921d10cff5576d"],["D:/git/myblog/public/2020/05/10/AQS抽象队列同步器/index.html","92365f74eae6445b51e65fc71453e92f"],["D:/git/myblog/public/2020/05/14/加解密流程/index.html","5af6a18ddf41c7147e2f3adf22b2544c"],["D:/git/myblog/public/2020/05/15/设计模式手册7.策略模式/index.html","74d573917fbd8dd4d31bf0a6da5ec2f3"],["D:/git/myblog/public/2020/05/18/手写双向链表/index.html","62b551223c8d1b7c50e8a6243478e396"],["D:/git/myblog/public/2020/06/01/GC调优/index.html","973007140cb3eb4e225ad1c6985fabc2"],["D:/git/myblog/public/2020/06/10/可靠消息最终一致性方案/index.html","205ea9e3320c28538bfa76e45f664a52"],["D:/git/myblog/public/2020/10/08/ThreadLocal/index.html","8019d5a95144aab29603c97cda977d2c"],["D:/git/myblog/public/about/index.html","b83eb8825444d26bdb83267ff9e004f4"],["D:/git/myblog/public/archives/2019/03/index.html","ddf19aa7875acb6b767523aaa504bee6"],["D:/git/myblog/public/archives/2019/03/page/2/index.html","a6c622677a61eecd9eeb8784f232b068"],["D:/git/myblog/public/archives/2019/05/index.html","7d8c1c7ba81c487caa3c6985a892d3f4"],["D:/git/myblog/public/archives/2019/06/index.html","847d06004383ba70116a4ba3a8f88a7c"],["D:/git/myblog/public/archives/2019/06/page/2/index.html","ba65a0e36edcd71b96a1c656b079cf1c"],["D:/git/myblog/public/archives/2019/06/page/3/index.html","3286fa4a4aeb0b02e66db6c4039c3cc7"],["D:/git/myblog/public/archives/2019/07/index.html","bcdf389ebba370142dd76178dbe1c6fb"],["D:/git/myblog/public/archives/2019/07/page/2/index.html","5ae8e8febc8b8801497f4b9eeee75ac3"],["D:/git/myblog/public/archives/2019/08/index.html","1dadb1f873d4c3de73c44047185ab9e7"],["D:/git/myblog/public/archives/2019/08/page/2/index.html","a26d57cd2e05789c124d7a07aa5e0978"],["D:/git/myblog/public/archives/2019/09/index.html","88782161b023ab6801d659866c048f70"],["D:/git/myblog/public/archives/2019/10/index.html","254e5d52833ad3f8fc4514027f435871"],["D:/git/myblog/public/archives/2019/11/index.html","6727871e7ec60b29dc495588a307af5c"],["D:/git/myblog/public/archives/2019/index.html","e1be09adb8826b2ba51c1a9fa908619e"],["D:/git/myblog/public/archives/2019/page/2/index.html","d9bc45b78c4c9050db128d440cdcef22"],["D:/git/myblog/public/archives/2019/page/3/index.html","29d8c24d8e743fc57b60b01ebe72c0fc"],["D:/git/myblog/public/archives/2019/page/4/index.html","04a1992793930d6e3cfa70bafbf8c7fa"],["D:/git/myblog/public/archives/2019/page/5/index.html","785477241165c598939947dcfacae541"],["D:/git/myblog/public/archives/2019/page/6/index.html","1761ddc50fefadb45f2e138ad2a9a839"],["D:/git/myblog/public/archives/2019/page/7/index.html","906819ea09e5f487ff7d75d6fa8b3168"],["D:/git/myblog/public/archives/2019/page/8/index.html","007e13c0c6dfe9c5ad76d92840fb6b26"],["D:/git/myblog/public/archives/2019/page/9/index.html","399dca612bea0b350e3718a730fa0e53"],["D:/git/myblog/public/archives/2020/03/index.html","6dccd9b07f39a9dacfa21ca944621a56"],["D:/git/myblog/public/archives/2020/04/index.html","49334cc5e9854eb05fc551c0c05fcc41"],["D:/git/myblog/public/archives/2020/05/index.html","8a1a17e3ae9c7e3dd2101e0f832dd190"],["D:/git/myblog/public/archives/2020/06/index.html","504c487c52ab4bada9c7cc3f4155fb88"],["D:/git/myblog/public/archives/2020/10/index.html","63daa0165d347bb30972aaa6b581da3a"],["D:/git/myblog/public/archives/2020/index.html","927745c27e09e073200d81fb6bce9314"],["D:/git/myblog/public/archives/2020/page/2/index.html","4fcfa11d6fffe113b125e4f40fcf02f8"],["D:/git/myblog/public/archives/index.html","ec8b4cc8198e627027aa2f9bdc204def"],["D:/git/myblog/public/archives/page/10/index.html","ec8b4cc8198e627027aa2f9bdc204def"],["D:/git/myblog/public/archives/page/11/index.html","ec8b4cc8198e627027aa2f9bdc204def"],["D:/git/myblog/public/archives/page/2/index.html","ec8b4cc8198e627027aa2f9bdc204def"],["D:/git/myblog/public/archives/page/3/index.html","ec8b4cc8198e627027aa2f9bdc204def"],["D:/git/myblog/public/archives/page/4/index.html","ec8b4cc8198e627027aa2f9bdc204def"],["D:/git/myblog/public/archives/page/5/index.html","ec8b4cc8198e627027aa2f9bdc204def"],["D:/git/myblog/public/archives/page/6/index.html","ec8b4cc8198e627027aa2f9bdc204def"],["D:/git/myblog/public/archives/page/7/index.html","ec8b4cc8198e627027aa2f9bdc204def"],["D:/git/myblog/public/archives/page/8/index.html","ec8b4cc8198e627027aa2f9bdc204def"],["D:/git/myblog/public/archives/page/9/index.html","ec8b4cc8198e627027aa2f9bdc204def"],["D:/git/myblog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/git/myblog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/git/myblog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/git/myblog/public/categories/GC调优/index.html","ad3ea68b3efe9fcc3f3eb5ce27dbd0a6"],["D:/git/myblog/public/categories/Java并发/index.html","41cdbbbb491168759f1ad18fcd093648"],["D:/git/myblog/public/categories/MyBatis/index.html","dbb59c226d789a1051e92dc84cfc1b9b"],["D:/git/myblog/public/categories/MyBatis/page/2/index.html","82810ae863da1576df422e4fab676b7a"],["D:/git/myblog/public/categories/MySql进阶/index.html","42c4871d8f524ad0085877f61e29df2b"],["D:/git/myblog/public/categories/Redis/index.html","15f3f4cbe6ef0e1eeb0e03bbf4080bfc"],["D:/git/myblog/public/categories/Redis实操笔记/index.html","636eaa880cd291715a73a69b6ac45e3f"],["D:/git/myblog/public/categories/Redis实操笔记/page/2/index.html","578b14df0dcc7105baf280d803adfcaf"],["D:/git/myblog/public/categories/index.html","d60dedc49ac0425408200da5a43a5dda"],["D:/git/myblog/public/categories/分布式/index.html","2ef831d6daa3b2ae8ddbf9110ad9df9f"],["D:/git/myblog/public/categories/微服务/index.html","341e928c4c60dd5e0cc69a27b9e6f503"],["D:/git/myblog/public/categories/设计模式/index.html","1bb3d88c9219deb3ed3a3f10629358f5"],["D:/git/myblog/public/css/style.css","63d783cb64a4720f00c80bd91bc95bc5"],["D:/git/myblog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/git/myblog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/git/myblog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/git/myblog/public/friends/index.html","470223bfdbe6e2a533254f26327b49c7"],["D:/git/myblog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/git/myblog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/git/myblog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/git/myblog/public/index.html","b4bdc17eeed7dfa5c7e6bc455d66bbf1"],["D:/git/myblog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/git/myblog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/git/myblog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/git/myblog/public/mylist/index.html","aedf87cb75c46c5e2fcdcf81f55c95d5"],["D:/git/myblog/public/mylist/一个下雨的清晨.html","4efb7f6c38cf69294971c42b19da9304"],["D:/git/myblog/public/mylist/一句话也不说.html","4bc9918944883606d4df9f58da4fc6ea"],["D:/git/myblog/public/mylist/一只猫老了.html","81246bb62e4357db839ca5e3a775978f"],["D:/git/myblog/public/mylist/一滴雨落下.html","bd303cf241636fbf73b1ef06ac58e0c8"],["D:/git/myblog/public/mylist/一片云把一屋子的梦扯开.html","9499b2f1bd1dc4f4c5754fc777d2f400"],["D:/git/myblog/public/mylist/三月会有最后一天吗.html","78f9483ca67ef4966d8bccd962aa4d66"],["D:/git/myblog/public/mylist/不会爱上一个梦.html","2f4e2d12a7646d777bf2b797cd9e13db"],["D:/git/myblog/public/mylist/今夜.html","f5cd128e22bdc4c0a71a2510516b2c26"],["D:/git/myblog/public/mylist/今夜你要去哪里.html","7e272f937b4aa5fa0b9736f1ae6c9af9"],["D:/git/myblog/public/mylist/你是温柔的女人.html","cc936cb0e7665763f394d170b56d033e"],["D:/git/myblog/public/mylist/你用手触碰一颗易碎的心.html","8cd1dc5d6bef7ff59ea1adfaae9cccbd"],["D:/git/myblog/public/mylist/你端坐屋子的一头.html","9ebc0645df289b963fe6249ca9b2f6fa"],["D:/git/myblog/public/mylist/你身处在这个初夏.html","fd40d59f0930e26b106d21bf7b49dd93"],["D:/git/myblog/public/mylist/八月的第一天.html","0d5af971318859ffacbdedd5bcc148b9"],["D:/git/myblog/public/mylist/写诗是一个人的事.html","efcb534fe17fa4cf932bc0b251ded445"],["D:/git/myblog/public/mylist/十六楼的阳台.html","58f026b321e6d1ec3b8d6b489894f2d5"],["D:/git/myblog/public/mylist/去年的这个时候.html","f4de38e9cc5f22008d6b62292752ffb2"],["D:/git/myblog/public/mylist/夏日走后.html","cc174b3b5ba0020503f949ad322dc809"],["D:/git/myblog/public/mylist/夜色之中.html","205bbd155b43fdeb0101a4445e1a9996"],["D:/git/myblog/public/mylist/天会下雨.html","3b26e3f56463edaca3b730dc7cee15d7"],["D:/git/myblog/public/mylist/天凉了.html","0eb3861ca1bec081cb6f920bfd247e0d"],["D:/git/myblog/public/mylist/如果这是春天.html","5327dc9d3b2bb2c243431dcfdd96be9f"],["D:/git/myblog/public/mylist/情人.html","17cfcf762685f1651648f9c23465f027"],["D:/git/myblog/public/mylist/把月光占为己有.html","a3d05e142f17711bcf6b648433d61d2a"],["D:/git/myblog/public/mylist/故事里的男人.html","f5d078f70335e82fac0aa9276a9f2948"],["D:/git/myblog/public/mylist/月光是新的.html","f74398784bb6fd6b7917ef1bab8476eb"],["D:/git/myblog/public/mylist/桃花开了.html","6f0d4871dce9743ef967032566d33fd3"],["D:/git/myblog/public/mylist/没有比这更悲伤的了.html","75939bc8b109d5ea32fd18f993193ebc"],["D:/git/myblog/public/mylist/起初.html","92ba2e91309b7d889954793e75023a34"],["D:/git/myblog/public/page/10/index.html","a0607963061ff49009d3d5fcda41118b"],["D:/git/myblog/public/page/11/index.html","bb4bfa9d797cce133219340c9a28a168"],["D:/git/myblog/public/page/2/index.html","2b1f2c0b7ecdea4069ef38a462f9aad3"],["D:/git/myblog/public/page/3/index.html","29292040bf5de71bccee5708f25d0e82"],["D:/git/myblog/public/page/4/index.html","5ba01f1e293804192ae008a0acfa3526"],["D:/git/myblog/public/page/5/index.html","ec6058107af5af12d87d58177bd95935"],["D:/git/myblog/public/page/6/index.html","fd129c5ad7089387ac06ff4ee7d0c8e6"],["D:/git/myblog/public/page/7/index.html","0c31af598a8607cb4aefe13c5cf79546"],["D:/git/myblog/public/page/8/index.html","d024d36baccedfb3f509deb873709ea0"],["D:/git/myblog/public/page/9/index.html","f3ebee2a801fcf58264d2efb4d8080a3"],["D:/git/myblog/public/tags/AOP/index.html","2143800b43bdcc798d796ef7a051d1ee"],["D:/git/myblog/public/tags/AQS/index.html","5a20b4ced00052f0ac2ec16532e29e38"],["D:/git/myblog/public/tags/Bean/index.html","f3eb3f00cc2cf92a3b24e7451029845c"],["D:/git/myblog/public/tags/CAS/index.html","43367913f585826cd8e718d6e854128b"],["D:/git/myblog/public/tags/Docker/index.html","d3020512707e0198e08c327925ad6e2d"],["D:/git/myblog/public/tags/Eruka/index.html","b45a61813f3d0560eb7ba1596ee50687"],["D:/git/myblog/public/tags/FastJson/index.html","c948db1946bd97b614703d641e39cbc8"],["D:/git/myblog/public/tags/GC/index.html","ef330f8993304ad42a21f52e87bda0b1"],["D:/git/myblog/public/tags/HashMap/index.html","57c3a35f6b38b160fb64515dfd86eb70"],["D:/git/myblog/public/tags/ID生成/index.html","ca0eb1c2d8814ae19cf0953dee444a90"],["D:/git/myblog/public/tags/IO模式/index.html","7af15c013ced8da6be82e67bf02bc4f1"],["D:/git/myblog/public/tags/Idea/index.html","e6918c2156554f3fa8f6f4115dc430d1"],["D:/git/myblog/public/tags/JVM/index.html","b850d2861513638c5077056ee238cfa2"],["D:/git/myblog/public/tags/Java8新特性/index.html","ccd9d45f04bebc378d58c15a38d14692"],["D:/git/myblog/public/tags/Java基础/index.html","6d84a8a04a44681efdc81e5fc00f7ab6"],["D:/git/myblog/public/tags/MySql/index.html","ef816a86710cfc3f4f9901af3db33474"],["D:/git/myblog/public/tags/MySql进阶/index.html","51a5af24a3ee8360d21e9054505823bf"],["D:/git/myblog/public/tags/RSA/index.html","2efdc9d54b38623de796c2cf8d4eddd7"],["D:/git/myblog/public/tags/Redis/index.html","31798d3454c71427c2adc7a9ecbd203f"],["D:/git/myblog/public/tags/Zookeeper/index.html","25498e802c459e418c0ac4b9c0d4a784"],["D:/git/myblog/public/tags/index.html","89e6a87599b045d529d3107cb59f4bb4"],["D:/git/myblog/public/tags/kafka/index.html","f7153aed5b4ac83abcc611bb31dd28fd"],["D:/git/myblog/public/tags/synchronized/index.html","08e57bfcc0168bc9a18161684d1306e1"],["D:/git/myblog/public/tags/volatile/index.html","a365b2604ada689401e586261e0c45f2"],["D:/git/myblog/public/tags/中间件/index.html","78bea759f12236bac08d396189080e1c"],["D:/git/myblog/public/tags/事务/index.html","0e1d30d6a78b8cbdb019403614eacf63"],["D:/git/myblog/public/tags/分布式/index.html","7ff3a2751809db8cbcc097cfa063e0ba"],["D:/git/myblog/public/tags/加解密/index.html","f77703bbb31f2c9020f203c0b6fdb6a1"],["D:/git/myblog/public/tags/单例模式/index.html","e3f80d707dbad63c439cec61d98f70cf"],["D:/git/myblog/public/tags/国密/index.html","bcad567a3b3369c2b14a8217d2aa72d4"],["D:/git/myblog/public/tags/工具/index.html","dd8215face589154571148b473fef305"],["D:/git/myblog/public/tags/并发/index.html","5b83a06ba31762707fc28495fa7fc434"],["D:/git/myblog/public/tags/微服务/index.html","2845e5ad3e726d682c33dc05add17f6d"],["D:/git/myblog/public/tags/数据库/index.html","2475e160ecac3d03a1b2666ab13e2e74"],["D:/git/myblog/public/tags/消息队列/index.html","a93c23e2e32cb2827d225a5c5c148413"],["D:/git/myblog/public/tags/热门/index.html","406e94d09c2449e0f37f94d9e5aacc40"],["D:/git/myblog/public/tags/秒杀/index.html","1f9240815410442aacb8a4ccc50f40ac"],["D:/git/myblog/public/tags/算法/index.html","48db27640223c9c67bb3b32b04b77649"],["D:/git/myblog/public/tags/线程/index.html","eaa89824e8a1906c676aaec91d0c9bcd"],["D:/git/myblog/public/tags/缓存/index.html","d5b299090bed70c07044a3761279186d"],["D:/git/myblog/public/tags/过滤器/index.html","3db951464a1f4f3c9ebd31a8ca0a424b"],["D:/git/myblog/public/tags/集合/index.html","733f04b90457cb7d3e015d7290287ec9"]];
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







