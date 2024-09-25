const recommendedMovies1 = ["Inception", "The Matrix", "Interstellar", "Memento"];
const recommendedMovies2 = ["The Matrix", "Avatar", "Inception", "Titanic"];

let mergeArray = [].concat(recommendedMovies1,recommendedMovies2);

document.write("merge Array is :::>  " + mergeArray);

function removeDuplicates(mergeArray) {
    let unique = [];
    mergeArray.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
let uniqeArray = removeDuplicates( mergeArray);
document.write("</br></br>" + "uniqe Array is :::>  " + uniqeArray);
uniqeArray = uniqeArray.reverse();

document.write("</br></br>" + "reverse Array is :::>  " + uniqeArray);

let mineArrays = uniqeArray.join(' | ');
document.write("</br></br>" +"convert the list into a string ===>  " + mineArrays);
