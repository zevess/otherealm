import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div style={{ display: 'flex', height: '100%', alignItems: 'center', paddingLeft: '12px' }}>
                <a href="https://github.com/zevess" ><GitHubIcon style={{color: "white", paddingRight: '4px'}} fontSize='large' /></a>
                <p style={{color: 'white'}}> | created by <b>Vladislav Gazetdinov (zevess)</b></p>
            </div>
        </footer>
    )
}
