import { ContainerEmpty } from "./styles";
import  { ReactComponent as YoutubeSVG} from './youtube.svg'

export function BackgroundEmpty() {
    return (
        <ContainerEmpty>
            <div>
                <YoutubeSVG />
                <p>download your favorite videos from Youtube</p>
            </div>
        </ContainerEmpty>
    )
}