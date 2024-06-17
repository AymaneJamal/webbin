// Initialize EmailJS
(function() {
    emailjs.init("hJcG8yZBUFugxp9VD");
  })();
  
  document.getElementById('quoteForm').onsubmit = function(event) {
    event.preventDefault();
  
    // Retrieve form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('phone').value;
  
    // Define email parameters
    var templateParams = {
      name: name,
      email: email,
      phone: message
    };
  
    // Send email using EmailJS
    emailjs.send('service_1j9p2su', 'template_2k1xwjj', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Votre devis a été envoyé avec succès.');
        document.getElementById("myModal").style.display = "none";
      }, function(error) {
        console.log('FAILED...', error);
        alert('Merci , nous allons vous contacter tres prochainement.');
      });
  };
  