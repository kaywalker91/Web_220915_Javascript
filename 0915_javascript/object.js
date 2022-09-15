window.onload=function(){

    if(window.event.keyCode==13){
        stu_save();
    }

};

// 자바스크립트 객체는 key와 value로 구성
// 객체의 key를 변수라고 설명한다

// 단일 객체 생성시 다음과 같이 생성한다
// var car = new Object();
// car.make="현대";
// car.model="투싼";
// car.year="2015";

// var mycom = { cpu:4.1, ram:16, ssd:"1T",vga:"RTX3000"};
// mycom.cpu;
// mycom[ram];

// 생성자 함수를 사용하여 객체를 생성하기
function student(grade,sclass,name,kor,math,eng){

    this.grade = grade;
    this.sclass = sclass;
    this.name = name;
    this.kor = parseInt(kor);
    this.math = parseInt(math);
    this.eng = parseInt(eng);
    this.sum = parseInt(this.kor+this.math+this.eng);
    this.avg = parseInt(this.sum/3);
    this.rank = 0;
    
}

student.prototype.toString=function(){

    return "<span class='stu_tuple'>"+this.grade+"</span>"

    +"<span class='stu_tuple'>"+this.sclass+"</span>"

    +"<span class='stu_tuple'>"+this.name+"</span>"

    +"<span class='stu_tuple'>"+this.kor+"</span>"

    +"<span class='stu_tuple'>"+this.math+"</span>"

    +"<span class='stu_tuple'>"+this.eng+"</span>"

    +"<span class='stu_tuple'>"+this.sum+"</span>"

    +"<span class='stu_tuple'>"+this.avg+"</span>"

    +"<span class='stu_tuple'>"+this.rank+"</span>";
}

var stu_list = new Array();

function stu_save(){

    // var grade = document.querySelector("#grade");
    // var sclass = document.querySelector("#sclass");
    // var name = document.querySelector("#name");
    // var kor = document.querySelector("#kor");
    // var math = document.querySelector("#math");
    // var eng = document.querySelector("#eng");

    // stu_list.push(new student(grade.value,sclass.value,name.value,kor.value,math.value,eng.value));

    var score = document.getElementsByClassName("infor");

    stu_list.push(new student(score[0].value,score[1].value,score[2].value,score[3].value,score[4].value,score[5].value));

    alert(score[2].value+" 학생의 성적이 등록되었습니다!");

    var list = document.querySelector("#list");
    var html="";

    for(var i in stu_list){
        html += "<div>"+stu_list[i].toString()+"</div>";
    }

    list.innerHTML=html;

    score[0].value="";
    score[1].value="";
    score[2].value="";
    score[3].value="";
    score[4].value="";
    score[5].value="";
  
    score[0].focus();

}

function enterkey() {

    if (window.event.keyCode == 13) {
        // 엔터키가 눌렸을 때
        document.querySelector("#save_btn").focus();
    }

}

   
