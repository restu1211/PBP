function getTotalNumber (Nilai1 , Nilai2){
    let result = Nilai1 + Nilai2 
    return result
}

let Nama = "Restu"
let Nim = "20220040138"

let fisrtVal = 1
let secondVal = 3

let Total = getTotalNumber(fisrtVal , secondVal)

console.log(`Nama : ${Nama}`);
console.log(`NIM : ${Nim}`);
console.log(`Jumlah GOL Babak 1 ${fisrtVal} dan Babak 2 ${secondVal}, Total Skol : ${Total}`);