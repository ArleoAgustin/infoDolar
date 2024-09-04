import style from './Loader.module.css';
import image from '../../assets/iconH.png'

function Loader() {
    return (
        <>
            <div className={style.loader}>
                <img src={image} alt="Loading" className={style.spinner} />
            </div>
        </>
    );
}

export default Loader;
