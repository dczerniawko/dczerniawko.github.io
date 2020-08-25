 const h1 = document.querySelector('h1')

 document.body.addEventListener('mousemove', (e) => {

     const x = e.clientX;
     const y = e.clientY;
     const width = window.innerWidth;
     const height = window.innerHeight;

     const red = x / width * 100;
     const green = y / height * 100;
     const blue = ((x / width * 100) + (y / height * 100)) / 2;

     h1.textContent = `${x},  ${y}`;
     document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`
 })
 document.body.addEventListener('click', (e) => {
     const color = getColor(e);
     document.body.style.backgroundColor = color;
 })

 const getColor = (e) => {
     if ((e.clientX % 2 === 0) & (e.clientY % 2 === 0)) {
         return "red";
     } else if ((e.clientX % 2 === 0) | (e.clientY % 2 === 0)) {
         return "green";
     } else {
         return "blue"
     }
 }