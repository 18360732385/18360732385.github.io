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

var precacheConfig = [["D:/git/myblog/public/2019/03/04/Redis实操笔记1.安装/index.html","50749908c23df3d2b9c1a1e386fc887a"],["D:/git/myblog/public/2019/03/05/Redis实操笔记2.配置/index.html","888b6896f3b9f03d05f42cf8a4744fb8"],["D:/git/myblog/public/2019/03/06/Redis实操笔记3.搭建Redis集群/index.html","c499488637275e9bab79c89e3c225faf"],["D:/git/myblog/public/2019/03/07/Redis实操笔记4.数据库操作/index.html","586cf3f271bda7b0bbb5d14adef46d63"],["D:/git/myblog/public/2019/03/07/Redis实操笔记5.String/index.html","8d763edcce52cb7db8a865f515e64638"],["D:/git/myblog/public/2019/03/08/Redis实操笔记6.Hash/index.html","7502b61619dad5a48ab1241d8d4d8450"],["D:/git/myblog/public/2019/03/09/Redis实操笔记7.List/index.html","ebb3d1dcf6c9139e767b84c518d099ea"],["D:/git/myblog/public/2019/03/10/Redis实操笔记8.Set/index.html","43249fc4e9a992aa4764f21b29724b00"],["D:/git/myblog/public/2019/03/11/Redis实操笔记9.SortedSet/index.html","b0dff88a5e951ae31004ff5a9e6158ed"],["D:/git/myblog/public/2019/05/03/注册中心—多级缓存设计/index.html","0448c4ead3fb241260a629c104f505d9"],["D:/git/myblog/public/2019/05/11/AQS组件原理及使用/index.html","7899eaa99930c58fb4f54b640ef77d16"],["D:/git/myblog/public/2019/05/12/CAS自旋/index.html","d035bbeafbbe6f0c06930f28357b1f07"],["D:/git/myblog/public/2019/05/12/synchronized/index.html","f7fc400054a08d6074fc2f61a69c5b9d"],["D:/git/myblog/public/2019/05/13/volatile/index.html","079332f25fdeb2ffecbbea11f1e7cace"],["D:/git/myblog/public/2019/06/02/JVM内存区/index.html","5073a74fde4a415d9455c7b1ae165fd2"],["D:/git/myblog/public/2019/06/04/Mybatis实战笔记1.SqlMapConfig.xml文件配置/index.html","bb31175e318a26d6f7f2ca7eed850793"],["D:/git/myblog/public/2019/06/05/Mybatis实战笔记2.简单的parameterType和resultType介绍/index.html","388e5237912461143d978e84523d8e48"],["D:/git/myblog/public/2019/06/06/Mybatis实战笔记3.当传参传入多个参数时（4种方法）/index.html","c8775e993270a422f75518584e03fba0"],["D:/git/myblog/public/2019/06/06/Mybatis实战笔记4.resultMap的简单使用/index.html","24fe87cb7de7d1e23fc2044f03dde502"],["D:/git/myblog/public/2019/06/06/Redis分段锁优化/index.html","5767309d4497cb7ef204078594976200"],["D:/git/myblog/public/2019/06/06/Redis持久化/index.html","baeac2717eab37d0cc03e5e8e83b3638"],["D:/git/myblog/public/2019/06/06/Redis缓存设计问题/index.html","e14a8369beeaa3ae6418bddbc50ac015"],["D:/git/myblog/public/2019/06/07/Mybatis实战笔记5.多表查询、关联查询（resultMap）/index.html","8774426b5d93fa505086f7bc753e0f5f"],["D:/git/myblog/public/2019/06/07/Redis集群模式/index.html","892d510999d22dfefead9724b5a8e172"],["D:/git/myblog/public/2019/06/09/Mybatis实战笔记6.resultMap的继承和collection的使用/index.html","a919add481cd12ff4862f024c210d3e2"],["D:/git/myblog/public/2019/06/10/Mybatis实战笔记7.模糊查询/index.html","30df075e70aae6e1f8f7cbbefb2a9640"],["D:/git/myblog/public/2019/06/11/Mybatis实战笔记8.自增长主键返回/index.html","7ec81ebef07010a73a88585b648c6769"],["D:/git/myblog/public/2019/06/13/Mybatis实战笔记9.开启二级缓存：cache/index.html","582cbe58a4d895ee90b7f1bc012e8e42"],["D:/git/myblog/public/2019/06/14/Mybatis实战笔记10.懒加载机制/index.html","812e232c4be5f81071f6ad3797724c10"],["D:/git/myblog/public/2019/06/15/Mybatis实战笔记11.比较全的多表查询/index.html","b0287b0264d0e6e69527c834552f1ad2"],["D:/git/myblog/public/2019/06/16/Mybatis实战笔记12.sql片段/index.html","2f35f7ab7748bcfddf3edc6b673e13d6"],["D:/git/myblog/public/2019/06/17/Mybatis实战笔记13.多条件检索（动态sql语句）/index.html","3e506e10ef98a59efcb80e9a395f6f4b"],["D:/git/myblog/public/2019/06/19/Mybatis实战笔记14.多条数据操作/index.html","f3719f83584f69d0e99c587d56961d08"],["D:/git/myblog/public/2019/06/21/Mybatis实战笔记15.补充：trim标记/index.html","316feb484128c0717f9e6fae1d17ef82"],["D:/git/myblog/public/2019/06/22/Java8新特性/index.html","9749294753631acfd12c2dff238038a6"],["D:/git/myblog/public/2019/06/24/Mybatis实战笔记16.分页工具PagerHelper/index.html","f01ab1baac399b800c154add27233fca"],["D:/git/myblog/public/2019/07/01/Mysql性能优化/index.html","a07196627a8f7bdcf4df61a74a68dfac"],["D:/git/myblog/public/2019/07/02/MySQL语句优化/index.html","d8c525721fde3d82e3a248be9accdebf"],["D:/git/myblog/public/2019/07/04/SQL Select 语句完整的执行顺序/index.html","2b20f15d5e67fac586d1915647c2fce0"],["D:/git/myblog/public/2019/07/05/在千万级的数据库查询中，如何提高效率/index.html","1de91d3d14af9dbea36834ca5e684077"],["D:/git/myblog/public/2019/07/07/过滤器、拦截器、切片异同点/index.html","8866403f51496e115d992ea380d0040d"],["D:/git/myblog/public/2019/07/08/MySql进阶3.函数/index.html","4541e0a675a0a0cb77c53bedf4aaffd5"],["D:/git/myblog/public/2019/07/10/MySql进阶1.变量/index.html","36e9804122f071f32fcc99bd6bbe04ab"],["D:/git/myblog/public/2019/07/11/MySql进阶2.存储过程/index.html","956c092ccb4d69e2bfa7c2f964fe0b03"],["D:/git/myblog/public/2019/07/12/MySql进阶4.流程控制/index.html","d66efa3778a7b06640624321777faabd"],["D:/git/myblog/public/2019/07/18/MySql进阶5.视图/index.html","a988185133badd9fec261322abbe0eef"],["D:/git/myblog/public/2019/07/20/MySql进阶6.索引失效/index.html","7a0cb733bf1c4f64934d1a1d948aa21b"],["D:/git/myblog/public/2019/08/05/fastJson用法/index.html","19161807c1d7442a33f876df844a7e8e"],["D:/git/myblog/public/2019/08/12/MySQL索引/index.html","6b83fec9f53c5548d6ea935d960385dd"],["D:/git/myblog/public/2019/08/13/ZooKeeper入门认知/index.html","1b6f710bbf42588916e906e1263ee1b4"],["D:/git/myblog/public/2019/08/15/IDEA插件和模板/index.html","4cf70f2f0474b40c6a661f68b2a2a208"],["D:/git/myblog/public/2019/08/16/Linux下查看日志命令/index.html","030aa8212d1df4967440cdad816f6e9e"],["D:/git/myblog/public/2019/08/18/List去重的几种方法/index.html","7cca2411f99897cfc229f49ab3df2247"],["D:/git/myblog/public/2019/08/20/IO模式/index.html","7f4e29b532d9736dfba5636920aecd38"],["D:/git/myblog/public/2019/08/21/排序算法/index.html","6bd8726a93c056baf851b516a6c1cdf1"],["D:/git/myblog/public/2019/08/23/链表实现栈/index.html","8130483c37e7c8957e8706742c649894"],["D:/git/myblog/public/2019/08/25/MQ的高可用的降级方案/index.html","cbe8bb8e8700c88acf1e13b7f508018a"],["D:/git/myblog/public/2019/09/01/秒杀系统/index.html","ad7972f3fb75e15fcefcbc0821adf95b"],["D:/git/myblog/public/2019/09/21/分布式事务方案/index.html","d2d14b8d34f7a8fcc5a47d62e1715d46"],["D:/git/myblog/public/2019/09/22/分布式系ID方案/index.html","a2188ae89ff0ebc3093d0d498da73bcc"],["D:/git/myblog/public/2019/09/22/分布式系统开发设计/index.html","0f56db300ac828639147f05b8d935097"],["D:/git/myblog/public/2019/09/22/微服务、分布式和集群的异同点/index.html","440f5c21be0f67904b951d92ac2cef04"],["D:/git/myblog/public/2019/09/23/分布式锁和分布式事务概念/index.html","8270c944aa1872a48b484c9b9ae14dca"],["D:/git/myblog/public/2019/09/24/MySQL乐观锁MVCC机制/index.html","52c979500fa2e16da0172bd8e76a0f5f"],["D:/git/myblog/public/2019/10/01/集合源码解析/index.html","be4a7d54bcd7744775ac7ed5614122da"],["D:/git/myblog/public/2019/11/07/设计模式手册1.适配器模式/index.html","af1612d111e1bae758f981f97d5c48cd"],["D:/git/myblog/public/2019/11/08/设计模式手册2.单例模式/index.html","39c037855af9a41562f5d91ac2871cd1"],["D:/git/myblog/public/2019/11/09/设计模式手册3.代理模式和AOP/index.html","479cb33e5aa95e65684453bb4f589e19"],["D:/git/myblog/public/2019/11/12/设计模式手册4.工厂模式/index.html","813f2994db3f42abe251ef8467d0569b"],["D:/git/myblog/public/2019/11/13/设计模式手册5.观察者模式/index.html","7acf71e48f5b31106fa110f3c22c9db5"],["D:/git/myblog/public/2019/11/14/设计模式手册6.装饰者模式/index.html","cbfd904a2de8e226c6466bda861932fd"],["D:/git/myblog/public/2020/03/02/Docker命令/index.html","5c238d056d81fbb3eb938999d7766702"],["D:/git/myblog/public/2020/03/02/Docker进阶/index.html","39b2506a9a6ac1fded5820d11772770d"],["D:/git/myblog/public/2020/04/05/Kafka消息队列/index.html","b49f3695a1065d0118216458708007dd"],["D:/git/myblog/public/2020/04/06/微服务的高可用和线程池参数设计/index.html","9ddef3ea0648fba630cafd46aadf04eb"],["D:/git/myblog/public/2020/04/10/Bean生命周期/index.html","3895ec18812d8fdf6beb7e68248816b3"],["D:/git/myblog/public/2020/04/27/JVM垃圾回收/index.html","8afa2f084d46e024534ca7215e5f8553"],["D:/git/myblog/public/2020/05/05/Redission分布式锁/index.html","9f05e28405d9a32e440e9780a7a57123"],["D:/git/myblog/public/2020/05/05/加解密算法/index.html","0d6fe2f49ea573466e77d10240d7f941"],["D:/git/myblog/public/2020/05/10/AQS抽象队列同步器/index.html","85a152c6491261b49fdc385a1d071c02"],["D:/git/myblog/public/2020/05/14/加解密流程/index.html","8592efe74b61ebdfd5ab610637bb2dba"],["D:/git/myblog/public/2020/05/15/设计模式手册7.策略模式/index.html","2ab5fe3dc7d15779b9f9ac7b9b6b194b"],["D:/git/myblog/public/2020/05/18/手写双向链表/index.html","4775c129c621701be842490eaddffde2"],["D:/git/myblog/public/2020/06/01/GC调优/index.html","38fda25589f32b6a104f9f63157e4889"],["D:/git/myblog/public/2020/06/10/可靠消息最终一致性方案/index.html","9b78185bcef7ca9430406dc2a164fd50"],["D:/git/myblog/public/about/index.html","49ab3f7f92254bc12681dc68ffb7fc0e"],["D:/git/myblog/public/archives/2019/03/index.html","453bc4d67a8f2aa3d99885fceef40c4b"],["D:/git/myblog/public/archives/2019/03/page/2/index.html","54c68fccd9e5a463d46aecaa852176b0"],["D:/git/myblog/public/archives/2019/05/index.html","e0504131b4ebee17a056ae9405744da5"],["D:/git/myblog/public/archives/2019/06/index.html","9d41b3418c27263746caccdc29a45317"],["D:/git/myblog/public/archives/2019/06/page/2/index.html","b28359837362a3bee86ef7516283d869"],["D:/git/myblog/public/archives/2019/06/page/3/index.html","44e7a99e035408dbea83242cd70ad9ef"],["D:/git/myblog/public/archives/2019/07/index.html","847c6dea08aff1ba81cd4e9e79167937"],["D:/git/myblog/public/archives/2019/07/page/2/index.html","3a54b5a4372d8e5dd3c184b405893338"],["D:/git/myblog/public/archives/2019/08/index.html","3796991aad0c521a299237eec0c722ae"],["D:/git/myblog/public/archives/2019/08/page/2/index.html","dfcaba5cec6879d2148600358ed20bb0"],["D:/git/myblog/public/archives/2019/09/index.html","0a6b571004315ec072ed660425f8e336"],["D:/git/myblog/public/archives/2019/10/index.html","09840f7921d3ab098e9b9cb10173bfcd"],["D:/git/myblog/public/archives/2019/11/index.html","b83cea60b63f4cdcdfea1b92e1d9f3e1"],["D:/git/myblog/public/archives/2019/index.html","f3ca7c23521203510820a4b0430bcf81"],["D:/git/myblog/public/archives/2019/page/2/index.html","3840f2fa60d9a1adc6062787748847f2"],["D:/git/myblog/public/archives/2019/page/3/index.html","b50bc2bd55047bcdee1a11e29e8c7914"],["D:/git/myblog/public/archives/2019/page/4/index.html","f6ad692c5ddf535b814c4acd28003887"],["D:/git/myblog/public/archives/2019/page/5/index.html","3452dddfdb625e461b63a21ebc907d9d"],["D:/git/myblog/public/archives/2019/page/6/index.html","f42de68229e6c810622230e8816a4e91"],["D:/git/myblog/public/archives/2019/page/7/index.html","9062c1be35e3fe730714510201603b2b"],["D:/git/myblog/public/archives/2019/page/8/index.html","2675bee6b29219029ebb1379c3313e1a"],["D:/git/myblog/public/archives/2019/page/9/index.html","ee0e3ca70488f490a94ebda3ffcff8a3"],["D:/git/myblog/public/archives/2020/03/index.html","1cbba1a55d99b24db114c572261414c8"],["D:/git/myblog/public/archives/2020/04/index.html","a03029e1ae16add43af1aadf3b144340"],["D:/git/myblog/public/archives/2020/05/index.html","7a172943f489a0f20880fdd32bcab7e0"],["D:/git/myblog/public/archives/2020/06/index.html","08f1f447d5316938b401ab530c48aad1"],["D:/git/myblog/public/archives/2020/index.html","d80462f52dad5542d8080ff13e721811"],["D:/git/myblog/public/archives/2020/page/2/index.html","8482fe890f81f6d768e201a10ea6420c"],["D:/git/myblog/public/archives/index.html","c538ae391a224a5030db476e5cf3b741"],["D:/git/myblog/public/archives/page/10/index.html","c538ae391a224a5030db476e5cf3b741"],["D:/git/myblog/public/archives/page/11/index.html","c538ae391a224a5030db476e5cf3b741"],["D:/git/myblog/public/archives/page/2/index.html","c538ae391a224a5030db476e5cf3b741"],["D:/git/myblog/public/archives/page/3/index.html","c538ae391a224a5030db476e5cf3b741"],["D:/git/myblog/public/archives/page/4/index.html","c538ae391a224a5030db476e5cf3b741"],["D:/git/myblog/public/archives/page/5/index.html","c538ae391a224a5030db476e5cf3b741"],["D:/git/myblog/public/archives/page/6/index.html","c538ae391a224a5030db476e5cf3b741"],["D:/git/myblog/public/archives/page/7/index.html","c538ae391a224a5030db476e5cf3b741"],["D:/git/myblog/public/archives/page/8/index.html","c538ae391a224a5030db476e5cf3b741"],["D:/git/myblog/public/archives/page/9/index.html","c538ae391a224a5030db476e5cf3b741"],["D:/git/myblog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/git/myblog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/git/myblog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/git/myblog/public/categories/GC调优/index.html","65720acc73dd9e65ed275578c332ba50"],["D:/git/myblog/public/categories/Java并发/index.html","6c40dcc3d8466beda04a0a2ded1bf73b"],["D:/git/myblog/public/categories/MyBatis/index.html","cc3c026cc8ea8cd0f2664ea89d4f921a"],["D:/git/myblog/public/categories/MyBatis/page/2/index.html","e17ee86c73e142e6c58395db0b66889d"],["D:/git/myblog/public/categories/MySql进阶/index.html","385ed7c95c7fd205f596bbcb4e72f431"],["D:/git/myblog/public/categories/Redis/index.html","5a4387bc09bb551379571038f30c75d4"],["D:/git/myblog/public/categories/Redis实操笔记/index.html","0d6540ae55eeca20daf04c149648e3de"],["D:/git/myblog/public/categories/Redis实操笔记/page/2/index.html","0d2c23bc0a2b6e0d73179c30a79664b7"],["D:/git/myblog/public/categories/index.html","5113f2fce167820752f849d6c4df7c42"],["D:/git/myblog/public/categories/分布式/index.html","6f79f2fb1c97c1f3b526fe1ea90076d3"],["D:/git/myblog/public/categories/微服务/index.html","79ba2a73e7392b0d46c9470aca16e2c5"],["D:/git/myblog/public/categories/设计模式/index.html","8b68116956abaad26ded0eed08de72df"],["D:/git/myblog/public/css/style.css","63d783cb64a4720f00c80bd91bc95bc5"],["D:/git/myblog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/git/myblog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/git/myblog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/git/myblog/public/friends/index.html","6abcf18ce43a9bcc57d833e316743c0c"],["D:/git/myblog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/git/myblog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/git/myblog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/git/myblog/public/index.html","fe4c32cbc86b04d5f53a186e8d89eead"],["D:/git/myblog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/git/myblog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/git/myblog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/git/myblog/public/page/10/index.html","f1ddd328d54ec2d5f13d15ba93a74adc"],["D:/git/myblog/public/page/11/index.html","d958c29532e3c3a9b44877ffdd18aa5b"],["D:/git/myblog/public/page/2/index.html","0ae454a0cc199a0ae96c87d704f7514a"],["D:/git/myblog/public/page/3/index.html","99e8ff5fb30d562fa24294382fdf1e68"],["D:/git/myblog/public/page/4/index.html","83caff70f5d229deb349f195948001bf"],["D:/git/myblog/public/page/5/index.html","152f07ca90f58c364ee2d5fbf0639ed5"],["D:/git/myblog/public/page/6/index.html","e86c8aa9056b5eb7a9863287c5ec7080"],["D:/git/myblog/public/page/7/index.html","d85304e9380eb868d24caa4cd879325b"],["D:/git/myblog/public/page/8/index.html","6dc63c97199f983b58c898f75efe89cd"],["D:/git/myblog/public/page/9/index.html","12f4fd073f45b078441159979976bcef"],["D:/git/myblog/public/tags/AOP/index.html","530601dacda84130717664cb8083ca61"],["D:/git/myblog/public/tags/AQS/index.html","8fee89a208ea1cd88bc411a36f7020dc"],["D:/git/myblog/public/tags/Bean/index.html","453e5c49066f46d955f0de6b3f63820f"],["D:/git/myblog/public/tags/CAS/index.html","4cd1bb703949e47508b05d0dc9889d1a"],["D:/git/myblog/public/tags/Docker/index.html","d12d43847e30584be2cc422f4399d359"],["D:/git/myblog/public/tags/Eruka/index.html","2d9769fe33a3d147c7d356187565654d"],["D:/git/myblog/public/tags/FastJson/index.html","9f98bf30b50de38f2dcb99ae901268f3"],["D:/git/myblog/public/tags/GC/index.html","b4303335f34063a8d46e1ee7b8538d3d"],["D:/git/myblog/public/tags/HashMap/index.html","676c0d433f7b7ad42e186cdacefdbcbf"],["D:/git/myblog/public/tags/ID生成/index.html","2a173c7691e63b09701001c425617884"],["D:/git/myblog/public/tags/IO模式/index.html","2e2e07db27c0d7f71e128580f0384dd6"],["D:/git/myblog/public/tags/Idea/index.html","2090220fe5a7e499d335f470aeb04ce6"],["D:/git/myblog/public/tags/JVM/index.html","041119c7389ff00030621ba6a0dd93a4"],["D:/git/myblog/public/tags/Java8新特性/index.html","fa215f835148dede76bc4f5c57480af8"],["D:/git/myblog/public/tags/Java基础/index.html","7e2e0f6f6bd7e2a14fe7b69c7b49115a"],["D:/git/myblog/public/tags/MySql/index.html","ecf568c6a02660dc52099791e2aa0c97"],["D:/git/myblog/public/tags/MySql进阶/index.html","54fc339965c2e5bd1a53aa26de918bf2"],["D:/git/myblog/public/tags/RSA/index.html","946132eb4246e2b459823433306323c6"],["D:/git/myblog/public/tags/Redis/index.html","775b0d2718a8c60848a4e27ab1c468f4"],["D:/git/myblog/public/tags/Zookeeper/index.html","45dc25d587a948276c1ad4bc43441dc3"],["D:/git/myblog/public/tags/index.html","c18d95db38b08efceeedc9c0840aa038"],["D:/git/myblog/public/tags/kafka/index.html","d8d7833906a4529f6c32adbb814d308f"],["D:/git/myblog/public/tags/synchronized/index.html","c857179d5a29ba9652ef8c28641f8fda"],["D:/git/myblog/public/tags/volatile/index.html","23b0940b2fa3117f5a4a5c487aa18d8d"],["D:/git/myblog/public/tags/中间件/index.html","8df6844a137dbc88b80bb24ad2f183bf"],["D:/git/myblog/public/tags/事务/index.html","baf9f2c566ce55897498c146b140683a"],["D:/git/myblog/public/tags/分布式/index.html","8e1a3b02bb0b16a7331e1794f39ae4cc"],["D:/git/myblog/public/tags/加解密/index.html","d89c9154fa5021fab008af8144390068"],["D:/git/myblog/public/tags/单例模式/index.html","ddc963ef744fa6d5ac383ffc807ccb95"],["D:/git/myblog/public/tags/国密/index.html","01e990bec81db245a595c0a0f5430dce"],["D:/git/myblog/public/tags/工具/index.html","478841f54f210d0b871e93b43363f4f2"],["D:/git/myblog/public/tags/并发/index.html","88b5e1615ccc2ea231dc6e69919635a2"],["D:/git/myblog/public/tags/微服务/index.html","e56a0dec3152f3483bd21109baf0d4a5"],["D:/git/myblog/public/tags/数据库/index.html","770212367a391aa1c52f43556dd61b0f"],["D:/git/myblog/public/tags/消息队列/index.html","091aa1a6a421a564aa32d6832c7b1a29"],["D:/git/myblog/public/tags/热门/index.html","3af41e776dbf9ddfb674e0d78d438f5c"],["D:/git/myblog/public/tags/秒杀/index.html","64c51dcfe100ca2a3b1035a7f2eba374"],["D:/git/myblog/public/tags/算法/index.html","63c1cb27c42783cfcca6920da600017e"],["D:/git/myblog/public/tags/线程/index.html","fb6fec94ef8e28c0035064fc393ad316"],["D:/git/myblog/public/tags/缓存/index.html","d7a54509e997f4093a41f29883e5b51f"],["D:/git/myblog/public/tags/过滤器/index.html","dc6835d7bca5af1f2d2a9114a8b4b34e"],["D:/git/myblog/public/tags/集合/index.html","282a5ecb2bdd730bd52cf8db19d43aa7"]];
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







