"use strict";


// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapın.

// let n = 25;


// if(n%3==0 && n%7==0){
//     console.log("True")
// }
// else{
//     console.log("False")
// }



//2) n və m ədədləri verilir. Əgər n və m ədədləri hər ikisi cütdürsə n və m ədədlərinin hasilini hesablayın.

// let n = 12;
// let m = 4;

// if(n%2==0 && m%2==0){
//     let result = n*m;
//     console.log(result);
// }
// else{
//     console.log("Input is not even number");
// }



//3) Verilmis n ve m (n<m) ededleri arasindaki tek ededlerin sayini tapin.

// let n = 3;
// let m = 12;

// let count = 0;

// for (let i = n+1; i < m; i++) {
//     if(i%2==1){
//         count++;
//     }
// }

// console.log(count);




//4) Verilmis n ve m (n<m) ededleri arasindaki tek ededlerin cemini tapin.

// let n = 4;
// let m = 15;

// let sum = 0;

// for(let i = n+1; i < m; i++){
//     if(i%2==1){
//         sum+=i;
//     }
// }

// console.log(sum);


//5) Verilmis n ve m (n<m) ededleri arasindaki tek ededleri ekranda gostermek.

// let n = 4;
// let m = 15;

// for(let i = n+1; i < m; i++){
//     if(i%2==1){
//         console.log(i)
//     }
// }



//1) Verilmish arrayin icindeki cut ededlerin sayini tapin.

// let numbers = [1,2,14,6,9,3,8];

// let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i]%2==0){
//         count++;
//     }
// }

// console.log(count);

//2) Verilmis n tam ededinin sade ve ya murekkeb oldugunu tapin.

// let n = 11;
// let count = 0;

// for(let i = n; i > 0; i--){
//     if(n%i==0){
//         count++;
//     }
// }

// if(count>2){
//     console.log("Murekkeb")
// }
// else{
//     console.log("Sade")
// }

//3)Verilmish arrayin-in elementlerinin icinden 1-20 arasinda olanlarinin hasilini tapmaq.Mes ([1,3,55,6,33], cavab : 18).

// let elements = [1,3,12,16,7,6];

// let multiplier = 1;

// for(let i = 0; i < elements.length; i++){
//     if(elements[i] >=1 && elements[i] <=20){
//         multiplier *=elements[i];
//     }
// }

// console.log(multiplier);

