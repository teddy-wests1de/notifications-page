'use strict';

// Select elements
const btnReadAll = document.querySelector('.mark-read');
const userNotification = document.querySelectorAll('.user-notification');
const unreadCount = document.querySelector('.count');
const postMessage = document.querySelector('.post-message');

let count = 3;

unreadCount.textContent = count;

userNotification.forEach(nb => {
    nb.addEventListener('click', function(e) {
        const targetBlock = e.target.closest('.user-notification');
        console.log(targetBlock);
        if(!targetBlock) return;
        if(targetBlock.classList.contains('unread')) {
            targetBlock.classList.remove('unread');
            
            if(count > 0) {
                count--;
                unreadCount.textContent = count
            }
        }
        if(!targetBlock.querySelector('.post-message')) return;
        targetBlock.querySelector('.post-message').classList.toggle('hidden');
    })
})
btnReadAll.addEventListener('click', function() {
    userNotification.forEach(u => u.classList.remove('unread'));
    count = 0;
    unreadCount.textContent = count
})