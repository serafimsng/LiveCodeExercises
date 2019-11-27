## `Snake Board`
#### Time Estimation (45 Minutes) <img align="right" width="100" height="70" src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18">
Buatlah sebuah function yang menerima dua parameter dan menghasilkan board sebagai berikut
```javascript
// generateSnake(row, column)
// berikut adalah hasil: generateSnake(6,10)
~_________
_________|
|_________
_________|
|_________
o________|

// berikut adalah hasil: generateSnake(1,30)
~____________________________o

// berikut adalah hasil: generateSnake(3,20)
~___________________
___________________|
|__________________o

// bagaimana dengan generateSnake(1,1) ? tampilkan kepalanya saja
o

// bagaimana dengan generateSnake(0,0) ? tampilkan pesan
row atau column minimal harus 1


```

### requirement:
- `~` adalah ujung ular
- `o` adalah kepala ular
- setiap baris harus bersambung ke line lainnya
- posisi ujung ular selalu di sebelah kiri atas
- posisi kepala bisa di kiri atau kanan, tergantung terhadap julah board nya
- DILARANG menggunakan reverse dan unshift!
