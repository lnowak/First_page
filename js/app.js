document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM');

    var div1 = document.querySelector('.textDiv1');
    var div2 = document.querySelector('.textDiv2');
    var fotoItem = document.querySelectorAll('.foto_item');
    var tab =[];
    for (var i=0; i<fotoItem.length; i++ ) {
        tab.push(fotoItem[i]);
        console.log(tab);

        fotoItem[0].addEventListener('mouseover', function () {
            div1.classList.add('hidden');
        });

        fotoItem[1].addEventListener('mouseover', function () {
            div2.classList.add('hidden');
        });

        fotoItem[i].addEventListener('mouseout', function () {
            div1.classList.remove('hidden');
            div2.classList.remove('hidden');
        });



    }

});