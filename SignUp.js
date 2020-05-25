var variabel = document.getElementById("name");
console.log(variabel.value);


fetch('signupcompany', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: variabel.value
                /* identification,
                 phone,
                 email,
                 description,
                 country,
                 state,
                 city,
                 password*/
        })
    })
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp)
    })
    .catch(err => console.log(err))