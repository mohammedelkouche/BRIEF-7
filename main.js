

var MyForm = document.getElementById("MyForm");

    // ---------- function  ------------


MyForm.addEventListener("submit", function(e){
    e.preventDefault();

        // ----------declaration des variable  ------------

    var myTitle = document.getElementById('Title');
    var myAuthor = document.getElementById('Author');
    var myPrice = document.getElementById('Prix');
    var myDate = document.getElementById('date');
    var myLangue = document.getElementById('langue');
    var myselect = document.getElementById('select');
    var myType = document.getElementById('type');
    var validationOK = true;
    var erreurTitle = document.getElementById("erreurTitle");
    var erreurAuthor = document.getElementById("erreurAuthor");
    var erreurprice = document.getElementById("erreurprice");
    var erreurdate = document.getElementById("erreurdate");
    var erreurLangue = document.getElementById("erreurLangue");
    var erreurType = document.getElementById("erreurType");


    // var mytype = /^[a-zA-Z-\s]+$/;

        // --------------- myTitle -----------------

    
    if( myTitle.value.trim() =="" )
    {
        erreurTitle.innerHTML = ('Remplire le champs');
        erreurTitle.style.color ='red';
        validationOK = false;  
    }
    else if(!isNaN(myTitle.value)){
        erreurTitle.innerHTML = (' Entrer des lettres');
        erreurTitle.style.color ='red';
        validationOK = false; 
    }
    else if(myTitle.value.length>30){
        erreurTitle.innerHTML = (' Vous dépassez 30 lettres');
        erreurTitle.style.color ='red';
        validationOK = false;
    }

    else {
        erreurTitle.innerHTML = ('Validé');
        erreurTitle.style.color ='green';
        
    }
    
        // --------------- myAuthor -----------------


    if( myAuthor.value.trim() ==""){
        erreurAuthor.innerHTML = ('Remplire le champs');
        erreurAuthor.style.color ='red';
        validationOK = false;  
    }
    else if(!isNaN(myAuthor.value)){
        erreurAuthor.innerHTML = ('Entrer des lettres');
        erreurAuthor.style.color ='red';
        validationOK = false;
    }
    else if(myAuthor.value.length>30){
        erreurAuthor.innerHTML = ('Vous dépassez 30 lettres');
        erreurAuthor.style.color ='red';
        validationOK = false;
    }
    else{
        erreurAuthor.innerHTML = ('Validé');
        erreurAuthor.style.color ='green';
    }

        // --------------- myprice -----------------


    if(myPrice.value ==""){
            erreurprice.innerHTML = ('Remplire le champs ');
            erreurprice.style.color ='red';
            validationOK = false;
    }
    else if(!isNaN(myPrice.value)){
        erreurprice.innerHTML = ('validé');
        erreurprice.style.color ='green';
    }
    else{
        erreurprice.innerHTML = ('non validé');
        erreurprice.style.color ='red';
        validationOK = false;
    }
        // --------------- mydate -----------------


    if(myDate.value ==""){
        erreurdate.innerHTML = ('Remplire le champs');
        erreurdate.style.color ='red';
        validationOK = false;
    }
    else{
        erreurdate.innerHTML = ('validé');
        erreurdate.style.color ='green';
    }
    
        // --------------- myLangue -----------------

    //:::::::::::: chercher comment validé ou nom validé le champs myLangue 
    
    if(myLangue.value == ""){
        erreurLangue.innerHTML = ('Selesct one language');
        erreurLangue.style.color ='red';
        validationOK = false;
    } 
    else{
        erreurLangue.innerHTML = ('Validé');
        erreurLangue.style.color ='green';
    }  

        // --------------- mytype -----------------

    //::::::::::: chercher comment validé ou nom validé le champs mytype
    
    if(myType.value == ""){
        erreurType.innerHTML = (' Remlire le champs');
        erreurType.style.color ='red';
        validationOK = false;
    } 
    else{
        erreurType.innerHTML = ('Validé');
        erreurType.style.color ='green';
    }   

        // --------------- validationOK = true -----------------


    if(validationOK){
        alert('Formulaire envoyé !') ;
    }
    
}   );