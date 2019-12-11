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
    $('.field input').on('keyup', function() {
      let empty = false;
  
      $('.field input').each(function() {
        empty = $(this).val().length == 0;
      });
  
      if (empty)
        $('.action .tombol').attr('disabled', 'disabled');
      else
        $('.action .tombol').attr('disabled', false);
    });
  });