$(document).ready(function(){
    $('#botao-cadastrar').click(function(){
        $('#form-cadastrar').slideToggle('slow');
        $('.login-container > form').not('#form-cadastrar').slideToggle('slow');
        $('#botao-cadastrar').hide();
    });
});