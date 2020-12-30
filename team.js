const openTab=(e,show_member,show_period,local_storage)=>{
   
    
    let  x =document.getElementsByClassName('tabs')
    for(let i=0; i<x.length; i++)
    {
        document.getElementsByClassName('tabs')[i].style.border="none"
        
    }
    
    let y =document.getElementsByClassName('not_tabs')
    for(let i=0; i<y.length; i++)
    {
        document.getElementsByClassName('not_tabs')[i].style.display="none"
    }

    document.getElementById(e).setAttribute('style',"border-bottom:1px solid green;")
    document.getElementById(show_member).style.display="flex"
    document.getElementById(show_period).style.display="flex"
    document.getElementById(local_storage).style.display="flex"
    
    if(local_storage == 'locale_storage')
    {
        show_local()
    }
  
}


window.onload.document.getElementById('tab1')

function show_local(){
    let obj ={
        id:1,
        name:'aejaz',
        pass:'000',
        img:'https://mlrjx6kefml3.i.optimole.com/6AH3zQ-wlC6a5CH/w:300/h:300/q:auto/dpr:2.6/rt:fill/g:ce/https://stratefix.com/wp-content/uploads/2016/04/dummy-profile-pic-male1.jpg'
    }
    localStorage.setItem(obj.id,JSON.stringify(obj))
    //let data = localStorage.getItem(obj.id)
    let a =JSON.parse(localStorage.getItem(obj.id))
    let d =''
        d+= `<img class="user_img" src="${a.img}"></img>`
   document.getElementById('user_img').innerHTML =d

    
}










