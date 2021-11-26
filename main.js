function walidacja(){
    const dlugoscHasla = document.getElementById('haslo').value
    if (dlugoscHasla.length > 7) {
        document.getElementById('komunikat').innerHTML = "dobre hasło"
    }
    if(dlugoscHasla.length > 4 && dlugoscHasla.length < 7) {
        document.getElementById('komunikat').innerHTML = "średnie hasło"
    }
    if(dlugoscHasla.length < 4){
        document.getElementById('komunikat').innerHTML = "za słabe hasło"
    }
}
