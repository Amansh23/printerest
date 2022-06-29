
var t1 = gsap.timeline();
t1.to("#main #bar .b1",{
    
    width: 1500,
    duration: 5,
    ease : Expo.easeInOut,
})



var arr  = [
       {dp:"https://images.unsplash.com/photo-1639255752774-f29f1cc405df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},{dp:"https://i.pinimg.com/564x/9a/02/35/9a02356798c3225b3d91cddc75796ffa.jpg"},
       {dp:"https://i.pinimg.com/236x/ca/2e/b0/ca2eb08a536437a7f0624605b922ac1f.jpg"},{dp:"https://i.pinimg.com/236x/4d/fc/5d/4dfc5dbc0447782e1d96d5b45729146c.jpg"},
       {dp:"https://i.pinimg.com/736x/6f/90/54/6f9054535d6f3ae43261ae7ac5d00f13.jpg"},{dp:"https://i.pinimg.com/236x/29/cd/64/29cd64d3f050ef8751ba057778c36bf0.jpg"},
       {dp:"https://i.pinimg.com/236x/fe/12/06/fe12069461c37000a8e4ad18a06dd7da.jpg"},{dp:"https://i.pinimg.com/236x/24/6f/9d/246f9da97f8c4309d7b3115e7b849f8c.jpg"},
       {dp:"https://i.pinimg.com/236x/6c/12/b5/6c12b533ef45a29555179e9e444b58aa.jpg"},{dp:"https://i.pinimg.com/236x/48/5e/27/485e278a7a83747b021914c9da9392c5.jpg"},
       {dp:"https://i.pinimg.com/236x/c7/a4/fc/c7a4fcb3e0581a8b816b6bdd55fb54c8.jpg"},{dp:"https://i.pinimg.com/236x/e6/b8/b8/e6b8b87679d0fe95fe18be01d0e57b6a.jpg"},
       {dp:"https://i.pinimg.com/236x/b2/96/4d/b2964def0395443f661e136924d857ee.jpg"},{dp:"https://i.pinimg.com/236x/6b/1e/da/6b1edae5a10ec112bd85b08f76a42607.jpg"},
       {dp:"https://i.pinimg.com/236x/79/f4/6d/79f46d26fe3f99d227ac0b3abb873014.jpg"},{dp:"https://i.pinimg.com/236x/e3/62/59/e362592e8ac5d87c7a803d6db1f8622e.jpg"},
       {dp:"https://i.pinimg.com/236x/04/ea/b3/04eab334923b79abaedc3f1038e81d60.jpg"},{dp:"https://i.pinimg.com/236x/ae/47/8b/ae478b19e789989490cbcc7c01af9c8e.jpg"},
       {dp:"https://i.pinimg.com/236x/8b/8c/8f/8b8c8f0bba462c669cb45f01148d2f84.jpg"},{dp:"https://i.pinimg.com/236x/da/cc/fb/daccfb69407a8ed09f9eb945cb0d86f4.jpg"},
       {dp:"https://i.pinimg.com/236x/00/6a/58/006a5864cf12c18b7fda1fb732f01d60.jpg"},{dp:"https://i.pinimg.com/236x/bd/bd/8a/bdbd8aba079b66dec717257508abcafc.jpg"},
       {dp:"https://i.pinimg.com/236x/fa/cd/7c/facd7c087065c9588cae06d237a4d440.jpg"},{dp:"https://i.pinimg.com/236x/58/33/b8/5833b84936d0e7a4ae76fe9a5434c9a6.jpg"},
       {dp:"https://i.pinimg.com/236x/f9/a2/d9/f9a2d900654254822f7e6367ec5eb7d8.jpg"},{dp:"https://i.pinimg.com/236x/0d/5f/98/0d5f9891ec603b83c963ba6c1533a5f2.jpg"},
       {dp:"https://i.pinimg.com/236x/4b/5d/1c/4b5d1c3b0420f2013fdb86f9690ab1e7.jpg"},{dp:"https://i.pinimg.com/236x/3d/61/83/3d6183655f3d714cea3fa41ba2b25771.jpg"},
       {dp:"https://i.pinimg.com/236x/a5/96/f9/a596f9dad8fd75d174e394a324519334.jpg"},{dp:"https://i.pinimg.com/236x/55/7c/af/557cafbd610e59d458eb74b7e1be8b56.jpg"},

];


var clutter = ``;
arr.forEach(function(val,index){
    clutter += ` <div id="cards">
    <img id=${index} src="${val.dp}" alt="">
       <div id="card">
       <div class="save"><a href="">Save</a></div>
       <div class="circle"><i class="ri-download-cloud-2-fill"></i></div>
       </div>
   </div>`;
   document.querySelector("#main #cardss").innerHTML = clutter;


})

document.querySelector("#main #cardss #cards .circle ").addEventListener("click",function(){
       console.log("hey");
    var dp = document.querySelectorAll(clutter.dp);
    localStorage.setItem( clutter, dp);
   

})





