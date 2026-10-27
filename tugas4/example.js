const nama = 'Crystalin'
// const tidak bisa diubah
// nama = 'Aqua'
// console.log(nama)

let harga = 3000
harga = 2500
// console.log(harga)

// console.log('123' + '123')
// console.log(123 + 123)
const dijual = false // false
const ongkir = null // undefined

// console.log(`Barang: ${nama} dengan harga: ${harga}, ${dijual ? 'Dijual' : 'Tidak Dijual'}`)

const barang = {
    id: 1,
    nama: 'Aqua',
    harga: 900,
    'harga lama': 800,
}

// console.log(barang.nama)
// console.log(barang['harga lama'])
// console.log(barang)

const hobi = ['membaca', 'menulis', 'menari']
// console.log(hobi[2])

const orang = {
    nama: 'Cahya',
    hobi: ['baca', 'tulis', { jenis: 'tari', details: ['piring', 'reog'] }],
    alamat: {
        desa: 'sengonagung',
        kecamatan: 'purwosari'
    }
}
// output reog
// console.log(orang.hobi[2].details[1])

const keranjang = [
    { nama: 'Crystalin', qty: 3, harga: 1_200 },
    { nama: 'Buku', qty: 1, harga: 5_200 },
    { nama: 'Pensil', qty: 3, harga: 2_200 },
    { nama: 'Penghapus', qty: 5, harga: 3_200 },
];

const hasilFilter = keranjang.filter(i => i.harga > 3000)
// console.log(hasilFilter);

// const hasilMap = keranjang.map(({nama, qty, harga}) => {
//     const total = qty * harga
//     return { nama, qty, harga, total }
// })
const hasilMap = keranjang.map(({nama, qty, harga}) => ({nama, qty, harga, total: qty * harga}))

console.log(hasilMap);

// const totalBelanja = hasilMap.reduce((x, {total}) => {
//     const hasil = x + total
//     return hasil
// }, 0)
const totalBelanja = hasilMap.reduce((x, { total }) => x + total, 0)
console.log(totalBelanja);

//FUNCITON
function hitung(barang) {
    dijual = barang.harga > 3000
    return dijual 
}
const hitung = i => i.harga > 3000

const barang = { nama: 'Crystalin', qty: 3, harga: 5_200 }
barang.harga = 2_900
const hasil = hitung(barang)
console.log(hasil)