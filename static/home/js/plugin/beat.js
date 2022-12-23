layui.define(['jquery'], function (exports) {
    const $ = layui.jquery
    /**
   * @param {string} element   需要插入的节点
   * @param {string} direction 方向 {rt:右上,lt:左上}
   * @param {string} color     颜色值
   * @param {number} time      跳动时间以毫秒为单位
   * @param {number} max       最大随机数字默认为60
   * @param {number} offsetLr  设置左右偏移
   * @param {number} offsetT   设置上偏移
   */
    function RunOutNumber(takeOver = {}) {
        if (takeOver.element) {
            if (takeOver.element[0] !== '.') {
                if (takeOver.element[0] !== '#') {
                    return console.error('错误：element:必须为一个Class名或者一个ID名')
                }
            }
        } else {
            console.error('错误：element:为必传参数')
            return false
        }
        let defaultConfig = {
            element: '',
            direction: 'rt',
            color: '#3b32c1',
            max: 60,
            time: 1000,
            offsetLr: 0,
            offsetTb: 0,
            borderRadius: '100px'
        }
        this.config = $.extend(defaultConfig, takeOver);
        this.init()
    }
    RunOutNumber.prototype = {
        constructor: RunOutNumber,
        init: function () {
            let { offsetT, element, direction, offsetLr, max, time } = this.config
            let elem = $(element)
            //分配ID并设置样式
            let spanID = this.onlyID()
            let style = {
                color: '#fff',
                background: this.config.color,
                top: offsetT + 'px',
                position: 'absolute',
                padding: '4px 6px',
                fontSize: '12px',
                borderRadius: '100px'
            }
            if (direction == 'rt') {
                style.right = offsetLr + 'px' || 0
            } else {
                style.left = offsetLr + 'px' || 0
            }
            elem.append(`<span id="${spanID}">${max}+</span>`)
            let spanElem = $('#' + spanID)
            spanElem.css(style);
            //启动定时器
            let continued = setInterval(() => {
                let num = Math.floor(Math.random() * max) + 1
                spanElem.text(num + '+')
            }, time)
            //页面卸载关闭定时器
            window.onbeforeunload = function () {
                clearTimeout(continued)
            }
        },
        //生成随机ID
        onlyID: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    }
    exports('beat', RunOutNumber);
});


