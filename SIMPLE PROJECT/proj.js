let getData = document.getElementById("getdata");

getData.addEventListener('click', ()=>{
    // alert(1);
    let xhr = new XMLHttpRequest;
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