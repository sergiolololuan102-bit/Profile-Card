const tombolFollow = document.querySelector('.follow');
const tombolMessage = document.querySelector('.message');


const angkaPengikut = document.querySelectorAll('.number-grid .box')[1]
                        .querySelector('p');


let sedangFollow = false;          
let jumlahPengikut = 234;           


tombolFollow.addEventListener('click', function () {

    
    if (sedangFollow === false) {
        sedangFollow = true;
        jumlahPengikut = jumlahPengikut + 1; 
        tombolFollow.textContent = 'Following';
    }

    else {
        sedangFollow = false;
        jumlahPengikut = jumlahPengikut - 1;  
        tombolFollow.textContent = 'Follow';
    }

    angkaPengikut.textContent = jumlahPengikut;
});


tombolMessage.addEventListener('click', function () {
    alert('pesan dari saya, Jangan menyerah cuman karena episode buruk, Tuhan belum selesai menulis ceritamu👋');
});