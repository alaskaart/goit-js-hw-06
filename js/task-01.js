const list = document.querySelectorAll('.item');
console.dir(`Number of categories: ${list.length}`);

const categoriesList = document.querySelectorAll('#categories>li');
categoriesList.forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent} 
    Category: ${elem.lastElementChild.children.length}`);
})
