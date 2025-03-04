$(document).ready(function() {
    $('#formulaire-inscription').on('submit', function(event) {
        event.preventDefault(); 
        var nom = $('#nom').val();
        var email = $('#email').val();
        localStorage.setItem('nom_utilisateur', nom);
        localStorage.setItem('email_utilisateur', email);
        alert('Merci ' + nom + '! Votre inscription a été enregistrée avec l\'email : ' + email);
        window.location.href = "mo.html";
    });
    
    $('#btn-inscription').on('click', function(event) {
        event.preventDefault(); 
        $('#formulaire-inscription').submit(); 
    });
});