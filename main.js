$(document).ready(function(){
    $('form').on('submit', function(e){

        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = `<li>${novaTarefa}</li>`;

        $(novoItem).appendTo('ul');

        $('li').click(function(){

             $(this).css({ 'color': 'red', 'text-decoration': 'line-through', 'font-style': 'italic'});
        })

        $('#nova-tarefa').val('');
    })
})