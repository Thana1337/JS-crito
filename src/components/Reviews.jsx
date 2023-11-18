import React from 'react'
import SectionTitle from './generics/SectionTitle'
import ReviewBox from './generics/ReviewBox'
import Cassandra from '../assets/img/cassandraW.png'
import Amanda from '../assets/img/amandaT.png'
import Jack from '../assets/img/jackD.png'
import Button from './generics/Button'

const Reviews = () => {
  return (
    <div className="testimonial">
    <div className="container">
        <div className="testimonial-top">
            <SectionTitle title="Testimonial" description="What Our Client Says"/>
        </div>
        <div className="testimonial-middle">
            <ReviewBox name="Cassandra Waarren" title="Business Manager, Dorfus" img={Cassandra} description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"/>
            <ReviewBox name="Amanda Tulling" title="Senior Developer, Square" img={Amanda} description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"/>
            <ReviewBox name="Jack McDogglas" title="Key Account Manager, Gobona" img={Jack} description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"/>
        </div>
        <div className="testimonial-bottom">
            <div>
                <Button title="All Reviews" type="black-animation" url="/testimonial/all-reviews"/>
            </div>
        </div>
    </div>

</div>
  )
}

export default Reviews