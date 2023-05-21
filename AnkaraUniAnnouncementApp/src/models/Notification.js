export default class Notification {
    constructor({
        _id,
        date,
        from,
        notificationTitle,
        notificationContent,
        link,
        guidLink
    }) {
        this.id = String(_id);
        this.date = String(date);
        this.from = String(from);
        this.notificationTitle = String(notificationTitle);
        this.notificationContent = String(notificationContent);
        this.link = String(link);
        this.guidLink = String(guidLink);
    }
}