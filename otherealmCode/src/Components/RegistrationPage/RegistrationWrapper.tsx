import { About } from "./About"
import { HeaderLogin } from "./HeaderLogin"
import { Welcome } from "./Welcome"


export const RegistrationWrapper = () => {
    return (
        <div className="registrationWrapper">
            <HeaderLogin />
            {/* <video src={'/src/assets/img/previewnew.mp4'} autoPlay muted loop style={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                left: '50%',
                top: '50%',
                objectFit: 'cover',
                transform: 'translate(-50%, -50%)',
                zIndex: '-1'
            }} /> */}
            <div className="content" style={{display: 'flex', flexDirection: 'column', height: '100%', width: '100vw'}}>
                <Welcome />
                <About />
            </div>
        </div>
    )
}

