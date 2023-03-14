//https://fakestoreapi.com/docs


//PRODUCTS
// 'https://fakestoreapi.com/products'
//Array of products

[{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}]

 //https://fakestoreapi.com/products/1
 //get a single product
 {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}

//https://fakestoreapi.com/products?limit=5
// limitet array of products


//https://fakestoreapi.com/products?sort=desc
//sorted array of products by ID

//'https://fakestoreapi.com/products/categories'
//Array of string
[
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
]

//'https://fakestoreapi.com/products/category/jewelery'
// Array of products this category
[{
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
}]

// https://fakestoreapi.com/products',{
//     method:"POST",
//     body:JSON.stringify(
//         {
//             title: 'test product',
//             price: 13.5,
//             description: 'lorem ipsum set',
//             image: 'https://i.pravatar.cc',
//             category: 'electronic'
//         }
//     )
// }
//  If you send an object like the code above, it will return you an object with a new id.
// remember that nothing in real will insert into the database. so if you want to access the new id you will get a 404 error.


// 'https://fakestoreapi.com/products/7',{
//             method:"PUT",
//             body:JSON.stringify(
//                 {
//                     title: 'test product',
//                     price: 13.5,
//                     description: 'lorem ipsum set',
//                     image: 'https://i.pravatar.cc',
//                     category: 'electronic'
//                 }
//             )
//         }
// It will return you an object with sent id. remember that nothing in real will update in the database.

// 'https://fakestoreapi.com/products/6',{
//             method:"DELETE"
//         }
// The product will not be deleted on the database. but if you sent data successfully it will return you the fake deleted product.

//CART
//'https://fakestoreapi.com/carts'
// Array of cart
[{
    "id": 1,
    "userId": 1,
    "date": "2020-03-02T00:00:02.000Z",
    "products": [
        {
            "productId": 1,
            "quantity": 4
        },
        {
            "productId": 2,
            "quantity": 1
        },
        {
            "productId": 3,
            "quantity": 6
        }
    ],
    "__v": 0
}]

//'https://fakestoreapi.com/carts/5'
//get a single card
{
    "id": 5,
    "userId": 3,
    "date": "2020-03-01T00:00:02.000Z",
    "products": [
        {
            "productId": 7,
            "quantity": 1
        },
        {
            "productId": 8,
            "quantity": 1
        }
    ],
    "__v": 0
}

//'https://fakestoreapi.com/carts?limit=5'
// limitet array of cart

//'https://fakestoreapi.com/carts?sort=desc'
//array of cart sorted by ID

//'https://fakestoreapi.com/carts/startdate=2019-12-10&enddate=2020-10-10'
//Get carts in a date range
// If you don't add any start date it will fetch from the beginning of time and 
//if you don't add any end date it will fetch until now. You can also use limit(Number) 
//and sort(asc|desc) as a query string to get your ideal results


//Get user carts
//Array of carts
[
    {
        "id": 3,
        "userId": 2,
        "date": "2020-03-01T00:00:02.000Z",
        "products": [
            {
                "productId": 1,
                "quantity": 2
            },
            {
                "productId": 9,
                "quantity": 1
            }
        ],
        "__v": 0
    }
]


// 'https://fakestoreapi.com/carts',{
//             method:"POST",
//             body:JSON.stringify(
//                 {
//                     userId:5,
//                     date:2020-02-03,
//                     products:[{productId:5,quantity:1},{productId:1,quantity:5}]
//                 }
//             )
//         }
//Object with new id
//remember that nothing in real will insert into the database. so if you want to access the new id you will get a 404 error.
{
    "id": 11
}

// 'https://fakestoreapi.com/carts/7',{
//             method:"PUT",
//             body:JSON.stringify(
//                 {
//                     userId:3,
//                     date:2019-12-10,
//                     products:[{productId:1,quantity:3}]
//                 }
//             )
//         }

// 'https://fakestoreapi.com/carts/7',{
//             method:"PUT",
//             body:JSON.stringify(
//                 {
//                     userId:3,
//                     date:2019-12-10,
//                     products:[{productId:1,quantity:3}]
//                 }
//             )
//         }
// It will return you an object with sent id. remember that nothing in real will update in the database.
{
    "id": 11
}

// 'https://fakestoreapi.com/carts/6',{
//             method:"DELETE"
//         }
// The cart will not be deleted on the database. but if you sent data successfully it will return you the fake deleted cart.
{
    "id": 6,
    "userId": 4,
    "date": "2020-03-01T00:00:02.000Z",
    "products": [
        {
            "productId": 10,
            "quantity": 2
        },
        {
            "productId": 12,
            "quantity": 3
        }
    ],
    "__v": 0
}


//USERS
//'https://fakestoreapi.com/users'
//Array of users 
[{
    "address": {
        "geolocation": {
            "lat": "-37.3159",
            "long": "81.1496"
        },
        "city": "kilcoole",
        "street": "new road",
        "number": 7682,
        "zipcode": "12926-3874"
    },
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
        "firstname": "john",
        "lastname": "doe"
    },
    "phone": "1-570-236-7033",
    "__v": 0
}]

//'https://fakestoreapi.com/users/1'
//get a single user

{
    "address": {
        "geolocation": {
            "lat": "-37.3159",
            "long": "81.1496"
        },
        "city": "kilcoole",
        "street": "new road",
        "number": 7682,
        "zipcode": "12926-3874"
    },
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
        "firstname": "john",
        "lastname": "doe"
    },
    "phone": "1-570-236-7033",
    "__v": 0
}

//https://fakestoreapi.com/users?limit=5
// limited array of users


//'https://fakestoreapi.com/users?sort=desc'
// sorted array of users by ID

// 'https://fakestoreapi.com/users',{
//             method:"POST",
//             body:JSON.stringify(
//                 {
//                     email:'John@gmail.com',
//                     username:'johnd',
//                     password:'m38rmF$',
//                     name:{
//                         firstname:'John',
//                         lastname:'Doe'
//                     },
//                     address:{
//                         city:'kilcoole',
//                         street:'7835 new road',
//                         number:3,
//                         zipcode:'12926-3874',
//                         geolocation:{
//                             lat:'-37.3159',
//                             long:'81.1496'
//                         }
//                     },
//                     phone:'1-570-236-7033'
//                 }
//             )
//         }
// Add new user
// If you send an object like the code above, it will return you an object with a new id.
// remember that nothing in real will insert into the database. so if you want to access the new id you will get a 404 error.

{
    "id": 1
}

// 'https://fakestoreapi.com/users/7',{
//             method:"PUT",
//             body:JSON.stringify(
//                 {
//                 email:'John@gmail.com',
//                 username:'johnd',
//                 password:'m38rmF$',
//                 name:{
//                     firstname:'John',
//                     lastname:'Doe'
//                 },
//                 address:{
//                     city:'kilcoole',
//                     street:'7835 new road',
//                     number:3,
//                     zipcode:'12926-3874',
//                     geolocation:{
//                         lat:'-37.3159',
//                         long:'81.1496'
//                     }
//                 },
//                 phone:'1-570-236-7033'
//                 }
//             )
//         }
// update user 
//It will return you an object with sent id. remember that nothing in real will update in the database. BUT! Return for me empty object
{}


// 'https://fakestoreapi.com/users/6',{
//     method:"DELETE"
// }
// The user will not be deleted on the database. but if you sent data successfully it will return you the fake deleted user.
{
    "address": {
        "geolocation": {
            "lat": "20.1677",
            "long": "-10.6789"
        },
        "city": "el paso",
        "street": "prospect st",
        "number": 124,
        "zipcode": "12346-0456"
    },
    "id": 6,
    "email": "david_r@gmail.com",
    "username": "david_r",
    "password": "3478*#54",
    "name": {
        "firstname": "david",
        "lastname": "russell"
    },
    "phone": "1-678-345-9856",
    "__v": 0
}


//LOGIN
// 'https://fakestoreapi.com/auth/login',{
//     method:'POST',
//     body:JSON.stringify({
//         username: "mor_2314",
//         password: "83r5^_"
//     })
// }
//can use any of the users' username and password available in users API to get token. any other usernames return error.
//Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
{
    token: "eyJhbGciOiJIUzI1NiIsInR"
}