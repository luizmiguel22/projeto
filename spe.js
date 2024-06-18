  //aqui eu peggo e faco o js comecar ao o html ser carregado 
  $(document).ready(function() {
    //pega o .oi e relaciono com o input, aciona toda vez que eu por algo no input
        $('.oi').on('input', function() {
            //this é o .oi que esta guardando oq eu coloquei no input e deixando miunsco.
            var intens = $(this).val().toLowerCase(); 
            //each usa o jquery que importei a biblioteca, e pega o l1 para execurtar a funçao callback(controla o tempo que vai acontecer)
            $('.l1').each(function() {
                //find pega o p do l1 e pega o texto e deixa miunsco.
                var titleText = $(this).find('p').text().toLowerCase();
                 //se o p tiver ligado com oq escrevi no input ele sere mostrado com o  $(this).show(); exemplo se eu usar o epic dua bicicletas vao se mostradas
                if (titleText.includes(intens)) {
                    $(this).show(); 
                } else {
                    //se nao ele vai ser escondido com o $(this).hide();
                    $(this).hide(); 
                }
            });
        });
    });