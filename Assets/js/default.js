function OpenInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function digitArrowkey(c, e) {
    var keyCode = (e.which) ? e.which : e.keyCode;
    var x = 0;
    var y = 0;
    var BoxArray = new Array(60);
    var i = 1;
    for (i = 0; i < 60; i++) {
        BoxArray[i] = "t_" + i;
    }
    if (keyCode == 37) {
        c = parseInt(c) - 1;
        if (c >= 0)
            document.getElementById(BoxArray[c]).focus();
        else
            document.getElementById(BoxArray[29]).focus();
    }
    if (keyCode == 38) {
        if (c <= 59)
            c = parseInt(c) - 10;
        if (c >= 0)
            document.getElementById(BoxArray[c]).focus();
    }
    //right
    if (keyCode == 39) {
        c = parseInt(c) + 1;
        if (c <= 59)
            document.getElementById(BoxArray[c]).focus();
        if (c == 60)
            document.getElementById(BoxArray[0]).focus();
    }
    if (keyCode == 40) {
        c = parseInt(c) + 10;
        if (c <= 59)
            document.getElementById(BoxArray[c]).focus();
        if (c == 60)
            document.getElementById(BoxArray[0]).focus();
    }
}
function digitcalc() {

    var x1 = 0;
    var y1 = 0;
    var TotalArray = new Array(6);
    var index = 0;
    var counter = 0;
    var value = 0;
    for (var j = 0; j <= 59; j++) {
        value = document.getElementById('t_' + j).value;
        var temp1 = parseInt(value);
        if (!isNaN(temp1)) {
            x1 = value;
            y1 = parseInt(y1) + parseInt(x1);
        }
        else
            document.getElementById('t_' + j).value = "";
        index++;
        if (index == 10) {
            TotalArray[counter] = y1;
            counter++;
            x1 = 0;
            y1 = 0;
            index = 0;
        }
    }
    var tjqty = 0;
    var tjrs = 0;
    var flage = false;

    var tdqty = 0;
    var tdrs = 0;
    for (var i = 0; i < 6; i++) {
        var temp1 = parseInt(TotalArray[i]);
        if (!isNaN(temp1)) {
            document.getElementById('lbl_qty' + i).innerHTML = TotalArray[i];
            document.getElementById('lbl_amt' + i).innerHTML = TotalArray[i] * document.getElementById('hd_tr').value;
            tdqty = tdqty + TotalArray[i];
            tdrs = tdrs + (TotalArray[i] * document.getElementById('hd_tr').value);
        }
    }
    var temp2 = parseInt(tdqty);
    if (!isNaN(temp2)) {
        document.getElementById('lbl_qty').innerHTML = tdqty;
        document.getElementById('lbl_amt').innerHTML = tdrs;
    }
}
function isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;
    return true;
}
function Allclear() {
    for (var j = 0; j <= 29; j++) {
        document.getElementById('t_' + j).value = "";
    }
    document.getElementById('lbl_qty3').innerHTML = "0";
    document.getElementById('lbl_amt3').innerHTML = "0";

    for (var i = 0; i < 3; i++) {
        document.getElementById('lbl_qty' + i).innerHTML = "0";
        document.getElementById('lbl_amt' + i).innerHTML = "0";
    }
}
function CheckLogin() {

    alert('Login first');

}