import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import { TIME_PERIODS } from '../constants/TimePeriods';

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

function subtractGivenAmountOfTimeToNow(timePeriod) {
    let amount = 0;
    let unit = 'day';
    switch(timePeriod) {
        case TIME_PERIODS.LAST_24_HOURS:
            amount = 1;
            unit = 'day'; break;

        case TIME_PERIODS.LAST_1_WEEK:
            amount = 1;
            unit = 'week'; break;

        case TIME_PERIODS.LAST_1_MONTH:
            amount = 1;
            unit = 'month'; break;
        default:
            throw new Error(`Given time period: ${timePeriod} is not defined under TIME_PERIODS`);
    }
    return  dayjs().subtract(amount, unit).toISOString(); 
}

export {
    isValidDate,
    fromNow,
    formatDate,
    subtractGivenAmountOfTimeToNow
}