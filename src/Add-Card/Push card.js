import {Component} from "react";
import './card.css'

class Pushcard extends Component{
    constructor(props) {
        super(props);
        this.state={
            klik:true
        };

    }
    klik=()=>{
        this.setState(({klik})=>({klik:!klik}));
        this.props.onAdd()
    };
    render() {
        const {name,info, mani,img,ondelitCard,skitka,term,kol,plusKol,minusKol} = this.props;
        this.state.klik = kol <= 0;
        return(
                <div className="card-conteiner">
                    <div className={'cont-img'}>
                        {skitka.length>0?
                            <div className={'skitka'}>
                            <span>{skitka}%</span>
                        </div>:null}
                        {term.length>0?
                            <div className={'new-tovar'}>
                            <span>{term}</span>
                        </div> :null}

                        <img src={img.length>0?img:'https://us.123rf.com/450wm/mamun25g/mamun25g2209/mamun25g220906423/mamun25g220906423.jpg?ver=6'} alt="..."/>
                    </div>

                        <div className={'content-card'}>
                            <h5 className="">{name.length>0?name:'Card title'}</h5>
                            <p className="">{info.length > 0? info : 'Some quick example text to build'}  </p>
                            <p>
                                <span>{mani}$</span>
                            </p>
                            <div className={'btn-cont'}>
                                {this.state.klik ? (<button onClick={this.klik}>Купить</button>) :
                                    (<>
                                        <button disabled={kol <= 1} onClick={minusKol}>-</button>
                                        {kol}
                                        <button onClick={plusKol}>+</button>
                                        </>)}
                                <button onClick={ondelitCard}>Удалить</button>
                            </div>

                        </div>
                </div>
        )
    }
}
export default Pushcard;