import {Component} from "react";
import './shapka.css'
import Sborshik from './Conzina/sborhik'
class Shapka extends Component{
    constructor(props) {
        super(props);
        this.state={
            input:''
        }
    }
    poisk=(e)=>{
        let input = e.target.value;
        this.setState({input});
        this.props.input(input)
    };
    render() {
        const {corzina,onDelitKarzinka}=this.props;
        // console.log(corzina);
        return(
            <div className={'conteiner'}>
                <div>
                    <h1>Food card</h1>
                </div>
                <div>
                    <input type="text" placeholder={'Поиск еды...'}
                    value={this.state.input}
                           onChange={this.poisk}/>
                </div>
                    <div>
                        <Sborshik
                            corzina={corzina}
                            onDelitKarzinka={onDelitKarzinka}/>
                    </div>
            </div>
        )
    }
}
export default Shapka;