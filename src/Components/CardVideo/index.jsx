import { CardContainer } from './styles.js'

export function CardVideo({ info, onDown }) {
    const { img, url, title, views, lengthSeconds } = info[0]

    const trucate = (str, n) => {
        if(str.length < n) {
            return str
        }
        
        return str.substring(0, ( Number(n) - 1)) + '...'
    }

    const templateHoursMinutesAndSecond = (lengthSeconds) => {
        let secNum = parseInt(lengthSeconds, 10); 
        let hours   = Math.floor(secNum / 3600);
        let minutes = Math.floor((secNum - (hours * 3600)) / 60);
        let seconds = secNum - (hours * 3600) - (minutes * 60);
    
        if (hours   < 10) {hours   = `0${Number(hours)}`;}
        if (minutes < 10) {minutes = `0${Number(minutes)}`;}
        if (seconds < 10) {seconds = `0${Number(seconds)}`;}

        if(hours === '00') {
            return `${minutes}:${seconds}`
        }
        return `${hours}:${minutes}:${seconds}`
    }

    const timeVideo = templateHoursMinutesAndSecond(lengthSeconds)

    const textTrucate = trucate(title, 85)

    return (

        <CardContainer>
            <img src={img} alt={title} />
            <div>
                <div>
                    <h2>{textTrucate}</h2>
                    <div>
                        <p>{`${views} views`}</p>
                        <span>{timeVideo}</span>
                    </div>
                </div>

                <footer>
                    <button onClick={async () => await onDown(url)}>Download</button>
                </footer>
            </div>
        </CardContainer>
    )
}