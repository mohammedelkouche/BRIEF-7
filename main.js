
var MyForm = document.getElementById("MyForm");
MyForm.addEventListener("submit", function(e){
    e.preventDefault();

        // ----------declaration des variable  ------------

    var myTitle = document.getElementById('Title');
    var myAuthor = document.getElementById('Author');
    var myPrice = document.getElementById('Prix');
    var myDate = document.getElementById('date');
    var myType = document.getElementById('type');
    var validationOK = true;

    // var mytype = /^[a-zA-Z-\s]+$/;

        // ---------- myTitle ------------
    
    if(!isNaN(myTitle.value) || myTitle.value.trim() =="" || myTitle.value.length>3)
    {
        var erreurTitle = document.getElementById("erreurTitle");
        erreurTitle.innerHTML = ('le champs Titre est nom valide');
        erreurTitle.style.color ='red';
        validationOK = false;  
    }
    // else if(mytype){
    //     EEE
    // }
    else {
        var erreurTitle = document.getElementById("erreurTitle");
        erreurTitle.innerHTML = ('validé');
        erreurTitle.style.color ='green';
    }
    
        // ---------- myAuthor ------------

    if(!isNaN(myAuthor.value) || myAuthor.value.trim() =="" || myAuthor.value.length>30){
        var erreurAuthor = document.getElementById("erreurAuthor");
        erreurAuthor.innerHTML = ('le champs Auteur est nom valide');
        erreurAuthor.style.color ='red';
        validationOK = false;
    }
    else{
        var erreurAuthor = document.getElementById("erreurAuthor");
        erreurAuthor.innerHTML = ('validé');
        erreurAuthor.style.color ='green';
    }

        // ---------- myprice ------------

    if(!isNaN(myPrice.value)){
        var erreurprice = document.getElementById("erreurprice");
        erreurprice.innerHTML = ('validé');
        erreurprice.style.color ='green';
    }
    else{
        var erreurprice = document.getElementById("erreurprice");
        erreurprice.innerHTML = ('le champs Prix est nom valide');
        erreurprice.style.color ='red';
        
        validationOK = false;

    }

        // ---------- mydate ------------

    // if(myDate.value ==""){
    //     var erreurdate = document.getElementById("erreurdate");
    //     erreurdate.innerHTML = ('le champs date est nom valide');
    //     erreurdate.style.color ='red';
    //     validationOK = false;
    // }
    // else{
    //     var erreurdate = document.getElementById("erreurdate");
    //     erreurdate.innerHTML = ('validé');
    //     erreurdate.style.color ='green';
    // }
    // myPrice.value  ==""
        // ---------- mytype ------------

    if(myType.value == ""){
        var erreurType = document.getElementById("erreurType");
        erreurType.innerHTML = ('nom valide');
        erreurType.style.color ='red';
        validationOK = false;
    } 
    else{
        var erreurType = document.getElementById("erreurType");
        erreurType.innerHTML = ('validé');
        erreurType.style.color ='green';
    }   

        // ---------- validationOK = true ------------

    if(validationOK){
        alert('formulaire envoyé !') ;
    }
    
}   );