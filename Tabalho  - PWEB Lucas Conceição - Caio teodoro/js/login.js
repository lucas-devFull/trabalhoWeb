$("#salvar").on("click", function() {
    setTimeout(function(){
        Ladda.stopAll()
        $(".modal").modal("hide")
    },2000)
    Ladda.create(this).start()
    
    iziToast.success({
        title: 'Aprovado',
        message: 'perfil cadastrado com sucesso',
        timeout: 2500,
    });
})

    $("#entrar").on("click", function() {
        setTimeout(function(){
            Ladda.stopAll()
            $(".modal").modal("hide")
            window.location.href = "dashboard.html";
        },2000);

        Ladda.create(this).start()
    // Ladda.stop()
    })