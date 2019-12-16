// $(document).ready(() => {
//     $('#btn-input').click(() => {
//         $('#input-file').click();
//     })

//     $('#input-file').change(function(data) {
//         var filename = data.target.files[0].name;
//         $('#filename').text(filename);
//     })
    
// })

$(document).ready(function() {
    var inputName = $('input.name')
    var btnPreview = $('section#template div.kotak a.btn')
    btnPreview.addClass('disabled')
    inputName.keyup(function() {
        var totalInputNull = 4
        inputName.each(function() {
            if ('' !== $(this).val()) {
                totalInputNull--
            }
        })
        if (0 === totalInputNull) {
            btnPreview.removeClass('disabled')
        } else {
            btnPreview.addClass('disabled')
        }
    })

});