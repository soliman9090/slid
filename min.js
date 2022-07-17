var slid_img = Array.from(document.querySelectorAll('.slid-img img'));
var slid_number = document.getElementById('slid-number');
var slid_control = document.querySelectorAll('.slid-control');
var ball = document.querySelectorAll('.ball');
var previos = document.getElementById('prev');
var next = document.getElementById('next');
var img_len = slid_img.length;
var counter = 1


//start create ul&li
 var ul = document.createElement('ul');
 ul.setAttribute('id','idname');
 for(i = 1; i<= img_len; i++){
  var li = document.createElement('li');
  li.setAttribute('data-index',i);
  li.textContent = i;
  ul.appendChild(li)
 }
 document.getElementById('ball').appendChild(ul)
 var newul = Array.from(document.querySelectorAll('#idname li'))
 console.log(newul)
 //end create ul&li

 
next.onclick = nextclik;
previos.onclick = previosclick;
function nextclik(){
if(next.classList.contains('disabled')){

    return false
 
}else{
    counter++
    cheker()
    
}


}nextclik()
 
function previosclick(){
if(previos.classList.contains('disabled')){
    return false
} else{
    counter--
    cheker()
}
}

// create function cheker
function cheker(){
    // wright slid nmber
    slid_number.textContent = `slid ${counter} of ${img_len}`
     //########################################
    //frist remove active class from all elements
  slid_img.forEach(function(img){ //remove from img
    img.classList.remove('active')
  })
   
newul.forEach(function(li){ // remove from li
    li.classList.remove('active')
})
//###################################################

 //add active class
    slid_img[counter -1].classList.add('active');
    ul.children[counter -1].classList.add('active');
//########################
//add dis
if(counter == img_len){
    next.classList.add('disabled')
 // next 
 }else{
     next.classList.remove('disabled')
 }
//previos
 if(counter == 1){
    previos.classList.add('disabled')
 
 }else{
     previos.classList.remove('disabled')
}
  
    }
//##############
for(i = 0; i < img_len; i++){
    newul[i].onclick = function(){
        counter = parseInt(this.getAttribute('data-index'))
        cheker()
    }
}
cheker()
// end projict

