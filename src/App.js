import React from 'react';
import PropTypes from 'prop-types';

const foodILike =[
  {
    id : 1,
    name : "김치",
    image:
    "https://shop.hansalim.or.kr/im/is/activeDesigner/100101004_content1.jpg",
    rating : 5
  },
  {
    id : 2,
    name : "라면",
    image:
    "https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg",
    rating : 4

  },
  {
    id : 3,
    name : "삼겹살",
    image:
    "http://www.mindgil.com/news/photo/202103/70839_7148_1250.jpg",
    rating : 3
  },
  {
    id : 4,
    name : "쭈꾸미",
    image:
    "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/05/52d2be99c015378a75c9db81362422c71.jpg",
    rating : 4
  }
]

function Food({name, picture, rating}){
  return <div>
    <h2>I like {name}</h2>
    <h4> {rating} / 5.0 </h4>
    <img src={picture} alt={name}/>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
} 

function App() {
  return (
    <div>
      <h1>안녕하세요</h1>
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating} 
        />
      ))}
    </div>
  );
}

export default App;
