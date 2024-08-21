import style from './Title.module.css'

function Title(){

    const scrollToTop = () => {
        window.scrollTo({
          top: -100,
          behavior: 'smooth'
        });
      };
      
    return(
        <>
        <div className={style.containerTitle}>
            <h1 onClick={scrollToTop}  className={style.title}>Info Dolar</h1>
        </div>
        </>
    )

}

export default Title;