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

var precacheConfig = [["D:/git/myblog/public/2019/03/04/Redis实操笔记1.安装/index.html","47e57c93369677857fb486b3a8c8f6fe"],["D:/git/myblog/public/2019/03/05/Redis实操笔记2.配置/index.html","797e688df8024cb90529c1bc816aca77"],["D:/git/myblog/public/2019/03/06/Redis实操笔记3.搭建Redis集群/index.html","deb232ebf0f01af0088737a4c7fb026f"],["D:/git/myblog/public/2019/03/07/Redis实操笔记4.数据库操作/index.html","383867dfbcda11b1db84bbbb0c7aff91"],["D:/git/myblog/public/2019/03/07/Redis实操笔记5.String/index.html","983f1833055af0f32b78f4fb89507c4b"],["D:/git/myblog/public/2019/03/08/Redis实操笔记6.Hash/index.html","269fc363c6d6db6813c2bd4c52717ca6"],["D:/git/myblog/public/2019/03/09/Redis实操笔记7.List/index.html","e0e3381b423068a1d2f09f2167014dd3"],["D:/git/myblog/public/2019/03/10/Redis实操笔记8.Set/index.html","5c951d0c032e56d0fa94b908de00e2ba"],["D:/git/myblog/public/2019/03/11/Redis实操笔记9.SortedSet/index.html","08b1218aabf3a6a76a3ddfe84f5127b8"],["D:/git/myblog/public/2019/05/03/注册中心—多级缓存设计/index.html","b77543073322e2b6edf4c5c50af31259"],["D:/git/myblog/public/2019/05/11/AQS组件原理及使用/index.html","6b696a74c66f24a61f270a6e4ab4f7fa"],["D:/git/myblog/public/2019/05/12/CAS自旋/index.html","427c9aabd9f85536474c3bb4fdf42b63"],["D:/git/myblog/public/2019/05/12/synchronized/index.html","0644ef4cb7b7052edd1ca8cd468d08df"],["D:/git/myblog/public/2019/05/13/volatile/index.html","6343c36fc7ad884810596cf388b860e4"],["D:/git/myblog/public/2019/06/02/JVM内存区/index.html","9867915183338986c016c4351fe7187f"],["D:/git/myblog/public/2019/06/04/Mybatis实战笔记1.SqlMapConfig.xml文件配置/index.html","dddc2dee7bb1fbb9ee491c22238b04ab"],["D:/git/myblog/public/2019/06/05/Mybatis实战笔记2.简单的parameterType和resultType介绍/index.html","ef6008f9114c059901277a186cd833d5"],["D:/git/myblog/public/2019/06/06/Mybatis实战笔记3.当传参传入多个参数时（4种方法）/index.html","5efe924f8b5b5ebbfe8ca51d1c031cc6"],["D:/git/myblog/public/2019/06/06/Mybatis实战笔记4.resultMap的简单使用/index.html","ebe15ef9cdeb2d0e54848f39c69347e9"],["D:/git/myblog/public/2019/06/06/Redis分段锁优化/index.html","500d9a55b93e5d9788355a06fafc2f3f"],["D:/git/myblog/public/2019/06/06/Redis持久化/index.html","ee4b467bf5c21bb67b03454a2adcbc30"],["D:/git/myblog/public/2019/06/06/Redis缓存设计问题/index.html","9e5ff37d262c35c8335c33d7ca979208"],["D:/git/myblog/public/2019/06/07/Mybatis实战笔记5.多表查询、关联查询（resultMap）/index.html","2e1954c15971de01d2a117b23a1fd056"],["D:/git/myblog/public/2019/06/07/Redis集群模式/index.html","430cfd1284ce2c975194e024edcefc01"],["D:/git/myblog/public/2019/06/09/Mybatis实战笔记6.resultMap的继承和collection的使用/index.html","f9332d85d95e2ac0eb337d01706c1ffd"],["D:/git/myblog/public/2019/06/10/Mybatis实战笔记7.模糊查询/index.html","585f0f28e830cac1437a0b0d1d4797b5"],["D:/git/myblog/public/2019/06/11/Mybatis实战笔记8.自增长主键返回/index.html","6ff3e92725f89e4134e182cb05984b7f"],["D:/git/myblog/public/2019/06/13/Mybatis实战笔记9.开启二级缓存：cache/index.html","df5838d63c33d14543d8befa76268338"],["D:/git/myblog/public/2019/06/14/Mybatis实战笔记10.懒加载机制/index.html","711884c8da1cb8a02108bcf151ec0318"],["D:/git/myblog/public/2019/06/15/Mybatis实战笔记11.比较全的多表查询/index.html","7528a56c7a02fc935a5fcb489c5b1f8f"],["D:/git/myblog/public/2019/06/16/Mybatis实战笔记12.sql片段/index.html","6034628e01f497f4283a5c0ac3c2a07f"],["D:/git/myblog/public/2019/06/17/Mybatis实战笔记13.多条件检索（动态sql语句）/index.html","5be635e216c364811f375e1ca5579ff8"],["D:/git/myblog/public/2019/06/19/Mybatis实战笔记14.多条数据操作/index.html","b5cb20af14c6942dd9dfc8ef8ea69908"],["D:/git/myblog/public/2019/06/21/Mybatis实战笔记15.补充：trim标记/index.html","17947a154eca499ae1a2372dafd28194"],["D:/git/myblog/public/2019/06/22/Java8新特性/index.html","bea9c75437fdd86825d2331dc8a9a441"],["D:/git/myblog/public/2019/06/24/Mybatis实战笔记16.分页工具PagerHelper/index.html","85804e40400aaed6d24db64b6dde0160"],["D:/git/myblog/public/2019/07/01/Mysql性能优化/index.html","77923ca62be45b0542794ade4ca2d77a"],["D:/git/myblog/public/2019/07/02/MySQL语句优化/index.html","bb00545d511bd95f0dadc1d51a33519c"],["D:/git/myblog/public/2019/07/04/SQL Select 语句完整的执行顺序/index.html","c06a4e648b07d4074b4c72aad557667f"],["D:/git/myblog/public/2019/07/05/在千万级的数据库查询中，如何提高效率/index.html","7155d4f2c7016ecb311902c8fe7dd945"],["D:/git/myblog/public/2019/07/07/过滤器、拦截器、切片异同点/index.html","05ce60ea48b6cb54ed1173db165ecd61"],["D:/git/myblog/public/2019/07/08/MySql进阶3.函数/index.html","698321e762db9f6725c3a36ce1f70db3"],["D:/git/myblog/public/2019/07/10/MySql进阶1.变量/index.html","90bb2d5ee41eda37869eb1c6b1597a6f"],["D:/git/myblog/public/2019/07/11/MySql进阶2.存储过程/index.html","140d789a360f692aebb2cfef78afd4a3"],["D:/git/myblog/public/2019/07/12/MySql进阶4.流程控制/index.html","fef6de14e8d1b8c0c268a14f57c021d5"],["D:/git/myblog/public/2019/07/18/MySql进阶5.视图/index.html","19b7afc6765cbb0877cbb26eca9aa4ce"],["D:/git/myblog/public/2019/07/20/MySql进阶6.索引失效/index.html","8b483fa5a1b97a5e5260e694ad369311"],["D:/git/myblog/public/2019/08/05/fastJson用法/index.html","f1b7824f0d6ca72c2cc440d68e5bf152"],["D:/git/myblog/public/2019/08/12/MySQL索引/index.html","3287a352ea9591274d2c7bf491f94d00"],["D:/git/myblog/public/2019/08/13/ZooKeeper入门认知/index.html","9d29b10b67cbe08d85e06d96ab5cfd9f"],["D:/git/myblog/public/2019/08/15/IDEA插件和模板/index.html","9a6902be078576d67293a1badce71e52"],["D:/git/myblog/public/2019/08/16/Linux下查看日志命令/index.html","5faddc1d6fc1e6355894d425fe6409b6"],["D:/git/myblog/public/2019/08/18/List去重的几种方法/index.html","6d0c5d299bd5d4b10d96bdb92d617121"],["D:/git/myblog/public/2019/08/20/IO模式/index.html","4841e47061aec47b63771f1ab13d9d73"],["D:/git/myblog/public/2019/08/21/排序算法/index.html","7f06ecfaeb8050b97fd2120fb54a4ab8"],["D:/git/myblog/public/2019/08/23/链表实现栈/index.html","c985b1b4a9c0fbbaa0d0df41cf2ae86f"],["D:/git/myblog/public/2019/08/25/MQ的高可用的降级方案/index.html","3745cad3433806c517a007b0c80f81c2"],["D:/git/myblog/public/2019/09/01/秒杀系统/index.html","6c4b8714446949aaf9e89497e6bcddc5"],["D:/git/myblog/public/2019/09/21/分布式事务方案/index.html","d561634f12c22bca6c07f7f4d5234c7e"],["D:/git/myblog/public/2019/09/22/分布式系ID方案/index.html","1088c1dc0ad9de5fdc4621cd814b9569"],["D:/git/myblog/public/2019/09/22/分布式系统开发设计/index.html","01d26e9c0e4b4e204f5b6e022b4aacc2"],["D:/git/myblog/public/2019/09/22/微服务、分布式和集群的异同点/index.html","133411eca471c933362c48cc26dea78b"],["D:/git/myblog/public/2019/09/23/分布式锁和分布式事务概念/index.html","b8bf9e31163e52b1faf74aedae673e39"],["D:/git/myblog/public/2019/09/24/MySQL乐观锁MVCC机制/index.html","d183b91df83832c39d3fd57d8fe93423"],["D:/git/myblog/public/2019/10/01/集合源码解析/index.html","fb620ac4a4429128b22e9869b5a5cc91"],["D:/git/myblog/public/2019/11/07/设计模式手册1.适配器模式/index.html","efbace50a900d96bb47ed0a7d29ce9c6"],["D:/git/myblog/public/2019/11/08/设计模式手册2.单例模式/index.html","a49f22819def9e9f521ed4c2ab89fc03"],["D:/git/myblog/public/2019/11/09/设计模式手册3.代理模式和AOP/index.html","44af9f7f8cbfabca6b7b7c443f564960"],["D:/git/myblog/public/2019/11/12/设计模式手册4.工厂模式/index.html","c1924bec15d4f4f5b75fc8b3924e1401"],["D:/git/myblog/public/2019/11/13/设计模式手册5.观察者模式/index.html","d5e7bff16dc0203c0c9f43596e3b37be"],["D:/git/myblog/public/2019/11/14/设计模式手册6.装饰者模式/index.html","5c437143def1d738d3a026cbe5c075e3"],["D:/git/myblog/public/2020/03/02/Docker命令/index.html","d4b7230921fbbbeea9fdd0791690b91c"],["D:/git/myblog/public/2020/03/02/Docker进阶/index.html","93180b0d34260276ae3e4ea212159662"],["D:/git/myblog/public/2020/04/05/Kafka消息队列/index.html","03724c457eee1de02476475af718725e"],["D:/git/myblog/public/2020/04/06/微服务的高可用和线程池参数设计/index.html","5e341624870a50e916dc6428ac08e76d"],["D:/git/myblog/public/2020/04/10/Bean生命周期/index.html","5c3b8d62ca8cfca30e51b0b8e818ca35"],["D:/git/myblog/public/2020/04/27/JVM垃圾回收/index.html","ef60bcd2acc554bd094a630e8b4f2870"],["D:/git/myblog/public/2020/05/05/Redission分布式锁/index.html","dc740aed2484d2ac07dff83c9d7198a4"],["D:/git/myblog/public/2020/05/05/加解密算法/index.html","a629b713db2f052facade353a6899df0"],["D:/git/myblog/public/2020/05/10/AQS抽象队列同步器/index.html","888833641f3fcf88244d5d827188ae1d"],["D:/git/myblog/public/2020/05/14/加解密流程/index.html","f78db21f626a926402932f8d05ef5f20"],["D:/git/myblog/public/2020/05/15/设计模式手册7.策略模式/index.html","b2155d5a7c50dcfb2b20a43dc62eac66"],["D:/git/myblog/public/2020/05/18/手写双向链表/index.html","404d86d8f6034a236f945107f2481276"],["D:/git/myblog/public/2020/06/01/GC调优/index.html","e881b485203310e38f67ef90376db5b2"],["D:/git/myblog/public/2020/06/10/可靠消息最终一致性方案/index.html","d7ee721434a65efaeb18dcd6a5682f97"],["D:/git/myblog/public/2020/10/08/ThreadLocal/index.html","6c04061517a27be4ef232e15b61551f7"],["D:/git/myblog/public/about/index.html","b83eb8825444d26bdb83267ff9e004f4"],["D:/git/myblog/public/archives/2019/03/index.html","2090f56fb42da7a37a5a40c0cc4b64de"],["D:/git/myblog/public/archives/2019/03/page/2/index.html","a6c622677a61eecd9eeb8784f232b068"],["D:/git/myblog/public/archives/2019/05/index.html","820cb397a6bb58057dd77bafeee34341"],["D:/git/myblog/public/archives/2019/06/index.html","847d06004383ba70116a4ba3a8f88a7c"],["D:/git/myblog/public/archives/2019/06/page/2/index.html","ba65a0e36edcd71b96a1c656b079cf1c"],["D:/git/myblog/public/archives/2019/06/page/3/index.html","b38d10050cd48acae3b0d3a17a55c08f"],["D:/git/myblog/public/archives/2019/07/index.html","bcdf389ebba370142dd76178dbe1c6fb"],["D:/git/myblog/public/archives/2019/07/page/2/index.html","5ae8e8febc8b8801497f4b9eeee75ac3"],["D:/git/myblog/public/archives/2019/08/index.html","1dadb1f873d4c3de73c44047185ab9e7"],["D:/git/myblog/public/archives/2019/08/page/2/index.html","a26d57cd2e05789c124d7a07aa5e0978"],["D:/git/myblog/public/archives/2019/09/index.html","2ed2fc3d931e7a4baeb65c36ca1d2543"],["D:/git/myblog/public/archives/2019/10/index.html","254e5d52833ad3f8fc4514027f435871"],["D:/git/myblog/public/archives/2019/11/index.html","6727871e7ec60b29dc495588a307af5c"],["D:/git/myblog/public/archives/2019/index.html","e1be09adb8826b2ba51c1a9fa908619e"],["D:/git/myblog/public/archives/2019/page/2/index.html","7acc9b2ccf9a6f77476c8ec60b38cf9f"],["D:/git/myblog/public/archives/2019/page/3/index.html","29d8c24d8e743fc57b60b01ebe72c0fc"],["D:/git/myblog/public/archives/2019/page/4/index.html","04a1992793930d6e3cfa70bafbf8c7fa"],["D:/git/myblog/public/archives/2019/page/5/index.html","785477241165c598939947dcfacae541"],["D:/git/myblog/public/archives/2019/page/6/index.html","1761ddc50fefadb45f2e138ad2a9a839"],["D:/git/myblog/public/archives/2019/page/7/index.html","e4aebdb5cb52a02005bfdc169daf743f"],["D:/git/myblog/public/archives/2019/page/8/index.html","672be5fbc05df98939e753576374bfde"],["D:/git/myblog/public/archives/2019/page/9/index.html","782009fc0869342e9e29c614ecd396f1"],["D:/git/myblog/public/archives/2020/03/index.html","6dccd9b07f39a9dacfa21ca944621a56"],["D:/git/myblog/public/archives/2020/04/index.html","cd107c23eee34a391f6cae3d5b83d622"],["D:/git/myblog/public/archives/2020/05/index.html","8a1a17e3ae9c7e3dd2101e0f832dd190"],["D:/git/myblog/public/archives/2020/06/index.html","504c487c52ab4bada9c7cc3f4155fb88"],["D:/git/myblog/public/archives/2020/10/index.html","6e5b8203a89c674a0de465812a242152"],["D:/git/myblog/public/archives/2020/index.html","fac6089fed4f18de2cfe4949c8d4b474"],["D:/git/myblog/public/archives/2020/page/2/index.html","4fcfa11d6fffe113b125e4f40fcf02f8"],["D:/git/myblog/public/archives/index.html","176f43c078c9b9dd320752244ed07409"],["D:/git/myblog/public/archives/page/10/index.html","176f43c078c9b9dd320752244ed07409"],["D:/git/myblog/public/archives/page/11/index.html","176f43c078c9b9dd320752244ed07409"],["D:/git/myblog/public/archives/page/2/index.html","176f43c078c9b9dd320752244ed07409"],["D:/git/myblog/public/archives/page/3/index.html","176f43c078c9b9dd320752244ed07409"],["D:/git/myblog/public/archives/page/4/index.html","176f43c078c9b9dd320752244ed07409"],["D:/git/myblog/public/archives/page/5/index.html","176f43c078c9b9dd320752244ed07409"],["D:/git/myblog/public/archives/page/6/index.html","176f43c078c9b9dd320752244ed07409"],["D:/git/myblog/public/archives/page/7/index.html","176f43c078c9b9dd320752244ed07409"],["D:/git/myblog/public/archives/page/8/index.html","176f43c078c9b9dd320752244ed07409"],["D:/git/myblog/public/archives/page/9/index.html","176f43c078c9b9dd320752244ed07409"],["D:/git/myblog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/git/myblog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/git/myblog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/git/myblog/public/categories/GC调优/index.html","ad3ea68b3efe9fcc3f3eb5ce27dbd0a6"],["D:/git/myblog/public/categories/Java并发/index.html","3fe5daede892d01ab7438e85c847bdc0"],["D:/git/myblog/public/categories/MyBatis/index.html","dbb59c226d789a1051e92dc84cfc1b9b"],["D:/git/myblog/public/categories/MyBatis/page/2/index.html","82810ae863da1576df422e4fab676b7a"],["D:/git/myblog/public/categories/MySql进阶/index.html","42c4871d8f524ad0085877f61e29df2b"],["D:/git/myblog/public/categories/Redis/index.html","9a0f4570f6d681812e5325a9586f6b02"],["D:/git/myblog/public/categories/Redis实操笔记/index.html","bbe3a265d6fd78226a7387c66d72124b"],["D:/git/myblog/public/categories/Redis实操笔记/page/2/index.html","578b14df0dcc7105baf280d803adfcaf"],["D:/git/myblog/public/categories/index.html","d60dedc49ac0425408200da5a43a5dda"],["D:/git/myblog/public/categories/分布式/index.html","476f8c3fd315c30ed11a2b58ead6fd02"],["D:/git/myblog/public/categories/微服务/index.html","341e928c4c60dd5e0cc69a27b9e6f503"],["D:/git/myblog/public/categories/设计模式/index.html","1bb3d88c9219deb3ed3a3f10629358f5"],["D:/git/myblog/public/css/style.css","63d783cb64a4720f00c80bd91bc95bc5"],["D:/git/myblog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/git/myblog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/git/myblog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/git/myblog/public/friends/index.html","470223bfdbe6e2a533254f26327b49c7"],["D:/git/myblog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/git/myblog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/git/myblog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/git/myblog/public/index.html","b9f2525f34bb41e781b86c3c315e8845"],["D:/git/myblog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/git/myblog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/git/myblog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/git/myblog/public/mylist/index.html","aedf87cb75c46c5e2fcdcf81f55c95d5"],["D:/git/myblog/public/mylist/一个下雨的清晨.html","4efb7f6c38cf69294971c42b19da9304"],["D:/git/myblog/public/mylist/一句话也不说.html","4bc9918944883606d4df9f58da4fc6ea"],["D:/git/myblog/public/mylist/一只猫老了.html","81246bb62e4357db839ca5e3a775978f"],["D:/git/myblog/public/mylist/一滴雨落下.html","bd303cf241636fbf73b1ef06ac58e0c8"],["D:/git/myblog/public/mylist/一片云把一屋子的梦扯开.html","9499b2f1bd1dc4f4c5754fc777d2f400"],["D:/git/myblog/public/mylist/三月会有最后一天吗.html","78f9483ca67ef4966d8bccd962aa4d66"],["D:/git/myblog/public/mylist/不会爱上一个梦.html","2f4e2d12a7646d777bf2b797cd9e13db"],["D:/git/myblog/public/mylist/今夜.html","f5cd128e22bdc4c0a71a2510516b2c26"],["D:/git/myblog/public/mylist/今夜你要去哪里.html","7e272f937b4aa5fa0b9736f1ae6c9af9"],["D:/git/myblog/public/mylist/你是温柔的女人.html","cc936cb0e7665763f394d170b56d033e"],["D:/git/myblog/public/mylist/你用手触碰一颗易碎的心.html","8cd1dc5d6bef7ff59ea1adfaae9cccbd"],["D:/git/myblog/public/mylist/你端坐屋子的一头.html","9ebc0645df289b963fe6249ca9b2f6fa"],["D:/git/myblog/public/mylist/你身处在这个初夏.html","fd40d59f0930e26b106d21bf7b49dd93"],["D:/git/myblog/public/mylist/八月的第一天.html","0d5af971318859ffacbdedd5bcc148b9"],["D:/git/myblog/public/mylist/写诗是一个人的事.html","efcb534fe17fa4cf932bc0b251ded445"],["D:/git/myblog/public/mylist/十六楼的阳台.html","58f026b321e6d1ec3b8d6b489894f2d5"],["D:/git/myblog/public/mylist/去年的这个时候.html","f4de38e9cc5f22008d6b62292752ffb2"],["D:/git/myblog/public/mylist/夏日走后.html","cc174b3b5ba0020503f949ad322dc809"],["D:/git/myblog/public/mylist/夜色之中.html","205bbd155b43fdeb0101a4445e1a9996"],["D:/git/myblog/public/mylist/天会下雨.html","3b26e3f56463edaca3b730dc7cee15d7"],["D:/git/myblog/public/mylist/天凉了.html","0eb3861ca1bec081cb6f920bfd247e0d"],["D:/git/myblog/public/mylist/如果这是春天.html","5327dc9d3b2bb2c243431dcfdd96be9f"],["D:/git/myblog/public/mylist/情人.html","17cfcf762685f1651648f9c23465f027"],["D:/git/myblog/public/mylist/把月光占为己有.html","a3d05e142f17711bcf6b648433d61d2a"],["D:/git/myblog/public/mylist/故事里的男人.html","f5d078f70335e82fac0aa9276a9f2948"],["D:/git/myblog/public/mylist/月光是新的.html","f74398784bb6fd6b7917ef1bab8476eb"],["D:/git/myblog/public/mylist/桃花开了.html","6f0d4871dce9743ef967032566d33fd3"],["D:/git/myblog/public/mylist/没有比这更悲伤的了.html","75939bc8b109d5ea32fd18f993193ebc"],["D:/git/myblog/public/mylist/起初.html","92ba2e91309b7d889954793e75023a34"],["D:/git/myblog/public/page/10/index.html","3e8194a97dd646102f61de59ac08e34b"],["D:/git/myblog/public/page/11/index.html","818e52e8bc58b0a09bfbda727ec6ca37"],["D:/git/myblog/public/page/2/index.html","2b1f2c0b7ecdea4069ef38a462f9aad3"],["D:/git/myblog/public/page/3/index.html","29292040bf5de71bccee5708f25d0e82"],["D:/git/myblog/public/page/4/index.html","d832ecc9de7bb9035316dbdb0a3cec42"],["D:/git/myblog/public/page/5/index.html","ec6058107af5af12d87d58177bd95935"],["D:/git/myblog/public/page/6/index.html","fd129c5ad7089387ac06ff4ee7d0c8e6"],["D:/git/myblog/public/page/7/index.html","0c31af598a8607cb4aefe13c5cf79546"],["D:/git/myblog/public/page/8/index.html","d024d36baccedfb3f509deb873709ea0"],["D:/git/myblog/public/page/9/index.html","2d5ab993d08c6b32a4281557c7acf1ce"],["D:/git/myblog/public/tags/AOP/index.html","2143800b43bdcc798d796ef7a051d1ee"],["D:/git/myblog/public/tags/AQS/index.html","e2999a811fa7ed1942a291d34d16420b"],["D:/git/myblog/public/tags/Bean/index.html","fb5e163251b03f42e35451cdc8539169"],["D:/git/myblog/public/tags/CAS/index.html","43367913f585826cd8e718d6e854128b"],["D:/git/myblog/public/tags/Docker/index.html","d3020512707e0198e08c327925ad6e2d"],["D:/git/myblog/public/tags/Eruka/index.html","b45a61813f3d0560eb7ba1596ee50687"],["D:/git/myblog/public/tags/FastJson/index.html","c948db1946bd97b614703d641e39cbc8"],["D:/git/myblog/public/tags/GC/index.html","ef330f8993304ad42a21f52e87bda0b1"],["D:/git/myblog/public/tags/HashMap/index.html","57c3a35f6b38b160fb64515dfd86eb70"],["D:/git/myblog/public/tags/ID生成/index.html","ca0eb1c2d8814ae19cf0953dee444a90"],["D:/git/myblog/public/tags/IO模式/index.html","7af15c013ced8da6be82e67bf02bc4f1"],["D:/git/myblog/public/tags/Idea/index.html","e6918c2156554f3fa8f6f4115dc430d1"],["D:/git/myblog/public/tags/JVM/index.html","b850d2861513638c5077056ee238cfa2"],["D:/git/myblog/public/tags/Java8新特性/index.html","ccd9d45f04bebc378d58c15a38d14692"],["D:/git/myblog/public/tags/Java基础/index.html","6d84a8a04a44681efdc81e5fc00f7ab6"],["D:/git/myblog/public/tags/MySql/index.html","ef816a86710cfc3f4f9901af3db33474"],["D:/git/myblog/public/tags/MySql进阶/index.html","51a5af24a3ee8360d21e9054505823bf"],["D:/git/myblog/public/tags/RSA/index.html","2efdc9d54b38623de796c2cf8d4eddd7"],["D:/git/myblog/public/tags/Redis/index.html","ef05f1d424e3eeb7aa3c85e9d081aa84"],["D:/git/myblog/public/tags/Zookeeper/index.html","25498e802c459e418c0ac4b9c0d4a784"],["D:/git/myblog/public/tags/index.html","89e6a87599b045d529d3107cb59f4bb4"],["D:/git/myblog/public/tags/kafka/index.html","f7153aed5b4ac83abcc611bb31dd28fd"],["D:/git/myblog/public/tags/synchronized/index.html","08e57bfcc0168bc9a18161684d1306e1"],["D:/git/myblog/public/tags/volatile/index.html","a365b2604ada689401e586261e0c45f2"],["D:/git/myblog/public/tags/中间件/index.html","78bea759f12236bac08d396189080e1c"],["D:/git/myblog/public/tags/事务/index.html","0e1d30d6a78b8cbdb019403614eacf63"],["D:/git/myblog/public/tags/分布式/index.html","7ff3a2751809db8cbcc097cfa063e0ba"],["D:/git/myblog/public/tags/加解密/index.html","f77703bbb31f2c9020f203c0b6fdb6a1"],["D:/git/myblog/public/tags/单例模式/index.html","e3f80d707dbad63c439cec61d98f70cf"],["D:/git/myblog/public/tags/国密/index.html","bcad567a3b3369c2b14a8217d2aa72d4"],["D:/git/myblog/public/tags/工具/index.html","dd8215face589154571148b473fef305"],["D:/git/myblog/public/tags/并发/index.html","ac7e519823694b4c3a6e9bd02edbe26d"],["D:/git/myblog/public/tags/微服务/index.html","2845e5ad3e726d682c33dc05add17f6d"],["D:/git/myblog/public/tags/数据库/index.html","2475e160ecac3d03a1b2666ab13e2e74"],["D:/git/myblog/public/tags/消息队列/index.html","a93c23e2e32cb2827d225a5c5c148413"],["D:/git/myblog/public/tags/热门/index.html","9831bc22d6e421dbfc1ca5248f83f6ea"],["D:/git/myblog/public/tags/秒杀/index.html","1f9240815410442aacb8a4ccc50f40ac"],["D:/git/myblog/public/tags/算法/index.html","48db27640223c9c67bb3b32b04b77649"],["D:/git/myblog/public/tags/线程/index.html","eaa89824e8a1906c676aaec91d0c9bcd"],["D:/git/myblog/public/tags/缓存/index.html","d5b299090bed70c07044a3761279186d"],["D:/git/myblog/public/tags/过滤器/index.html","3db951464a1f4f3c9ebd31a8ca0a424b"],["D:/git/myblog/public/tags/集合/index.html","733f04b90457cb7d3e015d7290287ec9"]];
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







