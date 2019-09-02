// for ( let i = 100; i >= 0; i-- ) {
//     if (i % 10 !== 0 && i % 2 === 0) {
//         document.write(i  + '<br>');
//     }
// }

// let i = 0;
// while (i < 100) {
//     document.write(i + '<br>');
//     i++;
// }

// let i = 0;
// do {
//     document.write(i + '<br>');
//     i++;
// } while ( i < 100);

// let num = parseFloat(prompt('Enter number'));
// while (Number.isNaN(num)) {
//     alert('Please enter the number');
//     num = parseFloat(prompt('Enter number'));
// }

// let num;
// do {
//     num = parseFloat(prompt('Enter number'));
// } while (isNaN(num));

// let products = ['Tesla X', 'Tesla S', 'BMW i3'];
// products[3] = 'Tesla Y';
// products[4] = 'ZAZ Sens';
// products.push('Chevy Corvette');
// console.log(products.length);
// products[6] = 'Tesla Z';
// products.push('Tesla X');
// console.log(products.length);
// products[10] = 'Toyota Corolla';
// console.log(products.length);


// for ( let i = 0; i < products.length; i++) {
//     if ( products[i] !== undefined ) {
//     console.log(products[i]);
// }
// }

// products.forEach( element => console.log(element) );

// function padIt(str, n) {
//     const stars = '*'.repeat(n).split('');
//     const result = [...stars.slice(0, n / 2), str, ...stars.slice(n/2)];
//     console.log(result);
// }

// padIt('a', 5);