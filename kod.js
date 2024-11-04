function szamolRombuszKerulet() {
 let rombuszOldal = document.getElementById('rombuszOldal').value;
 let rombuszKerulet = rombuszOldal+rombuszOldal+rombuszOldal+rombuszOldal;

 document.getElementById('eredmenyKerulet').innerText=`${rombuszKerulet} cm`; 
}

function szamolRombuszTerulet() {
    let rombuszOldal = document.getElementById('rombuszOldal').value;
    let rombuszMagassag = document.getElementById('rombuszMagassag').value;
    let rombuszTerulet = rombuszOldal*rombuszMagassag/2;
   
    document.getElementById('eredmenyTerulet').innerText=`${rombuszTerulet} cm^2`;
}

function torles(){
    document.getElementById('rombuszOldal').value=null;
    document.getElementById('rombuszMagassag').value=null;
    document.getElementById('eredmenyKerulet').innerText='';
    document.getElementById('eredmenyTerulet').innerText='';
}