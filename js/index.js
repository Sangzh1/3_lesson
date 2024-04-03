

document.querySelector('#title-1').textContent = 'h1 - textContent';

document.querySelector('#title_2').innerText = "h2 - innerText";

document.querySelector('#title_3').innerHTML = "<span class = 'span' style = ' color:red; '>SPAN</span>" ;

let arr = [
     {
          name: 'Iphone 12',
           imgSrc: 'https://https://avatars.mds.yandex.net/get-marketpic/4335291/picdfc4203761e3e969d8413b324f84b5b7/orig',
          price : 1200,
          color : 'gold',
     },
{
     name:'haedphones',
     imgSrc: 'https://avatars.mds.yandex.net/i?id=f7000e6f6a963c254ac66ad0be4c7052c080f754-9107083-images-thumbs&ref=rim&n=33&w=250&h=250',
     price: '120',
     color :'white',
}
,
{
     name: 'watch',
     imgSrc: 'https://www.bobswatches.com/rolex-blog/wp-content/uploads/2017/01/Green-Gold-Rolex-GMT-Master.jpg',
     price : 1500,
     color : 'black',
}
,
{
     name: 'noutbuk Lenovo',
     imgSrc:'https://flash-tlt.ru/files/flash-tlt.ru/i/goods/464/10/46410_1.jpg',
     price : 180,
     color : 'pink',
}
]

let productsList = document.querySelector('#productsList');

let htmlProducts = ""
arr.forEach(({name,price,imgSrc,color})=>{
    productsList.innerHTML +=` <li class = 'list-item'>
    <a> 
    <img src=${img} alt="" width="200"  height="200" >
    <h2>${name}</h2>
    <p>${price}</p>
    <span  style = 'backround:${color}'class="color"></span></a>
 </li>`;
});


