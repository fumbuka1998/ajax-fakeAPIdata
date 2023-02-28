
$(document).ready(function(){
    $('#inp').change(function(){
        var input = $(this).val();
        $('ul').append(`<li>`+ input +  `<i class="fa fa-check"></i> <i class="fa fa-trash"><i></li>`);
    });

    $('ul').on('click','.fa-trash', function(){
        $(this).parent('li').fadeOut(200);
    });

    $('ul').on('click','.fa-check', function(){
        $(this).parent('li').toggleClass('checked');
    });

//     $('#mybtn').click(function(){
//         // Create a new jsPDF object
//     var doc = new jsPDF();

//      // Get the HTML content of the list
//     var listContent = $(ul).html();

//   // Convert the HTML content to a canvas object
//   html2canvas($(ul)[0]).then(function(canvas) {
//     // Add the canvas to the PDF document
//     doc.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 10, 10, 180, 240);

//     // Save the PDF document
//     doc.save('list.pdf');
//   });
//     });

$('#mybtn').click(function(){
    // alert(22);
    var doc = new jsPDF();
    var ul = '#mydoc';
    var listContent = $(ul).html();

    html2canvas($(ul)[0]).then(function(canvas) {
            // Add the canvas to the PDF document
            doc.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 10, 10, 180, 240);
        
            // Save the PDF document
            doc.save('list.pdf');
          });
});
});