import React , {Component} from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

class Services extends Component {
    state={
        Services:[
            {
                icon: <FaCocktail />,
                title: " Free Cocktail",
                description: "asldkjf ledjf LDKJF ldkjf skfj hjh ajhf aljshf lahdf lefj adjsfafhu adshfuheauifaheufh uaehf uawehuawehf"
            },
            {
                icon: <FaHiking />,
                title: " Free Hiking",
                description: "asldkjf ledjf LDKJF ldkjf skfj hjh ajhf aljshf lahdf lefj adjsfafhu adshfuheauifaheufh uaehf uawehuawehf"
            },
            {
                icon: <FaShuttleVan />,
                title: " Free Shuttle Van",
                description: "asldkjf ledjf LDKJF ldkjf skfj hjh ajhf aljshf lahdf lefj adjsfafhu adshfuheauifaheufh uaehf uawehuawehf"
            },
            {
                icon: <FaBeer />,
                title: " Free Beer",
                description: "asldkjf ledjf LDKJF ldkjf skfj hjh ajhf aljshf lahdf lefj adjsfafhu adshfuheauifaheufh uaehf uawehuawehf"
            }
        ]
    }
    render(){
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.Services.map((item,index) => {
                        return <article className="service" key={index}>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.description}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
} 

export default Services;