import {Component} from "react";
import './corzina.css'
class Corzina extends Component{

    render() {
        const {name,mani,info,img,skitka,term,kol,onDelitKarzink}=this.props;
        const summa = mani * skitka / 100;
        return(
            <div className={'cont-corziny'}>
                <div className={'conteiner-img-icon'}>
                    <img src={img.length>0?img:'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns='} alt="img-tovar"/>
                </div>
                <div className={'info-cor'}>
                    <h5> {name.length>0?name:'Title card'}</h5>
                    <p>{info.length>0?info:'lorem information'}</p>
                </div>
                <div className={'icon'}>
                    {skitka.length>0?
                        <div className={'skitka-icon'}>
                        {skitka}%
                    </div>:null}
                    {term.length>0?
                        <div  className={'new-icon'}>
                        {term}
                    </div>:null}

                    <div className={'koll-tovar'}>
                        {kol}</div>
                </div>
                <div className={'border-mani'}>
                    <h5><span>{mani}$</span>
                        {mani-summa}$</h5>
                    <button className={'btn-remuve-card'} onClick={onDelitKarzink}>
                        Удалить
                    </button>
                </div>
            </div>
        )
    }
}
export default Corzina;