$(document).ready(function(){
    let i = 1;
    $('#add').click(function(){
        i++;
        
        $('#appendtable').append('<tr id="row'+i+'"><td scope="col" ><input type="text" name="name[]" id="name" class="form-control"></td><td scope="col"><input type="text" name="email[]" id="email" class="form-control"></td><td scope="col"><input type="text" name="phone[]" id="phone" class="form-control"></td><td scope="col"><input type="file" name="photo[]" id="photo" class="form-control"></td><td scope="col"><button type="button" id="'+i+'" class="btn btn-outline-danger remove-row">remove(-)</button></td></tr>');
    });
    $(document).on('click', '.remove-row', function(){
        var row_id = $(this).attr("id");
        $('#row'+ row_id +'').remove();
    })
});
