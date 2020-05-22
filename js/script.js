window.addEventListener('load',start);

function start(){
    var red = document.querySelector('#red-range').value;
    var green = document.querySelector('#green-range').value;
    var blue = document.querySelector('#blue-range').value;

    document.querySelector('#text-r').value = red;
    document.querySelector('#text-g').value = green;
    document.querySelector('#text-b').value = blue;

    mudarCor(red, green, blue);

    document.getElementById('red-range').addEventListener('input', start);
    document.getElementById('green-range').addEventListener('input', start);
    document.getElementById('blue-range').addEventListener('input', start);
}

function mudarCor(red, green, blue){
    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    result.style.backgroundColor = color;
}