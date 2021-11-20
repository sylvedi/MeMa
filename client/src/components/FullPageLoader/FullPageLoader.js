
import AniGif from '../../assets/img/ani.gif'
import "./loader.css"

class FullPageLoader extends Comment {
    state = {}


    render() {
        return (
            <div class="loader_container">
                <div className="loader">
                    <img src={AniGif} alt=""/>
                </div>
            </div>
        );
    }
}

export default FullPageLoader;