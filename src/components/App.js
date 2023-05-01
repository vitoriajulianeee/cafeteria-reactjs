import Food from "./Food";
  const foods=[
    {
      id:1,
      name:"Hambúrguer",
      image:"imgs/hamburguer.jpg",
    },
    {
      id:2,
      name:"Suco",
      image:"imgs/suco.jpg",
    },

 ];
function App() {
  return (
    
    <div className="container">
      <h1 className="mt-5 text-center">Menu</h1>

    <div className="text-right">
      <button type="button" 
      className="btn btn-secondary rounded-circle mr-4 font-weight-bold" 
      data-toggle="modal" 
      data-target="#formFoodModal" 
      onclick="loadFormCreateFood()">
        +
      </button>
    </div>

    <section className="card-deck my-3">
      {/* para que  */}
      {foods.map((food)=> {
        return <Food food = {food} name={food.name} key={food.id}/>
      })}
      
    </section>
    </div>
  );
}

export default App;
