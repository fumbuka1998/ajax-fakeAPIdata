let getData = document.getElementById('getdata');

// console.log(getData);
// my get request
// getData.addEventListener('click', ()=>{
//     // alert('this is the power of js');
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET', 'myajaxdata.txt', true);

//     // xhr.onprogress = function(){
//     //     console.log('am just progressing the request');

//     // }

//     xhr.onreadystatechange = function(){
//         console.log('the state is ' + xhr.readyState);
//     }

//     xhr.onload = function(){
//         if(this.status === 200){
//             console.log(this.responseText);
//         }else{
//             console.log('page not found');
//         }
//     }

//      xhr.send();

//      console.log('i am last to be called');
// });

// my post request
getData.addEventListener('click', ()=>{
   
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://fakestoreapi.com/products', true);

    xhr.onreadystatechange = function(){
        console.log('the state is ' + xhr.readyState);
    }

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }else{
            console.log('page not found');
        }
    }
    data = {title: 'ajax api'}
     xhr.send(data);

     console.log('i am last to be called');
});
