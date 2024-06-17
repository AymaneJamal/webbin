// Initialize EmailJS
(function() {
    emailjs.init("hJcG8yZBUFugxp9VD");
})();

document.getElementById('quoteForm2').onsubmit = function(event) {
    event.preventDefault();

    // Retrieve form values
    var company_name = document.getElementById('company_name').value;
    var name = document.getElementById('name2').value;
    var email = document.getElementById('email2').value;
    var phone = document.getElementById('phone2').value;
    var service_type = document.getElementById('service_type').value;
    var project_description = document.getElementById('project_description').value;
    var budget = document.getElementById('budget').value;

    // Define email parameters
    var templateParams = {
        company_name: company_name,
        name: name,
        email: email,
        phone: phone,
        service_type: service_type,
        project_description: project_description,
        budget: budget
    };

    // Send email using EmailJS
    emailjs.send('service_1j9p2su', 'template_mht5nfl', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Votre demande de devis a été envoyée avec succès.');
      }, function(error) {
        console.log('FAILED...', error);
        alert('Merci, nous allons vous contacter très prochainement.');
      });
};
