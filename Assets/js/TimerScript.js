$(document).ready(function () {
    timefunction();
    setInterval(resultcountfunction, 5000);
    setInterval(timefunction, 5000);
    setInterval("timecountdown()", 1000);
});
var timetable = "";
function resultcountfunction() {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "PlayRoom/AjaxHandler.aspx/LastResultCounter",
        dataType: "json",
        success: function (data) {
            var ncount = data.d;
            var lcount = document.getElementById('hd_rocounter').value;
            if (ncount != lcount) {
                location.reload();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            // alert(errorThrown);
        }
    });
}
function timefunction() {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "PlayRoom/AjaxHandler.aspx/GetServerTime",
        dataType: "json",
        success: function (data) {
            timetable = data.d;
            var arr = timetable.split('_');
            if (arr.length == 5) {
            }
            else {
                arr[0] = "00:00:00"; arr[1] = "00:00:00"; arr[2] = "00:00:00"; arr[3] = "dd:MM:YYYY"; arr[4] = "00:00:00";
            }
            document.getElementById('NextDrowTime').innerHTML = arr[0];
            document.getElementById('LastDrawTime').innerHTML = arr[1];
            document.getElementById('RemainTime').innerHTML = arr[2];
            document.getElementById('NowTime').innerHTML = arr[3];
            document.getElementById('TodatyDate').innerHTML = arr[4];
            var ltime = document.getElementById('hd_nextime').value;
            if (arr[0] != ltime) {
                location.reload();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            // alert(errorThrown);
        }
    });
}
function timecountdown() {
    var time = document.getElementById('RemainTime').innerHTML;
    if (time != "Time Out") {
        var timearr = time.split(':')
        var h = timearr[0].trim();
        var m = timearr[1].trim();
        var s = timearr[2].trim();
        if (parseInt(s) > 0) {
            s = parseInt(s) - 1;

        }
        else {
            if (parseInt(m) > 0) {

                s = 59;
                m = parseInt(m) - 1;
            }
            else {
                if (parseInt(h) > 0) {
                    s = 59;
                    m = 59;
                    h = parseInt(h) - 1;
                }
                else {
                    window.location.reload();
                }
            }
        }
        if (h.toString().length < 2)
            h = "0" + h;
        if (m.toString().length < 2)
            m = "0" + m;
        if (s.toString().length < 2)
            s = "0" + s;
        document.getElementById('RemainTime').innerHTML = h + ":" + m + ":" + s;
    }
    var time1 = document.getElementById('NowTime').innerHTML;
    var timearr1 = time1.split(':')
    var h1 = timearr1[0].trim();
    var m1 = timearr1[1].trim();
    var s1 = timearr1[2].trim();
    var tsarr = s1.split(' ')
    s1 = tsarr[0].trim();
    var ts = tsarr[1].trim();
    if (parseInt(s1) < 60) {
        s1 = parseInt(s1) + 1;
        // alert(s);
    }
    else {
        if (parseInt(m1) < 59) {
            s1 = 0;
            m1 = parseInt(m1) + 1;
        }
        else {
            s1 = 0;
            m1 = 0;
            h1 = parseInt(h1) + 1;
        }
    }
    if (h1.toString().length < 2)
        h1 = "0" + h1;
    if (m1.toString().length < 2)
        m1 = "0" + m1;
    if (s1.toString().length < 2)
        s1 = "0" + s1;
    document.getElementById('NowTime').innerHTML = h1 + ":" + m1 + ":" + s1 + " " + ts;
}