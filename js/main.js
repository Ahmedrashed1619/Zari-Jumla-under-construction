
// loading to init...........

$(document).ready(function(){
    $('#loading').fadeOut(2000, function(){
        $('body').css('overflow','visible')
    })
})


// calc countdown timer 

let countdown = new Date('Dec 31 2022 23:59:59').getTime();

let row = setInterval(() => {

    let timeNow = new Date().getTime();
    let defTime = countdown - timeNow;
    let days = Math.floor(defTime / (1000 * 60 * 60 *24));
    let hours = Math.floor(defTime % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
    let mins = Math.floor(defTime % (1000 * 60 * 60) / (1000 * 60));
    let secs = Math.floor(defTime % (1000 * 60) / (1000));

    if(days < 10)
    {
        days = ('0' + days);
    }
    if(mins < 10)
    {
        mins = ('0' + mins);
    }
    if(hours < 10)
    {
        hours = ('0' + hours);
    }
    if(secs < 10)
    {
        secs = ('0' + secs);
    }

    $('#days').html(`${days}`);
    $('#hours').html(`${hours}`);
    $('#mins').html(`${mins}`);
    $('#secs').html(`${secs}`);

}, 1000);



// when user press on send message button...

// $('#sendMessage').click(function(){
//     sendValidMessage();
// })

// validation message...

// function sendValidMessage(){
//     if(isInputEmpty() != true && validUserName() == true && validUserEmail() == true && validTextMessage() == true)
//     {
//         $('#alertSend').html('The message was sent Successfully');
//         $('#alertSend').css({'display':'block' , 'color':'green'});
//         resetForm();
//     }
//     else if (isInputEmpty())
//     {
//         $('#alertSend').html('all fields are important.. You should fill them correctly');
//         $('#alertSend').css({'display':'block' , 'color':'red'});
//         resetForm();
//     }
//     else if(validUserName() == false || validUserEmail() == false || validTextMessage() == false)
//     {
//         $('#alertSend').html('There are Invalid fields.. You should fill them correctly');
//         $('#alertSend').css({'display':'block' , 'color':'red'});
//         resetForm();
//     }
// }



