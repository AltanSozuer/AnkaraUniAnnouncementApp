import axios from 'axios';
import Notification from '../models/Notification';
const SOURCE_URL = 'http://localhost:8080';

export class NotificationService {
    
    constructor() { }

    /**
     * Fetches raw list of notification data by API call
     * @param {Object} object
     * @param {string[] | undefined} object.facultyList - List of faculty names
     * @param {string | undefined} object.timeUntil - Date string that specifies from now to timeUntil
     * @param {string} object.text - Text that will be searched in announcement titles
     * @returns {Notification[]} - List of Notification data
     */
    async getAllNotifications({facultyList, timeUntil, text} = {}) {
        try { 
            const notifications = axios.post(`${SOURCE_URL}${'/notifications'}`, {
                facultyList,
                timeUntil
            })
            .then(({data}) => {
                console.log('getAllNotifications: ',data);
                return data.data.map(dt => new Notification(dt));
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