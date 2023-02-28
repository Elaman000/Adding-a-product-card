import {Component} from "react";
import './card.css'

class AddCard extends Component{
    constructor(props) {
        super(props);
        this.state={
            inp:
                //JSON.parse(localStorage.getItem('Inp Add')) ||
                {name:'',info:'', mani:'',skitka:'',term:'',img:''}
        }
    }
    onInput=(e)=>{
        let inn = e.currentTarget.getAttribute('data-toggle');
        this.setState(({inp})=>{
            inp[inn]= e.target.value
        });
        // localStorage.setItem('Inp Add', JSON.stringify(this.state.inp));
    };
    onPush=()=>{
      this.props.onPush(this.state.inp);
    };
    render() {
        localStorage.setItem('Inp Add', JSON.stringify(this.state.inp));
        const {onDelitItem}=this.props;
        return(
            <div className="card-conteiner">
                <div className={'inp-cont'}>
                    <h4>Добавить картчку</h4>
                    <input type="text" placeholder={'Название карты...'}
                           data-toggle='name' onChange={this.onInput}
                           defaultValue={this.state.inp.name}/>
                    <input type="text" placeholder={'Описание карты...'}
                           data-toggle='info' onChange={this.onInput}
                           defaultValue={this.state.inp.info}/>
                    <input type="url" placeholder={'Картинка...'}
                           data-toggle='img' onChange={this.onInput}
                           defaultValue={this.state.inp.img}/>
                    <input type="number" placeholder={'Цена...'}
                           data-toggle='mani' onChange={this.onInput}
                           defaultValue={this.state.inp.mani}/>
                    <input type="number" placeholder={'Скидки...'}
                           data-toggle='skitka' onChange={this.onInput}
                           defaultValue={this.state.inp.skitka}/>
                    <input type="text" placeholder={'Новый!'}
                           data-toggle='term' onChange={this.onInput}
                            defaultValue={this.state.inp.term}/>
                </div>
                <div className={'btn-cont'}>
                    <button onClick={this.onPush}>Добавить</button>
                    <button onClick={onDelitItem}>Удалить все</button>
                </div>

            </div>
        )
    }
}
export default AddCard;