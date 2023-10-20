/*Ubahlah data  tersebut menggunakan spread operator menjadi: 
name: nama anda
email: email anda
hobby: hobi anda
*/



let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
        {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
        },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let data1 = {
    ...data,
     name:"ilham",
     email: "ilhamr560@gmail.com",
     hoby: "futsal"

}
console.log(data1)

//Ambilah data “street dan city” tersebut menggunakan destructuring

const {street, city} = data.address

console.log(street)
console.log(city)