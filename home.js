document.getElementById("fontClose").addEventListener("click", () => {
    document.getElementById("addtime__wrap").style.display = "none"
})

var addIcons = document.getElementsByClassName("add_time")
Array.from(addIcons).map(icon => {
    icon.addEventListener("click", () => {
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
                "comments": document.getElementById("comments").value
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => {
            document.getElementById("addtime__wrap").style.display = "none"
        })



})