const form = document.myForm;

form.addEventListener("submit", (event) => {
    event.preventDefault()
    //for radio type inputs.
    console.log(form.gender.value);
    
    //for checkbox type inputs.
    //console.log(form.entertainment);
    const checkedInputs = [];



    for(let i = 0; i < form.entertainment.length; i++){
        if(form.entertainment[i].checked){
            checkedInputs.push(form.entertainment[i].value)
        }    
    }
    console.log(checkedInputs);
})

    console.log(form.city.value);