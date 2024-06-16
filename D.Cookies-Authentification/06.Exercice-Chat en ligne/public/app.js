$(function () {
  var socket = io();

  // Cacher le conteneur du chat et le formulaire de messages au chargement de la page
  $('#chat-container').hide();
  $('form#form').hide();

  // Afficher la modal au chargement de la page
  $('#pseudoModal').show();

  // Gérer la soumission du formulaire de pseudo
  $('form#pseudoForm').submit(function (e) {
    e.preventDefault();
    socket.emit('set pseudo', $('#pseudo').val());
    $('#pseudoModal').hide(); // Cacher la modal après avoir défini le pseudo
    $('#chat-container').show(); // Afficher le conteneur du chat
    $('form#form').show(); // Afficher le formulaire de messages
    return false;
  });

  // Gérer la soumission du formulaire de messages
  $('form#form').submit(function (e) {
    e.preventDefault();
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });

  // Gérer l'affichage des messages
  socket.on('chat message', function (data) {
    $('#messages').append($('<li>').text(`${data.pseudo} : ${data.message}`));
  });
});
