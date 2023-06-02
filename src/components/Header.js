import '../styles/Header.css'
export default function Header(header) {
    return (
        <div className='container'>
            <div className='header'>
                <img src="images/transparent-logo.png" alt='container-logo' className='container-logo'/>
                <h1>{header}</h1>
            </div>
        </div>
    )
}
