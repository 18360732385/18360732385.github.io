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

var precacheConfig = [["D:/git/myblog/public/2019/03/04/Redis实操笔记1.安装/index.html","0fe2c0a77bc73b49723d2a08fd4f1497"],["D:/git/myblog/public/2019/03/05/Redis实操笔记2.配置/index.html","12d1e0a9a983c59038fb3fc16073f5f4"],["D:/git/myblog/public/2019/03/06/Redis实操笔记3.搭建Redis集群/index.html","6d7a95ea007a597eef6129c55c20c9c1"],["D:/git/myblog/public/2019/03/07/Redis实操笔记4.数据库操作/index.html","639bf759c7ba2f66e6ecf4ea8019b71c"],["D:/git/myblog/public/2019/03/07/Redis实操笔记5.String/index.html","1c9f0d78d2f8f666b385cf30afee34c5"],["D:/git/myblog/public/2019/03/08/Redis实操笔记6.Hash/index.html","551b01ff6e5194764659831354812d2f"],["D:/git/myblog/public/2019/03/09/Redis实操笔记7.List/index.html","4ee59a880137409b25eba5ece1a1e7dc"],["D:/git/myblog/public/2019/03/10/Redis实操笔记8.Set/index.html","845710eec04d201f77c99beac4afa0d6"],["D:/git/myblog/public/2019/03/11/Redis实操笔记9.SortedSet/index.html","07bedb25ab9ff397083f7f9bfd6868c4"],["D:/git/myblog/public/2019/05/03/注册中心—多级缓存设计/index.html","9126eb25b590f913bd0ada08e1923de9"],["D:/git/myblog/public/2019/05/10/AQS抽象队列同步器/index.html","a2158ecfebbb8c2adbfc76df7334f0a0"],["D:/git/myblog/public/2019/05/11/AQS组件原理及使用/index.html","b58c7ac2bce50265769c2ac9e57ab65f"],["D:/git/myblog/public/2019/05/12/CAS自旋/index.html","75739f9ce6462d5ffc7df04f5ed82d0b"],["D:/git/myblog/public/2019/05/12/synchronized/index.html","36ddc8b91c5e4aa23f76ec010371e74c"],["D:/git/myblog/public/2019/05/13/volatile/index.html","ec9a7d13fe8f70a87ab69ef45dc88bd4"],["D:/git/myblog/public/2019/06/01/GC调优/index.html","6c2cc6ca8921b80a94041f7a809b1c4f"],["D:/git/myblog/public/2019/06/02/JVM内存区/index.html","d6c41cc46aec6acc42f42a909a2154f6"],["D:/git/myblog/public/2019/06/02/JVM垃圾回收/index.html","10911d6597d7aacc4b16694a758a7263"],["D:/git/myblog/public/2019/06/04/Mybatis实战笔记1.SqlMapConfig.xml文件配置/index.html","7d821aaf90871738ad5cabe35b476d94"],["D:/git/myblog/public/2019/06/05/Mybatis实战笔记2.简单的parameterType和resultType介绍/index.html","3cdbeae02968f05b1fb7260e8656f3d8"],["D:/git/myblog/public/2019/06/06/Mybatis实战笔记3.当传参传入多个参数时（4种方法）/index.html","a30d712ff36944dadaf8f058ccd26f3d"],["D:/git/myblog/public/2019/06/06/Mybatis实战笔记4.resultMap的简单使用/index.html","4aec963a455d13d0a96978a2f69d30b1"],["D:/git/myblog/public/2019/06/06/Redis分段锁优化/index.html","d879c19e3b1d32762d584ed4f294a9cb"],["D:/git/myblog/public/2019/06/06/Redis持久化/index.html","f8923cd92a435def376d3998e1ccee44"],["D:/git/myblog/public/2019/06/06/Redis缓存设计问题/index.html","5ef982f6be2061c2cbb1394b3cae65ed"],["D:/git/myblog/public/2019/06/07/Mybatis实战笔记5.多表查询、关联查询（resultMap）/index.html","2a506926111d9a176cd3f24f70da2d2f"],["D:/git/myblog/public/2019/06/07/Redis集群模式/index.html","4ba8e8aaf638ff758744473ca48a1812"],["D:/git/myblog/public/2019/06/09/Mybatis实战笔记6.resultMap的继承和collection的使用/index.html","92d40917ad9f62df7f073db8ab251ddf"],["D:/git/myblog/public/2019/06/10/Mybatis实战笔记7.模糊查询/index.html","c0f03a6b16bf431bf4c20942eb113e67"],["D:/git/myblog/public/2019/06/10/可靠消息最终一致性方案/index.html","6dfc9370bf7ddfc60f684f14b3751d57"],["D:/git/myblog/public/2019/06/11/Mybatis实战笔记8.自增长主键返回/index.html","76d7f063c081209bf3af7dd22c8dd7f0"],["D:/git/myblog/public/2019/06/13/Mybatis实战笔记9.开启二级缓存：cache/index.html","7f25db570fd9ee8d944875517d4fc326"],["D:/git/myblog/public/2019/06/14/Mybatis实战笔记10.懒加载机制/index.html","c3742fcd82087dffc55106e3080e51e7"],["D:/git/myblog/public/2019/06/15/Mybatis实战笔记11.比较全的多表查询/index.html","e5b33fb2467c233fc48fc9b055f41012"],["D:/git/myblog/public/2019/06/16/Mybatis实战笔记12.sql片段/index.html","9ddc01805aee797a037cc88c9c388351"],["D:/git/myblog/public/2019/06/17/Mybatis实战笔记13.多条件检索（动态sql语句）/index.html","d8445b53ca3b47bad69c7ef2fa19f11d"],["D:/git/myblog/public/2019/06/19/Mybatis实战笔记14.多条数据操作/index.html","3418ca7353fc221e8c3d3178a1f26aa6"],["D:/git/myblog/public/2019/06/21/Mybatis实战笔记15.补充：trim标记/index.html","610495d3673b0fc043e30019b2be1fbe"],["D:/git/myblog/public/2019/06/22/Java8新特性/index.html","ba4191d01196991b89cc426dcc3061de"],["D:/git/myblog/public/2019/06/24/Mybatis实战笔记16.分页工具PagerHelper/index.html","d5bfc7ecce66c75e5042a2b44f7dd876"],["D:/git/myblog/public/2019/07/01/Mysql性能优化/index.html","97481749ac0959464feaeab3fc560dc3"],["D:/git/myblog/public/2019/07/02/MySQL语句优化/index.html","7f3b45297744703064d76128238f6914"],["D:/git/myblog/public/2019/07/04/SQL Select 语句完整的执行顺序/index.html","01e01b5925145ac839dc6780fabd630b"],["D:/git/myblog/public/2019/07/05/Kafka消息队列/index.html","bee08a6c898fbbeb1a3a37f4920dbe7d"],["D:/git/myblog/public/2019/07/05/在千万级的数据库查询中，如何提高效率/index.html","fff4df4a0c72fb24d624adce6d4ceb2b"],["D:/git/myblog/public/2019/07/07/过滤器、拦截器、切片异同点/index.html","4195bce236e073bab345eaeaa7a2f473"],["D:/git/myblog/public/2019/07/08/MySql进阶3.函数/index.html","3592d67fff75c00e74335af73a569fbc"],["D:/git/myblog/public/2019/07/10/Bean生命周期/index.html","2b6640f1904293ba748b661c72ef63a3"],["D:/git/myblog/public/2019/07/10/MySql进阶1.变量/index.html","ccf8055a8c94a3d536aebae0e5c3e2e0"],["D:/git/myblog/public/2019/07/11/MySql进阶2.存储过程/index.html","6faf3d9ee0909b19eb55019d91f1af7f"],["D:/git/myblog/public/2019/07/12/MySql进阶4.流程控制/index.html","1874eebe11216f696697f821a75b9c62"],["D:/git/myblog/public/2019/07/18/MySql进阶5.视图/index.html","52fe8c144a0860d8f2994f0618585cdb"],["D:/git/myblog/public/2019/07/20/MySql进阶6.索引失效/index.html","d405ef13c1599429b9361cc4c3df5b7b"],["D:/git/myblog/public/2019/08/05/fastJson用法/index.html","735e4a76e758b00be7cbaaf6071c3ae7"],["D:/git/myblog/public/2019/08/12/MySQL索引/index.html","067c3b7f26f6352360302f10b40656d4"],["D:/git/myblog/public/2019/08/13/ZooKeeper入门认知/index.html","d1b9333b09e94c960017aa8d8fb3aeab"],["D:/git/myblog/public/2019/08/15/IDEA插件和模板/index.html","366032476d919c14f77f0f43b8a770f5"],["D:/git/myblog/public/2019/08/16/Linux下查看日志命令/index.html","66ecb68fb7c720c27a80e5a742c97cf2"],["D:/git/myblog/public/2019/08/18/List去重的几种方法/index.html","54db6c7b1ede861fadbfd8ee09d07128"],["D:/git/myblog/public/2019/08/18/手写双向链表/index.html","ac5bf7a5c1314de51aab09cbbbc782f2"],["D:/git/myblog/public/2019/08/20/IO模式/index.html","8f3628a1b2c9feab9ccc27ce06223e22"],["D:/git/myblog/public/2019/08/21/排序算法/index.html","474e430063c0e10fd0c46aa83f89e941"],["D:/git/myblog/public/2019/08/23/链表实现栈/index.html","6ac8770472a5a1437532bc4159ecfdd8"],["D:/git/myblog/public/2019/08/25/MQ的高可用的降级方案/index.html","342b027bb4e9a32801dd3b5ac5c7480f"],["D:/git/myblog/public/2019/09/01/秒杀系统/index.html","67148bd896c31d59edb5d9cd388d09c9"],["D:/git/myblog/public/2019/09/21/分布式事务方案/index.html","728e87769cda3aa8fc61d8f52b0c0a9f"],["D:/git/myblog/public/2019/09/22/分布式系ID方案/index.html","154c6132d7187e57e14cd5ac856c7b13"],["D:/git/myblog/public/2019/09/22/分布式系统开发设计/index.html","5dcbdf9eea390a48aaf6ea5217fa0d89"],["D:/git/myblog/public/2019/09/22/微服务、分布式和集群的异同点/index.html","cd546f444bf3e4c49c38e8e3a629ab7d"],["D:/git/myblog/public/2019/09/23/分布式锁和分布式事务概念/index.html","b84662883a505f518de5233782da43e2"],["D:/git/myblog/public/2019/09/24/MySQL乐观锁MVCC机制/index.html","00c0f67825e7eb986835f9cef02b9a72"],["D:/git/myblog/public/2019/10/01/集合源码解析/index.html","e947ac3f7393de2d00b9f86a735f6459"],["D:/git/myblog/public/2019/10/05/加解密算法/index.html","c322764e19eb1e796a360659d8ecbcb6"],["D:/git/myblog/public/2019/10/06/微服务的高可用和线程池参数设计/index.html","c2a7d2ab21f0977d5fe3108a762ab393"],["D:/git/myblog/public/2019/10/14/加解密流程/index.html","2c5dc3f178ff5e951c88bad7a1262559"],["D:/git/myblog/public/2019/11/07/设计模式手册1.适配器模式/index.html","25e965e31d3019982f10e58ffa3952e6"],["D:/git/myblog/public/2019/11/08/设计模式手册2.单例模式/index.html","4f7b9bf6384132feb5f6a1ee57167c47"],["D:/git/myblog/public/2019/11/09/设计模式手册3.代理模式和AOP/index.html","ea0f95bc7cdb05104d1d8f517e8b7a2d"],["D:/git/myblog/public/2019/11/12/设计模式手册4.工厂模式/index.html","985493ac02230414b7d537c7328110e9"],["D:/git/myblog/public/2019/11/13/设计模式手册5.观察者模式/index.html","14f797784f8215aa7a35339d46502560"],["D:/git/myblog/public/2019/11/14/设计模式手册6.装饰者模式/index.html","e4d54d5cae733b35365d5a427e5413b4"],["D:/git/myblog/public/2019/11/15/设计模式手册7.策略模式/index.html","9bbc812cdea23ea173d4a7ddb2f5d19d"],["D:/git/myblog/public/2020/03/02/Docker命令/index.html","a399457dbdc78b0626cd3f0854a526f2"],["D:/git/myblog/public/2020/03/02/Docker进阶/index.html","c6fba1c3d55725c00fff8697d9cc2942"],["D:/git/myblog/public/2020/05/05/Redission分布式锁/index.html","35044142e8abfa931d772dbead35f799"],["D:/git/myblog/public/about/index.html","0e4cbadae20283de8c666fbc2756aa20"],["D:/git/myblog/public/archives/2019/03/index.html","453bc4d67a8f2aa3d99885fceef40c4b"],["D:/git/myblog/public/archives/2019/03/page/2/index.html","54c68fccd9e5a463d46aecaa852176b0"],["D:/git/myblog/public/archives/2019/05/index.html","9364870d922995aa8c9b3afb54e40b68"],["D:/git/myblog/public/archives/2019/06/index.html","d10c23819276cf9917013fc3a10b37d7"],["D:/git/myblog/public/archives/2019/06/page/2/index.html","8e51472139baba93f7eb0c7190138675"],["D:/git/myblog/public/archives/2019/06/page/3/index.html","2a47ecf84a32ca22ecea2b5c33874f92"],["D:/git/myblog/public/archives/2019/06/page/4/index.html","bb050cf30bc55dab36813d8d76e9f76f"],["D:/git/myblog/public/archives/2019/07/index.html","f08272a78468713015a1bcf6681d5ed8"],["D:/git/myblog/public/archives/2019/07/page/2/index.html","bcbf2f202e14944c8811b56f38fcdff9"],["D:/git/myblog/public/archives/2019/08/index.html","51211701e37c7df892b9bd64c7ef733f"],["D:/git/myblog/public/archives/2019/08/page/2/index.html","60567f27982816b53566c46e3069be56"],["D:/git/myblog/public/archives/2019/09/index.html","0a6b571004315ec072ed660425f8e336"],["D:/git/myblog/public/archives/2019/10/index.html","b1bcc57c08b625077c33c4a331e3f1cf"],["D:/git/myblog/public/archives/2019/11/index.html","12c8f48f620cfae475bdc373a04bf43c"],["D:/git/myblog/public/archives/2019/index.html","38269b27182a6aa124d9875d3486dbf3"],["D:/git/myblog/public/archives/2019/page/10/index.html","01cbc217245bdb812dbcbb3f1504b00a"],["D:/git/myblog/public/archives/2019/page/11/index.html","42a24bc4adbe7ce2c8a27a2e09e14aef"],["D:/git/myblog/public/archives/2019/page/2/index.html","f6327d7f931d314a0def09eb31ff0762"],["D:/git/myblog/public/archives/2019/page/3/index.html","8d91f781059f2ca2c9cf06282d6a1b5b"],["D:/git/myblog/public/archives/2019/page/4/index.html","f2a97a2e0f6fe6861f5c821d4de8bed6"],["D:/git/myblog/public/archives/2019/page/5/index.html","40846ce452756036ed57471de7c777db"],["D:/git/myblog/public/archives/2019/page/6/index.html","21028240ddc69b3e4f4255ec7e26f968"],["D:/git/myblog/public/archives/2019/page/7/index.html","44ee54f79de9d40095b268c7a8aad653"],["D:/git/myblog/public/archives/2019/page/8/index.html","95a059945a0e1e4b8b7ae25032f79474"],["D:/git/myblog/public/archives/2019/page/9/index.html","1688b91a4017b92fb89443d533a7d343"],["D:/git/myblog/public/archives/2020/03/index.html","1cbba1a55d99b24db114c572261414c8"],["D:/git/myblog/public/archives/2020/05/index.html","48f0e999598c55cbbdcbb4738ae5770d"],["D:/git/myblog/public/archives/2020/index.html","7feb6c565f666347305961c75d0efe3f"],["D:/git/myblog/public/archives/index.html","373aabc2948fe36e69cebf69d62b5b1c"],["D:/git/myblog/public/archives/page/10/index.html","373aabc2948fe36e69cebf69d62b5b1c"],["D:/git/myblog/public/archives/page/11/index.html","373aabc2948fe36e69cebf69d62b5b1c"],["D:/git/myblog/public/archives/page/2/index.html","373aabc2948fe36e69cebf69d62b5b1c"],["D:/git/myblog/public/archives/page/3/index.html","373aabc2948fe36e69cebf69d62b5b1c"],["D:/git/myblog/public/archives/page/4/index.html","373aabc2948fe36e69cebf69d62b5b1c"],["D:/git/myblog/public/archives/page/5/index.html","373aabc2948fe36e69cebf69d62b5b1c"],["D:/git/myblog/public/archives/page/6/index.html","373aabc2948fe36e69cebf69d62b5b1c"],["D:/git/myblog/public/archives/page/7/index.html","373aabc2948fe36e69cebf69d62b5b1c"],["D:/git/myblog/public/archives/page/8/index.html","373aabc2948fe36e69cebf69d62b5b1c"],["D:/git/myblog/public/archives/page/9/index.html","373aabc2948fe36e69cebf69d62b5b1c"],["D:/git/myblog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/git/myblog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/git/myblog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/git/myblog/public/categories/GC调优/index.html","ffeca9387efd1e0291cf8ab0a66d4861"],["D:/git/myblog/public/categories/Java并发/index.html","4d7b77bcdc93d924c821d9c67d1cf76b"],["D:/git/myblog/public/categories/MyBatis/index.html","cc3c026cc8ea8cd0f2664ea89d4f921a"],["D:/git/myblog/public/categories/MyBatis/page/2/index.html","e17ee86c73e142e6c58395db0b66889d"],["D:/git/myblog/public/categories/MySql进阶/index.html","385ed7c95c7fd205f596bbcb4e72f431"],["D:/git/myblog/public/categories/Redis/index.html","5a4387bc09bb551379571038f30c75d4"],["D:/git/myblog/public/categories/Redis实操笔记/index.html","0d6540ae55eeca20daf04c149648e3de"],["D:/git/myblog/public/categories/Redis实操笔记/page/2/index.html","0d2c23bc0a2b6e0d73179c30a79664b7"],["D:/git/myblog/public/categories/index.html","5113f2fce167820752f849d6c4df7c42"],["D:/git/myblog/public/categories/分布式/index.html","8e32c9e8abcf2d9f7325683dee551960"],["D:/git/myblog/public/categories/微服务/index.html","79ba2a73e7392b0d46c9470aca16e2c5"],["D:/git/myblog/public/categories/设计模式/index.html","0d9bad71263d5f38291c42c312eb8ab1"],["D:/git/myblog/public/css/style.css","63d783cb64a4720f00c80bd91bc95bc5"],["D:/git/myblog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/git/myblog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/git/myblog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/git/myblog/public/friends/index.html","3f39ec85ba7e3b59ab8fcc898e401711"],["D:/git/myblog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/git/myblog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/git/myblog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/git/myblog/public/index.html","2fcf4f708db599ac7e5d2af35deba55e"],["D:/git/myblog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/git/myblog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/git/myblog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/git/myblog/public/page/10/index.html","8896bc78b3ccb62c9ea07766b300cd24"],["D:/git/myblog/public/page/11/index.html","d958c29532e3c3a9b44877ffdd18aa5b"],["D:/git/myblog/public/page/2/index.html","d6bc8a8d3cf15f0019f18550d4e2ef1f"],["D:/git/myblog/public/page/3/index.html","f1d9968a220bc3d5ca10305518b03bb7"],["D:/git/myblog/public/page/4/index.html","ba5355e543ccb0562d6213eb6ee4564c"],["D:/git/myblog/public/page/5/index.html","408796c83bb5c79239a44ef16c2c20db"],["D:/git/myblog/public/page/6/index.html","cfba1423b58b8dff93f56e8adb35c80e"],["D:/git/myblog/public/page/7/index.html","a057cc4f3e2b0977e9a6d0763fa497b6"],["D:/git/myblog/public/page/8/index.html","3b7b1a89458fa05ab936fe5ecdd689a5"],["D:/git/myblog/public/page/9/index.html","3301864383a44bccd66c926930537363"],["D:/git/myblog/public/tags/AOP/index.html","530601dacda84130717664cb8083ca61"],["D:/git/myblog/public/tags/AQS/index.html","751e59fb6af79d2a017a48563545fcfe"],["D:/git/myblog/public/tags/Bean/index.html","a652ba05b4ae80519b93a5775ab65186"],["D:/git/myblog/public/tags/CAS/index.html","4cd1bb703949e47508b05d0dc9889d1a"],["D:/git/myblog/public/tags/Docker/index.html","d12d43847e30584be2cc422f4399d359"],["D:/git/myblog/public/tags/Eruka/index.html","2d9769fe33a3d147c7d356187565654d"],["D:/git/myblog/public/tags/FastJson/index.html","9f98bf30b50de38f2dcb99ae901268f3"],["D:/git/myblog/public/tags/GC/index.html","806bf50534b28d06b2c452d29e9747f7"],["D:/git/myblog/public/tags/HashMap/index.html","676c0d433f7b7ad42e186cdacefdbcbf"],["D:/git/myblog/public/tags/ID生成/index.html","2a173c7691e63b09701001c425617884"],["D:/git/myblog/public/tags/IO模式/index.html","2e2e07db27c0d7f71e128580f0384dd6"],["D:/git/myblog/public/tags/Idea/index.html","2090220fe5a7e499d335f470aeb04ce6"],["D:/git/myblog/public/tags/JVM/index.html","962bbae11afb31e7a85779544dd3cfcd"],["D:/git/myblog/public/tags/Java8新特性/index.html","fa215f835148dede76bc4f5c57480af8"],["D:/git/myblog/public/tags/Java基础/index.html","7e2e0f6f6bd7e2a14fe7b69c7b49115a"],["D:/git/myblog/public/tags/MySql/index.html","ecf568c6a02660dc52099791e2aa0c97"],["D:/git/myblog/public/tags/MySql进阶/index.html","54fc339965c2e5bd1a53aa26de918bf2"],["D:/git/myblog/public/tags/RSA/index.html","a511706674b963526ec0d95b7d1b18a8"],["D:/git/myblog/public/tags/Redis/index.html","775b0d2718a8c60848a4e27ab1c468f4"],["D:/git/myblog/public/tags/Zookeeper/index.html","45dc25d587a948276c1ad4bc43441dc3"],["D:/git/myblog/public/tags/index.html","c18d95db38b08efceeedc9c0840aa038"],["D:/git/myblog/public/tags/kafka/index.html","12d0f79abd5b3cafa75a14feefc73544"],["D:/git/myblog/public/tags/synchronized/index.html","c857179d5a29ba9652ef8c28641f8fda"],["D:/git/myblog/public/tags/volatile/index.html","23b0940b2fa3117f5a4a5c487aa18d8d"],["D:/git/myblog/public/tags/中间件/index.html","fab42bc7838f71686a2f1075c15b0aaf"],["D:/git/myblog/public/tags/事务/index.html","7ba552cbf27a510a6d747783644531e3"],["D:/git/myblog/public/tags/分布式/index.html","8e1a3b02bb0b16a7331e1794f39ae4cc"],["D:/git/myblog/public/tags/加解密/index.html","82711a5daf71daf428bdccfcaab726d5"],["D:/git/myblog/public/tags/单例模式/index.html","ddc963ef744fa6d5ac383ffc807ccb95"],["D:/git/myblog/public/tags/国密/index.html","78edfcc7c0f1947d9237e1dddf18674e"],["D:/git/myblog/public/tags/工具/index.html","478841f54f210d0b871e93b43363f4f2"],["D:/git/myblog/public/tags/并发/index.html","99c639efd0cd4939ce218b5f44b0fee4"],["D:/git/myblog/public/tags/微服务/index.html","29630bd3c40c49da4e49292834ac6bab"],["D:/git/myblog/public/tags/数据库/index.html","770212367a391aa1c52f43556dd61b0f"],["D:/git/myblog/public/tags/消息队列/index.html","091aa1a6a421a564aa32d6832c7b1a29"],["D:/git/myblog/public/tags/热门/index.html","3e08dd4d9b592a9dc7d8f8e618c1023e"],["D:/git/myblog/public/tags/秒杀/index.html","64c51dcfe100ca2a3b1035a7f2eba374"],["D:/git/myblog/public/tags/算法/index.html","982d53984916a3e509bc9c9e85c5bdd1"],["D:/git/myblog/public/tags/线程/index.html","58a9fafae093342dce1e2ce8ae482787"],["D:/git/myblog/public/tags/缓存/index.html","d7a54509e997f4093a41f29883e5b51f"],["D:/git/myblog/public/tags/过滤器/index.html","dc6835d7bca5af1f2d2a9114a8b4b34e"],["D:/git/myblog/public/tags/集合/index.html","282a5ecb2bdd730bd52cf8db19d43aa7"]];
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







