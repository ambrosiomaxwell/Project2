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
