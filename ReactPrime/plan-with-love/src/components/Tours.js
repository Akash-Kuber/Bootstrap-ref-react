import Card from './Card'

function Tours({tours, removeTour}) {
  return (
    <div className='container'>
      <div>
        <h2 className='title'> Plan With Love</h2>
      </div>

      <div className='cards'>
        {/* Why bkt{} is here because its denotes value */}
        {
          tours.map( (tour) =>{
            // IMP ---> Whenever we use map function we must put key as a unique indentifire in component -----> <Card key={tour.id} {...tour}
            // If their is no unique indentifire then we use "index" but this consider as not a good practice
            return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
          } )
        }
      </div>

    </div>
  );
}

export default Tours;
