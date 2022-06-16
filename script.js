let Todo=document.querySelector('#Tasks');
let Todos=document.querySelector('#todo');
let input=document.querySelector('#input-id');
let btn=document.querySelector('#btn');
//let Tasks=document.querySelector('Tasks');
let htmlblocks=document.querySelector('#container');

let Tasks=[];
btn.addEventListener('click',function(){
    Tasks.push([
        Date.now(),//id
        input.value,//text
        false,//checked
    ])
    let div=document.createElement('div');
    div.className='newRow';
    div.innerHTML=`
    <div class='Tasks'>
    <ul id='todo'>`+input.value+`</ul>
    <button id=delete>`del`</button>
    </div>
    `;
    htmlblocks.appendChild(div);
})


//btn.onclick = function(){
//    console.log(input.value);
//}
//btn.addEventListener('click',function(){
//    let Todo={
//        id:Date.now(),
//        Text:input.value,
//        checked:false,
//    } 
//}) 
//Todos.push(Todo);
