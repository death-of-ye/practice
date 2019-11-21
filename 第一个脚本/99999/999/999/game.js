/**
 * 霸刀传奇无限版
 */
var IMAGE = require('./image.js');
var UTILS = require('./utils.js');

const 游戏包名 = "com.game456.bdcqbt";
const 游戏名称 = "霸刀无限版";
var gameId = 99999; //542018;
var auxiliaryId = 999;
var version = 999;
//指定文件路径"./sdcard/                                    脚本/游戏ID/脚本ID/版本ID/config.json";
var filePath = "/storage/emulated/0/sdcard/脚本/" + gameId + "/" + auxiliaryId + "/" + version + "/config.json";
// var filePath = "C:\Users\Administrator.ZGC-20161213KEO\Desktop\99999\practice\第一个脚本\99999\999\999\config.json";
var 是否执行新手任务 = false;
var 是否打BOSS任务 = false;
var 是否打副本任务 = false;
var 是否打竞技任务 = false;

var 通用休眠时间 = 1000;
var 战力提升时间 = new Date();
var main = function () {
    this.init = () => {
        UTILS.log("start");
        this.initEvents();
        sleep(1000);
        if (UTILS.checkCurrentPackage(游戏包名)) {
            this.开始运行();
        } else {
            UTILS.toastLog('请先运行游戏!')
            return;
        }
        this.initData(filePath);
        sleep(1000)
    }
    //读取指定位置文件内容配置初始化数据
    this.initData = (path) => {
        if (!files.isFile(path)) {
            UTILS.log("指定配置文件不存在");
        } else {
            var res = files.read(path);
            if (!res) {
                UTILS.log("指定配置文件内容为空");
            } else {
                var res = JSON.parse(res)
                是否执行新手任务 = res.checkbox[0].checked;
                是否打BOSS任务 = res.checkbsox[1].checked;
                是否打副本任务 = res.checkbox[2].checked;
                是否打竞技任务 = res.checkbox[3].checked;
            }
        }
    }
    this.initEvents = () => {
        //检测无障碍模式开启情况
        auto.waitFor();
        //请求截图权限
        if (!requestScreenCapture()) {
            UTILS.toastLog("获取截图权限失败,中断操作");
            exit();
        }
        UTILS.setScreenMetrics();
        sleep(通用休眠时间);
    }

    this.开始运行 = () => {

        // let xx = UTILS.deviceWidth / 2;
        // let yy = UTILS.deviceHeight / 2;
        // let ss = UTILS.findColorNoClick("#E6CFB9",[[21,11,"#DA3935"],[10,10,"#F3EED5"],[12,8,"#E0887F"]],[UTILS.deviceWidth/3*2,0,UTILS.deviceWidth/3,yy],20,30,10);
        // log(ss)
        // // UTILS.click(ss.x,ss.y);
        // return;
        // 副本
        UTILS.toastLog('开始运行,1min后开始挑战');
        // this.领取无限福利();
        this.行会任务();
        // this.点击副本();
        // let 副本挑战次数 = 0;
        // let 副本挑战时间 = setInterval(() => {
        //     // this.点击副本挑战();
        //     副本挑战次数 += 1;
        //     if (副本挑战次数 > 0) {
        //         clearInterval(副本挑战时间);
        //         sleep(1000);
        //         // this.点击副本扫荡();
        //         var 扫荡次数 = 0;
        //         let 副本扫荡时间 = setInterval(() => {
        //             // this.点击副本扫荡();
        //             扫荡次数 += 1;
        //             console.log(扫荡次数);
        //             if (扫荡次数 > 0) {
        //                 clearInterval(副本扫荡时间);
        //                 // sleep(2000);
        //                 // this.点击经验副本();
        //                 // sleep(2000);
        //                 // this.点击经验副本挑战();
        //                 // sleep(60000);
        //                 // this.领取经验奖励();
        //                 // sleep(2000);
        //                 // this.点击经验副本挑战();
        //                 // sleep(60000);
        //                 // this.领取经验奖励();
        //                 sleep(2000);
        //                 this.点击通天塔();
        //                 sleep(2000);
        //                 this.领取通天塔每日奖励();
        //                 // sleep(3000);
        //                 // this.通天塔挑战();
        //                 // this.通天塔挑战失败();
        //                 // this.点击玩法();
        //                 // sleep(2000);
        //                 // this.进入玩法();
        //                 // sleep(2000);
        //                 // // this.自动掷骰子();
        //                 sleep(2000);
        //                 this.点击返回按钮();
        //                 sleep(2000);
        //                 this.点击角色();
        //                 sleep(2000);
        //                 if (this.判断有没有一键换装() != null) {
        //                     this.点击一键换装();
        //                 }
        //                 // sleep(2000);
        //                 // this.点击特戒();
        //                 // sleep(2000);
        //                 // this.点击特戒_item();
        //                 // sleep(2000)
        //                 // this.点击神装();
        //                 // sleep(2000);
        //                 // this.战士角色();
        //                 // sleep(2000);
        //                 // this.神装合成();
        //                 // sleep(2000);
        //                 // this.合成按钮();
        //                 // sleep(2000);
        //                 // this.法师角色();
        //                 // sleep(2000);
        //                 // this.神装合成();
        //                 // sleep(2000);
        //                 // this.合成按钮();
        //                 // sleep(2000);
        //                 // this.道士角色();
        //                 // sleep(2000);
        //                 // this.神装合成();
        //                 // sleep(2000);
        //                 // this.合成按钮();
        //                 // sleep(2000);
        //                 // this.点击返回按钮();
        //                 sleep(2000);
        //                 this.宝物();
        //                 sleep(2000);
        //                 this.战士角色();
        //                 sleep(2000);
        //                 this.宝物提升();
        //                 sleep(5000);
        //                 this.法师角色();
        //                 sleep(2000);
        //                 this.宝物提升();
        //                 sleep(5000);
        //                 this.道士角色();
        //                 sleep(2000);
        //                 this.宝物提升();
        //                 sleep(5000);
        //                 this.点击返回按钮();
        //                 sleep(2000);
        //                 this.点击返回按钮();
        //                 sleep(2000);

        //                 this.点击boss();
        //                 sleep(2000);
        //                 let 野外挑战次数 = 0;
        //                 let boss挑战时间 = setInterval(() => {
        //                     let 是否在首页 = this.判断是否在首页();
        //                     if (是否在首页 == null) {
        //                         let boss挑战 = this.暂无挑战();
        //                         if (boss挑战 != null) {
        //                             this.boss挑战();
        //                         } else {
        //                             clearInterval(boss挑战时间);
        //                             sleep(2000);
        //                             this.野外BOSS();
        //                             sleep(2000);
        //                             let 野外BOSS挑战 = setInterval(() => {
        //                                 野外挑战次数 += 1;
        //                                 log(野外挑战次数);
        //                                 if (野外挑战次数 > 0) {
        //                                     clearInterval(野外BOSS挑战);
        //                                     this.boss之家();
        //                                     let boss之家挑战 = setInterval(() => {
        //                                         this.boss之家挑战();
        //                                         sleep(2000);
        //                                         this.boss之家挑战_item();
        //                                         if(this.boss之家挑战_item() == null){
        //                                             clearInterval(boss之家挑战);
        //                                             sleep(5000);
        //                                             this.点击返回按钮();
        //                                             sleep(2000);
        //                                         }
        //                                     }, 30000)
        //                                 } else {
        //                                     this.野外BOSS挑战();
        //                                     sleep(50000);
        //                                     this.点击boss();
        //                                     sleep(2000);
        //                                     this.野外BOSS();
        //                                     sleep(2000);
        //                                 }
        //                             }, 40000)
        //                         }
        //                     } else {
        //                         clearInterval(boss挑战时间);
        //                         this.点击boss();
        //                         sleep(2000);
        //                         this.野外BOSS();
        //                         sleep(2000);
        //                         let 野外BOSS挑战 = setInterval(() => {
        //                             野外挑战次数 += 1;
        //                             if (野外挑战次数 > 0) {
        //                                 clearInterval(野外BOSS挑战);
        //                                 this.boss之家();
        //                                 let boss之家挑战 = setInterval(() => {
        //                                     this.boss之家挑战();
        //                                     sleep(2000);
        //                                     this.boss之家挑战_item();
        //                                     if(this.boss之家挑战_item() == null){
        //                                         clearInterval(boss之家挑战);
        //                                         sleep(5000);
        //                                         this.点击返回按钮();
        //                                         sleep(2000);
        //                                     }
        //                                 }, 30000)
        //                             } else {
        //                                 this.野外BOSS挑战();
        //                                 sleep(50000);
        //                                 this.点击boss();
        //                                 sleep(2000);
        //                                 this.野外BOSS();
        //                                 sleep(2000);
        //                             }
        //                         }, 40000)
        //                     }
        //                 }, 40000);
        //             }
        //         }, 2000);
        //     }
        //     UTILS.toastLog('挑战成功,1min后开始挑战');

        // }, 2000);





        // this.点击背包();
        // sleep(2000);
        // this.背包熔炼();
        // let 熔炼 = setInterval(() => {
        //     this.背包熔炼_item();

        //     熔炼结束 = this.熔炼结束();
        //     console.log(熔炼结束);
        //     if(熔炼结束 != null){
        //         clearInterval(熔炼);
        //         this.熔炼返回();
        //     }
        // }, 2000);
        // sleep(4000);
        // this.锻造();
        // sleep(2500);
                                       // this.一键强化();
        // let 强化失败 = this.强化失败();
        // if(强化失败 != null){
        //     UTILS.click(1,1)
        // }

        // this.锻造_精炼();
        // sleep(3000);
        // var 锻造_精炼 = setInterval(() => {
        // this.精炼按钮();
        // console.log(this.精炼失败()); 
        // if(this.精炼失败() != null){
        //  clearInterval(锻造_精炼);
        //  UTILS.click(15,15)
        //  this.锻造_锻造();
        //  sleep(3000);
        //  var 锻造_锻造 = setInterval(() => {
        //     this.锻造_锻造按钮(); 
        //     if(this.精炼失败() != null){
        //         clearInterval(锻造_锻造);
        //         UTILS.click(15,15);
        //        }   
        //     }, 2000);
        // }   
        // }, 2000);
        // sleep(3000);


        // this.点击boss();
        // sleep(2000);
        // // let boss挑战时间 = setInterval(() => {
        // //     this.boss挑战();
        // //     let boss挑战 = this.暂无挑战();
        // //     if(boss挑战 == null) {
        // //         clearInterval(boss挑战时间);
        // //     }
        // // },60000);
        // // this.野外BOSS();
        // // sleep(2000);
        // // this.野外BOSS挑战();
        // this.boss之家();
        // sleep(2000);
        // this.boss之家挑战();
        // sleep(2000);
        // this.boss之家挑战_item();
        // sleep(2000);
        // this.boss之家分支挑战();
        // sleep(2000);

    }


    this.点击副本 = () => {
        var 副本 = UTILS.findImage(IMAGE.霸刀无限版, 2, 2);
        // UTILS.toastLog(IMAGE.霸刀无限版);
        UTILS.click(副本.x, 副本.y);
    }

    this.点击副本挑战 = () => {
        var 挑战 = IMAGE.副本挑战;
        var arr = [];
        for (var i = 0; i < 4; i++) {
            arr.push(UTILS.findImage(挑战, 2, 2, 0.7))
        }
        UTILS.toastLog(arr);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == null) {
                //  UTILS.toastLog('没有了');
            } else {
                UTILS.click(arr[i].x, arr[i].y);
                arr[i] = null
            }
        }

    }
    this.点击副本扫荡 = () => {
        var 扫荡 = IMAGE.副本扫荡;
        var arr = [];
        for (var i = 0; i < 4; i++) {
            arr.push(UTILS.findImage(扫荡, 2, 2, 0.7))
        }
        //  UTILS.toastLog(arr);
        for (var i = 0; i < 8 * arr.length; i++) {
            if (arr[i] == null) { } else {
                UTILS.click(arr[i].x, arr[i].y);
            }
        }
    }

    this.点击经验副本 = () => {
        console.log('点击经验副本');
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.经验副本, 1, 2, 0.7))
        }
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.点击经验副本挑战 = () => {
        console.log('点击经验副本挑战');
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.经验副本挑战, 1, 2, 0.7))
        }
        UTILS.toastLog(arr);
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.领取经验奖励 = () => {
        console.log('领取经验奖励');
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.领取经验奖励, 2, 2, 0.7))
        }
        // console.log(arr);
        UTILS.click(arr[0].x, arr[0].y);
    }

    this.点击通天塔 = () => {
        //   // 点击通天塔

        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.经验副本, 1, 2, 0.7))
        }
        UTILS.click(arr[1].x * 2, arr[1].y);
    }

    this.通天塔挑战 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.通天塔挑战, 0, 3, 0.7))
        }
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.通天塔挑战失败 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.通天塔挑战失败, 1, 0, 0.7))
        }

        if (arr[1] != null) {
            setTimeout(() => {
                this.退出通天塔();
            }, 2000)
        }
    }


    this.退出通天塔 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.退出通天塔, 2, 1, 0.7))
        }
        UTILS.click(arr[1].x, arr[1].y);

    }

    this.领取通天塔每日奖励 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.通天塔每日奖励, 2, 0, 0.7))
        }
        UTILS.toastLog(arr);
        UTILS.click(arr[1].x, arr[1].y);
    }


    this.点击玩法 = () => {
        //  // 点击玩法
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.经验副本, 1, 2, 0.7))
        }
        // console.log(arr);
        UTILS.click(arr[1].x * 3, arr[1].y);
    }


    this.进入玩法 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.进入玩法, 2, 2, 0.7))
        }
        console.log(arr);
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.自动掷骰子 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.自动掷骰子, 0, 3, 0.7))
        }
        console.log(arr);
        UTILS.click(arr[1].x, arr[1].y);
    }


    this.点击返回按钮 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.挑战关闭, 1, 2, 0.7))
        }
        console.log(arr[1].x, arr[1].y);
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.点击角色 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.角色, 1, 2, 0.7))
        }
        console.log(arr[1].x, arr[1].y);
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.点击一键换装 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.一键换装, 2, 1, 0.7))
        }
        console.log(arr + '点击一键换装');
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.判断有没有一键换装 = () => {
        return UTILS.findImage(IMAGE.一键换装, 2, 1, 0.7);
    }

    this.点击特戒 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.特戒, 1, 2, 0.7))
        }
        console.log(arr);
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.点击特戒_item = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.特戒副本, 1, 2, 0.7))
        }
        console.log(arr);
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.点击神装 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.神装, 1, 2, 0.7))
        }
        console.log(arr, 1111);
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.获取神装碎片 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.神装, 2, 2, 0.7))
        }
        console.log(arr);
        // UTILS.click(arr[1].x, arr[1].y); 
    }

    this.神装合成 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.合成神装, 2, 0, 0.7))
        }
        console.log(arr);
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.合成按钮 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.合成按钮, 2, 1, 0.7))
        }
        // console.log(arr);
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.战士角色 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.战士角色, 1, 0, 0.7))
        }
        console.log(arr);
        // UTILS.click(arr[1].x, arr[1].y);
    }

    this.法师角色 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.法师角色, 1, 0, 0.7))
        }
        console.log(arr);
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.道士角色 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.道士角色, 1, 0, 0.7))
        }
        console.log(arr);
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.宝物 = () => {
        var 宝物 = UTILS.findImage(IMAGE.宝物, 1, 2);
        console.log(宝物);
        UTILS.click(宝物.x, 宝物.y);
    }

    this.宝物提升 = () => {
        var 宝物提升 = UTILS.findImage(IMAGE.宝物提升, 1, 2);
        // console.log(宝物提升);
        UTILS.click(宝物提升.x, 宝物提升.y);
    }

    this.玉佩 = () => {
        var 玉佩 = UTILS.findImage(IMAGE.宝物分支, 1, 2);
        console.log(玉佩);
        UTILS.click(玉佩.x, 玉佩.y);
    }


    this.心法 = () => {
        var 玉佩 = UTILS.findImage(IMAGE.宝物分支, 1, 2);
        console.log(玉佩);
        UTILS.click(玉佩.x + 200, 玉佩.y);
    }

    this.兽神守护 = () => {
        var 玉佩 = UTILS.findImage(IMAGE.宝物分支, 1, 2);
        console.log(玉佩);
        UTILS.click(玉佩.x + 400, 玉佩.y);
    }

    this.魂骨 = () => {
        var 玉佩 = UTILS.findImage(IMAGE.宝物分支, 1, 2);
        console.log(玉佩);
        UTILS.click(玉佩.x + 600, 玉佩.y);
    }


    this.战纹 = () => {
        var 战纹 = UTILS.findImage(IMAGE.战纹, 1, 2);
        console.log(战纹);
        UTILS.click(战纹.x, 战纹.y);
    }

    this.战纹选择 = () => {
        var 战纹选择 = UTILS.findImageFullScreen(IMAGE.战纹选择, 0.7);
        console.log(战纹选择);
        UTILS.click(战纹选择.x, 战纹选择.y);
        var 战纹装备 = UTILS.findImage(IMAGE.战纹装备, 2, 2, 0.7);
        console.log(战纹装备);
        UTILS.click(战纹装备.x, 战纹装备.y);
    }


    this.点击背包 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.背包, 1, 2, 0.7))
        }
        // console.log(arr);
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.背包熔炼 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.背包熔炼, 1, 2, 0.7))
        }
        // console.log(arr);
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.背包熔炼_item = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.背包熔炼, 1, 2, 0.7))
        }
        // console.log(arr);
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.熔炼结束 = () => {
        return UTILS.findImageFullScreen(IMAGE.背包熔炼, 0.7);
    }

    this.熔炼返回 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.熔炼返回, 2, 2, 0.7))
        }
        // console.log(arr);
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.锻造 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.锻造, 1, 2, 0.7))
        }
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.一键强化 = () => {
        let arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.一键强化, 1, 2, 0.7))
        }
        // console.log(arr);
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.强化失败 = () => {
        return UTILS.findImageFullScreen(IMAGE.強化失败, 0.7);
    }

    this.锻造_精炼 = () => {
        let 强化分支 = UTILS.findImage(IMAGE.强化分支, 1, 2, 0.7);
        // console.log(arr);
        UTILS.click(强化分支.x, 强化分支.y);
    }

    this.精炼按钮 = () => {
        let 精炼按钮 = UTILS.findImage(IMAGE.精炼按钮, 2, 1, 0.7);
        // console.log(arr);
        UTILS.click(精炼按钮.x, 精炼按钮.y);
    }

    this.精炼失败 = () => {
        return UTILS.findImageFullScreen(IMAGE.精炼失败, 0.7);
    }

    this.锻造_锻造 = () => {
        let 强化分支 = UTILS.findImage(IMAGE.强化分支, 1, 2, 0.7);
        // console.log(arr);
        UTILS.click(强化分支.x + 200, 强化分支.y);
    }

    this.锻造_锻造按钮 = () => {
        let 锻造按钮 = UTILS.findImage(IMAGE.锻造按钮, 1, 2, 0.7);
        // console.log(arr);
        UTILS.click(锻造按钮.x, 锻造按钮.y);
    }

    this.锻造_锻造失败 = () => {
        return UTILS.findImageFullScreen(IMAGE.锻造失败, 0.7);
    }


    this.点击boss = () => {
        let boss = UTILS.findImage(IMAGE.boss, 2, 2, 0.7);
        UTILS.click(boss.x, boss.y);
    }

    this.boss挑战 = () => {
        let boss挑战 = UTILS.findImage(IMAGE.boss挑战, 1, 2, 0.7);
        UTILS.click(boss挑战.x, boss挑战.y);
    }

    this.暂无挑战 = () => {
        let boss挑战 = UTILS.findImage(IMAGE.boss挑战, 1, 2, 0.7);
        return boss挑战;
    }

    this.boss挑战失败 = () => {
        return UTILS.findImage(IMAGE.boss失败, 1, 2, 0.7);
    }

    this.野外BOSS = () => {
        let 野外BOSS = UTILS.findImage(IMAGE.野外boss, 1, 2, 0.7);
        UTILS.click(野外BOSS.x, 野外BOSS.y);
        console.log(野外BOSS, '野外BOSS');
    }

    this.野外BOSS挑战 = () => {
        let 野外BOSS挑战 = UTILS.findImage(IMAGE.野外boss挑战, 2, 2, 0.7);
        console.log(野外BOSS挑战, '野外BOSS挑战');
        UTILS.click(野外BOSS挑战.x, 野外BOSS挑战.y);
    }

    this.boss之家 = () => {
        let 野外BOSS = UTILS.findImage(IMAGE.野外boss, 1, 2, 0.7);
        UTILS.click(野外BOSS.x + 800, 野外BOSS.y);
    }

    this.boss之家挑战 = () => {
        let boss之家挑战 = UTILS.findImage(IMAGE.boss之家挑战, 2, 2, 0.7);

        console.log(boss之家挑战+'boss之家挑战');
        if(boss之家挑战 == null){
            return boss之家挑战;
        }else{
            UTILS.click(boss之家挑战.x, boss之家挑战.y);
        }
        
    }

    this.boss之家挑战_item = () => {
        let boss之家挑战分支 = UTILS.findImage(IMAGE.boss之家挑战分支, 2, 2, 0.7)
        console.log(boss之家挑战分支+'boss之家挑战_item');
        if(boss之家挑战分支 == null){
            return;
        }else{
            UTILS.click(boss之家挑战分支.x, boss之家挑战分支.y);
        }
    }

    this.boss之家分支挑战 = () => {
        let arr = [];
        for (let i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.boss之家分支挑战, 2, 2, 0.7));
        }
        console.log(arr+'boss之家分支挑战');
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.守护神剑 = () => {
        // 点击守护神剑
        var 经验副本 = UTILS.findImage(IMAGE.经验副本, 1, 2);
        UTILS.click(经验副本.x * 4, 经验副本.y);
    }

    this.小角色 = () => {
        var 小角色 = UTILS.findImage(IMAGE.小角色, 1, 2);
        console.log(小角色);
        // UTILS.click(小角色.x, 小角色.y);
    }

    this.技能 = () => {
        var 技能 = UTILS.findImage(IMAGE.技能, 1, 2);
        console.log(技能);
        // UTILS.click(技能.x,技能.y);

    }

    this.关卡 = () => {
        var 关卡 = UTILS.findImage(IMAGE.关卡, 2, 2);
        UTILS.click(关卡.x, 关卡.y);

    }

    this.历练 = () => {
        var 历练 = UTILS.findImage(IMAGE.历练, 1, 2);
        console.log(历练);
    }


    this.竞技 = () => {
        var 竞技 = UTILS.findImage(IMAGE.竞技, 2, 2);
        UTILS.click(竞技.x, 竞技.y);
    }

    this.回城 = () => {
        var 回城 = UTILS.findImage(IMAGE.回城, 2, 0);
        UTILS.click(回城.x, 回城.y);
        // console.log(回城);
    }

    this.怪物攻城 = () => {
        var 怪物攻城 = UTILS.findImage(IMAGE.怪物攻城, 2, 2);
        console.log(怪物攻城);
    }

    this.判断是否在首页 = () => {
        var 副本 = UTILS.findImage(IMAGE.霸刀无限版, 2, 2);
        return 副本;
    }

    this.领取无限福利 = () => {
        var 无限福利 = UTILS.findImage(IMAGE.无限福利, 0, 1, 0.7);
        log(无限福利,'无限福利');
        sleep(3000);
        UTILS.click(无限福利.x, 无限福利.y);
        // UTILS.toastLog('请等待，两秒后开始领取');
        let 无限福利领取次数 = setInterval(() => {
            var 无限福利领取 = UTILS.findImage(IMAGE.无限福利领取, 2, 2, 0.7);
            if(无限福利领取 == null){
                clearInterval(无限福利领取次数);
                sleep(2000);
                var 传世神装 = UTILS.findImage(IMAGE.传世神装, 1, 2, 0.7);
                UTILS.click(传世神装.x,传世神装.y);
                sleep(2000);
                let 传世神装次数 = setInterval(() => {
                    var 传世神装领取 = UTILS.findImage(IMAGE.传世神装领取, 2, 2, 0.7);
                    if(传世神装领取 == null){
                        clearInterval(传世神装次数);
                        var 无限特戒 = UTILS.findImage(IMAGE.无限特戒, 1, 2, 0.7);
                        UTILS.click(无限特戒.x,无限特戒.y);
                        sleep(2000);
                        let 无限特戒次数 = setInterval(() => {
                        var 无限特戒领取 = UTILS.findImage(IMAGE.无限特戒领取, 2, 2, 0.7);
                        if(无限特戒领取 == null){
                            clearInterval(无限特戒次数);
                            this.点击返回按钮();
                            sleep(2000);
                        }else{
                            UTILS.click(无限特戒领取.x, 无限特戒领取.y);
                        }
                        },2000);
                    }else{
                        UTILS.click(传世神装领取.x, 传世神装领取.y);
                    }
                },2000);
            }else{
                UTILS.click(无限福利领取.x, 无限福利领取.y);
            }
        },2000);
    }


    this.行会任务 = () => {
        var 行会 = UTILS.findImage(IMAGE.行会, 0, 1, 0.7);
        log(行会,'行会');
        sleep(3000);
        UTILS.click(行会.x, 行会.y);
        sleep(2000);
        var 行会大厅 = UTILS.findImage(IMAGE.行会大厅, 2, 1, 0.7);
        log(行会大厅,'行会大厅');
        sleep(3000);
        UTILS.click(行会大厅.x, 行会大厅.y);
        sleep(2000);
        var 行会捐赠 = UTILS.findImage(IMAGE.行会捐赠, 2, 2, 0.7);
        log(行会捐赠,'行会大厅');
        sleep(3000);
        UTILS.click(行会捐赠.x, 行会捐赠.y);
        sleep(2000);
        var 行会金币捐赠 = UTILS.findImage(IMAGE.行会金币捐赠, 2, 2, 0.7);
        log(行会金币捐赠,'行会金币捐赠');
        sleep(3000);
        let 行会金币捐赠次数 = 0;
        let 行会金币捐赠点击 = setInterval(() => {
            UTILS.click(行会金币捐赠.x, 行会金币捐赠.y + 20);
            行会金币捐赠次数+=1;
            if(行会金币捐赠次数 == 1){
                clearInterval(行会金币捐赠点击);
                sleep(800);
                UTILS.click(50, 50);
                sleep(1500);
                this.点击返回按钮();
                sleep(2000);
                var 活动大厅 = UTILS.findImage(IMAGE.活动大厅, 2, 2, 0.7);
                log(活动大厅,'活动大厅'); 
                UTILS.click(活动大厅.x, 活动大厅.y);
            }
        }, 2000);

    }


}
var game = new main();
game.init()