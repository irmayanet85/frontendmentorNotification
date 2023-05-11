/*jshint esversion: 6 */
let isUnReadNotifications = [true, true, true, false, false, false, false];
let totalUnReadNotification = 3;

const bindElements = () => {
    notifications = document.getElementsByClassName('notification');
    totalnotifications = document.querySelector('#total-notifications');
    resetAllRead = document.querySelector('#resetAllRead');
    resetAllUnread = document.querySelector('#resetAllUnread');
};

function resetUnread(){
    resetAllUnread.addEventListener('click', event => {
        totalUnReadNotification = 7;
        totalnotifications.textContent = totalUnReadNotification;
        for (let i = 0; i < notifications.length; i++)  {
            if(isUnReadNotification(notifications[i]) == false){
                notifications[i].classList.add('state-unread');
            }
            
        }
    });
}
function resetAllAsRead(){
    resetAllRead.addEventListener('click', event => {
        totalUnReadNotification = 0;
        totalnotifications.textContent = totalUnReadNotification;
        for (let i = 0; i < notifications.length; i++)  {
            if(isUnReadNotification(notifications[i]) == true){
                notifications[i].classList.remove('state-unread');
            }
            
        }
    });
}

function addEvent(){
    for (let i = 0; i < notifications.length; i++) {
        notifications[i].addEventListener('click', event => {
        manipulateNotification(i + 1);
        });
      }
}

function  manipulateNotification(idNotification){

    if (readnotification(idNotification)){

        totalUnReadNotification = totalUnReadNotification - 1 ;
        totalnotifications.textContent = totalUnReadNotification;
        console.log(totalUnReadNotification);
    }

}

function isUnReadNotification(element){
    return element.classList.contains('state-unread');
}

function readnotification(idNotification){
    notification = document.querySelector(`#not-${idNotification}`);
    if(isUnReadNotification(notification) == true) {
        notification.classList.remove('state-unread');
        return true;
    } 
    return false;
    
};

const main = () => {
    bindElements();
    addEvent();
    resetAllAsRead();
    resetUnread();
};
main();