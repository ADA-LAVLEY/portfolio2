const balans=1000

const ega="Admin"


alert(`${ega} : Salom Internet magazinimizga hush kelibsiz `)

let ism = prompt("Ismingizni kititing : ")

alert(` Sizda bor pul ${balans} `)

alert("Bizning telefonlarimiz 1-Samsung 1000 2-Iphone 1000 3-Redmi 1000 ");

let tanla=prompt("Qaysi telefonni olmoqchisiz tartib raqamini  kiriting : ");

if(tanla == 1 ){
    alert("Siz Samsung sotib olmoqchisiz ! Olmoqchi bolsangiz Ok ni ezing ");
    confirm("OK ");
    alert(` Sotib oldingiz ${ism}`);
} else if (tanla == 2){
    alert("Siz Iphone sotib olmoqchisiz ! Olmoqchi bolsangiz Ok ni ezing ");
    confirm("OK ");
    alert(` Sotib oldingiz ${ism}`);
} else if(tanla == 3){
    alert("Siz Redmi sotib olmoqchisiz ! Olmoqchi bolsangiz Ok ni ezing ");
    confirm("OK ");
    alert(` Sotib oldingiz ${ism}`);
} 
else{
    alert(`${ism} Siz hech nanrsa kiritmadingiz `);
};


