const openTab=(e,show_member,show_period,local_storage,page_list)=>{
   
    
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
        document.getElementById(page_list).style.display="block"
    
    if(local_storage == 'locale_storage')
    {
        show_local()
    }
  
}

// 

// 
//show_checkbox show_controll id="show_controller"

window.onload =()=>{
    document.getElementById('show_checkbox').style.display='none'
    
    document.getElementById('show_controller').style.display='none'
    // timesheet should not appear onload
    document.getElementById('show_time_sheet').style.display='none'
    
    show_local()
}
//
let obj =[{
    id:1,
    name:'aejaz',
    pass:'000',
    img:'https://mlrjx6kefml3.i.optimole.com/6AH3zQ-wlC6a5CH/w:300/h:300/q:auto/dpr:2.6/rt:fill/g:ce/https://stratefix.com/wp-content/uploads/2016/04/dummy-profile-pic-male1.jpg'
},{
    id:2,
    name:'Aman',
    pass:'000',
    img:'https://www.webxcreation.com/event-recruitment/images/profile-1.jpg'
},{
    id:3,
    name:'Emily',
    pass:'000',
    img:'https://qph.fs.quoracdn.net/main-qimg-6291c3a117fc230c82785148baef7eed'
}]

localStorage.setItem('user',JSON.stringify(obj))
let a =JSON.parse(localStorage.getItem('user'))
//




function show_local(){
    // let obj =[{
    //     id:1,
    //     name:'aejaz',
    //     pass:'000',
    //     img:'https://mlrjx6kefml3.i.optimole.com/6AH3zQ-wlC6a5CH/w:300/h:300/q:auto/dpr:2.6/rt:fill/g:ce/https://stratefix.com/wp-content/uploads/2016/04/dummy-profile-pic-male1.jpg'
    // },{
    //     id:2,
    //     name:'xyz',
    //     pass:'000',
    //     img:'https://www.webxcreation.com/event-recruitment/images/profile-1.jpg'
    // },{
    //     id:3,
    //     name:'sdfg',
    //     pass:'000',
    //     img:'https://qph.fs.quoracdn.net/main-qimg-6291c3a117fc230c82785148baef7eed'
    // }]
   
    // localStorage.setItem('user',JSON.stringify(obj))
    
    // let a =JSON.parse(localStorage.getItem('user'))
   
    this.d =''
    this.activity=''
    for(let i=0; i<a.length; i++)
    {
         this.d += `<span class="show_name" data-tooltip="${a[i].name}"><img class="user_img " src="${a[i].img}"></img><br></span>`
         this.activity +=`<span>${a[i].name}</span>`  
        }
           document.getElementById('user_img_span').innerHTML =this.d
            document.getElementById('activity').innerHTML = this.activity

    
}

// 
    
function search(){
    this.d =""
    
    let val= document.getElementById('search_bar').value
    
    //val =[val]
    console.log(val)
   for(let i=0; i<a.length; i++)
   {
    console.log(a[i])
    if(val == a[i].name)
    {
        this.d += ` <span class="show_name" data-tooltip="${a[i].name}"><img class="user_img " src="${a[i].img}"></img><br></span>`
        
      

       break
       
    } else {document.getElementById('user_img_span').innerHTML='not found'}
   }
  document.getElementById('user_img_span').innerHTML =this.d


}

//priyanka code

// document.getElementById("timers__rows").addEventListener("click",()=>{
//     fetch('https://everhourserver.herokuapp.com/logs', {
//             method: 'GET',

//             headers: {
//                 "Content-type": "application/json; charset=UTF-8"
//             }
//         })
//         .then(response => response.json())
//         .then(logs => {
//             var temp = {};
//             logs.map(el => {
//                 if (temp[el.member] == undefined) {
//                     temp[el.member] = {
//                         [el.dayNum]: Number(el.workingTime.replace("h", ""))
//                     }
//                 } else {
//                     if (temp[el.member][el.dayNum] == undefined) {
//                         temp[el.member][el.dayNum] = Number(el.workingTime.replace("h", ""))

//                     } else {
//                         var t = Number(el.workingTime.replace("h", ""))
//                         temp[el.member][el.dayNum] += Number(el.workingTime.replace("h", ""))

//                     }
//                 }
//             })
// })












