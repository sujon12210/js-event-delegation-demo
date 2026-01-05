const list = document.getElementById('list');
let count = 3;

list.addEventListener('click', (e)=>{
  if(e.target.tagName === 'LI'){
    document.getElementById('output').innerText =
      'Clicked: ' + e.target.innerText;
  }
});

function add(){
  count++;
  const li = document.createElement('li');
  li.innerText = 'Item ' + count;
  list.appendChild(li);
}
