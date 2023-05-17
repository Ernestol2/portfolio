import LazyLoad from 'react-lazy-load';


function Portfolio() {
    const items = [
      {
        title: 'Project 1',
        description: 'This is the first project in my portfolio',
        image: 'http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg',
      },
      {
        title: 'Project 2',
        description: 'This is the second project in my portfolio',
        image: 'http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg',
      },
      {
        title: 'Project 3',
        description: 'This is the third project in my portfolio',
        image: 'http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg',
      },
      // add more items as needed
    ];
  
    return (
      <div className='container text-center'>
        {items.map((item, index) => (
            <LazyLoad 
                height={900} 
                width={900}
                threshold={0.50}
                key={index} >
                <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <img src={item.image} alt={item.title} />
                </div>
            </LazyLoad>
            ))}
      </div>
    );
  }

export default Portfolio