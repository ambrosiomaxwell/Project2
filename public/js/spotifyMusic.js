const { response } = require("express");

const submitNameBtn = document.getElementById('name-submit');
submitNameBtn.addEventListener('click', (e) => {
    e.preventDefault();

    //Make a new name and email object
    const newUser = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('emailarea').value.trim(),
    };

    fetch('/api/new', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(newUser),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success in posting new User!', data);
        const row = document.createElement('div');
        const userArea = document.getElementById('user-area');

        const userName = document.createElement('p');
        const emailName = document.createElement('p');

        userName.textContent = `${data.name}`;
        emailName.textContent = `${data.email}`;

        row.appendChild(userName);
        row.appendChild(emailName);

        userArea.prepend(row);

    });
    //.catch ((error) => console.error('Error:', error));

    document.getElementById('name').value = '';
    document.getElementById('emailarea').value = '';
});

fetch('/api/all', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then((response)=> response.json())
.then((data) => {
    console.log('Successful GET all chirps:', data);
    data.map(({ name, email}) => {
        const row = document.createElement('div');
        const userArea = document.getElementById('user-area');
        row.classList.add('Username');

        const userName = document.createElement('p');
        const userEmail = document.createElement('p');

        userName.textContent = `${name}`;
        userEmail.textContent = `${email}`;

        row.appendChild(userName);
        row.appendChild(userEmail);
    });
})
.catch((err) => console.error(err));

// const myList = document.querySelector('ul');
// const myRequest = new Request('products.json');

// fetch(myRequest)
//   .then(response => response.json())
//   .then(data => {
//     for (const product of data.products) {
//       let listItem = document.createElement('li');
//       listItem.appendChild(
//         document.createElement('strong')
//       ).textContent = product.Name;
//       listItem.append(
//         ` can be found in ${
//           product.Location
//         }. Cost: `
//       );
//       listItem.appendChild(
//         document.createElement('strong')
//       ).textContent = `£${product.Price}`;
//       myList.appendChild(listItem);
//     }
//   })
//   .catch(console.error);