/*Buat program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4 nilai yakni Bahasa indonesia,
 Bahasa Inggris Matematika dan IPA, yang di dalam program tersebut memiliki validasi yaitu semua nilai tersebut
  harus diisi, dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut:
90 - 100 = A
80 - 89 = B
70 - 79 = C
60 - 69 = D
0 - 59 = E
*/


function hitungRataRataUN(matematika, bahasaIndonesia, bahasaInggris, ipa) {
    if (!matematika || !bahasaIndonesia || !bahasaInggris || !ipa) {
      return "Semua nilai harus diisi!";
    }
  
    let rataRata = (matematika + bahasaIndonesia + bahasaInggris + ipa) / 4
 
    let grade = rataRata > 89 && rataRata <= 100 ? "A":
                rataRata > 79 && rataRata < 90 ? "B":
                rataRata > 69 && rataRata < 80 ? "C":
                rataRata > 59 && rataRata < 70 ? "D": 
                rataRata >= 0 && rataRata < 60 ? "E": 
                "yang anda masukan bukan nilai rata rata";
  
    return "Rata-rata = " + rataRata + "\nGrade = " + grade;
  }
  console.log(hitungRataRataUN(80,90,70,50))