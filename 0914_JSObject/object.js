
window.onload=function(){
    if(window.event.keyCode==13){
        book_save();
    }
};


// 자바스크립트 객체
// 자바스크립트 객체는 key : value 구성
// 객체의 key를 변수라고 설명한다.

/*
var car = new Object();
car.make="현대";
car.model="투싼";
car.year="2015";


var mycom = { cpu:4.1 , ram:16 , ssd:"1T", vga:"Rtx3080"};
mycom.cpu;
mycon[ram];

*/
// 생성자 함수 사용하여 객체 생성하기
//book생성자 함수
function book(title, writer, year,kind, booknum ){ 
    this.booktitle = title;
    this.writer=writer;
    this.year=year;
    this.kind=kind;
    this.booknum=booknum;
}
book.prototype.toString=function(){
    return " <span class='title'>제목:"+this.booktitle +"</span> "+
    "<span class='writer'>저자:"+this.writer+"</span>"+
    " <span class='year'>출간년도:"+this.year+"</span>"+
    " <span class='kind'>분류:"+this.kind+"</span>"+
    " <span class='num'>도서번호:"+this.booknum+"</span>"+
    "<span class='del'> <a href='javascript:book_delete("+this.booknum+");'>삭제</a></span>";
}
function book_delete( idx ){
    book_list.forEach( ( b , index )=> {  if(b.booknum==idx) idx=index; });
    book_list.splice( idx, 1);
    book_print();  
    // splice( 2,1) - 2번인덱스 부터 1개 삭제
    // splice(4,3) - 4번인덱스부터 3개 삭제
}


var book_list = new Array();
book_init();
function book_init(){
    book_list.push(new book("하얼빈","김훈",2022,"소설",20220001));
    book_list.push(new book("불편한 편의점2","김호연",2022,"소설",20220002));
    book_list.push(new book("역행자","자청",2022,"자기계발",20220003));
    book_list.push(new book("파친코","이민진",2022,"소설",20220004));
    book_list.push(new book("겟머니","이경애",2022,"자기계발",20220005));
}



function book_save(){
    var title = document.querySelector("#booktitle");
    var writer = document.querySelector("#writer" );
    var year = document.querySelector("#year");
    var kind = document.querySelector("#kind");
    var num = document.querySelector("#booknum");

    book_list.push(  new book(title.value, writer.value,
        year.value , kind.value , num.value )  );

    
}

function book_print(){
    var out = document.querySelector("#list");
    
    var html="";
    for(var i in book_list){
        html += "<div>"+book_list[i].toString() +"</div>";
    }
    out.innerHTML=html;
}