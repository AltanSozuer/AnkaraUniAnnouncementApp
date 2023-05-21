import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

function isValidDate(candidateDate) {
    return dayjs(candidateDate).isValid();
}

function fromNow(dateParam) {
    if(isValidDate(dateParam)){
        dayjs.extend(relativeTime);
        return dayjs(dateParam).fromNow();
    } 
    else throw new Error(`Given dateParam:${dateParam} is not valid date`)
}

function formatDate(dateParam) {
    if(isValidDate(dateParam)){
        return dayjs(dateParam).format('DD-MM-YYYY HH:mm')
    }
    else throw new Error(`Given dateParam:${dateParam} is not valid date`)

}

export {
    isValidDate,
    fromNow,
    formatDate
}