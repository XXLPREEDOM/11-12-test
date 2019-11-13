window.onload = function () {
    // var arr = [];
    // for (var i = 0; i < 7; i++) {
    //     arr.push({
    //       placehold:'电脑数码超级类品日'+i
    //     })
    // }
    // console.log(arr)
    var arr_1 = [ '华为盒子', '触摸屏笔记本', '零食', '全棉时代湿巾', '小狗吸尘器', '牛仔裤', '罗技鼠标', '电视']
    console.log(arr_1)
    var write = document.getElementById('write');
    var j = 0;
    var run = function () {
        t1 = setInterval(function () {
            // write.setAttribute('placeholder', arr[j])
            write.setAttribute('placeholder', arr_1[j])
            // console.log(j)
            j++
            if (j == 8) {
                j = 0;
            }
        }, 2500)
    }
    run();
    write.onfocus = function () {
        clearInterval(t1)
        // write.setAttribute('placeholder-color','red')
    }
    write.onblur = function () {
        run();
    }

    var arr_2 = ['抢手机神券', '开学购内衣', '家电周年庆']
    var a_flash = document.getElementById('a_flash');
    var k = 0;
    var timer = function () {
        t2 = setInterval(function () {
            a_flash.innerText = arr_2[k]
            // console.log(k)
            k++
            if (k == 3) {
                k = 0;
            }
        }, 2500)
    }
    timer()

    a_flash.onmouseenter = function () {
        clearInterval(t2)
    }
    a_flash.onmouseleave = function () {
        timer();
    }


}