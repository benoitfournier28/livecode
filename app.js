
// déclaration des variables

const liveCode = document.querySelector('#live');
const counter = document.querySelector('#counter');
const statut_counter = document.querySelector('#statut_counter');
let button_bold = document.getElementById("button_bold");
let bold= "<b></b>";
let textArea = document.getElementById('text_area');


button_bold.addEventListener('click', (event) => {
    let start = textArea.selectionStart;
    let finish = textArea.selectionEnd;
    const before = textArea.value.slice(1, start);
    const after = textArea.value.slice(finish, textArea.value.lenght);
    const selected = textArea.value.slice(start, finish);
    textArea.value = before + '<b>' + selected + '</b>' + after;
    sortie.innerHTML = textArea.value;
})

textArea.addEventListener('input', (event) =>{
    liveCode.innerHTML = textArea.value;
    
    if(liveCode.textContent.length > 0){
        counter.textContent = liveCode.textContent.length;
        counter.style.display = "inline-block";
        document.getElementById("loader").style.display="none";
    } else{
        counter.textContent = "";
        counter.style.display = "none";
        document.getElementById("loader").style.display="block";
    }

    if(liveCode.textContent.length > 0){
        statut_counter.style.display="none";
    } else{
        statut_counter.style.display="block";
    }

    
});

textArea.addEventListener('focus',() =>{
    document.getElementById("loader").style.display="block";
})

textArea.addEventListener('blur',() =>{
    document.getElementById("loader").style.display="none";
})






//--------------------------tests bouttons--------------------------------------//

// bold.addEventListener('click',() =>{
//     document.getElementById("bold").value=true;
//     console.log(bold.value);
//     liveCode.style.fontWeight = "bold";
//     console.log(textArea.style.fontWeight);
// })

// if(bold.value=true){
    //     liveCode.innerHTML.style.fontWeight = "bold";
    //     console.log(liveCode.innerHTML.style);
    // }


// button_bold.addEventListener('click', () =>{
//     if(window.getSelection(Range)){
//     bold = `<b>${window.getSelection(Range)}</b>`
//     textArea.value = textArea.value + bold;
// } else {
// };
// });
