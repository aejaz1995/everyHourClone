document.getElementById("fontClose").addEventListener("click", () => {
    document.getElementById("addtime__wrap").style.display = "none"
})
addIconEvents(6)

function addIconEvents(count) {
    var addIcons = document.getElementsByClassName("add_time")
    Array.from(addIcons).map((icon, index) => {
        icon.addEventListener("click", () => {
            document.getElementById("dayNum").value = index >= 42 ? 7 + index % 7 : index % 7
            document.getElementById("addtime__wrap").style.display = "flex";
            fetch('https://everhourserver.herokuapp.com/members', {
                    method: 'GET',

                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(response => response.json())
                .then(json => {
                    var data = ""
                    json.map(el => {
                        data += `<option value="${el.name}">${el.name}</option>`

                    })
                    document.getElementById("member_name").innerHTML = data

                    console.log('response: ' + JSON.stringify(json));
                })

            fetch('https://everhourserver.herokuapp.com/projectsList', {
                    method: 'GET',

                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(response => response.json())
                .then(json => {
                    var data = ""
                    json.map(el => {
                        data += `<option value="${el.name}">${el.name}</option>`

                    })
                    document.getElementById("projectList").innerHTML = data

                    console.log('response: ' + JSON.stringify(json));
                })


            fetch('https://everhourserver.herokuapp.com/tasks', {
                    method: 'GET',

                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(response => response.json())
                .then(json => {
                    var data = ""
                    json.map(el => {
                        data += `<option value="${el.name}">${el.name}</option>`

                    })
                    document.getElementById("projectTask").innerHTML = data

                    console.log('response: ' + JSON.stringify(json));
                })





        })

    })

}

document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("addtime__wrap").style.display = "none"
})

document.getElementById("addTime").addEventListener("click", () => {

    fetch('https://everhourserver.herokuapp.com/logs', {
            method: 'POST',
            body: JSON.stringify({
                "member": document.getElementById("member_name").value,
                "fromTime": "9:00",
                "toTime": "12:00",
                "task": document.getElementById("projectTask").value,
                "project": document.getElementById("projectList").value,
                "date": document.getElementById("inputDate").value,
                "workingTime": document.getElementById("inputTime").value,
                "comments": document.getElementById("comments").value,
                "dayNum": document.getElementById("dayNum").value,
                "weekNum": document.getElementById("weekNum").value
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => {
            loadHomeDetails()
            document.getElementById("member_name").value = ''
            document.getElementById("projectTask").value = ""
            document.getElementById("projectList").value = ""
            document.getElementById("inputDate").value = ""
            document.getElementById("inputTime").value = ""
            document.getElementById("comments").value = ""
            document.getElementById("dayNum").value = ""
            document.getElementById("weekNum").value = ""
            document.getElementById("addtime__wrap").style.display = "none"

        })



})

function loadHomeDetails() {
    fetch('https://everhourserver.herokuapp.com/logs', {
            method: 'GET',

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(logs => {
            var temp = {};
            logs.map(el => {
                if (temp[el.member] == undefined) {
                    temp[el.member] = {
                        [el.dayNum]: Number(el.workingTime.replace("h", ""))
                    }
                } else {
                    if (temp[el.member][el.dayNum] == undefined) {
                        temp[el.member][el.dayNum] = Number(el.workingTime.replace("h", ""))

                    } else {
                        var t = Number(el.workingTime.replace("h", ""))
                        temp[el.member][el.dayNum] += Number(el.workingTime.replace("h", ""))

                    }
                }
            })

            console.log(temp)
                //member names
            var data = ""
            for (i in temp) {
                data += `<div class="username">
                    <a href="">${i}</a>
                </div>`
            }
            document.getElementById("member_names").innerHTML = data

            //first week
            var data = ''
            for (i in temp) {
                data += '<div class="times">'
                for (var j = 0; j <= 6; j++) {
                    if (temp[i][j] == undefined) {
                        data += `<div class="time">
                        <div class="hrs">  </div>
                        <div class="add_time"><i class="fa fa-plus-circle" aria-hidden="false"></i></div>
                    </div>`
                    } else {
                        data += `<div class="time">
                        <div class="hrs">${temp[i][j]}:00</div>
                        <div class="add_time"><i class="fa fa-plus-circle" aria-hidden="false"></i></div>
                    </div>`
                    }
                }
                data += '</div>'
            }


            document.getElementById("timesWeek1").innerHTML = data
                //second week
            var data = ''
            for (i in temp) {
                data += '<div class="times">'
                for (var j = 7; j <= 13; j++) {
                    if (temp[i][j] == undefined) {
                        data += `<div class="time">
                        <div class="hrs">  </div>
                        <div class="add_time"><i class="fa fa-plus-circle" aria-hidden="false"></i></div>
                    </div>`
                    } else {
                        data += `<div class="time">
                        <div class="hrs">${temp[i][j]}:00</div>
                        <div class="add_time"><i class="fa fa-plus-circle" aria-hidden="false"></i></div>
                    </div>`
                    }
                }
                data += '</div>'
            }

            document.getElementById("timesWeek2").innerHTML = data

            addIconEvents(Object.keys(temp).length)



            // logs.map(el => {
            //     data += `<option value="${el.name}">${el.name}</option>`

            // })
            // document.getElementById("member_name").innerHTML = data

            // console.log('response: ' + JSON.stringify(json));
        })
}