const watch = document.querySelector("#watch");
let milliseconds = 0;
let timer;

const data = []


const logBtn = document.querySelector('#log')
const tbody = document.querySelector("#tbody")
const datePicker = document.querySelector('#datepicker')
const nameInput = document.querySelector('#name')
const descriptionInput = document.querySelector(`#description`)
const deletebtn = document.querySelector(`#del`)



const startWatch = () => {
    watch.classList.remove(`paused`)
    clearInterval(timer);
    timer = setInterval(()=>{
        milliseconds += 10;
        let dateTimer = new Date(milliseconds);
        watch.innerHTML =
            ("0"+dateTimer.getUTCHours()).slice(-2) + `:` +
            ("0"+dateTimer.getUTCMinutes()).slice(-2) + `:` +
            ("0"+dateTimer.getUTCSeconds()).slice(-2) + `:` +
            ("0"+dateTimer.getUTCMilliseconds()).slice(-3, -1);
    },10);
};

const pauseWatch = () => {
    watch.classList.add(`paused`);
    clearInterval(timer);
};
const resetWatch = () => {
    watch.classList.remove(`pause`);
    clearInterval(timer);
    milliseconds = 0;
    watch.innerHTML ="00:00:00:00";
};
document.addEventListener(`click`, (e) =>{
    const element = e.target;
    if(element.id ===`start`) startWatch();
    if(element.id ===`pause`) pauseWatch();
    if(element.id ===`reset`) resetWatch();

});
var callme = (function() {
    var start = true;
    return function(me) {
        if(start) {
            me.value = "Pause";
            startWatch();
        } else {
            me.value = "Start";
            pauseWatch();
        }
        start = !start;
    };
}());
logBtn.addEventListener('click', () => {
    const item = {
        startTime: datePicker.value,
        name: nameInput.value,
        timeSpend: watch.innerHTML,
        description: descriptionInput.value,

    }
    data.push(item)
    render()
})


function render() {
    const body = data.map((item, index) => {
        return `<tr>
            <th scope="row">${index}</th>
            <td>${item.startTime}</td>
            <td>${item.name}</td>
            <td>${item.timeSpend}</td>
            <td>${item.description}</td>
        </tr>`
    })
    tbody.innerHTML = body.join('\n')
}
deletebtn.addEventListener('click', () => {
    clearRow()
})
function clearRow(){
    objTable= document.getElementById("myTable");

    for( var i=1; i<objTable.rows.length ; i++ )
    {
        tblObj.deleteRow(i);
    }
}





