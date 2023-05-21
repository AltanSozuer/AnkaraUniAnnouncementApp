import axios from 'axios';

const SOURCE_URL = 'http://localhost:8080';

export class Notification {
    
    constructor() { }

    async getAllNotifications({facultyList, timeUntil} = {}) {
        try { 
            const notifications = axios.post(`${SOURCE_URL}${'/notifications'}`, {
                facultyList,
                timeUntil
            })
            .then(data => {
                console.log('getAllNotifications: ',data);
                return data;
            })
            .catch(err => {
                console.log('getAllNotifications 1 error: ',err)
            })
            return notifications;
        }
        catch(err) {
            console.log('getAllNotifications err: ',err)
        }
    }
}