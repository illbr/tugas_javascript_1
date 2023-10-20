/*Buatlah program yang memiliki satu variabel dengan nama “printSegitiga” yg berisi tipe data number
 yang menghasilkan output segitiga terbalik yang berisi angka
 */

 function printSegitiga(angka) {
    if (typeof angka !== "number") {
      console.log("Data harus angka");
    } else {
      for (let v = angka; v >= 1; v--) {
        let baris = " ";
        for (let h = 1; h <= v; h++) {
          baris += h + " ";
        }
        console.log(baris);
      }
    }
  }
printSegitiga(5);