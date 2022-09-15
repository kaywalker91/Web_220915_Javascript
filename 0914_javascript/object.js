window.onload=function(){

    if(window.event.keyCode==13){
        book_save();
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
function book(booktitle,writer,year,kind,booknum){

    this.booktitle = booktitle;
    this.writer = writer;
    this.year = year;
    this.kind = kind;
    this.booknum = booknum;

}

book.prototype.toString=function(){

    return "<span class='title'>제목: "+this.booktitle+"</span>"
    +"/<span class='writer'> 저자: "+this.writer+"</span>"
    +" /<span class='year'> 출간년도: "+this.year+"</span>"
    +" /<span class='kind'> 분류: "+this.kind+"</span>"
    +" /<span class='num'> 도서번호: "+this.booknum+"</span>"
    +"<span class='del'> <a href='javascript:book_delete("+this.booknum+");'>삭제</a> </span>";
}

function book_delete( idx ){

    book_list.forEach ( (b,index)=> { if(b.booknum==idx) idx=index; } );
    book_list.splice(idx,1);
    book_print();
    // splice(4,3); - 4번인덱스부터 3개 삭제

}

var book_list = new Array();

book_init();

function book_init(){

    book_list.push(new book("하얼빈","김훈",2022,"소설","91"));
    book_list.push(new book("불편한 편의점2","김호연",2022,"소설","92"));
    book_list.push(new book("해리포터","조앤.K.롤링",1997,"소설","93"));
    book_list.push(new book("반지의제왕","톨킨",1954,"소설","94"));
    book_list.push(new book("트와일라잇","스테퍼니 마이어",2005,"소설","95"));

}

function book_save(){

    var booktitle = document.querySelector("#booktitle").value;
    var writer = document.querySelector("#writer").value;
    var year = document.querySelector("#year").value;
    var kind = document.querySelector("#kind").value;
    var booknum = document.querySelector("#booknum").value;

    book_list.push(new book(booktitle,writer,year,kind,booknum));

    alert(booktitle+"(이)가 등록되었습니다!");

}

function book_print(){

    var list = document.querySelector("#list");
    var html="";

    for(var i in book_list){
        html += "<div>"+book_list[i].toString()+"</div>";
    }

    list.innerHTML=html;

}

function enterkey() {

    if (window.event.keyCode == 13) {
        // 엔터키가 눌렸을 때
        document.querySelector("#save_btn").focus();
    }

}

   
