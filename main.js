var allButtons = $('#buttons > span') 
var count  
var timer 
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (e) {
        let index = $(e.currentTarget).index()
        let size = -600
        $('#images').css({
            transform: `translateX(${i * size}px)`
        })
        activeButton(allButtons.eq(index)) 
        count = i 
    })
}

count = 0
playSlide(count % allButtons.length)
timer = setTimer()
initMouseEvent()//初始化

//定时器设置器
function setTimer() {
    return setInterval(() => {
        count++
        playSlide(count % allButtons.length)
    }, 2000)
}

function activeButton($button) {
    $button.addClass('active').siblings('.active').removeClass('active')
}

function playSlide(index) {
    allButtons.eq(index).trigger('click')//eq()方法返回jquery对象,trigger()方法用来触发点击事件    
}

function initMouseEvent() {
    $('#window').on('mouseenter', function () {
        window.clearInterval(timer)
    })
    $('#window').on('mouseleave', function () {
        timer = setTimer()
    })
    //进入按钮区域也应该停止轮播,给用户点击切换
    $('#buttons').on('mouseenter', function () {
        window.clearInterval(timer)
    })
    $('#buttons').on('mouseleave', function () {
        timer = setTimer()
    })
}