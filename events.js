/**
 * Created by beelarr on 7/18/17.
 */


let section_article = document.querySelectorAll('.article-section');
// console.log(section_article)
let output = document.querySelector('#output-target');
let input = document.querySelector('#keypress-input');
let add_color = document.querySelector('#add-color');
let guinea_pig = document.querySelector('#guinea-pig');












for (let i =0; i < section_article.length; i++){
    section_article[i].addEventListener('click', function () {
       let section_content = section_article[i].textContent;
       output.innerHTML = `You clicked on the ${section_content} section`
    });
}


document.querySelector('h1').addEventListener('mouseover', function () {
    output.innerHTML = `You moved your mouse over the header`
});

document.querySelector('h1').addEventListener('mouseout', function () {
    output.innerHTML = `You left me!!`
});

input.addEventListener('onkeyup', function () {
    output.innerHTML = `${input.value}`

})

input.addEventListener('keyup', (e) => {
    output.innerHTML = e.target.value;
});


guinea_pig.addEventListener('click', () =>{
    guinea_pig.classList.toggle('add_color')
});

document.querySelector('#make-large')
    .addEventListener('click', ()=>{
        guinea_pig.classList.toggle('make-big')
    });

document.querySelector('#add-border')
    .addEventListener('click', ()=>{
        guinea_pig.classList.toggle('capture')
    })