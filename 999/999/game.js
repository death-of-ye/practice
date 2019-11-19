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
var filePath = "/sdcard/脚本/" + gameId + "/" + auxiliaryId + "/" + version + "/config.json";

var 是否执行新手任务 = true;
var 是否打BOSS任务 = true;
var 是否打副本任务 = true;
var 是否打竞技任务 = true;

var 通用休眠时间 = 1000;
var 战力提升时间 = new Date();
var main = function () {
    this.init = () => {
        UTILS.log("start");
        this.initEvents();
        sleep(1000);
        if (UTILS.checkCurrentPackage(游戏包名)) {
            UTILS.log("开始运行");
            this.开始运行();
        } else {
            UTILS.toastLog('请先运行游戏!')
            return;
        }
        // this.initData(filePath);
        // sleep(1000)
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
                是否打BOSS任务 = res.checkbox[1].checked;
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
        // boss挑战
        // // UTILS.emptyCommonImage();
        // this.boss();
        // this.boss挑战();
        // var 挑战次数 = 0;



        // 副本挑战

        // 点击材料副本
        // UTILS.click(60, 经验副本.y);

        // this.经验副本();

        //   // 点击通天塔
        // this.通天塔();



        // 角色
        // this.关卡();
        // this.经验副本();
        var 副本 = UTILS.findImage(IMAGE.霸刀无限版, 2, 2,0.7)
        // UTILS.toastLog(副本);
        UTILS.click(副本.x,副本.y);
        //UTILS.click(副本.x, 副本.y);
        // this.挑战();
        // var 挑战 = IMAGE.副本挑战;
        // UTILS.waitViewUntilFindSpecifiedTimes(3000,3,4,挑战,0.7,挑战,挑战关闭);
    }

    this.挑战 = () => {
        var 挑战 = IMAGE.副本挑战;
        var arr = [];
        for (var i = 0; i < 4; i++) {
            arr.push(UTILS.findImage(挑战, 2, 2, 0.7))
        }
        //  UTILS.toastLog(arr);
        for (var i = 0; i < arr.length; i++) {
            if (ar5r[i] == null) {
                //  UTILS.toastLog('没有了');
            } else {
                UTILS.click(arr[i].x, arr[i].y);
                arr[i] = null
            }
        }

        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == null) {
                count += 1;
            }
        }
        var 扫荡次数 = 0;
        var 扫荡 = IMAGE.副本扫荡;
        var 扫荡1 = UTILS.findImage(扫荡, 2, 2, 0.7);

        if (count == arr.length && 扫荡1 != null) {
            for (var i = 0; i < 8 * arr.length; i++) {
                this.扫荡();
                扫荡次数 += 1;
            }


        } else {
            this.挑战关闭();

        }



    }
    this.扫荡 = () => {
        var 扫荡 = IMAGE.副本扫荡;
        var arr = [];
        for (var i = 0; i < 4; i++) {
            arr.push(UTILS.findImage(扫荡, 2, 2, 0.7))
        }
        //  UTILS.toastLog(arr);
        for (var i = 0; i < 8 * arr.length; i++) {
            if (arr[i] == null) {
            } else {
                UTILS.click(arr[i].x, arr[i].y);
            }
        }
    }

    this.挑战关闭 = () => {

        var 挑战关闭 = IMAGE.挑战关闭;
        var 挑战关闭1 = UTILS.findImage(挑战关闭, 2, 2, 0.7);
        var arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(挑战关闭, 2, 2))
        }
        // console.log(arr[1]);
        var x = arr[1].x;
        var y = arr[1].y;
        UTILS.click(x, y);
        this.boss();

    }

    this.boss = () => {
        console.log(111);
        // UTILS.emptyCommonImage();
        UTILS.click(UTILS.findImage(IMAGE.boss, 2, 2).x, UTILS.findImage(IMAGE.boss, 2, 2).y);
    }

    this.经验副本 = () => {
        var 经验副本 = UTILS.findImage(IMAGE.经验副本, 1, 2);
        UTILS.click(经验副本.x, 经验副本.y);
        var 经验副本挑战 = UTILS.findImage(IMAGE.经验副本挑战, 1, 2);
        UTILS.click(经验副本挑战.x, 经验副本挑战.y);
    }

    this.通天塔 = () => {
        //   // 点击通天塔
        var 经验副本 = UTILS.findImage(IMAGE.经验副本, 1, 2);
        UTILS.click(经验副本.x * 2, 经验副本.y);
        var 通天塔挑战 = UTILS.findImage(IMAGE.通天塔挑战, 0, 3);
        UTILS.click(通天塔挑战.x, 通天塔挑战.y);
    }


    this.点击玩法 = () => {
        //  // 点击玩法
        var 经验副本 = UTILS.findImage(IMAGE.经验副本, 1, 2);
        UTILS.click(经验副本.x * 3, 经验副本.y);
    }

    this.守护神剑 = () => {
        // 点击守护神剑
        var 经验副本 = UTILS.findImage(IMAGE.经验副本, 1, 2);
        UTILS.click(经验副本.x*4, 经验副本.y);
    }

    this.boss挑战 = () => {
        UTILS.emptyCommonImage();
        // var 挑战按钮 = UTILS.findImage(IMAGE.boss挑战,1,2);
        var arr = [];
        for (var i = 0; i < 2; i++) {
            arr.push(UTILS.findImage(IMAGE.boss挑战, 1, 2))
        }
        UTILS.click(arr[1].x, arr[1].y);
    }

    this.角色 = () => {
        var 角色按钮 = UTILS.findImage(IMAGE.角色, 1, 2);
        UTILS.click(角色按钮.x, 角色按钮.y);
        // var 神装 = UTILS.findImage(IMAGE.神装,1,2);
        // console.log(神装);
        // UTILS.click(神装.x, 神装.y);
        // this.宝物();
        console.log(111);
    }

    this.宝物 = () => {
        var 宝物 = UTILS.findImage(IMAGE.宝物,1,2);
        console.log(宝物);
        UTILS.click(宝物.x, 宝物.y);
    }

    this.小角色 = () => {
        var 小角色 = UTILS.findImage(IMAGE.小角色,1,2);
        console.log(小角色);
        // UTILS.click(小角色.x, 小角色.y);
    }

    this.技能 = () => {
        var 技能 = UTILS.findImage(IMAGE.技能,1,2);
        console.log(技能);
        // UTILS.click(技能.x,技能.y);

    }

    this.关卡 = () => {
        var 关卡 = UTILS.findImage(IMAGE.关卡,2,2);
        UTILS.click(关卡.x,关卡.y);

    }

    this.背包 = () => {
        var 背包 = UTILS.findImage(IMAGE.背包,1,2);
        UTILS.click(背包.x,背包.y);
    }

    this.锻造 = () => {
        var 锻造 = UTILS.findImage(IMAGE.锻造,1,2);
        console.log(锻造);
    }

    this.历练 = () => {
        var 历练 = UTILS.findImage(IMAGE.历练,1,2);
        console.log(历练);
    }


    this.竞技 = () => {
        var 竞技 = UTILS.findImage(IMAGE.竞技,2,2);
        UTILS.click(竞技.x,竞技.y);
    }

    this.回城 = () => {
        var 回城 = UTILS.findImage(IMAGE.回城,2,0);
        UTILS.click(回城.x,回城.y);
        // console.log(回城);
    }

    this.怪物攻城 = () => {
        var 怪物攻城 = UTILS.findImage(IMAGE.怪物攻城,2,2);
        console.log(怪物攻城);
    }


}
var game = new main();
game.init();