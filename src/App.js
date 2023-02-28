import './App.css';

import Shapka from './heder/shapka'
import Sborshik from './Add-Card/sborshik'
import AddCard from './Add-Card/Add card'

import {Component} from "react";

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            baza:  JSON.parse(localStorage.getItem('Card')) ||
                [],
            corzina: JSON.parse(localStorage.getItem('Corzina')) || [],
            input:'',
        }
    }
    onPush=(inp)=>{
        const {name}=inp;
          this.state.baza.push({...inp, id: name + this.state.baza.length+1 ,kol:0});
          this.setState(this.state.baza);
    };
    onDelitItem=()=>{
      this.state.baza = [];
      this.state.corzina= [];
        this.setState(this.state.baza);
    };
    ondelitCard=(id)=>{
      this.setState(({baza})=>({
          baza: baza.filter(item => item.id !== id)
      }))
    };
    input=(input)=>{
        this.setState({input: input});
    };
    filter=(baza,input)=>{
        if(input.length === 0){
            return baza;
        }else {
            return baza.filter(item => {
                return item.name.indexOf(input) > -1
            })
        }
    };
    onAdd=(id)=>{
        const {baza,corzina}=this.state;
        const massiv = baza.filter(item => item.id === id);
        corzina.push(...massiv);
        corzina.map(item =>{
           if (item.id===id){
                item.kol = item.kol+1
           }
        });
        this.setState(corzina)
    };
    plusKol=(id)=> {
        const {corzina,baza}=this.state;
        corzina.forEach(item => {
            if (item.id === id){
                item.kol =  item.kol + 1
            }
        });
        baza.forEach(items => {
            if (items.id === id){
                items.kol =  items.kol + 1
            }
        });
        this.setState(this.state.corzina)
    };
    minusKol=(id)=>{
        const {corzina,baza}=this.state;
        corzina.forEach(item => {
            if (item.id === id){
                item.kol =  item.kol - 1
            }
        });
        baza.map(items => {
            if (items.id === id){
                items.kol =  items.kol - 1
            }
        });
        this.setState(this.state.corzina)
    };
    onDelitKarzinka=(id)=>{
        const {corzina,baza}=this.state;
        const cardKol = baza.map(item => {
            if (item.id===id){
                item.kol = 0
            }
        });
        const card = corzina.filter(item => item.id !== id);
        this.state.corzina = card;
        this.setState(corzina)
    };
    render() {
        const {baza,input,corzina}=this.state;
        localStorage.setItem('Card', JSON.stringify(baza));
        localStorage.setItem('Corzina', JSON.stringify(corzina));
        const poisk = this.filter(baza, input);
        return (
            <>
                <Shapka
                    input={this.input}
                    corzina={corzina}
                    onDelitKarzinka={this.onDelitKarzinka}/>

                <div className={'conteiner-card'}>
                    <AddCard
                        onPush={this.onPush}
                        onDelitItem={this.onDelitItem}/>
                    <Sborshik
                        baza={poisk}
                        ondelitCard={this.ondelitCard}
                        onAdd={this.onAdd}
                        plusKol={this.plusKol}
                        minusKol={this.minusKol}/>
                </div>

            </>
        );
    }
}

export default App;
