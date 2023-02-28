import Corzina from './corzina'

const Sborshik=({corzina,onDelitKarzinka})=>{
    const element = corzina.map(item => {
        const {id, ...itemProps} = item;
        return (
            <Corzina key={id}
                     onDelitKarzink={()=> onDelitKarzinka(id)}
                     {...itemProps}/>
        )
    });
  return(
      <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne" aria-expanded="false"
                          aria-controls="flush-collapseOne">
                      Корзина
                  </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse"
                   aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  {element}
              </div>
          </div>
      </div>
  )
};
export default Sborshik;