

    // ----------declaration des variables  ------------

    var MyForm = document.getElementById("MyForm");
    var myTitle = document.getElementById('Title');
    var myAuthor = document.getElementById('Author');
    var myPrice = document.getElementById('Prix');
    var myDate = document.getElementById('date');
    var myLangue = document.getElementById('langue');
    // var myselect = document.getElementById('select');
    // var myType = document.getElementById('type');
    var type = document.getElementsByClassName("type");
    var validationOK = true;
    var erreurTitle = document.getElementById("erreurTitle");
    var erreurAuthor = document.getElementById("erreurAuthor");
    var erreurprice = document.getElementById("erreurprice");
    var erreurdate = document.getElementById("erreurdate");
    var erreurLangue = document.getElementById("erreurLangue");
    var erreurType = document.getElementById("erreurType");
    var Roman = document.getElementById("Roman");
    var Essai = document.getElementById("Essai");
    var BandeDessinée = document.getElementById("Bande-Dessinée");
    var Table = document.getElementsByTagName("table")[0];

    // var mytype = /^[a-zA-Z-\s]+$/;

// -------------- delete row --------------
        
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    Table.deleteRow(i);
} 


    // ---------- function  ------------


MyForm.addEventListener("submit", function(e)
{
    e.preventDefault();

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
    else if(!isNaN(myPrice.value) ){
        if(myPrice.value>0){
            erreurprice.innerHTML = ('validé');
            erreurprice.style.color ='green';
        }
        else{
            erreurprice.innerHTML = ("Entrer un nembre >0 !");
            erreurprice.style.color ='red';
            validationOK = false;
        }
    }
    else{
        erreurprice.innerHTML = ("Entrer un nembre");
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

    
    if(myLangue.value == ""){
        erreurLangue.innerHTML = ('Select one language');
        erreurLangue.style.color ='red';
        validationOK = false;
    } 
    else{
        erreurLangue.innerHTML = ('Validé');
        erreurLangue.style.color ='green';
    }  

        // --------------- mytype -----------------

    
    if( !(Roman.checked || Essai.checked || BandeDessinée.checked)){
        erreurType.innerHTML = (' select one type');
        erreurType.style.color ='red';
        validationOK = false;
    } 
    else{
        erreurType.innerHTML = ('Validé');
        erreurType.style.color ='green';   
    }
    
        // --------------- validationOK = true -----------------


    if(validationOK ){

        // alert('Formulaire envoyé !') ;

        // ------------------ Methode 1: insertRow / insertCell --------------------

                // -------------- Insert Row ----------------

                // var row = Table.insertRow(-1);
                var row = Table.insertRow(Table.rows.length);

                // -------------- Insert cells to the Row ----------------

                row.insertCell(0).innerHTML = myTitle.value;
                row.insertCell(1).innerHTML = myAuthor.value;
                row.insertCell(2).innerHTML = myPrice.value;
                row.insertCell(3).innerHTML = myDate.value;
                row.insertCell(4).innerHTML = myLangue.options[myLangue.selectedIndex].value;
                
                var temp_cell="";
                    for(var i=0;i<type.length;i++){
                        if(type[i].checked){
                            temp_cell = type[i].value;
                        }
                    }
                row.insertCell(5).innerHTML = temp_cell;
                row.insertCell(6).innerHTML = 
                '<button id="UpdateButton" classe="btn"  onclick="EditRow(this)" >Edit</button> ' + '<button id="DeleteButton" onclick="deleteRow(this)" classe="btn" >Delete</button>' ;
                        
            }

    // }

                // --------- Methode 2 create buttons -----------

                // var UpdateButton = document.createElement("button");
                // var DeleteButton = document.createElement("button");
                // var cell6 =  row.insertCell(6)
                // cell6 .appendChild(UpdateButton); 
                // UpdateButton.innerHTML="Update";
                // cell6 .appendChild(DeleteButton);
                // DeleteButton.innerHTML="Remove";
               
  
        // ------------------ Methode 2: innerHTML --------------------

                // var temp_cell="" ;
                //             for(var i=0;i<type.length;i++){
                //                 if(type[i].checked){
                //                     temp_cell = type[i].value;
                //                 }
                //             }
                
                // var tableAjoute = `
                //                     <tr>
                //                         <td>${myTitle.value}</td>
                //                         <td>${myAuthor.value}</td>
                //                         <td>${myPrice.value}</td>
                //                         <td>${myDate.value}</td>
                //                         <td>${myLangue.options[myLangue.selectedIndex].value}</td>
                //                         <td>${temp_cell}</td>
                //                     </tr>`;

                // Table.innerHTML+=tableAjoute; 

		    // -------------- update row --------------
    }         
);



// function EditRow(r) {
//         var table=document.getElementsByTagName("table")[0];

//         // var type=document.getElementsByName("radiobtn");
//     var i = r.parentNode.parentNode.rowIndex;
//     var R=table.rows[i];
//     if(r.value=="EditRow"  ){
//         myTitle.value;
//                 row.insertCell(1).innerHTML = myAuthor.value;
//                 row.insertCell(2).innerHTML = myPrice.value;
//                 row.insertCell(3).innerHTML = myDate.value;
//                 row.insertCell(4).innerHTML = myLangue.options[myLangue.selectedIndex].value
                
   
//     // var myselect = document.getElementById('select');
//     // var myType = document.getElementById('type');
//     var type = document.getElementsByClassName("type");
//         document.getElementById("Title").value = R.cells[0].innerHTML;
//         document.getElementById("Author").value= R.cells[1].innerHTML;
//         document.getElementById("Prix").value=R.cells[2].innerHTML;
//         document.getElementById("date").value= R.cells[3].innerHTML;
//         document.getElementById("langue").value= R.cells[4].innerHTML;
        
//         for(i=0;i<type.length;i++)
//         {
//             if(R.cells[5].innerHTML==type[i].value)
//             {
//                 type[i].checked=true;
//             }
//         }
//         r.value="save"
//         document.getElementById('btn').setAttribute("disabled","true");
//     } 

//     else{
//         R.cells[0].innerHTML = document.getElementById("Title").value;
//         R.cells[1].innerHTML = document.getElementById("Author").value.value;
//         R.cells[2].innerHTML=  document.getElementById("Prix").value;
//         R.cells[3].innerHTML =    document.getElementById("date").value;
//         R.cells[4].innerHTML =  document.getElementById("langue").value;
    
//         for(i=0;i<type.length;i++)
//         {
//             if(type[i].checked==true)
//             {
//                 R.cells[5].innerHTML=type[i].value;
//             }
//         } 
//         r.value="EditRow"
//         document.getElementById('btn').removeAttribute("disabled");
//         // resetForm();
//     } 
// }

