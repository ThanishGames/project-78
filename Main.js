var images=[
    "https://i.postimg.cc/MKdhy06Z/family.jpg",
    "https://i.postimg.cc/wjMnFtMX/father.jpg",
    "https://i.postimg.cc/5ymDKL83/bro.jpg",
    "https://i.postimg.cc/JnL6wtrd/sister.jpg",
    "https://i.postimg.cc/bw5W5zSK/mother.jpg"
];
var names=[
    "Family Book",
    "Praveen",
    "Akki",
    "Harshi",
    "Sathya"
];

var i=0;

function change(){
    document.getElementById("family1").src=images[i];
    document.getElementById("family2").innerHTML=names[i];
    i++;
    if(i>4)
    {
        i=0;
    }
}