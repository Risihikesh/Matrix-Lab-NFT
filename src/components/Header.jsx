import ConnectBtn from '../utils/ConnectBtn';
import SearchBox from '../utils/Search';
import Menu from '../assets/Menu.png'

const Header = ({ setIsMenuOpen }) => {

    return (
        <>
            <div>
                <img src={Menu} onClick={() => setIsMenuOpen(prev => !prev)} alt="menu" className='menuIcon' />
                <span className='logo'>NFTify</span>
                <ConnectBtn />
            </div>
            <div >
                <SearchBox />
            </div>
        </>
    )
}

export default Header