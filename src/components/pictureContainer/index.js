import './index.css'
import dots from './images/three-dots.svg'

export const PictureContainer = ({ profile, number, url }) => {
    return (
        <>
        <div className='imgBox-top'>
        <img className='profile-logo' src="https://picsum.photos/id/237/200/300" alt="random logo picture" />
        <h3>{profile}</h3>
        <img className='three-dots' src={dots} alt="three dots" />
    </div>
        <div className='imgBox' key={number}>
        <img className='photoContainer' src={url} alt="Random image" />
        </div>
        </>
    )
}