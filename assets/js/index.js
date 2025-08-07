function sendEmail () {
    const serviceID = 'service_cmvzmcb'
    const templateID = 'template_gg7ylhh';

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const phone = document.getElementById('phone').value;


    if(name !== '' && email.match(regex) && message !== '' && phone !== '') {
        emailjs
        .send(serviceID, templateID, {name: name, email: email, message: message, phone: phone})
        .then((res)=> {
            document.getElementById('name').value = '',
            document.getElementById('email').value = '',
            document.getElementById('message').value = '',
            document.getElementById('phone').value = '',
            alert('Запитването ви беше изпратено успешно.')
        })
        
    } 
    else {
        alert('Моля попълнете всички полета') // to do use something else for alert
    }
}   