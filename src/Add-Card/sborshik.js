import Pushcard from './Push card'
const Sborshik = ({baza,ondelitCard,  onAdd,plusKol,minusKol})=>{
    const element = baza.map(item => {
        const {id, ...itemProps} =item;

            return(
                <Pushcard key={id} {...itemProps}
                          ondelitCard={()=>ondelitCard(id)}
                          onAdd={()=> onAdd(id)}
                          plusKol={()=>plusKol(id)}
                          minusKol={()=>minusKol(id)}/>
            )
        });
        return(
            <>
                {element}
                </>
        )
}
export default Sborshik;