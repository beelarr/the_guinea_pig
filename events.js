/**
 * Created by beelarr on 7/18/17.
 */


let section_article = document.querySelectorAll('.article-section');
// console.log(section_article)
let output = document.querySelector('#output-target');













for (let i =0; i < section_article.length; i++){
    section_article[i].addEventListener('click', function () {
       let section_content = section_article[i].textContent;
       output.innerHTML = `You clicked on the ${section_content} section`
    });
}


document.querySelector('h1').addEventListener('mouseover', function () {
    output.innerHTML = `You moved your mouse over the header`
});