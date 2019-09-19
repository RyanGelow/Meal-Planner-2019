import React, { Component } from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
  Image
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import s from "./../style.scss";
import axios from "axios";

class BreakfastMealSelect extends Component {
    state = {
        meals: [],
        selectedMeals: []
    };

    handleIncrement = (index) => {
        this.setState(prevState => {
            const selMeals = [...this.state.selectedMeals]
            const newMeals = [...this.state.meals]
            selMeals.push(newMeals[index])
            newMeals[index].count += 1
            return { meals: newMeals, selectedMeals: selMeals}
        })
    }

    handleDecrement = (index) => {
        this.setState(prevState => {
            const newMeals = [...this.state.meals]
            const selMeals = [...this.state.selectedMeals]
            const newList = []
            const pops = []
            console.log('hit')
            console.log(selMeals)
            if(newMeals[index].count <= 0) {
                newMeals[index].count = 0
            }else{
                const num = newMeals[index].count
                newMeals[index].count -= 1
                for(let i = 0; i < selMeals.length; i++){
                    if(selMeals[i].idMeal !== newMeals[index].idMeal){    
                        newList.push(selMeals[i])
                    } else{
                        pops.push(selMeals[i])
                    }
                }
                pops.pop()
                pops.forEach(item => {
                    newList.push(item)
                })
            }
            return { meals: newMeals, selectedMeals: newList }
        })
    }
    
    fiveDayCalorieTotal() {
        const selMeals = this.state.selectedMeals;
        let total = 0;
        selMeals.forEach(item => {
            total = total + item.calories
        })
        return total;
    }
    
    mealDisplay = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=breakfast")
            .then(breakfast => {
                // console.log(breakfast)
                const newEntres = [];
                breakfast.data.meals.forEach(meal => {
                    newEntres.push({...meal, count: 0});
                    const URL = `/api/meal?meal=${meal.strMeal}`;
                    axios.get(URL).then(res => {
                        // console.log(res.data.foods);
                        let calories = 0;
                        let protein = 0;
                        let carbs = 0;
                        let fat = 0;
                        if (res.data.foods) {
                            for (let i = 0; i < res.data.foods.length; i++) {
                                calories += res.data.foods[i].nf_calories;
                                protein += res.data.foods[i].nf_protein;
                                carbs += res.data.foods[i].nf_total_carbohydrate;
                                fat += res.data.foods[i].nf_total_fat;
                            }
                        }
                        meal.calories = Math.floor(calories);
                        meal.protein = Math.floor(protein);
                        meal.carbs = Math.floor(carbs);
                        meal.fat = Math.floor(fat);
                    })
                })
                this.setState({meals: newEntres});
            })
            .catch(error => {
                console.log(error)
            }) 
    }
    
    componentWillMount() {
        this.mealDisplay()
    }
    
    render() {

        return (
            <CarouselProvider
                visibleSlides={3}
                totalSlides={this.state.meals.length}
                step={1}
                naturalSlideWidth={250}
                naturalSlideHeight={250}
                hasMasterSpinner
            >
                <div className={s.container}>
                <Slider
                    className="border border-danger rounded"
                >
                    {this.state.meals.map((item, index) => {
                        return (
                            <Slide>
                                <div style={{
                                    "display": "flex",
                                    "flex-direction": "column",
                                    "align-items": "flex-start"
                                }}>
                                    <Image src={item.strMealThumb} style={{ "position": "absolute", "z-index": -1 }} />
                                    <div style={{ "z-index": 1, "position": "absolute", "bottom": "0", "align-self": "center" }}>
                                        <p
                                            style={{ "background": "rgba(235, 235, 235, 0.6)", "text-align": "center", "font-weight": "900" }}
                                        >
                                            {item.strMeal}
                                        </p>
                                        <p
                                            style={{ "background": "rgba(235, 235, 235, 0.6)", "text-align": "center" }}
                                        >
                                            {"Carbs: " + item.carbs + "g "}
                                            {"Fat: " + item.fat + "g "}
                                            {"Protein: " + item.protein + "g "} 
                                            {"Calories: " + item.calories}
                                        </p>
                                        <p 
                                            style={{ "text-align": "center" }}
                                        >
                                            <button className="btn btn-dark" type="button" onClick={() => { this.handleDecrement(index) }}>-1</button>
                                            <button style={{ "font-weight": "900" }} className="btn btn-warning">{item.count}</button>
                                            <button className="btn btn-dark" type="button" onClick={() => { this.handleIncrement(index) }}>+1</button>
                                        </p>
                                    </div>
                                </div>
                            </Slide>
                        )
                    })}
                </Slider>
                <ButtonBack
                    className={"btn btn-dark" + s.buttonBack}
                >
                    Back
                </ButtonBack>
                <ButtonNext
                    className={"btn btn-dark" + s.buttonNext}
                >
                    Next
                </ButtonNext>
                <h5>5 Day Calorie SubTotal: {this.state.selectedMeals.length > 0 ? this.fiveDayCalorieTotal() : "0"}</h5>
                </div>
            </CarouselProvider>
        )
    }
}

export default BreakfastMealSelect;
