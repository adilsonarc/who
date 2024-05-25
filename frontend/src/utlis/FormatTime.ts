import moment from 'moment';

export const formatTime = (timeString: string) => {
    const duration = moment.duration(timeString);
    const hours = Math.floor(duration.asHours());
    const minutes = Math.floor(duration.asMinutes()) - hours * 60;
    const seconds = Math.floor(duration.asSeconds()) - hours * 3600 - minutes * 60;

    let result = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (hours > 0) {
        result = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return result;
};