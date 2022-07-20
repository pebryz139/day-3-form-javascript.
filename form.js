function submitData(){   
    let name = document.getElementById('input-name');
    let email = document.getElementById('input-email');
    let phone = document.getElementById('input-phone');
    let subject = document.getElementById('choose-subject');
    let message = document.getElementById('input-message');

    console.log (name);
    console.log (email);
    console.log (phone);
    console.log (subject);
    console.log (message);

    if (name == '') {
        return alert('Name input fields must be not empty');
      } else if (email == '') {
        return alert('Email input fields must be not empty');
      } else if (phone == '') {
        return alert('Phone input fields must be not empty');
      } else if (subject == '') {
        return alert('Subject input fields must be not empty');
      } else if (message == '') {
        return alert('Message input fields must be not empty');
      }
    
    const emailReciver = 'pebryzauhary139@gmail.com';
    const a = document.createElement('a');

    a.href = `mailto:${emailReciver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${message}`;
    a.target = '_blank';
    a.click();

    let dataObject = {
        namaLengkap: name,
        email: email,
        phoneNumber: phone,
        subject: subject,
        message: message
    }

    console.log(dataObject);
}




