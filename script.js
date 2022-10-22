var ele= document.createElement('div');
ele.setAttribute("class","container");

var ele1= document.createElement('div');
ele1.setAttribute("class","row");

var ele2= document.createElement('div');
ele2.setAttribute("class","col");
ele2.setAttribute("id","text");

ele1.append(ele2);

var ele3= document.createElement('div');
ele3.setAttribute("class","row");

var ele4= document.createElement('div');
ele4.setAttribute("class","col");
ele4.setAttribute("id","msg");
ele4.innerHTML="Happy Independance Day";

ele3.append(ele4);

ele.append(ele1,ele3);

document.body.append(ele);

window.onload = function() {

    var txt = document.getElementById('text');
    var msg = document.getElementById('msg');
    msg.style.visibility = 'hidden';

    txt.innerHTML = 10;
    setTimeout(function() {
        txt.innerHTML = 9;
        setTimeout(function() {
            txt.innerHTML = 8;
            setTimeout(function() {
                txt.innerHTML = 7;
                setTimeout(function() {
                    txt.innerHTML = 6;
                    setTimeout(function() {
                        txt.innerHTML = 5;
                        setTimeout(function() {
                            txt.innerHTML = 4;
                            setTimeout(function() {
                                txt.innerHTML = 3;
                                setTimeout(function() {
                                    txt.innerHTML = 2;
                                    setTimeout(function() {
                                        txt.innerHTML = 1;
                                        setTimeout(function() {
                                            msg.style.visibility = 'visible';
                                            txt.style.visibility = 'hidden';
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)

}