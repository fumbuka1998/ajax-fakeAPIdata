
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
});