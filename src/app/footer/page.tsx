import './styles.scss'
const Footer = () => {
    return (
        <div>
            <footer className="footerContainer">
                <div className='innerContainer'>
                    <div className='contentContainer'>
                        <div style={{}}>
                            <a href="https://neuveu.com/">
                                <img loading="lazy" decoding="async" width="340" height="85" src="https://neuveu.com/wp-content/uploads/2022/03/neuveu_logo_white.png" className="attachment-large size-large wp-image-2613" alt="" />
                            </a>
                        </div>
                        <div>
                            <p style={{ color: 'white' }}>CONTACT</p>
                        </div>
                        <div>
                            <p style={{ color: 'white' }}>LINKEDIN</p>
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <p className='footer-desc'>© 2024 Copyrights by <a className='company-text' href="https://neuveu.com/">Neuveu Software Pvt Ltd. </a>All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;