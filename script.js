let Todo=document.querySelector('#Tasks');
let Todos=document.querySelector('#todo');
let input=document.querySelector('#input-id');
let btn=document.querySelector('#btn');
//let Tasks=document.querySelector('Tasks');
let htmlblocks=document.querySelector('#container');

let Tasks=[];
btn.addEventListener('click',function (){
    Task_id = Tasks.length;
    Tasks.push([
        Task_id,//id
        input.value,//text
        false,//checked
    ])
    let div=document.createElement('div');
    div.className='newRow';
    div.innerHTML=`
    <div class='Tasks'>
    <ul id='todo'>`+input.value+`</ul>
    <button id="close_`+Task_id+`" >&times;</button>
    </div>
    `;
    htmlblocks.appendChild(div);
    let del = document.querySelector('#close_'+Task_id);
    del.addEventListener('click',function(){
        del.parentElement.remove();
    })
});

