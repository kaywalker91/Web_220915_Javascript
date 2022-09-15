
window.onkeydown=function(){
    if(window.event.keyCode==13)
        enroll();
}

function student(hak, ban, name, kor, mat, eng){
    this.hak=hak;
    this.ban=ban;
    this.name=name;
    this.kor=kor;
    this.mat=mat;
    this.eng=eng;
    this.total=(parseInt(kor)+ parseInt(mat)+ parseInt(eng));
    this.avg = parseInt( this.total / 3);
    this.rank=0;
}

var std = new Array(); // 학생들 성적 객체가 저장되는 배열

function enroll(){
    var score = document.getElementsByClassName("info");
    
    std.push( new student(score[0].value , score[1].value,score[2].value,
        score[3].value, score[4].value, score[5].value) );
    
    var res = document.querySelector("#result");
    var out="";
    for( i in std){
        out +=
        "<ul><li class='h'>"+std[i].hak+"</li><li class='b'>"+std[i].ban+"</li>"+
        "<li class='n'>"+std[i].name+"</li><li class='k'>"+std[i].kor+"</li>"+
        "<li class='m'>"+std[i].mat+"</li><li class='e'>"+std[i].eng+"</li>"+
        "<li class='t'>"+std[i].total+"</li><li class='a'>"+std[i].avg+"</li>"+
        "<li class='r'>"+std[i].rank+"</li></ul>";
    }
    res.innerHTML = out;

    for(i in score){
        score[i].value="";
    }
    score[0].focus();
}



/*
"<ul><li class='h'>"++"</li><li class='b'>"++"</li>"+
"<li class='n'>"++"</li><li class='k'>"++"</li>"+
"<li class='m'>"++"</li><li class='e'>"++"</li>"+
"<li class='t'>"++"</li><li class='a'>"++"</li>"+
"<li class='r'>"++"</li></ul>"

*/