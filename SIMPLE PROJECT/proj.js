let getData = document.getElementById("getdata");
let printData = document.getElementById("printdata");

getData.addEventListener('click', ()=>{
    // alert(1);
    let xhr = new XMLHttpRequest;
    // xhr.open('GET', 'https://newsapi.org/v2/top-headlines/sources?apiKey=b6cb5d51f2fa4339aba56554b788dd2f', true);
    xhr.open('GET', 'https://fakestoreapi.com/products', true);
    xhr.onload = function(){

        if(this.status === 200){
            let objectData = JSON.parse(this.responseText);
            console.log(objectData);
             
            let tableData = document.getElementById('mytable-data');
            data = `<thead class="table-secondary">
            <tr>
              <th scope="col">TITLE</th>
              <th scope="col">PRICE</th>
              <th scope="col">IMAGE</th>
            </tr>
          </thead>`;

          for(value in objectData){
            data += `<tr>
            <td>${objectData[value].title}</td>
            <td>${objectData[value].price}</td>
            <td><img src='${objectData[value].image}'></td>
          </tr>`;
          }

            tableData.innerHTML = data;

        }else{
            console.log('API link not accessible');
        }
    }


    xhr.send();
});


printData.addEventListener('click', ()=>{
    // alert(8);

    var doc = new jsPDF();
    var ul = '#mytable-data';
    var listContent = $(ul).html();

    html2canvas($(ul)[0]).then(function(canvas) {
            // Add the canvas to the PDF document
            doc.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 10, 10, 180, 240);
        
            // Save the PDF document
            doc.save('list.pdf');
          });
});


