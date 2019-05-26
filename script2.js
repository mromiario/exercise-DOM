var body = document.body;
var bodyChild = body.children;

console.log(bodyChild);
var keturunanPertama = bodyChild[0].children[0];
keturunanPertama.innerHTML= 'Diakses Melalui Eldest Parent';

var generasiTermuda = keturunanPertama.nextElementSibling;

generasiTermuda.children[0].children[0].innerHTML = 'Diakses Melalui a Child';

var mudaMuda = generasiTermuda.children[0].children[0].nextElementSibling.nextElementSibling;
mudaMuda.innerHTML = 'Diakses Melalui a Child'

mudaMuda.parentNode.parentNode.nextElementSibling.innerHTML = 'Diakses Melalui a Child'
