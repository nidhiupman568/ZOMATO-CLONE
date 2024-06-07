//Fetching the City name from URL
const currentUrl = window.location.href;
const url = new URL(currentUrl);
const params = new URLSearchParams(url.search);
const cityValue = params.get("city");
const capitalizedCity = cityValue.charAt(0).toUpperCase() + cityValue.slice(1);


//Adding City Name wherever necessary
var cityName = document.querySelector('.city-name');
cityName.textContent = capitalizedCity;
var cityNameInBreadcrumb = document.querySelector('.city-name-in-breadcrumb');
cityNameInBreadcrumb.textContent = capitalizedCity;
var deliveryRestaurantsHeaderCityName = document.querySelector('.deliveryRestaurants-Header-city-name');
deliveryRestaurantsHeaderCityName.textContent = capitalizedCity;

document.addEventListener('DOMContentLoaded', function () {
    var pageTitle = document.querySelector('.pageTitle');
    pageTitle.textContent += capitalizedCity;
})


// makes search container visible on scroll 
var screenWidth = window.innerWidth || document.documentElement.clientWidth;


window.addEventListener('scroll', function () {
    var dishContainer = document.querySelector('.dish-sm');
    var deliveryDiningContainerSM = document.querySelector('.delivery-dining-container-sm')
    var scrollPosition = window.scrollY;
    if (screenWidth > 900) {
        if (scrollPosition > 150) {
            dishContainer.style.display = 'block';
            document.querySelector('.filters').style.padding = '1.8rem 5.3rem';
            // document.querySelector('.filters').style.top = '4.7rem';
            deliveryDiningContainerSM.style.display = 'none';
        }
        else {
            dishContainer.style.display = 'none';
            document.querySelector('.filters').style.padding = '1.8rem 6rem';
            // document.querySelector('.filters').style.top = '6.7rem';
            deliveryDiningContainerSM.style.display = 'flex';
        }
    }
    else if (screenWidth > 600 && screenWidth <= 700) {
        if (scrollPosition > 150) {
            console.log('SW ', screenWidth);
            dishContainer.style.display = 'block';
            // document.querySelector('.filters').style.padding = '0rem 5.3rem 0.5rem 6rem';
            document.querySelector('.filters').style.padding = '1.2rem 6rem';
            document.querySelector('.filters').style.top = '4.6rem';
            deliveryDiningContainerSM.style.display = 'none';
        }
        else {
            dishContainer.style.display = 'none';
            document.querySelector('.filters').style.padding = '0.3rem 6rem';
            document.querySelector('.filters').style.top = '2rem';
            // document.querySelector('.filters').style.border = '1px solid red';
            deliveryDiningContainerSM.style.display = 'flex';
        }
    }
    else {
        if (scrollPosition > 150) {
            console.log('SW ', screenWidth);
            dishContainer.style.display = 'block';
            // document.querySelector('.filters').style.padding = '0rem 5.3rem 0.5rem 6rem';
            document.querySelector('.filters').style.padding = '1rem 6rem';
            document.querySelector('.filters').style.top = '4.8rem';
            deliveryDiningContainerSM.style.display = 'none';
        }
        else {
            dishContainer.style.display = 'none';
            document.querySelector('.filters').style.padding = '1.5rem 6rem';
            document.querySelector('.filters').style.top = '4.5rem';
            deliveryDiningContainerSM.style.display = 'flex';
        }
    }
})

// location code
var downArrow = document.querySelector('.down-arrow-img');
var detectCurrentLocation = document.querySelector('.detect-current-location')

var flag = 0;
downArrow.addEventListener('click', function () {
    if (flag == 0) {
        downArrow.style.transform = 'rotate(180deg)'
        detectCurrentLocation.style.visibility = 'visible';
        flag = 1;
    } else {
        downArrow.style.transform = 'rotate(0deg)'
        detectCurrentLocation.style.visibility = 'hidden';
        flag = 0;
    }

})

// category selection code
var deliveryBlock = document.querySelector('.delivery');
var diningOut = document.querySelector('.dining-out');
var nightLife = document.querySelector('.night-life');
var deliveryImage = document.querySelector('.delivery-image')
var diningOutImage = document.querySelector('.dining-out-image');
var nightLifeImage = document.querySelector('.night-life-image');

deliveryBlock.addEventListener('click', function () {
    deliveryBlock.style.borderBottom = "2px solid rgb(253, 74, 74)";
    diningOut.style.borderBottom = "none";
    nightLife.style.borderBottom = "none";
    deliveryImage.style.backgroundColor = "yellow";
    diningOutImage.style.backgroundColor = "rgb(248, 248, 248)";
    nightLifeImage.style.backgroundColor = "rgb(248, 248, 248)";
})

diningOut.addEventListener('click', function () {
    deliveryBlock.style.borderBottom = "none";
    diningOut.style.borderBottom = "2px solid rgb(253, 74, 74)";
    nightLife.style.borderBottom = "none";
    diningOutImage.style.backgroundColor = "rgb(229, 243, 243)";
    nightLifeImage.style.backgroundColor = "rgb(248, 248, 248)";
    deliveryImage.style.backgroundColor = "rgb(248, 248, 248)";

})

nightLife.addEventListener('click', function () {
    deliveryBlock.style.borderBottom = "none";
    diningOut.style.borderBottom = "none";
    nightLife.style.borderBottom = "2px solid rgb(253, 74, 74)";
    nightLifeImage.style.backgroundColor = "rgb(237, 244, 255)";
    deliveryImage.style.backgroundColor = "rgb(248, 248, 248)";
    diningOutImage.style.backgroundColor = "rgb(248, 248, 248)";
})

// filter box
// var body = document.querySelector('body');
// var filters = document.querySelector('.filters')
// var filterBox = document.querySelector('.filter-box');
// var allFilters = document.querySelector('.all-filters');
// filterBox.addEventListener('click', function () {
//     allFilters.style.display = 'block';
//     body.style.position = 'fixed';
// })

// var filterCloseButton = document.querySelector('.filter-close-icon');
// filterCloseButton.addEventListener('click', () => {
//     allFilters.style.display = 'none';
//     body.style.background = 'none';
//     body.style.position = 'static';
// })

var sortByType = document.querySelector('.sort-by-type')
var popularityBox = document.querySelector('.popularity-box');
var ratingHighToLowBox = document.querySelector('.rating-high-to-low-box');
var deliveryTimeBox = document.querySelector('.delivery-time-box');
var costLowToHighBox = document.querySelector('.cost-low-to-high-box');
var costHighToLowBox = document.querySelector('.cost-high-to-low-box');

popularityBox.addEventListener('click', () => sortByType.textContent = 'Popularity');
ratingHighToLowBox.addEventListener('click', () => sortByType.textContent = 'Rating: High to Low');
deliveryTimeBox.addEventListener('click', () => sortByType.textContent = 'Delivery Time');
costLowToHighBox.addEventListener('click', () => sortByType.textContent = 'Cost: Low to High');
costHighToLowBox.addEventListener('click', () => sortByType.textContent = 'Cost: High to Low');

//only 1 input box should be clickable at one time
function handleCheckboxClick(checkboxId) {
    const checkboxes = document.querySelectorAll('.filter-option-box input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        if (checkbox.id !== checkboxId) {
            checkbox.checked = false;
        }
    })
}



var filter0 = document.querySelector('.filter-0');
var filter2 = document.querySelector('.filter-2');
var filter3 = document.querySelector('.filter-3');
var filter4 = document.querySelector('.filter-4');
var filter5 = document.querySelector('.filter-5')

var filter1Options = document.querySelector('.filter-1-options');
var filter2Options = document.querySelector('.filter-2-options');
var filter3Options = document.querySelector('.filter-3-options');
var filter4Options = document.querySelector('.filter-4-options');
var filter5Options = document.querySelector('.filter-5-options');

filter0.addEventListener('click', () => {
    filter1Options.style.display = 'block';
    filter2Options.style.display = 'none';
    filter3Options.style.display = 'none';
    filter4Options.style.display = 'none';
    filter5Options.style.display = 'none';

    filter0.style.backgroundColor = 'white';
    filter2.style.backgroundColor = 'rgb(248,248,248)';
    filter3.style.backgroundColor = 'rgb(248,248,248)';
    filter4.style.backgroundColor = 'rgb(248,248,248)';
    filter5.style.backgroundColor = 'rgb(248,248,248)';
})

filter2.addEventListener('click', () => {
    filter1Options.style.display = 'none';
    filter2Options.style.display = 'flex';
    filter3Options.style.display = 'none';
    filter4Options.style.display = 'none';
    filter5Options.style.display = 'none';

    filter0.style.backgroundColor = 'rgb(248,248,248)';
    filter2.style.backgroundColor = 'white';
    filter3.style.backgroundColor = 'rgb(248,248,248)';
    filter4.style.backgroundColor = 'rgb(248,248,248)';
    filter5.style.backgroundColor = 'rgb(248,248,248)';
})

filter3.addEventListener('click', () => {
    filter1Options.style.display = 'none';
    filter2Options.style.display = 'none';
    filter3Options.style.display = 'block';
    filter4Options.style.display = 'none';
    filter5Options.style.display = 'none';

    filter0.style.backgroundColor = 'rgb(248,248,248)';
    filter2.style.backgroundColor = 'rgb(248,248,248)';
    filter3.style.backgroundColor = 'white';
    filter4.style.backgroundColor = 'rgb(248,248,248)';
    filter5.style.backgroundColor = 'rgb(248,248,248)';
})

filter4.addEventListener('click', () => {
    filter1Options.style.display = 'none';
    filter2Options.style.display = 'none';
    filter3Options.style.display = 'none';
    filter4Options.style.display = 'block';
    filter5Options.style.display = 'none';

    filter0.style.backgroundColor = 'rgb(248,248,248)';
    filter2.style.backgroundColor = 'rgb(248,248,248)';
    filter3.style.backgroundColor = 'rgb(248,248,248)';
    filter4.style.backgroundColor = 'white';
    filter5.style.backgroundColor = 'rgb(248,248,248)';
})

filter5.addEventListener('click', () => {
    filter1Options.style.display = 'none';
    filter2Options.style.display = 'none';
    filter3Options.style.display = 'none';
    filter4Options.style.display = 'none';
    filter5Options.style.display = 'block';

    filter0.style.backgroundColor = 'rgb(248,248,248)';
    filter2.style.backgroundColor = 'rgb(248,248,248)';
    filter3.style.backgroundColor = 'rgb(248,248,248)';
    filter4.style.backgroundColor = 'rgb(248,248,248)';
    filter5.style.backgroundColor = 'white';
})


// rating code
var ratingDisplay = document.querySelector('.rating-display');
var ratingAny = document.querySelector('.rate-circle-1');
var rating3_5 = document.querySelector('.rate-circle-2');
var rating4_0 = document.querySelector('.rate-circle-3');
var rating4_5 = document.querySelector('.rate-circle-4');

var rateLine1 = document.querySelector('.rate-line-1');
var rateLine2 = document.querySelector('.rate-line-2');
var rateLine3 = document.querySelector('.rate-line-3');

ratingAny.addEventListener('click', () => {
    ratingDisplay.textContent = 'Any';

    ratingAny.style.backgroundColor = 'rgb(226, 55, 68)';
    rateLine1.style.backgroundColor = 'rgb(226, 55, 68)';
    rating3_5.style.backgroundColor = 'rgb(226, 55, 68)';
    rateLine2.style.backgroundColor = 'rgb(226, 55, 68)';
    rating4_0.style.backgroundColor = 'rgb(226, 55, 68)';
    rateLine3.style.backgroundColor = 'rgb(226, 55, 68)';
    ratingAny.style.width = '1.2rem';
    ratingAny.style.height = '1.2rem';
    rating3_5.style.width = '1rem';
    rating3_5.style.height = '1rem';
    rating4_0.style.width = '1rem';
    rating4_0.style.height = '1rem';
    rating4_5.style.width = '1rem';
    rating4_5.style.height = '1rem';
})

rating3_5.addEventListener('click', () => {
    ratingDisplay.textContent = '3.5+';
    if (window.getComputedStyle(rating3_5).backgroundColor == 'rgb(226, 55, 68)') {
        ratingAny.style.backgroundColor = 'rgb(232, 232, 232)';
        rateLine1.style.backgroundColor = 'rgb(232, 232, 232)';
        ratingAny.style.width = '1rem';
        ratingAny.style.height = '1rem';
        rating3_5.style.width = '1.2rem';
        rating3_5.style.height = '1.2rem';
    }
    else {
        rating3_5.style.backgroundColor = 'rgb(226, 55, 68)';
        rateLine2.style.backgroundColor = 'rgb(226, 55, 68)';
        rating4_0.style.backgroundColor = 'rgb(226, 55, 68)';
        rateLine3.style.backgroundColor = 'rgb(226, 55, 68)';
        ratingAny.style.width = '1rem';
        ratingAny.style.height = '1rem';
        rating3_5.style.width = '1.2rem';
        rating3_5.style.height = '1.2rem';
        rating4_0.style.width = '1rem';
        rating4_0.style.height = '1rem';
        rating4_5.style.width = '1rem';
        rating4_5.style.height = '1rem';
    }


})

rating4_0.addEventListener('click', () => {
    ratingDisplay.textContent = '4.0+';

    if (window.getComputedStyle(rating4_0).backgroundColor === 'rgb(226, 55, 68)') {
        ratingAny.style.backgroundColor = 'rgb(232, 232, 232)';
        rateLine1.style.backgroundColor = 'rgb(232, 232, 232)';
        rating3_5.style.backgroundColor = 'rgb(232, 232, 232)';
        rateLine2.style.backgroundColor = 'rgb(232, 232, 232)';


        ratingAny.style.width = '1rem';
        ratingAny.style.height = '1rem';
        rating3_5.style.width = '1rem';
        rating3_5.style.height = '1rem';
        rating4_0.style.width = '1.2rem';
        rating4_0.style.height = '1.2rem';
    }
    else {
        rating4_0.style.backgroundColor = 'rgb(226, 55, 68)';
        rateLine3.style.backgroundColor = 'rgb(226, 55, 68)';
        ratingAny.style.width = '1rem';
        ratingAny.style.height = '1rem';
        rating3_5.style.width = '1rem';
        rating3_5.style.height = '1rem';
        rating4_0.style.width = '1.2rem';
        rating4_0.style.height = '1.2rem';
        rating4_5.style.width = '1rem';
        rating4_5.style.height = '1rem';
    }


})

rating4_5.addEventListener('click', () => {
    ratingDisplay.textContent = '4.5+';

    ratingAny.style.backgroundColor = 'rgb(232, 232, 232)';
    rateLine1.style.backgroundColor = 'rgb(232, 232, 232)';
    rating3_5.style.backgroundColor = 'rgb(232, 232, 232)';
    rateLine2.style.backgroundColor = 'rgb(232, 232, 232)';
    rating4_0.style.backgroundColor = 'rgb(232, 232, 232)';
    rateLine3.style.backgroundColor = 'rgb(232, 232, 232)';
    ratingAny.style.width = '1rem';
    ratingAny.style.height = '1rem';
    rating3_5.style.width = '1rem';
    rating3_5.style.height = '1rem';
    rating4_0.style.width = '1rem';
    rating4_0.style.height = '1rem';

    rating4_5.style.width = '1.2rem';
    rating4_5.style.height = '1.2rem';

})


// cuisines display

var cuisines = [
    'Abruzzese', 'Aceh', 'Aegean', 'Afghan', 'Afghani', 'African',
    'Bakery', 'BBQ', 'Bengali', 'Bihari', 'Biryani', 'Burger',
    'Cake', 'Chinese', 'Coffee', 'Curry', 'Desserts', 'Dimsum',
    'French', 'Fish', 'Fried Chicken', 'Gujrati', 'Healthy Food', 'Hot Dogs',
    'Ice Cream', 'Indian', 'Japanese', 'Juices', 'Kashmiri', 'Kebab',
    'Korean', 'Momos', 'Mughlai', 'Paan', 'Pancake', 'Pasta',
    'Pastry', 'Pizza', 'Rajasthani', 'Roast Chicken', 'Rolls', 'Salad',
    'Sandwich', 'Seafood', 'Shake', 'Singaporean', 'Snacks', 'Sushi',
    'Tea', 'Thai', 'Tibetan', 'Turkish Pizza', 'Vegetarian', 'Waffle',
    'Yum Cha', 'Zambian'
]

var filter2OptionsCategoriesContainers = document.querySelector('.filter-2-options-categories-containers');
cuisines.forEach((item, idx) => {
    var box1 = document.createElement('div');
    box1.classList.add('box-1');

    var circle = document.createElement('div');
    circle.classList.add('circle');

    var circleContent = document.createElement('div');
    circleContent.classList.add('circle-content');

    circle.innerHTML = "";
    circleContent.textContent = item;

    box1.appendChild(circle);
    box1.appendChild(circleContent);

    filter2OptionsCategoriesContainers.appendChild(box1);

    var box = 1;
    box1.addEventListener('click', () => {
        if (box == 1) {
            circle.style.backgroundColor = 'rgb(239, 79, 95)';
            box = 0;
        } else {
            circle.style.backgroundColor = 'white';
            box = 1;
        }

    })
}

)


//FUNCTION TO DISPLAY RESTAURANTS
function displayRestaurants(item, idx) {
    var deliveryRestaurantsCard = document.createElement('div');
    deliveryRestaurantsCard.classList.add('deliveryRestaurants-card');

    var restaurantsImage = document.createElement('img');
    restaurantsImage.classList.add('foodImage');
    restaurantsImage.src = item.img;

    var discountContainer = document.createElement('div');
    discountContainer.classList.add('discount-container');

    var discountPercentage = document.createElement('p');
    discountPercentage.classList.add('discount-percentage');
    discountPercentage.textContent = item.discount;

    var deliveryRestaurantsDetails = document.createElement('div');
    deliveryRestaurantsDetails.classList.add('deliveryRestaurants-details');

    var deliveryRestaurantsName = document.createElement('div');
    deliveryRestaurantsName.classList.add('deliveryRestaurants-name');

    var restaurantName = document.createElement('b');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = item.restaurantName;

    var restaurantRatingContainer = document.createElement('div');
    restaurantRatingContainer.classList.add('restaurant-rating-container');


    var restaurantRating = document.createElement('b');
    restaurantRating.classList.add('restaurant-rating');
    restaurantRating.textContent = item.rating;

    var starIcon = document.createElement('p');
    starIcon.classList.add('star-icon')
    starIcon.innerHTML = '&#9734';
    starIcon.style.margin = '0 0 3px 2px'

    var cuisinePrice = document.createElement('div');
    cuisinePrice.classList.add('cuisine-price');

    var cuisine = document.createElement('p');
    cuisine.classList.add('cuisine');
    cuisine.textContent = item.cuisine;

    var price = document.createElement('div');
    price.classList.add('price');

    var priceForOne = document.createElement('p');
    priceForOne.classList.add('price-for-one');
    priceForOne.textContent = item.price;

    var time = document.createElement('div');
    time.classList.add('time');
    time.textContent = item.delieveryTime;

    var deliveryTime = document.createElement('b');
    deliveryTime.classList.add('delivery-time');

    deliveryRestaurantsCard.appendChild(restaurantsImage);
    discountContainer.appendChild(discountPercentage);
    deliveryRestaurantsCard.appendChild(discountContainer);

    deliveryRestaurantsName.appendChild(restaurantName);
    restaurantRatingContainer.appendChild(restaurantRating);
    restaurantRatingContainer.appendChild(starIcon);
    deliveryRestaurantsName.appendChild(restaurantRatingContainer);
    deliveryRestaurantsDetails.appendChild(deliveryRestaurantsName);

    cuisinePrice.appendChild(cuisine);
    price.appendChild(priceForOne);
    cuisinePrice.appendChild(price);
    deliveryRestaurantsDetails.appendChild(cuisinePrice);

    time.appendChild(deliveryTime);
    deliveryRestaurantsDetails.appendChild(time);

    deliveryRestaurantsCard.appendChild(deliveryRestaurantsDetails);

    deliveryRestaurantsContainer.appendChild(deliveryRestaurantsCard);

    //detail of restraunt
    deliveryRestaurantsCard.addEventListener('click', () => {
        localStorage.setItem('selectedRestauraunt', JSON.stringify(item))
        document.querySelector('#overlay').style.display = 'block';
        setTimeout(() => {
            document.querySelector('#overlay').style.display = 'none';
        }, 3000);
        setTimeout(() => {
            let restaurantName = item.restaurantName;
            let restaurantNameReplace = restaurantName.replace(' ', "-").toLowerCase();
            window.location.href = `restrauntDetail.html?city=${encodeURIComponent(cityValue)}&restaurant=${encodeURIComponent(restaurantNameReplace)}`;
        }, 2900);
    }
    )

}

// show delivery restaurants code
var deliveryRestaurants = [
    {
        img: './assets/food/Al_zameer_rest.avif',
        discount: '40% OFF',
        restaurantName: 'Al Zameer',
        rating: '4.1',
        cuisine: 'North Indian, Mughlai',
        price: '₹150 for one',
        delieveryTime: '26 mins',
        veg: false,
        restaurantImgs: [
            { restaurantImg1: './assets/food/restaurant imgs/al zameer/alzameer1.avif' },
            { restaurantImg2: './assets/food/restaurant imgs/al zameer/alzameer2.avif' },
            { restaurantImg3: './assets/food/restaurant imgs/al zameer/alzameer3.avif' },
        ],
        food: [
            {
                'Chicken': [
                    {
                        foodImg: './assets/food/chicken/ChickenShaamiKebab.avif',
                        foodName: "Chicken Shaami Kebab",
                        foodPrice: 420,
                        foodDescription: 'It is an Indian style kabab where cooked chicken is combined with lentils and spices, shaped into a patty and shallow fried.(Portion Size 8 pieces)',
                        foodRating: '4',
                        foodVote: '7 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/chicken/ClassicChickenTikka.avif',
                        foodName: "Classic Chicken Tikka",
                        foodPrice: 389,
                        foodDescription: 'Chicken tikka is cubed chicken that is marinated in spiced yogurt mixture & then grilled to perfection (Portion 8 pieces) NOTE: No colour',
                        foodRating: '4',
                        foodVote: '11 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/chicken/ChickenTandoori.avif',
                        foodName: "Chicken Tandoori",
                        foodPrice: 319,
                        foodDescription: 'It is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor.',
                        foodRating: '4.5',
                        foodVote: '69 Votes',
                        nonVeg: true
                    }
                ]
            },
            {
                'Biryani': [
                    {
                        foodImg: './assets/food/biryani/vegBiryani.avif',
                        foodName: "Veg Biryani",
                        foodPrice: 269,
                        foodDescription: 'Vegetable biryani is an aromatic rice dish made by cooking basmati rice with mix veggies, herbs & biryani spices.',
                        foodRating: '4.5',
                        foodVote: '31 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/biryani/EggBiryani.avif',
                        foodName: "Egg Biryani",
                        foodPrice: 289,
                        foodDescription: 'Egg Biryani or Anda Biryani is a flavorful and delicious Indian rice preparation where rice is cooked with a spicy egg layer and cook in dum method. Potion size 2/4 pieces egg',
                        foodRating: '4.5',
                        foodVote: '9 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/biryani/ChickenTikkaBiryani.avif',
                        foodName: "Chicken Tikka Biryani",
                        foodPrice: 349,
                        foodDescription: 'Chicken Tikka Biryani is a spicy and flavorful, incredibly delicious Rice preparation consist of tikka masala and tikka boneless pieces. (Portion 3/6 pieces Chicken boneless)',
                        foodRating: '4.5',
                        foodVote: '60 Votes',
                        nonVeg: true
                    }
                ]
            },
            {
                'Roomali Rolls': [
                    {
                        foodImg: './assets/food/Roomali Rolls/paneer tikka masala roll.avif',
                        foodName: "Paneer Tikka Masala Roll",
                        foodPrice: 229,
                        foodDescription: 'In this roll the stuffing is a lip-smacking paneer tikka made on skillet, a vibrant green chutney and a crunchy mixed veggie salad wrapped inside a whole wheat dough.',
                        foodRating: '4',
                        foodVote: '18 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Roomali Rolls/chicken tikka masala roll.avif',
                        foodName: "Chicken Tikka Masala Roll",
                        foodPrice: 249,
                        foodDescription: '',
                        foodRating: '4.5',
                        foodVote: '15 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/Roomali Rolls/butter chicken roll.avif',
                        foodName: "Butter Chicken Roll",
                        foodPrice: 259,
                        foodDescription: 'Butter chicken roll is made with our creamy butter chicken masala curry, topped with your favorite vegetables and chutneys, and wrapped in a flakey paratha roll.',
                        foodRating: '4',
                        foodVote: '5 Votes',
                        nonVeg: true
                    }
                ]
            },
            {
                'Veg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/veg tikka and kebabs/veg seekh kebab.jpg',
                        foodName: "Veg Seekh Kebab",
                        foodPrice: 359,
                        foodDescription: 'Veg Seekh kebab is a delicious veg starter made using mixed vegetables and spices.(Portion 8 pieces)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/lahori soya chaap.avif',
                        foodName: "Lahori Soya Chaap",
                        foodPrice: 329,
                        foodDescription: 'Made in red spicy marination cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '11 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/classic panner tikka.avif',
                        foodName: "Classic Paneer Tikka",
                        foodPrice: 359,
                        foodDescription: 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. (Portion 8 pieces)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes',
                        nonVeg: false
                    }

                ]
            },
            {
                'NonVeg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/classic chicken tikka.avif',
                        foodName: "Classic Chicken Tikka",
                        foodPrice: 389,
                        foodDescription: 'Chicken tikka is cubed chicken that is marinated in spiced yogurt mixture & then grilled to perfection (Portion 8 pieces) NOTE: No colour',
                        foodRating: '4',
                        foodVote: '11 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/achari chicken tikka.avif',
                        foodName: "Achari Chicken Tikka",
                        foodPrice: 399,
                        foodDescription: 'It is one of those phenomenal Indian chicken kebabs whose taste is simply unbeatable. Soft tender pieces of chicken bathed in pickling spices (achari masala) & yogurt marinade (Portion 8 pieces) NOTE: No color used.]',
                        foodRating: '4.5',
                        foodVote: '14 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/chicken tandoori.avif',
                        foodName: "Chicken Tandoori",
                        foodPrice: 319,
                        foodDescription: 'It is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor.',
                        foodRating: '4',
                        foodVote: '69 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/afghani tandoori.avif',
                        foodName: "Afghani Tandoori",
                        foodPrice: 339,
                        foodDescription: 'Afghani style tandoori chicken is an incredibly moist and juicy and tender roasted chicken marinated with yogurt, kasoori methi and few spices',
                        foodRating: '4',
                        foodVote: '27 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/fish fry.jpg',
                        foodName: "Fish Fry",
                        foodPrice: 369,
                        foodDescription: 'Fish fry is scrumptious dish made by marinating fish with delectable spices and shallow frying it (Portion Size 8 pieces)',
                        foodRating: '4.5',
                        foodVote: '11 Votes',
                        nonVeg: true
                    }

                ]
            },
            {
                'Veg Curry': [
                    {
                        foodImg: './assets/food/veg curry/Nawaabi Paneer.avif',
                        foodName: "Nawaabi Paneer",
                        foodPrice: 279,
                        foodDescription: 'Nawaabi Paneer curry made in Rich Yellow Gravy',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg curry/Paneer Tikka Masala.avif',
                        foodName: "Paneer Tikka Masala",
                        foodPrice: 309,
                        foodDescription: 'Paneer Tikka Masala Is a Dish of Chunks of Roasted Marinated Cottage cheese in A Spiced Curry Sauce. (Portion 5 pieces Paneer)',
                        foodRating: '4',
                        foodVote: '8 Votes',
                        nonVeg: false
                    }
                ]
            },
            {
                'Breads': [
                    {
                        foodImg: './assets/food/Breads/Roti.avif',
                        foodName: "Roti",
                        foodPrice: 30,
                        foodDescription: 'Handmade soft and fluffy flatbread, cooked on an iron griddle.',
                        foodRating: '4',
                        foodVote: '43 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Naan.avif',
                        foodName: "Naan",
                        foodPrice: 40,
                        foodDescription: 'Savory and soft slightly leavened flatbread cooked in tandoor.',
                        foodRating: '4',
                        foodVote: '72 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Lachha Paratha.avif',
                        foodName: "Laccha Paratha",
                        foodPrice: 60,
                        foodDescription: 'Flaky and multi layered flatbread cooked until crisp on the outside.',
                        foodRating: '4',
                        foodVote: '15 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Roomali Roti.avif',
                        foodName: "Roomali Roti",
                        foodPrice: 45,
                        foodDescription: 'Roomali roti is one of the unleavened Indian breads that is made traditionally in the Awadhi, Mughlai and Hyderabadi cuisine.',
                        foodRating: '4.5',
                        foodVote: '33 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Cheese Naan.avif',
                        foodName: "Cheese Naan",
                        foodPrice: 90,
                        foodDescription: 'Soft and fluffy cheese stuffed naan bread filled with cheesy mozzarella and chives.',
                        foodRating: '4.5',
                        foodVote: '17 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/garlicnaan.jpg',
                        foodName: "Garlic Naan",
                        foodPrice: 80,
                        foodDescription: 'Garlic Naan is a soft Indian leavened flatbread made with wheat flours and spiced with garlic.',
                        foodRating: '4.5',
                        foodVote: '17 Votes',
                        nonVeg: false
                    }

                ]

            },
            {
                'Sides': [
                    {
                        foodImg: './assets/food/Sides/Papad.avif',
                        foodName: "Papad",
                        foodPrice: 79,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Sides/Green Salad.avif',
                        foodName: "Green Salad",
                        foodPrice: 149,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Sides/Boondi Raita.avif',
                        foodName: "Boondi Raita",
                        foodPrice: 169,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    }
                ]
            },
            {
                'Dal': [
                    {
                        foodImg: './assets/food/Dal/dal tadka.avif',
                        foodName: "Dal Tadka",
                        foodPrice: 399,
                        foodDescription: 'Creamy, delicious, and thick lentil curry enriched with a tempering of spices and whole chillies in ghee.',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Dal/dal makhani.avif',
                        foodName: "Dal Makhani",
                        foodPrice: 349,
                        foodDescription: 'Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils',
                        foodRating: '4.5',
                        foodVote: '7 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Dal/dal ghost.avif',
                        foodName: "Dal Ghost",
                        foodPrice: 449,
                        foodDescription: 'A mutton simmered with spices, mixture of toor dal and masoor dal, or ... read more',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: true
                    }
                ]
            },
            {
                'Drinks': [
                    {
                        foodImg: './assets/food/drinks/sprite.avif',
                        foodName: "Sprite",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/drinks/thumbs up.avif',
                        foodName: "Thumbs Up",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/drinks/coke.avif',
                        foodName: "Coke",
                        foodPrice: 60,
                        foodDescription: 'Can',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    }
                ]
            },
            {
                'Rice': [
                    {
                        foodImg: './assets/food/rice/rice.jpg',
                        foodName: "Rice",
                        foodPrice: 249,
                        foodDescription: 'Fragrant white rice steamed until fluffy. ',
                        foodRating: '4.5',
                        foodVote: '6 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/rice/zeera rice.avif',
                        foodName: "Zeera Rice",
                        foodPrice: 249,
                        foodDescription: 'An Indian dish consisting of rice and cumin seeds.',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/rice/dal khichdi.jpg',
                        foodName: "Dal Khichdi",
                        foodPrice: 299,
                        foodDescription: 'A combination of lentils and vegetables cooked with rice in one pot to create a wholesome and delicious vegetarian goulash',
                        foodRating: '4',
                        foodVote: '21 Votes',
                        nonVeg: false
                    }
                ]
            },
            {
                'Dessert': [
                    {
                        foodImg: './assets/food/dessert/Rasgulla.avif',
                        foodName: "Rasgulla (2 pcs)",
                        foodPrice: 80,
                        foodDescription: '',
                        foodRating: '4',
                        foodVote: '59 Votes',
                        nonVeg: false
                    }
                ]
            }
        ]
    },
    {
        img: './assets/food/bhaghat_halwai.avif',
        discount: '30% OFF',
        restaurantName: 'Bhaghat Halwai',
        rating: '4.3',
        cuisine: 'Street Food, Fast Food, Pizza, Sandwich, Chinese, South Indian, Shake, Beverages',
        price: '₹100 for one',
        delieveryTime: '35 mins',
        veg: true,
        restaurantImgs: [
            { restaurantImg1: './assets/food/restaurant imgs/bhaghat halwai/bhagathalwai1.avif' },
            { restaurantImg2: './assets/food/restaurant imgs/bhaghat halwai/bhagathalwai2.avif' },
            { restaurantImg3: './assets/food/restaurant imgs/bhaghat halwai/bhagathalwai3.avif' },
        ],
        food: [
            {
                'South Indian': [
                    {
                        foodImg: './assets/food/southIndian/cheese dosa.jpeg',
                        foodName: "Cheese Dosa",
                        foodPrice: 200,
                        foodDescription: 'Cheese Dosa is a fusion dish that combines the traditional dosa with the creamy goodness of cheese. It is made by spreading the dosa batter on a hot griddle and adding grated cheese on top. It is then folded and served hot with tomato chutney. It is a popular street food in India.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/idly smabhar.jpeg',
                        foodName: "Idly Sambhar",
                        foodPrice: 104.76,
                        foodDescription: 'Idly sambar is a traditional breakfast dish made with steamed rice and lentil cakes (idly) served with a spicy and tangy lentil-based vegetable stew (sambar). It is often accompanied by coconut chutney and is a nutritious and satisfying meal that is popular throughout India.',
                        foodRating: '3.5',
                        foodVote: '14 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/masala dosa.jpeg',
                        foodName: "Masala Dosa",
                        foodPrice: 166.76,
                        foodDescription: 'Masala Dosa is a popular dish made from rice and lentil batter. It is a crispy crepe filled with a spiced potato and onion mixture. It is served with coconut chutney and sambar, a lentil-based vegetable stew.',
                        foodRating: '4',
                        foodVote: '95 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer_dosa.jpeg',
                        foodName: "Paneer Dosa",
                        foodPrice: 200.76,
                        foodDescription: 'Paneer dosa is a savory crepe made with fermented rice and lentil batter filled with spiced paneer (Indian cottage cheese) and vegetables. It is a popular breakfast dish often served with coconut chutney and sambar. Paneer dosa is a delicious and nutritious meal for vegetarians and non-vegetarians alike.',
                        foodRating: '4.5',
                        foodVote: '195 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer pav bhaji.jpeg',
                        foodName: "Paneer Pav Bhaji",
                        foodPrice: 133.76,
                        foodDescription: 'Paneer Pav Bhaji is a twist on the classic Indian street food dish, Pav Bhaji. It is made with a spicy and flavorful vegetable curry, with the addition of paneer, a type of Indian cheese. It is served with buttered and toasted buns known as pav, and is a delicious and satisfying meal.',
                        foodRating: '3.7',
                        foodVote: '9 Votes'
                    }
                ]
            }
            ,
            {
                'Biryani': [
                    {
                        foodImg: './assets/food/biryani/vegBiryani.avif',
                        foodName: "Veg Biryani",
                        foodPrice: 269,
                        foodDescription: 'Vegetable biryani is an aromatic rice dish made by cooking basmati rice with mix veggies, herbs & biryani spices.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                ]
            },
            {
                'Roomali Rolls': [
                    {
                        foodImg: './assets/food/Roomali Rolls/paneer tikka masala roll.avif',
                        foodName: "Paneer Tikka Masala Roll",
                        foodPrice: 229,
                        foodDescription: 'In this roll the stuffing is a lip-smacking paneer tikka made on skillet, a vibrant green chutney and a crunchy mixed veggie salad wrapped inside a whole wheat dough.',
                        foodRating: '4',
                        foodVote: '18 Votes'
                    },
                ]
            },
            {
                'Veg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/veg tikka and kebabs/veg seekh kebab.jpg',
                        foodName: "Veg Seekh Kebab",
                        foodPrice: 359,
                        foodDescription: 'Veg Seekh kebab is a delicious veg starter made using mixed vegetables and spices.(Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/lahori soya chaap.avif',
                        foodName: "Lahori Soya Chaap",
                        foodPrice: 329,
                        foodDescription: 'Made in red spicy marination cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '11 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/classic panner tikka.avif',
                        foodName: "Classic Paneer Tikka",
                        foodPrice: 359,
                        foodDescription: 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. (Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    }

                ]
            },
            {
                'Veg Curry': [
                    {
                        foodImg: './assets/food/veg curry/Nawaabi Paneer.avif',
                        foodName: "Nawaabi Paneer",
                        foodPrice: 279,
                        foodDescription: 'Nawaabi Paneer curry made in Rich Yellow Gravy',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg curry/Paneer Tikka Masala.avif',
                        foodName: "Paneer Tikka Masala",
                        foodPrice: 309,
                        foodDescription: 'Paneer Tikka Masala Is a Dish of Chunks of Roasted Marinated Cottage cheese in A Spiced Curry Sauce. (Portion 5 pieces Paneer)',
                        foodRating: '4',
                        foodVote: '8 Votes'
                    }
                ]
            },
            {
                'Breads': [
                    {
                        foodImg: './assets/food/Breads/Roti.avif',
                        foodName: "Roti",
                        foodPrice: 30,
                        foodDescription: 'Handmade soft and fluffy flatbread, cooked on an iron griddle.',
                        foodRating: '4',
                        foodVote: '43 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Naan.avif',
                        foodName: "Naan",
                        foodPrice: 40,
                        foodDescription: 'Savory and soft slightly leavened flatbread cooked in tandoor.',
                        foodRating: '4',
                        foodVote: '72 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Lachha Paratha.avif',
                        foodName: "Laccha Paratha",
                        foodPrice: 60,
                        foodDescription: 'Flaky and multi layered flatbread cooked until crisp on the outside.',
                        foodRating: '4',
                        foodVote: '15 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Roomali Roti.avif',
                        foodName: "Roomali Roti",
                        foodPrice: 45,
                        foodDescription: 'Roomali roti is one of the unleavened Indian breads that is made traditionally in the Awadhi, Mughlai and Hyderabadi cuisine.',
                        foodRating: '4.5',
                        foodVote: '33 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Cheese Naan.avif',
                        foodName: "Cheese Naan",
                        foodPrice: 90,
                        foodDescription: 'Soft and fluffy cheese stuffed naan bread filled with cheesy mozzarella and chives.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/garlicnaan.jpg',
                        foodName: "Garlic Naan",
                        foodPrice: 80,
                        foodDescription: 'Garlic Naan is a soft Indian leavened flatbread made with wheat flours and spiced with garlic.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    }

                ]

            },
            {
                'Sides': [
                    {
                        foodImg: './assets/food/Sides/Papad.avif',
                        foodName: "Papad",
                        foodPrice: 79,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Green Salad.avif',
                        foodName: "Green Salad",
                        foodPrice: 149,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Boondi Raita.avif',
                        foodName: "Boondi Raita",
                        foodPrice: 169,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Dal': [
                    {
                        foodImg: './assets/food/Dal/dal tadka.avif',
                        foodName: "Dal Tadka",
                        foodPrice: 399,
                        foodDescription: 'Creamy, delicious, and thick lentil curry enriched with a tempering of spices and whole chillies in ghee.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Dal/dal makhani.avif',
                        foodName: "Dal Makhani",
                        foodPrice: 349,
                        foodDescription: 'Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils',
                        foodRating: '4.5',
                        foodVote: '7 Votes'
                    },
                ]
            },
            {
                'Drinks': [
                    {
                        foodImg: './assets/food/drinks/sprite.avif',
                        foodName: "Sprite",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/thumbs up.avif',
                        foodName: "Thumbs Up",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/coke.avif',
                        foodName: "Coke",
                        foodPrice: 60,
                        foodDescription: 'Can',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Rice': [
                    {
                        foodImg: './assets/food/rice/rice.jpg',
                        foodName: "Rice",
                        foodPrice: 249,
                        foodDescription: 'Fragrant white rice steamed until fluffy. ',
                        foodRating: '4.5',
                        foodVote: '6 Votes'
                    },
                    {
                        foodImg: './assets/food/rice/zeera rice.avif',
                        foodName: "Zeera Rice",
                        foodPrice: 249,
                        foodDescription: 'An Indian dish consisting of rice and cumin seeds.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/rice/dal khichdi.jpg',
                        foodName: "Dal Khichdi",
                        foodPrice: 299,
                        foodDescription: 'A combination of lentils and vegetables cooked with rice in one pot to create a wholesome and delicious vegetarian goulash',
                        foodRating: '4',
                        foodVote: '21 Votes'
                    }
                ]
            },
            {
                'Dessert': [
                    {
                        foodImg: './assets/food/dessert/Rasgulla.avif',
                        foodName: "Rasgulla (2 pcs)",
                        foodPrice: 80,
                        foodDescription: '',
                        foodRating: '4',
                        foodVote: '59 Votes'
                    }
                ]
            }
        ]
    },
    {
        img: './assets/food/bhawna_sweets.avif',
        discount: '45% OFF',
        restaurantName: 'Bhawna Sweets',
        rating: '4.5',
        cuisine: 'Mithai, Desserts, Bakery',
        price: '₹300 for one',
        delieveryTime: '5 mins',
        veg: true,
        restaurantImgs: [
            { restaurantImg1: './assets/food/restaurant imgs/bhawna sweets/bhawnasweets1.avif' },
            { restaurantImg2: './assets/food/restaurant imgs/bhawna sweets/bhawnasweets2.avif' },
            { restaurantImg3: './assets/food/restaurant imgs/bhawna sweets/bhawnasweets3.avif' },
        ],
        food: [
            {
                'South Indian': [
                    {
                        foodImg: './assets/food/southIndian/cheese dosa.jpeg',
                        foodName: "Cheese Dosa",
                        foodPrice: 200,
                        foodDescription: 'Cheese Dosa is a fusion dish that combines the traditional dosa with the creamy goodness of cheese. It is made by spreading the dosa batter on a hot griddle and adding grated cheese on top. It is then folded and served hot with tomato chutney. It is a popular street food in India.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/idly smabhar.jpeg',
                        foodName: "Idly Sambhar",
                        foodPrice: 104.76,
                        foodDescription: 'Idly sambar is a traditional breakfast dish made with steamed rice and lentil cakes (idly) served with a spicy and tangy lentil-based vegetable stew (sambar). It is often accompanied by coconut chutney and is a nutritious and satisfying meal that is popular throughout India.',
                        foodRating: '3.5',
                        foodVote: '14 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/masala dosa.jpeg',
                        foodName: "Masala Dosa",
                        foodPrice: 166.76,
                        foodDescription: 'Masala Dosa is a popular dish made from rice and lentil batter. It is a crispy crepe filled with a spiced potato and onion mixture. It is served with coconut chutney and sambar, a lentil-based vegetable stew.',
                        foodRating: '4',
                        foodVote: '95 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer_dosa.jpeg',
                        foodName: "Paneer Dosa",
                        foodPrice: 200.76,
                        foodDescription: 'Paneer dosa is a savory crepe made with fermented rice and lentil batter filled with spiced paneer (Indian cottage cheese) and vegetables. It is a popular breakfast dish often served with coconut chutney and sambar. Paneer dosa is a delicious and nutritious meal for vegetarians and non-vegetarians alike.',
                        foodRating: '4.5',
                        foodVote: '195 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer pav bhaji.jpeg',
                        foodName: "Paneer Pav Bhaji",
                        foodPrice: 133.76,
                        foodDescription: 'Paneer Pav Bhaji is a twist on the classic Indian street food dish, Pav Bhaji. It is made with a spicy and flavorful vegetable curry, with the addition of paneer, a type of Indian cheese. It is served with buttered and toasted buns known as pav, and is a delicious and satisfying meal.',
                        foodRating: '3.7',
                        foodVote: '9 Votes'
                    }
                ]
            }
            ,
            {
                'Biryani': [
                    {
                        foodImg: './assets/food/biryani/vegBiryani.avif',
                        foodName: "Veg Biryani",
                        foodPrice: 269,
                        foodDescription: 'Vegetable biryani is an aromatic rice dish made by cooking basmati rice with mix veggies, herbs & biryani spices.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                ]
            },
            {
                'Roomali Rolls': [
                    {
                        foodImg: './assets/food/Roomali Rolls/paneer tikka masala roll.avif',
                        foodName: "Paneer Tikka Masala Roll",
                        foodPrice: 229,
                        foodDescription: 'In this roll the stuffing is a lip-smacking paneer tikka made on skillet, a vibrant green chutney and a crunchy mixed veggie salad wrapped inside a whole wheat dough.',
                        foodRating: '4',
                        foodVote: '18 Votes'
                    },
                ]
            },
            {
                'Veg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/veg tikka and kebabs/veg seekh kebab.jpg',
                        foodName: "Veg Seekh Kebab",
                        foodPrice: 359,
                        foodDescription: 'Veg Seekh kebab is a delicious veg starter made using mixed vegetables and spices.(Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/lahori soya chaap.avif',
                        foodName: "Lahori Soya Chaap",
                        foodPrice: 329,
                        foodDescription: 'Made in red spicy marination cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '11 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/classic panner tikka.avif',
                        foodName: "Classic Paneer Tikka",
                        foodPrice: 359,
                        foodDescription: 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. (Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    }

                ]
            },
            {
                'Veg Curry': [
                    {
                        foodImg: './assets/food/veg curry/Nawaabi Paneer.avif',
                        foodName: "Nawaabi Paneer",
                        foodPrice: 279,
                        foodDescription: 'Nawaabi Paneer curry made in Rich Yellow Gravy',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg curry/Paneer Tikka Masala.avif',
                        foodName: "Paneer Tikka Masala",
                        foodPrice: 309,
                        foodDescription: 'Paneer Tikka Masala Is a Dish of Chunks of Roasted Marinated Cottage cheese in A Spiced Curry Sauce. (Portion 5 pieces Paneer)',
                        foodRating: '4',
                        foodVote: '8 Votes'
                    }
                ]
            },
            {
                'Breads': [
                    {
                        foodImg: './assets/food/Breads/Roti.avif',
                        foodName: "Roti",
                        foodPrice: 30,
                        foodDescription: 'Handmade soft and fluffy flatbread, cooked on an iron griddle.',
                        foodRating: '4',
                        foodVote: '43 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Naan.avif',
                        foodName: "Naan",
                        foodPrice: 40,
                        foodDescription: 'Savory and soft slightly leavened flatbread cooked in tandoor.',
                        foodRating: '4',
                        foodVote: '72 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Lachha Paratha.avif',
                        foodName: "Laccha Paratha",
                        foodPrice: 60,
                        foodDescription: 'Flaky and multi layered flatbread cooked until crisp on the outside.',
                        foodRating: '4',
                        foodVote: '15 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Roomali Roti.avif',
                        foodName: "Roomali Roti",
                        foodPrice: 45,
                        foodDescription: 'Roomali roti is one of the unleavened Indian breads that is made traditionally in the Awadhi, Mughlai and Hyderabadi cuisine.',
                        foodRating: '4.5',
                        foodVote: '33 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Cheese Naan.avif',
                        foodName: "Cheese Naan",
                        foodPrice: 90,
                        foodDescription: 'Soft and fluffy cheese stuffed naan bread filled with cheesy mozzarella and chives.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/garlicnaan.jpg',
                        foodName: "Garlic Naan",
                        foodPrice: 80,
                        foodDescription: 'Garlic Naan is a soft Indian leavened flatbread made with wheat flours and spiced with garlic.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    }

                ]

            },
            {
                'Sides': [
                    {
                        foodImg: './assets/food/Sides/Papad.avif',
                        foodName: "Papad",
                        foodPrice: 79,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Green Salad.avif',
                        foodName: "Green Salad",
                        foodPrice: 149,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Boondi Raita.avif',
                        foodName: "Boondi Raita",
                        foodPrice: 169,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Dal': [
                    {
                        foodImg: './assets/food/Dal/dal tadka.avif',
                        foodName: "Dal Tadka",
                        foodPrice: 399,
                        foodDescription: 'Creamy, delicious, and thick lentil curry enriched with a tempering of spices and whole chillies in ghee.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Dal/dal makhani.avif',
                        foodName: "Dal Makhani",
                        foodPrice: 349,
                        foodDescription: 'Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils',
                        foodRating: '4.5',
                        foodVote: '7 Votes'
                    },
                ]
            },
            {
                'Drinks': [
                    {
                        foodImg: './assets/food/drinks/sprite.avif',
                        foodName: "Sprite",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/thumbs up.avif',
                        foodName: "Thumbs Up",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/coke.avif',
                        foodName: "Coke",
                        foodPrice: 60,
                        foodDescription: 'Can',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Rice': [
                    {
                        foodImg: './assets/food/rice/rice.jpg',
                        foodName: "Rice",
                        foodPrice: 249,
                        foodDescription: 'Fragrant white rice steamed until fluffy. ',
                        foodRating: '4.5',
                        foodVote: '6 Votes'
                    },
                    {
                        foodImg: './assets/food/rice/zeera rice.avif',
                        foodName: "Zeera Rice",
                        foodPrice: 249,
                        foodDescription: 'An Indian dish consisting of rice and cumin seeds.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/rice/dal khichdi.jpg',
                        foodName: "Dal Khichdi",
                        foodPrice: 299,
                        foodDescription: 'A combination of lentils and vegetables cooked with rice in one pot to create a wholesome and delicious vegetarian goulash',
                        foodRating: '4',
                        foodVote: '21 Votes'
                    }
                ]
            },
            {
                'Dessert': [
                    {
                        foodImg: './assets/food/dessert/Rasgulla.avif',
                        foodName: "Rasgulla (2 pcs)",
                        foodPrice: 80,
                        foodDescription: '',
                        foodRating: '4',
                        foodVote: '59 Votes'
                    }
                ]
            }
        ]
    },
    {
        img: './assets/food/Bikanerwala.avif',
        discount: '30% OFF',
        restaurantName: 'Bikanerwala',
        rating: '4.5',
        cuisine: 'Street Food, North Indian, Chinese, Mithai, South Indian, Fast Food, Desserts, Beverages',
        price: '₹200 for one',
        delieveryTime: '15 mins',
        veg: true,
        restaurantImgs: [
            { restaurantImg1: './assets/food/restaurant imgs/bikanerwala/bikanerwala1.avif' },
            { restaurantImg2: './assets/food/restaurant imgs/bikanerwala/bikanerwala2.avif' },
            { restaurantImg3: './assets/food/restaurant imgs/bikanerwala/bikanerwala3.avif' },
        ],
        food: [
            {
                'South Indian': [
                    {
                        foodImg: './assets/food/southIndian/cheese dosa.jpeg',
                        foodName: "Cheese Dosa",
                        foodPrice: 200,
                        foodDescription: 'Cheese Dosa is a fusion dish that combines the traditional dosa with the creamy goodness of cheese. It is made by spreading the dosa batter on a hot griddle and adding grated cheese on top. It is then folded and served hot with tomato chutney. It is a popular street food in India.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/idly smabhar.jpeg',
                        foodName: "Idly Sambhar",
                        foodPrice: 104.76,
                        foodDescription: 'Idly sambar is a traditional breakfast dish made with steamed rice and lentil cakes (idly) served with a spicy and tangy lentil-based vegetable stew (sambar). It is often accompanied by coconut chutney and is a nutritious and satisfying meal that is popular throughout India.',
                        foodRating: '3.5',
                        foodVote: '14 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/masala dosa.jpeg',
                        foodName: "Masala Dosa",
                        foodPrice: 166.76,
                        foodDescription: 'Masala Dosa is a popular dish made from rice and lentil batter. It is a crispy crepe filled with a spiced potato and onion mixture. It is served with coconut chutney and sambar, a lentil-based vegetable stew.',
                        foodRating: '4',
                        foodVote: '95 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer_dosa.jpeg',
                        foodName: "Paneer Dosa",
                        foodPrice: 200.76,
                        foodDescription: 'Paneer dosa is a savory crepe made with fermented rice and lentil batter filled with spiced paneer (Indian cottage cheese) and vegetables. It is a popular breakfast dish often served with coconut chutney and sambar. Paneer dosa is a delicious and nutritious meal for vegetarians and non-vegetarians alike.',
                        foodRating: '4.5',
                        foodVote: '195 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer pav bhaji.jpeg',
                        foodName: "Paneer Pav Bhaji",
                        foodPrice: 133.76,
                        foodDescription: 'Paneer Pav Bhaji is a twist on the classic Indian street food dish, Pav Bhaji. It is made with a spicy and flavorful vegetable curry, with the addition of paneer, a type of Indian cheese. It is served with buttered and toasted buns known as pav, and is a delicious and satisfying meal.',
                        foodRating: '3.7',
                        foodVote: '9 Votes'
                    }
                ]
            }
            ,
            {
                'Biryani': [
                    {
                        foodImg: './assets/food/biryani/vegBiryani.avif',
                        foodName: "Veg Biryani",
                        foodPrice: 269,
                        foodDescription: 'Vegetable biryani is an aromatic rice dish made by cooking basmati rice with mix veggies, herbs & biryani spices.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                ]
            },
            {
                'Roomali Rolls': [
                    {
                        foodImg: './assets/food/Roomali Rolls/paneer tikka masala roll.avif',
                        foodName: "Paneer Tikka Masala Roll",
                        foodPrice: 229,
                        foodDescription: 'In this roll the stuffing is a lip-smacking paneer tikka made on skillet, a vibrant green chutney and a crunchy mixed veggie salad wrapped inside a whole wheat dough.',
                        foodRating: '4',
                        foodVote: '18 Votes'
                    },
                ]
            },
            {
                'Veg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/veg tikka and kebabs/veg seekh kebab.jpg',
                        foodName: "Veg Seekh Kebab",
                        foodPrice: 359,
                        foodDescription: 'Veg Seekh kebab is a delicious veg starter made using mixed vegetables and spices.(Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/lahori soya chaap.avif',
                        foodName: "Lahori Soya Chaap",
                        foodPrice: 329,
                        foodDescription: 'Made in red spicy marination cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '11 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/classic panner tikka.avif',
                        foodName: "Classic Paneer Tikka",
                        foodPrice: 359,
                        foodDescription: 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. (Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    }

                ]
            },
            {
                'Veg Curry': [
                    {
                        foodImg: './assets/food/veg curry/Nawaabi Paneer.avif',
                        foodName: "Nawaabi Paneer",
                        foodPrice: 279,
                        foodDescription: 'Nawaabi Paneer curry made in Rich Yellow Gravy',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg curry/Paneer Tikka Masala.avif',
                        foodName: "Paneer Tikka Masala",
                        foodPrice: 309,
                        foodDescription: 'Paneer Tikka Masala Is a Dish of Chunks of Roasted Marinated Cottage cheese in A Spiced Curry Sauce. (Portion 5 pieces Paneer)',
                        foodRating: '4',
                        foodVote: '8 Votes'
                    }
                ]
            },
            {
                'Breads': [
                    {
                        foodImg: './assets/food/Breads/Roti.avif',
                        foodName: "Roti",
                        foodPrice: 30,
                        foodDescription: 'Handmade soft and fluffy flatbread, cooked on an iron griddle.',
                        foodRating: '4',
                        foodVote: '43 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Naan.avif',
                        foodName: "Naan",
                        foodPrice: 40,
                        foodDescription: 'Savory and soft slightly leavened flatbread cooked in tandoor.',
                        foodRating: '4',
                        foodVote: '72 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Lachha Paratha.avif',
                        foodName: "Laccha Paratha",
                        foodPrice: 60,
                        foodDescription: 'Flaky and multi layered flatbread cooked until crisp on the outside.',
                        foodRating: '4',
                        foodVote: '15 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Roomali Roti.avif',
                        foodName: "Roomali Roti",
                        foodPrice: 45,
                        foodDescription: 'Roomali roti is one of the unleavened Indian breads that is made traditionally in the Awadhi, Mughlai and Hyderabadi cuisine.',
                        foodRating: '4.5',
                        foodVote: '33 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Cheese Naan.avif',
                        foodName: "Cheese Naan",
                        foodPrice: 90,
                        foodDescription: 'Soft and fluffy cheese stuffed naan bread filled with cheesy mozzarella and chives.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/garlicnaan.jpg',
                        foodName: "Garlic Naan",
                        foodPrice: 80,
                        foodDescription: 'Garlic Naan is a soft Indian leavened flatbread made with wheat flours and spiced with garlic.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    }

                ]

            },
            {
                'Sides': [
                    {
                        foodImg: './assets/food/Sides/Papad.avif',
                        foodName: "Papad",
                        foodPrice: 79,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Green Salad.avif',
                        foodName: "Green Salad",
                        foodPrice: 149,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Boondi Raita.avif',
                        foodName: "Boondi Raita",
                        foodPrice: 169,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Dal': [
                    {
                        foodImg: './assets/food/Dal/dal tadka.avif',
                        foodName: "Dal Tadka",
                        foodPrice: 399,
                        foodDescription: 'Creamy, delicious, and thick lentil curry enriched with a tempering of spices and whole chillies in ghee.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Dal/dal makhani.avif',
                        foodName: "Dal Makhani",
                        foodPrice: 349,
                        foodDescription: 'Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils',
                        foodRating: '4.5',
                        foodVote: '7 Votes'
                    },
                ]
            },
            {
                'Drinks': [
                    {
                        foodImg: './assets/food/drinks/sprite.avif',
                        foodName: "Sprite",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/thumbs up.avif',
                        foodName: "Thumbs Up",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/coke.avif',
                        foodName: "Coke",
                        foodPrice: 60,
                        foodDescription: 'Can',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Rice': [
                    {
                        foodImg: './assets/food/rice/rice.jpg',
                        foodName: "Rice",
                        foodPrice: 249,
                        foodDescription: 'Fragrant white rice steamed until fluffy. ',
                        foodRating: '4.5',
                        foodVote: '6 Votes'
                    },
                    {
                        foodImg: './assets/food/rice/zeera rice.avif',
                        foodName: "Zeera Rice",
                        foodPrice: 249,
                        foodDescription: 'An Indian dish consisting of rice and cumin seeds.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/rice/dal khichdi.jpg',
                        foodName: "Dal Khichdi",
                        foodPrice: 299,
                        foodDescription: 'A combination of lentils and vegetables cooked with rice in one pot to create a wholesome and delicious vegetarian goulash',
                        foodRating: '4',
                        foodVote: '21 Votes'
                    }
                ]
            },
            {
                'Dessert': [
                    {
                        foodImg: './assets/food/dessert/Rasgulla.avif',
                        foodName: "Rasgulla (2 pcs)",
                        foodPrice: 80,
                        foodDescription: '',
                        foodRating: '4',
                        foodVote: '59 Votes'
                    }
                ]
            }
        ]
    },
    {
        img: './assets/food/Biryani_hotspot.avif',
        discount: '15% OFF',
        restaurantName: 'Biryani Hotspot',
        rating: '3.5',
        cuisine: 'Biryani, North Indian, Mughlai, Kebab',
        price: '₹350 for one',
        delieveryTime: '55 mins',
        veg: false,
        restaurantImgs: [
            { restaurantImg1: './assets/food/restaurant imgs/biryani hotspot/biryanihotspot1.avif' },
            { restaurantImg2: './assets/food/restaurant imgs/biryani hotspot/biryanihotspot2.avif' },
            { restaurantImg3: './assets/food/restaurant imgs/biryani hotspot/biryanihotspot3.avif' },
        ],
        food: [
            {
                'Chicken': [
                    {
                        foodImg: './assets/food/chicken/ChickenShaamiKebab.avif',
                        foodName: "Chicken Shaami Kebab",
                        foodPrice: 420,
                        foodDescription: 'It is an Indian style kabab where cooked chicken is combined with lentils and spices, shaped into a patty and shallow fried.(Portion Size 8 pieces)',
                        foodRating: '4',
                        foodVote: '7 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/chicken/ClassicChickenTikka.avif',
                        foodName: "Classic Chicken Tikka",
                        foodPrice: 389,
                        foodDescription: 'Chicken tikka is cubed chicken that is marinated in spiced yogurt mixture & then grilled to perfection (Portion 8 pieces) NOTE: No colour',
                        foodRating: '4',
                        foodVote: '11 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/chicken/ChickenTandoori.avif',
                        foodName: "Chicken Tandoori",
                        foodPrice: 319,
                        foodDescription: 'It is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor.',
                        foodRating: '4.5',
                        foodVote: '69 Votes',
                        nonVeg: true
                    }
                ]
            },
            {
                'Biryani': [
                    {
                        foodImg: './assets/food/biryani/vegBiryani.avif',
                        foodName: "Veg Biryani",
                        foodPrice: 269,
                        foodDescription: 'Vegetable biryani is an aromatic rice dish made by cooking basmati rice with mix veggies, herbs & biryani spices.',
                        foodRating: '4.5',
                        foodVote: '31 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/biryani/EggBiryani.avif',
                        foodName: "Egg Biryani",
                        foodPrice: 289,
                        foodDescription: 'Egg Biryani or Anda Biryani is a flavorful and delicious Indian rice preparation where rice is cooked with a spicy egg layer and cook in dum method. Potion size 2/4 pieces egg',
                        foodRating: '4.5',
                        foodVote: '9 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/biryani/ChickenTikkaBiryani.avif',
                        foodName: "Chicken Tikka Biryani",
                        foodPrice: 349,
                        foodDescription: 'Chicken Tikka Biryani is a spicy and flavorful, incredibly delicious Rice preparation consist of tikka masala and tikka boneless pieces. (Portion 3/6 pieces Chicken boneless)',
                        foodRating: '4.5',
                        foodVote: '60 Votes',
                        nonVeg: true
                    }
                ]
            },
            {
                'Roomali Rolls': [
                    {
                        foodImg: './assets/food/Roomali Rolls/paneer tikka masala roll.avif',
                        foodName: "Paneer Tikka Masala Roll",
                        foodPrice: 229,
                        foodDescription: 'In this roll the stuffing is a lip-smacking paneer tikka made on skillet, a vibrant green chutney and a crunchy mixed veggie salad wrapped inside a whole wheat dough.',
                        foodRating: '4',
                        foodVote: '18 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Roomali Rolls/chicken tikka masala roll.avif',
                        foodName: "Chicken Tikka Masala Roll",
                        foodPrice: 249,
                        foodDescription: '',
                        foodRating: '4.5',
                        foodVote: '15 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/Roomali Rolls/butter chicken roll.avif',
                        foodName: "Butter Chicken Roll",
                        foodPrice: 259,
                        foodDescription: 'Butter chicken roll is made with our creamy butter chicken masala curry, topped with your favorite vegetables and chutneys, and wrapped in a flakey paratha roll.',
                        foodRating: '4',
                        foodVote: '5 Votes',
                        nonVeg: true
                    }
                ]
            },
            {
                'Veg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/veg tikka and kebabs/veg seekh kebab.jpg',
                        foodName: "Veg Seekh Kebab",
                        foodPrice: 359,
                        foodDescription: 'Veg Seekh kebab is a delicious veg starter made using mixed vegetables and spices.(Portion 8 pieces)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/lahori soya chaap.avif',
                        foodName: "Lahori Soya Chaap",
                        foodPrice: 329,
                        foodDescription: 'Made in red spicy marination cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '11 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/classic panner tikka.avif',
                        foodName: "Classic Paneer Tikka",
                        foodPrice: 359,
                        foodDescription: 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. (Portion 8 pieces)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes',
                        nonVeg: false
                    }

                ]
            },
            {
                'NonVeg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/classic chicken tikka.avif',
                        foodName: "Classic Chicken Tikka",
                        foodPrice: 389,
                        foodDescription: 'Chicken tikka is cubed chicken that is marinated in spiced yogurt mixture & then grilled to perfection (Portion 8 pieces) NOTE: No colour',
                        foodRating: '4',
                        foodVote: '11 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/achari chicken tikka.avif',
                        foodName: "Achari Chicken Tikka",
                        foodPrice: 399,
                        foodDescription: 'It is one of those phenomenal Indian chicken kebabs whose taste is simply unbeatable. Soft tender pieces of chicken bathed in pickling spices (achari masala) & yogurt marinade (Portion 8 pieces) NOTE: No color used.]',
                        foodRating: '4.5',
                        foodVote: '14 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/chicken tandoori.avif',
                        foodName: "Chicken Tandoori",
                        foodPrice: 319,
                        foodDescription: 'It is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor.',
                        foodRating: '4',
                        foodVote: '69 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/afghani tandoori.avif',
                        foodName: "Afghani Tandoori",
                        foodPrice: 339,
                        foodDescription: 'Afghani style tandoori chicken is an incredibly moist and juicy and tender roasted chicken marinated with yogurt, kasoori methi and few spices',
                        foodRating: '4',
                        foodVote: '27 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/fish fry.jpg',
                        foodName: "Fish Fry",
                        foodPrice: 369,
                        foodDescription: 'Fish fry is scrumptious dish made by marinating fish with delectable spices and shallow frying it (Portion Size 8 pieces)',
                        foodRating: '4.5',
                        foodVote: '11 Votes',
                        nonVeg: true
                    }

                ]
            },
            {
                'Veg Curry': [
                    {
                        foodImg: './assets/food/veg curry/Nawaabi Paneer.avif',
                        foodName: "Nawaabi Paneer",
                        foodPrice: 279,
                        foodDescription: 'Nawaabi Paneer curry made in Rich Yellow Gravy',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg curry/Paneer Tikka Masala.avif',
                        foodName: "Paneer Tikka Masala",
                        foodPrice: 309,
                        foodDescription: 'Paneer Tikka Masala Is a Dish of Chunks of Roasted Marinated Cottage cheese in A Spiced Curry Sauce. (Portion 5 pieces Paneer)',
                        foodRating: '4',
                        foodVote: '8 Votes',
                        nonVeg: false
                    }
                ]
            },
            {
                'Breads': [
                    {
                        foodImg: './assets/food/Breads/Roti.avif',
                        foodName: "Roti",
                        foodPrice: 30,
                        foodDescription: 'Handmade soft and fluffy flatbread, cooked on an iron griddle.',
                        foodRating: '4',
                        foodVote: '43 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Naan.avif',
                        foodName: "Naan",
                        foodPrice: 40,
                        foodDescription: 'Savory and soft slightly leavened flatbread cooked in tandoor.',
                        foodRating: '4',
                        foodVote: '72 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Lachha Paratha.avif',
                        foodName: "Laccha Paratha",
                        foodPrice: 60,
                        foodDescription: 'Flaky and multi layered flatbread cooked until crisp on the outside.',
                        foodRating: '4',
                        foodVote: '15 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Roomali Roti.avif',
                        foodName: "Roomali Roti",
                        foodPrice: 45,
                        foodDescription: 'Roomali roti is one of the unleavened Indian breads that is made traditionally in the Awadhi, Mughlai and Hyderabadi cuisine.',
                        foodRating: '4.5',
                        foodVote: '33 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Cheese Naan.avif',
                        foodName: "Cheese Naan",
                        foodPrice: 90,
                        foodDescription: 'Soft and fluffy cheese stuffed naan bread filled with cheesy mozzarella and chives.',
                        foodRating: '4.5',
                        foodVote: '17 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/garlicnaan.jpg',
                        foodName: "Garlic Naan",
                        foodPrice: 80,
                        foodDescription: 'Garlic Naan is a soft Indian leavened flatbread made with wheat flours and spiced with garlic.',
                        foodRating: '4.5',
                        foodVote: '17 Votes',
                        nonVeg: false
                    }

                ]

            },
            {
                'Sides': [
                    {
                        foodImg: './assets/food/Sides/Papad.avif',
                        foodName: "Papad",
                        foodPrice: 79,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Sides/Green Salad.avif',
                        foodName: "Green Salad",
                        foodPrice: 149,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Sides/Boondi Raita.avif',
                        foodName: "Boondi Raita",
                        foodPrice: 169,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    }
                ]
            },
            {
                'Dal': [
                    {
                        foodImg: './assets/food/Dal/dal tadka.avif',
                        foodName: "Dal Tadka",
                        foodPrice: 399,
                        foodDescription: 'Creamy, delicious, and thick lentil curry enriched with a tempering of spices and whole chillies in ghee.',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Dal/dal makhani.avif',
                        foodName: "Dal Makhani",
                        foodPrice: 349,
                        foodDescription: 'Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils',
                        foodRating: '4.5',
                        foodVote: '7 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Dal/dal ghost.avif',
                        foodName: "Dal Ghost",
                        foodPrice: 449,
                        foodDescription: 'A mutton simmered with spices, mixture of toor dal and masoor dal, or ... read more',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: true
                    }
                ]
            },
            {
                'Drinks': [
                    {
                        foodImg: './assets/food/drinks/sprite.avif',
                        foodName: "Sprite",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/drinks/thumbs up.avif',
                        foodName: "Thumbs Up",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/drinks/coke.avif',
                        foodName: "Coke",
                        foodPrice: 60,
                        foodDescription: 'Can',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    }
                ]
            },
            {
                'Rice': [
                    {
                        foodImg: './assets/food/rice/rice.jpg',
                        foodName: "Rice",
                        foodPrice: 249,
                        foodDescription: 'Fragrant white rice steamed until fluffy. ',
                        foodRating: '4.5',
                        foodVote: '6 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/rice/zeera rice.avif',
                        foodName: "Zeera Rice",
                        foodPrice: 249,
                        foodDescription: 'An Indian dish consisting of rice and cumin seeds.',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/rice/dal khichdi.jpg',
                        foodName: "Dal Khichdi",
                        foodPrice: 299,
                        foodDescription: 'A combination of lentils and vegetables cooked with rice in one pot to create a wholesome and delicious vegetarian goulash',
                        foodRating: '4',
                        foodVote: '21 Votes',
                        nonVeg: false
                    }
                ]
            },
            {
                'Dessert': [
                    {
                        foodImg: './assets/food/dessert/Rasgulla.avif',
                        foodName: "Rasgulla (2 pcs)",
                        foodPrice: 80,
                        foodDescription: '',
                        foodRating: '4',
                        foodVote: '59 Votes',
                        nonVeg: false
                    }
                ]
            }
        ]
    },
    {
        img: './assets/food/cake_Company.avif',
        discount: '25% OFF',
        restaurantName: 'Cake Company',
        rating: '3.0',
        cuisine: 'Desserts, Bakery',
        price: '₹100 for one',
        delieveryTime: '20 mins',
        veg: true,
        restaurantImgs: [
            { restaurantImg1: './assets/food/restaurant imgs/cake company/cakecompany1.avif' },
            { restaurantImg2: '' },
            { restaurantImg3: '' },
        ],
        food: [
            {
                'South Indian': [
                    {
                        foodImg: './assets/food/southIndian/cheese dosa.jpeg',
                        foodName: "Cheese Dosa",
                        foodPrice: 200,
                        foodDescription: 'Cheese Dosa is a fusion dish that combines the traditional dosa with the creamy goodness of cheese. It is made by spreading the dosa batter on a hot griddle and adding grated cheese on top. It is then folded and served hot with tomato chutney. It is a popular street food in India.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/idly smabhar.jpeg',
                        foodName: "Idly Sambhar",
                        foodPrice: 104.76,
                        foodDescription: 'Idly sambar is a traditional breakfast dish made with steamed rice and lentil cakes (idly) served with a spicy and tangy lentil-based vegetable stew (sambar). It is often accompanied by coconut chutney and is a nutritious and satisfying meal that is popular throughout India.',
                        foodRating: '3.5',
                        foodVote: '14 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/masala dosa.jpeg',
                        foodName: "Masala Dosa",
                        foodPrice: 166.76,
                        foodDescription: 'Masala Dosa is a popular dish made from rice and lentil batter. It is a crispy crepe filled with a spiced potato and onion mixture. It is served with coconut chutney and sambar, a lentil-based vegetable stew.',
                        foodRating: '4',
                        foodVote: '95 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer_dosa.jpeg',
                        foodName: "Paneer Dosa",
                        foodPrice: 200.76,
                        foodDescription: 'Paneer dosa is a savory crepe made with fermented rice and lentil batter filled with spiced paneer (Indian cottage cheese) and vegetables. It is a popular breakfast dish often served with coconut chutney and sambar. Paneer dosa is a delicious and nutritious meal for vegetarians and non-vegetarians alike.',
                        foodRating: '4.5',
                        foodVote: '195 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer pav bhaji.jpeg',
                        foodName: "Paneer Pav Bhaji",
                        foodPrice: 133.76,
                        foodDescription: 'Paneer Pav Bhaji is a twist on the classic Indian street food dish, Pav Bhaji. It is made with a spicy and flavorful vegetable curry, with the addition of paneer, a type of Indian cheese. It is served with buttered and toasted buns known as pav, and is a delicious and satisfying meal.',
                        foodRating: '3.7',
                        foodVote: '9 Votes'
                    }
                ]
            }
            ,
            {
                'Biryani': [
                    {
                        foodImg: './assets/food/biryani/vegBiryani.avif',
                        foodName: "Veg Biryani",
                        foodPrice: 269,
                        foodDescription: 'Vegetable biryani is an aromatic rice dish made by cooking basmati rice with mix veggies, herbs & biryani spices.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                ]
            },
            {
                'Roomali Rolls': [
                    {
                        foodImg: './assets/food/Roomali Rolls/paneer tikka masala roll.avif',
                        foodName: "Paneer Tikka Masala Roll",
                        foodPrice: 229,
                        foodDescription: 'In this roll the stuffing is a lip-smacking paneer tikka made on skillet, a vibrant green chutney and a crunchy mixed veggie salad wrapped inside a whole wheat dough.',
                        foodRating: '4',
                        foodVote: '18 Votes'
                    },
                ]
            },
            {
                'Veg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/veg tikka and kebabs/veg seekh kebab.jpg',
                        foodName: "Veg Seekh Kebab",
                        foodPrice: 359,
                        foodDescription: 'Veg Seekh kebab is a delicious veg starter made using mixed vegetables and spices.(Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/lahori soya chaap.avif',
                        foodName: "Lahori Soya Chaap",
                        foodPrice: 329,
                        foodDescription: 'Made in red spicy marination cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '11 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/classic panner tikka.avif',
                        foodName: "Classic Paneer Tikka",
                        foodPrice: 359,
                        foodDescription: 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. (Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    }

                ]
            },
            {
                'Veg Curry': [
                    {
                        foodImg: './assets/food/veg curry/Nawaabi Paneer.avif',
                        foodName: "Nawaabi Paneer",
                        foodPrice: 279,
                        foodDescription: 'Nawaabi Paneer curry made in Rich Yellow Gravy',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg curry/Paneer Tikka Masala.avif',
                        foodName: "Paneer Tikka Masala",
                        foodPrice: 309,
                        foodDescription: 'Paneer Tikka Masala Is a Dish of Chunks of Roasted Marinated Cottage cheese in A Spiced Curry Sauce. (Portion 5 pieces Paneer)',
                        foodRating: '4',
                        foodVote: '8 Votes'
                    }
                ]
            },
            {
                'Breads': [
                    {
                        foodImg: './assets/food/Breads/Roti.avif',
                        foodName: "Roti",
                        foodPrice: 30,
                        foodDescription: 'Handmade soft and fluffy flatbread, cooked on an iron griddle.',
                        foodRating: '4',
                        foodVote: '43 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Naan.avif',
                        foodName: "Naan",
                        foodPrice: 40,
                        foodDescription: 'Savory and soft slightly leavened flatbread cooked in tandoor.',
                        foodRating: '4',
                        foodVote: '72 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Lachha Paratha.avif',
                        foodName: "Laccha Paratha",
                        foodPrice: 60,
                        foodDescription: 'Flaky and multi layered flatbread cooked until crisp on the outside.',
                        foodRating: '4',
                        foodVote: '15 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Roomali Roti.avif',
                        foodName: "Roomali Roti",
                        foodPrice: 45,
                        foodDescription: 'Roomali roti is one of the unleavened Indian breads that is made traditionally in the Awadhi, Mughlai and Hyderabadi cuisine.',
                        foodRating: '4.5',
                        foodVote: '33 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Cheese Naan.avif',
                        foodName: "Cheese Naan",
                        foodPrice: 90,
                        foodDescription: 'Soft and fluffy cheese stuffed naan bread filled with cheesy mozzarella and chives.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/garlicnaan.jpg',
                        foodName: "Garlic Naan",
                        foodPrice: 80,
                        foodDescription: 'Garlic Naan is a soft Indian leavened flatbread made with wheat flours and spiced with garlic.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    }

                ]

            },
            {
                'Sides': [
                    {
                        foodImg: './assets/food/Sides/Papad.avif',
                        foodName: "Papad",
                        foodPrice: 79,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Green Salad.avif',
                        foodName: "Green Salad",
                        foodPrice: 149,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Boondi Raita.avif',
                        foodName: "Boondi Raita",
                        foodPrice: 169,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Dal': [
                    {
                        foodImg: './assets/food/Dal/dal tadka.avif',
                        foodName: "Dal Tadka",
                        foodPrice: 399,
                        foodDescription: 'Creamy, delicious, and thick lentil curry enriched with a tempering of spices and whole chillies in ghee.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Dal/dal makhani.avif',
                        foodName: "Dal Makhani",
                        foodPrice: 349,
                        foodDescription: 'Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils',
                        foodRating: '4.5',
                        foodVote: '7 Votes'
                    },
                ]
            },
            {
                'Drinks': [
                    {
                        foodImg: './assets/food/drinks/sprite.avif',
                        foodName: "Sprite",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/thumbs up.avif',
                        foodName: "Thumbs Up",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/coke.avif',
                        foodName: "Coke",
                        foodPrice: 60,
                        foodDescription: 'Can',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Rice': [
                    {
                        foodImg: './assets/food/rice/rice.jpg',
                        foodName: "Rice",
                        foodPrice: 249,
                        foodDescription: 'Fragrant white rice steamed until fluffy. ',
                        foodRating: '4.5',
                        foodVote: '6 Votes'
                    },
                    {
                        foodImg: './assets/food/rice/zeera rice.avif',
                        foodName: "Zeera Rice",
                        foodPrice: 249,
                        foodDescription: 'An Indian dish consisting of rice and cumin seeds.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/rice/dal khichdi.jpg',
                        foodName: "Dal Khichdi",
                        foodPrice: 299,
                        foodDescription: 'A combination of lentils and vegetables cooked with rice in one pot to create a wholesome and delicious vegetarian goulash',
                        foodRating: '4',
                        foodVote: '21 Votes'
                    }
                ]
            },
            {
                'Dessert': [
                    {
                        foodImg: './assets/food/dessert/Rasgulla.avif',
                        foodName: "Rasgulla (2 pcs)",
                        foodPrice: 80,
                        foodDescription: '',
                        foodRating: '4',
                        foodVote: '59 Votes'
                    }
                ]
            }
        ]
    },
    {
        img: './assets/food/chopsticks.avif',
        discount: '45% OFF',
        restaurantName: 'Chopsticks',
        rating: '3.6',
        cuisine: 'Chinese, Momos, Fast Food, North Indian, Street Food',
        price: '₹100 for one',
        delieveryTime: '120 mins',
        veg: true,
        restaurantImgs: [
            { restaurantImg1: './assets/food/restaurant imgs/chopstics/chopstick1.avif' },
            { restaurantImg2: './assets/food/restaurant imgs/chopstics/chopstick2.avif' },
            { restaurantImg3: '' },
        ],
        food: [
            {
                'South Indian': [
                    {
                        foodImg: './assets/food/southIndian/cheese dosa.jpeg',
                        foodName: "Cheese Dosa",
                        foodPrice: 200,
                        foodDescription: 'Cheese Dosa is a fusion dish that combines the traditional dosa with the creamy goodness of cheese. It is made by spreading the dosa batter on a hot griddle and adding grated cheese on top. It is then folded and served hot with tomato chutney. It is a popular street food in India.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/idly smabhar.jpeg',
                        foodName: "Idly Sambhar",
                        foodPrice: 104.76,
                        foodDescription: 'Idly sambar is a traditional breakfast dish made with steamed rice and lentil cakes (idly) served with a spicy and tangy lentil-based vegetable stew (sambar). It is often accompanied by coconut chutney and is a nutritious and satisfying meal that is popular throughout India.',
                        foodRating: '3.5',
                        foodVote: '14 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/masala dosa.jpeg',
                        foodName: "Masala Dosa",
                        foodPrice: 166.76,
                        foodDescription: 'Masala Dosa is a popular dish made from rice and lentil batter. It is a crispy crepe filled with a spiced potato and onion mixture. It is served with coconut chutney and sambar, a lentil-based vegetable stew.',
                        foodRating: '4',
                        foodVote: '95 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer_dosa.jpeg',
                        foodName: "Paneer Dosa",
                        foodPrice: 200.76,
                        foodDescription: 'Paneer dosa is a savory crepe made with fermented rice and lentil batter filled with spiced paneer (Indian cottage cheese) and vegetables. It is a popular breakfast dish often served with coconut chutney and sambar. Paneer dosa is a delicious and nutritious meal for vegetarians and non-vegetarians alike.',
                        foodRating: '4.5',
                        foodVote: '195 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer pav bhaji.jpeg',
                        foodName: "Paneer Pav Bhaji",
                        foodPrice: 133.76,
                        foodDescription: 'Paneer Pav Bhaji is a twist on the classic Indian street food dish, Pav Bhaji. It is made with a spicy and flavorful vegetable curry, with the addition of paneer, a type of Indian cheese. It is served with buttered and toasted buns known as pav, and is a delicious and satisfying meal.',
                        foodRating: '3.7',
                        foodVote: '9 Votes'
                    }
                ]
            }
            ,
            {
                'Biryani': [
                    {
                        foodImg: './assets/food/biryani/vegBiryani.avif',
                        foodName: "Veg Biryani",
                        foodPrice: 269,
                        foodDescription: 'Vegetable biryani is an aromatic rice dish made by cooking basmati rice with mix veggies, herbs & biryani spices.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                ]
            },
            {
                'Roomali Rolls': [
                    {
                        foodImg: './assets/food/Roomali Rolls/paneer tikka masala roll.avif',
                        foodName: "Paneer Tikka Masala Roll",
                        foodPrice: 229,
                        foodDescription: 'In this roll the stuffing is a lip-smacking paneer tikka made on skillet, a vibrant green chutney and a crunchy mixed veggie salad wrapped inside a whole wheat dough.',
                        foodRating: '4',
                        foodVote: '18 Votes'
                    },
                ]
            },
            {
                'Veg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/veg tikka and kebabs/veg seekh kebab.jpg',
                        foodName: "Veg Seekh Kebab",
                        foodPrice: 359,
                        foodDescription: 'Veg Seekh kebab is a delicious veg starter made using mixed vegetables and spices.(Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/lahori soya chaap.avif',
                        foodName: "Lahori Soya Chaap",
                        foodPrice: 329,
                        foodDescription: 'Made in red spicy marination cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '11 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/classic panner tikka.avif',
                        foodName: "Classic Paneer Tikka",
                        foodPrice: 359,
                        foodDescription: 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. (Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    }

                ]
            },
            {
                'Veg Curry': [
                    {
                        foodImg: './assets/food/veg curry/Nawaabi Paneer.avif',
                        foodName: "Nawaabi Paneer",
                        foodPrice: 279,
                        foodDescription: 'Nawaabi Paneer curry made in Rich Yellow Gravy',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg curry/Paneer Tikka Masala.avif',
                        foodName: "Paneer Tikka Masala",
                        foodPrice: 309,
                        foodDescription: 'Paneer Tikka Masala Is a Dish of Chunks of Roasted Marinated Cottage cheese in A Spiced Curry Sauce. (Portion 5 pieces Paneer)',
                        foodRating: '4',
                        foodVote: '8 Votes'
                    }
                ]
            },
            {
                'Breads': [
                    {
                        foodImg: './assets/food/Breads/Roti.avif',
                        foodName: "Roti",
                        foodPrice: 30,
                        foodDescription: 'Handmade soft and fluffy flatbread, cooked on an iron griddle.',
                        foodRating: '4',
                        foodVote: '43 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Naan.avif',
                        foodName: "Naan",
                        foodPrice: 40,
                        foodDescription: 'Savory and soft slightly leavened flatbread cooked in tandoor.',
                        foodRating: '4',
                        foodVote: '72 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Lachha Paratha.avif',
                        foodName: "Laccha Paratha",
                        foodPrice: 60,
                        foodDescription: 'Flaky and multi layered flatbread cooked until crisp on the outside.',
                        foodRating: '4',
                        foodVote: '15 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Roomali Roti.avif',
                        foodName: "Roomali Roti",
                        foodPrice: 45,
                        foodDescription: 'Roomali roti is one of the unleavened Indian breads that is made traditionally in the Awadhi, Mughlai and Hyderabadi cuisine.',
                        foodRating: '4.5',
                        foodVote: '33 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Cheese Naan.avif',
                        foodName: "Cheese Naan",
                        foodPrice: 90,
                        foodDescription: 'Soft and fluffy cheese stuffed naan bread filled with cheesy mozzarella and chives.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/garlicnaan.jpg',
                        foodName: "Garlic Naan",
                        foodPrice: 80,
                        foodDescription: 'Garlic Naan is a soft Indian leavened flatbread made with wheat flours and spiced with garlic.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    }

                ]

            },
            {
                'Sides': [
                    {
                        foodImg: './assets/food/Sides/Papad.avif',
                        foodName: "Papad",
                        foodPrice: 79,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Green Salad.avif',
                        foodName: "Green Salad",
                        foodPrice: 149,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Boondi Raita.avif',
                        foodName: "Boondi Raita",
                        foodPrice: 169,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Dal': [
                    {
                        foodImg: './assets/food/Dal/dal tadka.avif',
                        foodName: "Dal Tadka",
                        foodPrice: 399,
                        foodDescription: 'Creamy, delicious, and thick lentil curry enriched with a tempering of spices and whole chillies in ghee.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Dal/dal makhani.avif',
                        foodName: "Dal Makhani",
                        foodPrice: 349,
                        foodDescription: 'Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils',
                        foodRating: '4.5',
                        foodVote: '7 Votes'
                    },
                ]
            },
            {
                'Drinks': [
                    {
                        foodImg: './assets/food/drinks/sprite.avif',
                        foodName: "Sprite",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/thumbs up.avif',
                        foodName: "Thumbs Up",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/coke.avif',
                        foodName: "Coke",
                        foodPrice: 60,
                        foodDescription: 'Can',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Rice': [
                    {
                        foodImg: './assets/food/rice/rice.jpg',
                        foodName: "Rice",
                        foodPrice: 249,
                        foodDescription: 'Fragrant white rice steamed until fluffy. ',
                        foodRating: '4.5',
                        foodVote: '6 Votes'
                    },
                    {
                        foodImg: './assets/food/rice/zeera rice.avif',
                        foodName: "Zeera Rice",
                        foodPrice: 249,
                        foodDescription: 'An Indian dish consisting of rice and cumin seeds.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/rice/dal khichdi.jpg',
                        foodName: "Dal Khichdi",
                        foodPrice: 299,
                        foodDescription: 'A combination of lentils and vegetables cooked with rice in one pot to create a wholesome and delicious vegetarian goulash',
                        foodRating: '4',
                        foodVote: '21 Votes'
                    }
                ]
            },
            {
                'Dessert': [
                    {
                        foodImg: './assets/food/dessert/Rasgulla.avif',
                        foodName: "Rasgulla (2 pcs)",
                        foodPrice: 80,
                        foodDescription: '',
                        foodRating: '4',
                        foodVote: '59 Votes'
                    }
                ]
            }
        ]
    },
    {
        img: './assets/food/karchi.avif',
        discount: '25% OFF',
        restaurantName: 'Karchi',
        rating: '5.0',
        cuisine: 'North Indian, Mughlai, Kebab, Biryani, Fast Food',
        price: '₹100 for one',
        delieveryTime: '90 mins',
        veg: false,
        restaurantImgs: [
            { restaurantImg1: './assets/food/restaurant imgs/karchi/karchi1.avif' },
            { restaurantImg2: './assets/food/restaurant imgs/karchi/karchi2.avif' },
            { restaurantImg3: './assets/food/restaurant imgs/karchi/karchi3.avif' },
        ],
        food: [
            {
                'Chicken': [
                    {
                        foodImg: './assets/food/chicken/ChickenShaamiKebab.avif',
                        foodName: "Chicken Shaami Kebab",
                        foodPrice: 420,
                        foodDescription: 'It is an Indian style kabab where cooked chicken is combined with lentils and spices, shaped into a patty and shallow fried.(Portion Size 8 pieces)',
                        foodRating: '4',
                        foodVote: '7 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/chicken/ClassicChickenTikka.avif',
                        foodName: "Classic Chicken Tikka",
                        foodPrice: 389,
                        foodDescription: 'Chicken tikka is cubed chicken that is marinated in spiced yogurt mixture & then grilled to perfection (Portion 8 pieces) NOTE: No colour',
                        foodRating: '4',
                        foodVote: '11 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/chicken/ChickenTandoori.avif',
                        foodName: "Chicken Tandoori",
                        foodPrice: 319,
                        foodDescription: 'It is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor.',
                        foodRating: '4.5',
                        foodVote: '69 Votes',
                        nonVeg: true
                    }
                ]
            },
            {
                'Biryani': [
                    {
                        foodImg: './assets/food/biryani/vegBiryani.avif',
                        foodName: "Veg Biryani",
                        foodPrice: 269,
                        foodDescription: 'Vegetable biryani is an aromatic rice dish made by cooking basmati rice with mix veggies, herbs & biryani spices.',
                        foodRating: '4.5',
                        foodVote: '31 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/biryani/EggBiryani.avif',
                        foodName: "Egg Biryani",
                        foodPrice: 289,
                        foodDescription: 'Egg Biryani or Anda Biryani is a flavorful and delicious Indian rice preparation where rice is cooked with a spicy egg layer and cook in dum method. Potion size 2/4 pieces egg',
                        foodRating: '4.5',
                        foodVote: '9 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/biryani/ChickenTikkaBiryani.avif',
                        foodName: "Chicken Tikka Biryani",
                        foodPrice: 349,
                        foodDescription: 'Chicken Tikka Biryani is a spicy and flavorful, incredibly delicious Rice preparation consist of tikka masala and tikka boneless pieces. (Portion 3/6 pieces Chicken boneless)',
                        foodRating: '4.5',
                        foodVote: '60 Votes',
                        nonVeg: true
                    }
                ]
            },
            {
                'Roomali Rolls': [
                    {
                        foodImg: './assets/food/Roomali Rolls/paneer tikka masala roll.avif',
                        foodName: "Paneer Tikka Masala Roll",
                        foodPrice: 229,
                        foodDescription: 'In this roll the stuffing is a lip-smacking paneer tikka made on skillet, a vibrant green chutney and a crunchy mixed veggie salad wrapped inside a whole wheat dough.',
                        foodRating: '4',
                        foodVote: '18 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Roomali Rolls/chicken tikka masala roll.avif',
                        foodName: "Chicken Tikka Masala Roll",
                        foodPrice: 249,
                        foodDescription: '',
                        foodRating: '4.5',
                        foodVote: '15 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Roomali Rolls/butter chicken roll.avif',
                        foodName: "Butter Chicken Roll",
                        foodPrice: 259,
                        foodDescription: 'Butter chicken roll is made with our creamy butter chicken masala curry, topped with your favorite vegetables and chutneys, and wrapped in a flakey paratha roll.',
                        foodRating: '4',
                        foodVote: '5 Votes',
                        nonVeg: false
                    }
                ]
            },
            {
                'Veg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/veg tikka and kebabs/veg seekh kebab.jpg',
                        foodName: "Veg Seekh Kebab",
                        foodPrice: 359,
                        foodDescription: 'Veg Seekh kebab is a delicious veg starter made using mixed vegetables and spices.(Portion 8 pieces)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/lahori soya chaap.avif',
                        foodName: "Lahori Soya Chaap",
                        foodPrice: 329,
                        foodDescription: 'Made in red spicy marination cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '11 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/classic panner tikka.avif',
                        foodName: "Classic Paneer Tikka",
                        foodPrice: 359,
                        foodDescription: 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. (Portion 8 pieces)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes',
                        nonVeg: false
                    }

                ]
            },
            {
                'NonVeg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/classic chicken tikka.avif',
                        foodName: "Classic Chicken Tikka",
                        foodPrice: 389,
                        foodDescription: 'Chicken tikka is cubed chicken that is marinated in spiced yogurt mixture & then grilled to perfection (Portion 8 pieces) NOTE: No colour',
                        foodRating: '4',
                        foodVote: '11 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/achari chicken tikka.avif',
                        foodName: "Achari Chicken Tikka",
                        foodPrice: 399,
                        foodDescription: 'It is one of those phenomenal Indian chicken kebabs whose taste is simply unbeatable. Soft tender pieces of chicken bathed in pickling spices (achari masala) & yogurt marinade (Portion 8 pieces) NOTE: No color used.]',
                        foodRating: '4.5',
                        foodVote: '14 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/chicken tandoori.avif',
                        foodName: "Chicken Tandoori",
                        foodPrice: 319,
                        foodDescription: 'It is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor.',
                        foodRating: '4',
                        foodVote: '69 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/afghani tandoori.avif',
                        foodName: "Afghani Tandoori",
                        foodPrice: 339,
                        foodDescription: 'Afghani style tandoori chicken is an incredibly moist and juicy and tender roasted chicken marinated with yogurt, kasoori methi and few spices',
                        foodRating: '4',
                        foodVote: '27 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/fish fry.jpg',
                        foodName: "Fish Fry",
                        foodPrice: 369,
                        foodDescription: 'Fish fry is scrumptious dish made by marinating fish with delectable spices and shallow frying it (Portion Size 8 pieces)',
                        foodRating: '4.5',
                        foodVote: '11 Votes',
                        nonVeg: true
                    }

                ]
            },
            {
                'Veg Curry': [
                    {
                        foodImg: './assets/food/veg curry/Nawaabi Paneer.avif',
                        foodName: "Nawaabi Paneer",
                        foodPrice: 279,
                        foodDescription: 'Nawaabi Paneer curry made in Rich Yellow Gravy',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg curry/Paneer Tikka Masala.avif',
                        foodName: "Paneer Tikka Masala",
                        foodPrice: 309,
                        foodDescription: 'Paneer Tikka Masala Is a Dish of Chunks of Roasted Marinated Cottage cheese in A Spiced Curry Sauce. (Portion 5 pieces Paneer)',
                        foodRating: '4',
                        foodVote: '8 Votes',
                        nonVeg: false
                    }
                ]
            },
            {
                'Breads': [
                    {
                        foodImg: './assets/food/Breads/Roti.avif',
                        foodName: "Roti",
                        foodPrice: 30,
                        foodDescription: 'Handmade soft and fluffy flatbread, cooked on an iron griddle.',
                        foodRating: '4',
                        foodVote: '43 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Naan.avif',
                        foodName: "Naan",
                        foodPrice: 40,
                        foodDescription: 'Savory and soft slightly leavened flatbread cooked in tandoor.',
                        foodRating: '4',
                        foodVote: '72 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Lachha Paratha.avif',
                        foodName: "Laccha Paratha",
                        foodPrice: 60,
                        foodDescription: 'Flaky and multi layered flatbread cooked until crisp on the outside.',
                        foodRating: '4',
                        foodVote: '15 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Roomali Roti.avif',
                        foodName: "Roomali Roti",
                        foodPrice: 45,
                        foodDescription: 'Roomali roti is one of the unleavened Indian breads that is made traditionally in the Awadhi, Mughlai and Hyderabadi cuisine.',
                        foodRating: '4.5',
                        foodVote: '33 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Cheese Naan.avif',
                        foodName: "Cheese Naan",
                        foodPrice: 90,
                        foodDescription: 'Soft and fluffy cheese stuffed naan bread filled with cheesy mozzarella and chives.',
                        foodRating: '4.5',
                        foodVote: '17 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/garlicnaan.jpg',
                        foodName: "Garlic Naan",
                        foodPrice: 80,
                        foodDescription: 'Garlic Naan is a soft Indian leavened flatbread made with wheat flours and spiced with garlic.',
                        foodRating: '4.5',
                        foodVote: '17 Votes',
                        nonVeg: false
                    }

                ]

            },
            {
                'Sides': [
                    {
                        foodImg: './assets/food/Sides/Papad.avif',
                        foodName: "Papad",
                        foodPrice: 79,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Sides/Green Salad.avif',
                        foodName: "Green Salad",
                        foodPrice: 149,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Sides/Boondi Raita.avif',
                        foodName: "Boondi Raita",
                        foodPrice: 169,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    }
                ]
            },
            {
                'Dal': [
                    {
                        foodImg: './assets/food/Dal/dal tadka.avif',
                        foodName: "Dal Tadka",
                        foodPrice: 399,
                        foodDescription: 'Creamy, delicious, and thick lentil curry enriched with a tempering of spices and whole chillies in ghee.',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Dal/dal makhani.avif',
                        foodName: "Dal Makhani",
                        foodPrice: 349,
                        foodDescription: 'Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils',
                        foodRating: '4.5',
                        foodVote: '7 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Dal/dal ghost.avif',
                        foodName: "Dal Ghost",
                        foodPrice: 449,
                        foodDescription: 'A mutton simmered with spices, mixture of toor dal and masoor dal, or ... read more',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: true
                    }
                ]
            },
            {
                'Drinks': [
                    {
                        foodImg: './assets/food/drinks/sprite.avif',
                        foodName: "Sprite",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/drinks/thumbs up.avif',
                        foodName: "Thumbs Up",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/drinks/coke.avif',
                        foodName: "Coke",
                        foodPrice: 60,
                        foodDescription: 'Can',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    }
                ]
            },
            {
                'Rice': [
                    {
                        foodImg: './assets/food/rice/rice.jpg',
                        foodName: "Rice",
                        foodPrice: 249,
                        foodDescription: 'Fragrant white rice steamed until fluffy. ',
                        foodRating: '4.5',
                        foodVote: '6 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/rice/zeera rice.avif',
                        foodName: "Zeera Rice",
                        foodPrice: 249,
                        foodDescription: 'An Indian dish consisting of rice and cumin seeds.',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/rice/dal khichdi.jpg',
                        foodName: "Dal Khichdi",
                        foodPrice: 299,
                        foodDescription: 'A combination of lentils and vegetables cooked with rice in one pot to create a wholesome and delicious vegetarian goulash',
                        foodRating: '4',
                        foodVote: '21 Votes',
                        nonVeg: false
                    }
                ]
            },
            {
                'Dessert': [
                    {
                        foodImg: './assets/food/dessert/Rasgulla.avif',
                        foodName: "Rasgulla (2 pcs)",
                        foodPrice: 80,
                        foodDescription: '',
                        foodRating: '4',
                        foodVote: '59 Votes',
                        nonVeg: false
                    }
                ]
            }
        ]
    },
    {
        img: './assets/food/kfc.avif',
        discount: '35% OFF',
        restaurantName: 'KFC',
        rating: '3.9',
        cuisine: 'Burger, Fast Food, Biryani, Desserts, Beverages',
        price: '₹400 for one',
        delieveryTime: '30 mins',
        veg: true,
        restaurantImgs: [
            { restaurantImg1: './assets/food/restaurant imgs/KFC/KFC1.avif' },
            { restaurantImg2: './assets/food/restaurant imgs/KFC/KFC2.avif' },
            { restaurantImg3: './assets/food/restaurant imgs/KFC/KFC3.avif' },
        ],
        food: [
            {
                'South Indian': [
                    {
                        foodImg: './assets/food/southIndian/cheese dosa.jpeg',
                        foodName: "Cheese Dosa",
                        foodPrice: 200,
                        foodDescription: 'Cheese Dosa is a fusion dish that combines the traditional dosa with the creamy goodness of cheese. It is made by spreading the dosa batter on a hot griddle and adding grated cheese on top. It is then folded and served hot with tomato chutney. It is a popular street food in India.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/idly smabhar.jpeg',
                        foodName: "Idly Sambhar",
                        foodPrice: 104.76,
                        foodDescription: 'Idly sambar is a traditional breakfast dish made with steamed rice and lentil cakes (idly) served with a spicy and tangy lentil-based vegetable stew (sambar). It is often accompanied by coconut chutney and is a nutritious and satisfying meal that is popular throughout India.',
                        foodRating: '3.5',
                        foodVote: '14 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/masala dosa.jpeg',
                        foodName: "Masala Dosa",
                        foodPrice: 166.76,
                        foodDescription: 'Masala Dosa is a popular dish made from rice and lentil batter. It is a crispy crepe filled with a spiced potato and onion mixture. It is served with coconut chutney and sambar, a lentil-based vegetable stew.',
                        foodRating: '4',
                        foodVote: '95 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer_dosa.jpeg',
                        foodName: "Paneer Dosa",
                        foodPrice: 200.76,
                        foodDescription: 'Paneer dosa is a savory crepe made with fermented rice and lentil batter filled with spiced paneer (Indian cottage cheese) and vegetables. It is a popular breakfast dish often served with coconut chutney and sambar. Paneer dosa is a delicious and nutritious meal for vegetarians and non-vegetarians alike.',
                        foodRating: '4.5',
                        foodVote: '195 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer pav bhaji.jpeg',
                        foodName: "Paneer Pav Bhaji",
                        foodPrice: 133.76,
                        foodDescription: 'Paneer Pav Bhaji is a twist on the classic Indian street food dish, Pav Bhaji. It is made with a spicy and flavorful vegetable curry, with the addition of paneer, a type of Indian cheese. It is served with buttered and toasted buns known as pav, and is a delicious and satisfying meal.',
                        foodRating: '3.7',
                        foodVote: '9 Votes'
                    }
                ]
            }
            ,
            {
                'Biryani': [
                    {
                        foodImg: './assets/food/biryani/vegBiryani.avif',
                        foodName: "Veg Biryani",
                        foodPrice: 269,
                        foodDescription: 'Vegetable biryani is an aromatic rice dish made by cooking basmati rice with mix veggies, herbs & biryani spices.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                ]
            },
            {
                'Roomali Rolls': [
                    {
                        foodImg: './assets/food/Roomali Rolls/paneer tikka masala roll.avif',
                        foodName: "Paneer Tikka Masala Roll",
                        foodPrice: 229,
                        foodDescription: 'In this roll the stuffing is a lip-smacking paneer tikka made on skillet, a vibrant green chutney and a crunchy mixed veggie salad wrapped inside a whole wheat dough.',
                        foodRating: '4',
                        foodVote: '18 Votes'
                    },
                ]
            },
            {
                'Veg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/veg tikka and kebabs/veg seekh kebab.jpg',
                        foodName: "Veg Seekh Kebab",
                        foodPrice: 359,
                        foodDescription: 'Veg Seekh kebab is a delicious veg starter made using mixed vegetables and spices.(Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/lahori soya chaap.avif',
                        foodName: "Lahori Soya Chaap",
                        foodPrice: 329,
                        foodDescription: 'Made in red spicy marination cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '11 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/classic panner tikka.avif',
                        foodName: "Classic Paneer Tikka",
                        foodPrice: 359,
                        foodDescription: 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. (Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    }

                ]
            },
            {
                'Veg Curry': [
                    {
                        foodImg: './assets/food/veg curry/Nawaabi Paneer.avif',
                        foodName: "Nawaabi Paneer",
                        foodPrice: 279,
                        foodDescription: 'Nawaabi Paneer curry made in Rich Yellow Gravy',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg curry/Paneer Tikka Masala.avif',
                        foodName: "Paneer Tikka Masala",
                        foodPrice: 309,
                        foodDescription: 'Paneer Tikka Masala Is a Dish of Chunks of Roasted Marinated Cottage cheese in A Spiced Curry Sauce. (Portion 5 pieces Paneer)',
                        foodRating: '4',
                        foodVote: '8 Votes'
                    }
                ]
            },
            {
                'Breads': [
                    {
                        foodImg: './assets/food/Breads/Roti.avif',
                        foodName: "Roti",
                        foodPrice: 30,
                        foodDescription: 'Handmade soft and fluffy flatbread, cooked on an iron griddle.',
                        foodRating: '4',
                        foodVote: '43 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Naan.avif',
                        foodName: "Naan",
                        foodPrice: 40,
                        foodDescription: 'Savory and soft slightly leavened flatbread cooked in tandoor.',
                        foodRating: '4',
                        foodVote: '72 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Lachha Paratha.avif',
                        foodName: "Laccha Paratha",
                        foodPrice: 60,
                        foodDescription: 'Flaky and multi layered flatbread cooked until crisp on the outside.',
                        foodRating: '4',
                        foodVote: '15 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Roomali Roti.avif',
                        foodName: "Roomali Roti",
                        foodPrice: 45,
                        foodDescription: 'Roomali roti is one of the unleavened Indian breads that is made traditionally in the Awadhi, Mughlai and Hyderabadi cuisine.',
                        foodRating: '4.5',
                        foodVote: '33 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Cheese Naan.avif',
                        foodName: "Cheese Naan",
                        foodPrice: 90,
                        foodDescription: 'Soft and fluffy cheese stuffed naan bread filled with cheesy mozzarella and chives.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/garlicnaan.jpg',
                        foodName: "Garlic Naan",
                        foodPrice: 80,
                        foodDescription: 'Garlic Naan is a soft Indian leavened flatbread made with wheat flours and spiced with garlic.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    }

                ]

            },
            {
                'Sides': [
                    {
                        foodImg: './assets/food/Sides/Papad.avif',
                        foodName: "Papad",
                        foodPrice: 79,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Green Salad.avif',
                        foodName: "Green Salad",
                        foodPrice: 149,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Boondi Raita.avif',
                        foodName: "Boondi Raita",
                        foodPrice: 169,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Dal': [
                    {
                        foodImg: './assets/food/Dal/dal tadka.avif',
                        foodName: "Dal Tadka",
                        foodPrice: 399,
                        foodDescription: 'Creamy, delicious, and thick lentil curry enriched with a tempering of spices and whole chillies in ghee.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Dal/dal makhani.avif',
                        foodName: "Dal Makhani",
                        foodPrice: 349,
                        foodDescription: 'Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils',
                        foodRating: '4.5',
                        foodVote: '7 Votes'
                    },
                ]
            },
            {
                'Drinks': [
                    {
                        foodImg: './assets/food/drinks/sprite.avif',
                        foodName: "Sprite",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/thumbs up.avif',
                        foodName: "Thumbs Up",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/coke.avif',
                        foodName: "Coke",
                        foodPrice: 60,
                        foodDescription: 'Can',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Rice': [
                    {
                        foodImg: './assets/food/rice/rice.jpg',
                        foodName: "Rice",
                        foodPrice: 249,
                        foodDescription: 'Fragrant white rice steamed until fluffy. ',
                        foodRating: '4.5',
                        foodVote: '6 Votes'
                    },
                    {
                        foodImg: './assets/food/rice/zeera rice.avif',
                        foodName: "Zeera Rice",
                        foodPrice: 249,
                        foodDescription: 'An Indian dish consisting of rice and cumin seeds.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/rice/dal khichdi.jpg',
                        foodName: "Dal Khichdi",
                        foodPrice: 299,
                        foodDescription: 'A combination of lentils and vegetables cooked with rice in one pot to create a wholesome and delicious vegetarian goulash',
                        foodRating: '4',
                        foodVote: '21 Votes'
                    }
                ]
            },
            {
                'Dessert': [
                    {
                        foodImg: './assets/food/dessert/Rasgulla.avif',
                        foodName: "Rasgulla (2 pcs)",
                        foodPrice: 80,
                        foodDescription: '',
                        foodRating: '4',
                        foodVote: '59 Votes'
                    }
                ]
            }
        ]
    },
    {
        img: './assets/food/Kwality.avif',
        discount: '10% OFF',
        restaurantName: 'Kwality On Wheels',
        rating: '3.5',
        cuisine: 'North Indian, Chinese, Continental, Fast Food',
        price: '₹200 for one',
        delieveryTime: '60 mins',
        veg: true,
        restaurantImgs: [
            { restaurantImg1: './assets/food/restaurant imgs/Kwality on wheels/kwalityonwheels1.jpg' },
            { restaurantImg2: '' },
            { restaurantImg3: './assets/food/restaurant imgs/Kwality on wheels/kwalityonwheels3.jpg' },
        ],
        food: [
            {
                'South Indian': [
                    {
                        foodImg: './assets/food/southIndian/cheese dosa.jpeg',
                        foodName: "Cheese Dosa",
                        foodPrice: 200,
                        foodDescription: 'Cheese Dosa is a fusion dish that combines the traditional dosa with the creamy goodness of cheese. It is made by spreading the dosa batter on a hot griddle and adding grated cheese on top. It is then folded and served hot with tomato chutney. It is a popular street food in India.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/idly smabhar.jpeg',
                        foodName: "Idly Sambhar",
                        foodPrice: 104.76,
                        foodDescription: 'Idly sambar is a traditional breakfast dish made with steamed rice and lentil cakes (idly) served with a spicy and tangy lentil-based vegetable stew (sambar). It is often accompanied by coconut chutney and is a nutritious and satisfying meal that is popular throughout India.',
                        foodRating: '3.5',
                        foodVote: '14 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/masala dosa.jpeg',
                        foodName: "Masala Dosa",
                        foodPrice: 166.76,
                        foodDescription: 'Masala Dosa is a popular dish made from rice and lentil batter. It is a crispy crepe filled with a spiced potato and onion mixture. It is served with coconut chutney and sambar, a lentil-based vegetable stew.',
                        foodRating: '4',
                        foodVote: '95 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer_dosa.jpeg',
                        foodName: "Paneer Dosa",
                        foodPrice: 200.76,
                        foodDescription: 'Paneer dosa is a savory crepe made with fermented rice and lentil batter filled with spiced paneer (Indian cottage cheese) and vegetables. It is a popular breakfast dish often served with coconut chutney and sambar. Paneer dosa is a delicious and nutritious meal for vegetarians and non-vegetarians alike.',
                        foodRating: '4.5',
                        foodVote: '195 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer pav bhaji.jpeg',
                        foodName: "Paneer Pav Bhaji",
                        foodPrice: 133.76,
                        foodDescription: 'Paneer Pav Bhaji is a twist on the classic Indian street food dish, Pav Bhaji. It is made with a spicy and flavorful vegetable curry, with the addition of paneer, a type of Indian cheese. It is served with buttered and toasted buns known as pav, and is a delicious and satisfying meal.',
                        foodRating: '3.7',
                        foodVote: '9 Votes'
                    }
                ]
            }
            ,
            {
                'Biryani': [
                    {
                        foodImg: './assets/food/biryani/vegBiryani.avif',
                        foodName: "Veg Biryani",
                        foodPrice: 269,
                        foodDescription: 'Vegetable biryani is an aromatic rice dish made by cooking basmati rice with mix veggies, herbs & biryani spices.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                ]
            },
            {
                'Roomali Rolls': [
                    {
                        foodImg: './assets/food/Roomali Rolls/paneer tikka masala roll.avif',
                        foodName: "Paneer Tikka Masala Roll",
                        foodPrice: 229,
                        foodDescription: 'In this roll the stuffing is a lip-smacking paneer tikka made on skillet, a vibrant green chutney and a crunchy mixed veggie salad wrapped inside a whole wheat dough.',
                        foodRating: '4',
                        foodVote: '18 Votes'
                    },
                ]
            },
            {
                'Veg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/veg tikka and kebabs/veg seekh kebab.jpg',
                        foodName: "Veg Seekh Kebab",
                        foodPrice: 359,
                        foodDescription: 'Veg Seekh kebab is a delicious veg starter made using mixed vegetables and spices.(Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/lahori soya chaap.avif',
                        foodName: "Lahori Soya Chaap",
                        foodPrice: 329,
                        foodDescription: 'Made in red spicy marination cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '11 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/classic panner tikka.avif',
                        foodName: "Classic Paneer Tikka",
                        foodPrice: 359,
                        foodDescription: 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. (Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    }

                ]
            },
            {
                'Veg Curry': [
                    {
                        foodImg: './assets/food/veg curry/Nawaabi Paneer.avif',
                        foodName: "Nawaabi Paneer",
                        foodPrice: 279,
                        foodDescription: 'Nawaabi Paneer curry made in Rich Yellow Gravy',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg curry/Paneer Tikka Masala.avif',
                        foodName: "Paneer Tikka Masala",
                        foodPrice: 309,
                        foodDescription: 'Paneer Tikka Masala Is a Dish of Chunks of Roasted Marinated Cottage cheese in A Spiced Curry Sauce. (Portion 5 pieces Paneer)',
                        foodRating: '4',
                        foodVote: '8 Votes'
                    }
                ]
            },
            {
                'Breads': [
                    {
                        foodImg: './assets/food/Breads/Roti.avif',
                        foodName: "Roti",
                        foodPrice: 30,
                        foodDescription: 'Handmade soft and fluffy flatbread, cooked on an iron griddle.',
                        foodRating: '4',
                        foodVote: '43 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Naan.avif',
                        foodName: "Naan",
                        foodPrice: 40,
                        foodDescription: 'Savory and soft slightly leavened flatbread cooked in tandoor.',
                        foodRating: '4',
                        foodVote: '72 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Lachha Paratha.avif',
                        foodName: "Laccha Paratha",
                        foodPrice: 60,
                        foodDescription: 'Flaky and multi layered flatbread cooked until crisp on the outside.',
                        foodRating: '4',
                        foodVote: '15 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Roomali Roti.avif',
                        foodName: "Roomali Roti",
                        foodPrice: 45,
                        foodDescription: 'Roomali roti is one of the unleavened Indian breads that is made traditionally in the Awadhi, Mughlai and Hyderabadi cuisine.',
                        foodRating: '4.5',
                        foodVote: '33 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Cheese Naan.avif',
                        foodName: "Cheese Naan",
                        foodPrice: 90,
                        foodDescription: 'Soft and fluffy cheese stuffed naan bread filled with cheesy mozzarella and chives.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/garlicnaan.jpg',
                        foodName: "Garlic Naan",
                        foodPrice: 80,
                        foodDescription: 'Garlic Naan is a soft Indian leavened flatbread made with wheat flours and spiced with garlic.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    }

                ]

            },
            {
                'Sides': [
                    {
                        foodImg: './assets/food/Sides/Papad.avif',
                        foodName: "Papad",
                        foodPrice: 79,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Green Salad.avif',
                        foodName: "Green Salad",
                        foodPrice: 149,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Boondi Raita.avif',
                        foodName: "Boondi Raita",
                        foodPrice: 169,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Dal': [
                    {
                        foodImg: './assets/food/Dal/dal tadka.avif',
                        foodName: "Dal Tadka",
                        foodPrice: 399,
                        foodDescription: 'Creamy, delicious, and thick lentil curry enriched with a tempering of spices and whole chillies in ghee.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Dal/dal makhani.avif',
                        foodName: "Dal Makhani",
                        foodPrice: 349,
                        foodDescription: 'Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils',
                        foodRating: '4.5',
                        foodVote: '7 Votes'
                    },
                ]
            },
            {
                'Drinks': [
                    {
                        foodImg: './assets/food/drinks/sprite.avif',
                        foodName: "Sprite",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/thumbs up.avif',
                        foodName: "Thumbs Up",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/coke.avif',
                        foodName: "Coke",
                        foodPrice: 60,
                        foodDescription: 'Can',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Rice': [
                    {
                        foodImg: './assets/food/rice/rice.jpg',
                        foodName: "Rice",
                        foodPrice: 249,
                        foodDescription: 'Fragrant white rice steamed until fluffy. ',
                        foodRating: '4.5',
                        foodVote: '6 Votes'
                    },
                    {
                        foodImg: './assets/food/rice/zeera rice.avif',
                        foodName: "Zeera Rice",
                        foodPrice: 249,
                        foodDescription: 'An Indian dish consisting of rice and cumin seeds.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/rice/dal khichdi.jpg',
                        foodName: "Dal Khichdi",
                        foodPrice: 299,
                        foodDescription: 'A combination of lentils and vegetables cooked with rice in one pot to create a wholesome and delicious vegetarian goulash',
                        foodRating: '4',
                        foodVote: '21 Votes'
                    }
                ]
            },
            {
                'Dessert': [
                    {
                        foodImg: './assets/food/dessert/Rasgulla.avif',
                        foodName: "Rasgulla (2 pcs)",
                        foodPrice: 80,
                        foodDescription: '',
                        foodRating: '4',
                        foodVote: '59 Votes'
                    }
                ]
            }
        ]
    },
    {
        img: './assets/food/La_pinoz.avif',
        discount: '35% OFF',
        restaurantName: 'La Pinoz',
        rating: '4.9',
        cuisine: 'Pizza, Pasta, Italian, Fast Food',
        price: '₹200 for one',
        delieveryTime: '10 mins',
        veg: true,
        restaurantImgs: [
            { restaurantImg1: './assets/food/restaurant imgs/La Pinoz/LaPinoz1.avif' },
            { restaurantImg2: './assets/food/restaurant imgs/La Pinoz/LaPinoz2.avif' },
            { restaurantImg3: './assets/food/restaurant imgs/La Pinoz/LaPinoz3.avif' },
        ],
        food: [
            {
                'South Indian': [
                    {
                        foodImg: './assets/food/southIndian/cheese dosa.jpeg',
                        foodName: "Cheese Dosa",
                        foodPrice: 200,
                        foodDescription: 'Cheese Dosa is a fusion dish that combines the traditional dosa with the creamy goodness of cheese. It is made by spreading the dosa batter on a hot griddle and adding grated cheese on top. It is then folded and served hot with tomato chutney. It is a popular street food in India.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/idly smabhar.jpeg',
                        foodName: "Idly Sambhar",
                        foodPrice: 104.76,
                        foodDescription: 'Idly sambar is a traditional breakfast dish made with steamed rice and lentil cakes (idly) served with a spicy and tangy lentil-based vegetable stew (sambar). It is often accompanied by coconut chutney and is a nutritious and satisfying meal that is popular throughout India.',
                        foodRating: '3.5',
                        foodVote: '14 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/masala dosa.jpeg',
                        foodName: "Masala Dosa",
                        foodPrice: 166.76,
                        foodDescription: 'Masala Dosa is a popular dish made from rice and lentil batter. It is a crispy crepe filled with a spiced potato and onion mixture. It is served with coconut chutney and sambar, a lentil-based vegetable stew.',
                        foodRating: '4',
                        foodVote: '95 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer_dosa.jpeg',
                        foodName: "Paneer Dosa",
                        foodPrice: 200.76,
                        foodDescription: 'Paneer dosa is a savory crepe made with fermented rice and lentil batter filled with spiced paneer (Indian cottage cheese) and vegetables. It is a popular breakfast dish often served with coconut chutney and sambar. Paneer dosa is a delicious and nutritious meal for vegetarians and non-vegetarians alike.',
                        foodRating: '4.5',
                        foodVote: '195 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer pav bhaji.jpeg',
                        foodName: "Paneer Pav Bhaji",
                        foodPrice: 133.76,
                        foodDescription: 'Paneer Pav Bhaji is a twist on the classic Indian street food dish, Pav Bhaji. It is made with a spicy and flavorful vegetable curry, with the addition of paneer, a type of Indian cheese. It is served with buttered and toasted buns known as pav, and is a delicious and satisfying meal.',
                        foodRating: '3.7',
                        foodVote: '9 Votes'
                    }
                ]
            }
            ,
            {
                'Biryani': [
                    {
                        foodImg: './assets/food/biryani/vegBiryani.avif',
                        foodName: "Veg Biryani",
                        foodPrice: 269,
                        foodDescription: 'Vegetable biryani is an aromatic rice dish made by cooking basmati rice with mix veggies, herbs & biryani spices.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                ]
            },
            {
                'Roomali Rolls': [
                    {
                        foodImg: './assets/food/Roomali Rolls/paneer tikka masala roll.avif',
                        foodName: "Paneer Tikka Masala Roll",
                        foodPrice: 229,
                        foodDescription: 'In this roll the stuffing is a lip-smacking paneer tikka made on skillet, a vibrant green chutney and a crunchy mixed veggie salad wrapped inside a whole wheat dough.',
                        foodRating: '4',
                        foodVote: '18 Votes'
                    },
                ]
            },
            {
                'Veg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/veg tikka and kebabs/veg seekh kebab.jpg',
                        foodName: "Veg Seekh Kebab",
                        foodPrice: 359,
                        foodDescription: 'Veg Seekh kebab is a delicious veg starter made using mixed vegetables and spices.(Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/lahori soya chaap.avif',
                        foodName: "Lahori Soya Chaap",
                        foodPrice: 329,
                        foodDescription: 'Made in red spicy marination cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '11 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/classic panner tikka.avif',
                        foodName: "Classic Paneer Tikka",
                        foodPrice: 359,
                        foodDescription: 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. (Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    }

                ]
            },
            {
                'Veg Curry': [
                    {
                        foodImg: './assets/food/veg curry/Nawaabi Paneer.avif',
                        foodName: "Nawaabi Paneer",
                        foodPrice: 279,
                        foodDescription: 'Nawaabi Paneer curry made in Rich Yellow Gravy',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg curry/Paneer Tikka Masala.avif',
                        foodName: "Paneer Tikka Masala",
                        foodPrice: 309,
                        foodDescription: 'Paneer Tikka Masala Is a Dish of Chunks of Roasted Marinated Cottage cheese in A Spiced Curry Sauce. (Portion 5 pieces Paneer)',
                        foodRating: '4',
                        foodVote: '8 Votes'
                    }
                ]
            },
            {
                'Breads': [
                    {
                        foodImg: './assets/food/Breads/Roti.avif',
                        foodName: "Roti",
                        foodPrice: 30,
                        foodDescription: 'Handmade soft and fluffy flatbread, cooked on an iron griddle.',
                        foodRating: '4',
                        foodVote: '43 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Naan.avif',
                        foodName: "Naan",
                        foodPrice: 40,
                        foodDescription: 'Savory and soft slightly leavened flatbread cooked in tandoor.',
                        foodRating: '4',
                        foodVote: '72 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Lachha Paratha.avif',
                        foodName: "Laccha Paratha",
                        foodPrice: 60,
                        foodDescription: 'Flaky and multi layered flatbread cooked until crisp on the outside.',
                        foodRating: '4',
                        foodVote: '15 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Roomali Roti.avif',
                        foodName: "Roomali Roti",
                        foodPrice: 45,
                        foodDescription: 'Roomali roti is one of the unleavened Indian breads that is made traditionally in the Awadhi, Mughlai and Hyderabadi cuisine.',
                        foodRating: '4.5',
                        foodVote: '33 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Cheese Naan.avif',
                        foodName: "Cheese Naan",
                        foodPrice: 90,
                        foodDescription: 'Soft and fluffy cheese stuffed naan bread filled with cheesy mozzarella and chives.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/garlicnaan.jpg',
                        foodName: "Garlic Naan",
                        foodPrice: 80,
                        foodDescription: 'Garlic Naan is a soft Indian leavened flatbread made with wheat flours and spiced with garlic.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    }

                ]

            },
            {
                'Sides': [
                    {
                        foodImg: './assets/food/Sides/Papad.avif',
                        foodName: "Papad",
                        foodPrice: 79,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Green Salad.avif',
                        foodName: "Green Salad",
                        foodPrice: 149,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Boondi Raita.avif',
                        foodName: "Boondi Raita",
                        foodPrice: 169,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Dal': [
                    {
                        foodImg: './assets/food/Dal/dal tadka.avif',
                        foodName: "Dal Tadka",
                        foodPrice: 399,
                        foodDescription: 'Creamy, delicious, and thick lentil curry enriched with a tempering of spices and whole chillies in ghee.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Dal/dal makhani.avif',
                        foodName: "Dal Makhani",
                        foodPrice: 349,
                        foodDescription: 'Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils',
                        foodRating: '4.5',
                        foodVote: '7 Votes'
                    },
                ]
            },
            {
                'Drinks': [
                    {
                        foodImg: './assets/food/drinks/sprite.avif',
                        foodName: "Sprite",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/thumbs up.avif',
                        foodName: "Thumbs Up",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/coke.avif',
                        foodName: "Coke",
                        foodPrice: 60,
                        foodDescription: 'Can',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Rice': [
                    {
                        foodImg: './assets/food/rice/rice.jpg',
                        foodName: "Rice",
                        foodPrice: 249,
                        foodDescription: 'Fragrant white rice steamed until fluffy. ',
                        foodRating: '4.5',
                        foodVote: '6 Votes'
                    },
                    {
                        foodImg: './assets/food/rice/zeera rice.avif',
                        foodName: "Zeera Rice",
                        foodPrice: 249,
                        foodDescription: 'An Indian dish consisting of rice and cumin seeds.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/rice/dal khichdi.jpg',
                        foodName: "Dal Khichdi",
                        foodPrice: 299,
                        foodDescription: 'A combination of lentils and vegetables cooked with rice in one pot to create a wholesome and delicious vegetarian goulash',
                        foodRating: '4',
                        foodVote: '21 Votes'
                    }
                ]
            },
            {
                'Dessert': [
                    {
                        foodImg: './assets/food/dessert/Rasgulla.avif',
                        foodName: "Rasgulla (2 pcs)",
                        foodPrice: 80,
                        foodDescription: '',
                        foodRating: '4',
                        foodVote: '59 Votes'
                    }
                ]
            }
        ]

    },
    {
        img: './assets/food/Nazeer_foods.avif',
        discount: '15% OFF',
        restaurantName: 'Nazeer Foods',
        rating: '4.9',
        cuisine: 'North Indian, Fast Food, Biryani',
        price: '₹500 for one',
        delieveryTime: '50 mins',
        veg: false,
        restaurantImgs: [
            { restaurantImg1: './assets/food/restaurant imgs/Nazeer Foods/Nazeer1.avif' },
            { restaurantImg2: '' },
            { restaurantImg3: '' },
        ],
        food: [
            {
                'Chicken': [
                    {
                        foodImg: './assets/food/chicken/ChickenShaamiKebab.avif',
                        foodName: "Chicken Shaami Kebab",
                        foodPrice: 420,
                        foodDescription: 'It is an Indian style kabab where cooked chicken is combined with lentils and spices, shaped into a patty and shallow fried.(Portion Size 8 pieces)',
                        foodRating: '4',
                        foodVote: '7 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/chicken/ClassicChickenTikka.avif',
                        foodName: "Classic Chicken Tikka",
                        foodPrice: 389,
                        foodDescription: 'Chicken tikka is cubed chicken that is marinated in spiced yogurt mixture & then grilled to perfection (Portion 8 pieces) NOTE: No colour',
                        foodRating: '4',
                        foodVote: '11 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/chicken/ChickenTandoori.avif',
                        foodName: "Chicken Tandoori",
                        foodPrice: 319,
                        foodDescription: 'It is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor.',
                        foodRating: '4.5',
                        foodVote: '69 Votes',
                        nonVeg: true
                    }
                ]
            },
            {
                'Biryani': [
                    {
                        foodImg: './assets/food/biryani/vegBiryani.avif',
                        foodName: "Veg Biryani",
                        foodPrice: 269,
                        foodDescription: 'Vegetable biryani is an aromatic rice dish made by cooking basmati rice with mix veggies, herbs & biryani spices.',
                        foodRating: '4.5',
                        foodVote: '31 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/biryani/EggBiryani.avif',
                        foodName: "Egg Biryani",
                        foodPrice: 289,
                        foodDescription: 'Egg Biryani or Anda Biryani is a flavorful and delicious Indian rice preparation where rice is cooked with a spicy egg layer and cook in dum method. Potion size 2/4 pieces egg',
                        foodRating: '4.5',
                        foodVote: '9 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/biryani/ChickenTikkaBiryani.avif',
                        foodName: "Chicken Tikka Biryani",
                        foodPrice: 349,
                        foodDescription: 'Chicken Tikka Biryani is a spicy and flavorful, incredibly delicious Rice preparation consist of tikka masala and tikka boneless pieces. (Portion 3/6 pieces Chicken boneless)',
                        foodRating: '4.5',
                        foodVote: '60 Votes',
                        nonVeg: true
                    }
                ]
            },
            {
                'Roomali Rolls': [
                    {
                        foodImg: './assets/food/Roomali Rolls/paneer tikka masala roll.avif',
                        foodName: "Paneer Tikka Masala Roll",
                        foodPrice: 229,
                        foodDescription: 'In this roll the stuffing is a lip-smacking paneer tikka made on skillet, a vibrant green chutney and a crunchy mixed veggie salad wrapped inside a whole wheat dough.',
                        foodRating: '4',
                        foodVote: '18 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Roomali Rolls/chicken tikka masala roll.avif',
                        foodName: "Chicken Tikka Masala Roll",
                        foodPrice: 249,
                        foodDescription: '',
                        foodRating: '4.5',
                        foodVote: '15 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Roomali Rolls/butter chicken roll.avif',
                        foodName: "Butter Chicken Roll",
                        foodPrice: 259,
                        foodDescription: 'Butter chicken roll is made with our creamy butter chicken masala curry, topped with your favorite vegetables and chutneys, and wrapped in a flakey paratha roll.',
                        foodRating: '4',
                        foodVote: '5 Votes',
                        nonVeg: false
                    }
                ]
            },
            {
                'Veg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/veg tikka and kebabs/veg seekh kebab.jpg',
                        foodName: "Veg Seekh Kebab",
                        foodPrice: 359,
                        foodDescription: 'Veg Seekh kebab is a delicious veg starter made using mixed vegetables and spices.(Portion 8 pieces)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/lahori soya chaap.avif',
                        foodName: "Lahori Soya Chaap",
                        foodPrice: 329,
                        foodDescription: 'Made in red spicy marination cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '11 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/classic panner tikka.avif',
                        foodName: "Classic Paneer Tikka",
                        foodPrice: 359,
                        foodDescription: 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. (Portion 8 pieces)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes',
                        nonVeg: false
                    }

                ]
            },
            {
                'NonVeg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/classic chicken tikka.avif',
                        foodName: "Classic Chicken Tikka",
                        foodPrice: 389,
                        foodDescription: 'Chicken tikka is cubed chicken that is marinated in spiced yogurt mixture & then grilled to perfection (Portion 8 pieces) NOTE: No colour',
                        foodRating: '4',
                        foodVote: '11 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/achari chicken tikka.avif',
                        foodName: "Achari Chicken Tikka",
                        foodPrice: 399,
                        foodDescription: 'It is one of those phenomenal Indian chicken kebabs whose taste is simply unbeatable. Soft tender pieces of chicken bathed in pickling spices (achari masala) & yogurt marinade (Portion 8 pieces) NOTE: No color used.]',
                        foodRating: '4.5',
                        foodVote: '14 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/chicken tandoori.avif',
                        foodName: "Chicken Tandoori",
                        foodPrice: 319,
                        foodDescription: 'It is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor.',
                        foodRating: '4',
                        foodVote: '69 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/afghani tandoori.avif',
                        foodName: "Afghani Tandoori",
                        foodPrice: 339,
                        foodDescription: 'Afghani style tandoori chicken is an incredibly moist and juicy and tender roasted chicken marinated with yogurt, kasoori methi and few spices',
                        foodRating: '4',
                        foodVote: '27 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/fish fry.jpg',
                        foodName: "Fish Fry",
                        foodPrice: 369,
                        foodDescription: 'Fish fry is scrumptious dish made by marinating fish with delectable spices and shallow frying it (Portion Size 8 pieces)',
                        foodRating: '4.5',
                        foodVote: '11 Votes',
                        nonVeg: true
                    }

                ]
            },
            {
                'Veg Curry': [
                    {
                        foodImg: './assets/food/veg curry/Nawaabi Paneer.avif',
                        foodName: "Nawaabi Paneer",
                        foodPrice: 279,
                        foodDescription: 'Nawaabi Paneer curry made in Rich Yellow Gravy',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg curry/Paneer Tikka Masala.avif',
                        foodName: "Paneer Tikka Masala",
                        foodPrice: 309,
                        foodDescription: 'Paneer Tikka Masala Is a Dish of Chunks of Roasted Marinated Cottage cheese in A Spiced Curry Sauce. (Portion 5 pieces Paneer)',
                        foodRating: '4',
                        foodVote: '8 Votes',
                        nonVeg: false
                    }
                ]
            },
            {
                'Breads': [
                    {
                        foodImg: './assets/food/Breads/Roti.avif',
                        foodName: "Roti",
                        foodPrice: 30,
                        foodDescription: 'Handmade soft and fluffy flatbread, cooked on an iron griddle.',
                        foodRating: '4',
                        foodVote: '43 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Naan.avif',
                        foodName: "Naan",
                        foodPrice: 40,
                        foodDescription: 'Savory and soft slightly leavened flatbread cooked in tandoor.',
                        foodRating: '4',
                        foodVote: '72 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Lachha Paratha.avif',
                        foodName: "Laccha Paratha",
                        foodPrice: 60,
                        foodDescription: 'Flaky and multi layered flatbread cooked until crisp on the outside.',
                        foodRating: '4',
                        foodVote: '15 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Roomali Roti.avif',
                        foodName: "Roomali Roti",
                        foodPrice: 45,
                        foodDescription: 'Roomali roti is one of the unleavened Indian breads that is made traditionally in the Awadhi, Mughlai and Hyderabadi cuisine.',
                        foodRating: '4.5',
                        foodVote: '33 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Cheese Naan.avif',
                        foodName: "Cheese Naan",
                        foodPrice: 90,
                        foodDescription: 'Soft and fluffy cheese stuffed naan bread filled with cheesy mozzarella and chives.',
                        foodRating: '4.5',
                        foodVote: '17 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/garlicnaan.jpg',
                        foodName: "Garlic Naan",
                        foodPrice: 80,
                        foodDescription: 'Garlic Naan is a soft Indian leavened flatbread made with wheat flours and spiced with garlic.',
                        foodRating: '4.5',
                        foodVote: '17 Votes',
                        nonVeg: false
                    }

                ]

            },
            {
                'Sides': [
                    {
                        foodImg: './assets/food/Sides/Papad.avif',
                        foodName: "Papad",
                        foodPrice: 79,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Sides/Green Salad.avif',
                        foodName: "Green Salad",
                        foodPrice: 149,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Sides/Boondi Raita.avif',
                        foodName: "Boondi Raita",
                        foodPrice: 169,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    }
                ]
            },
            {
                'Dal': [
                    {
                        foodImg: './assets/food/Dal/dal tadka.avif',
                        foodName: "Dal Tadka",
                        foodPrice: 399,
                        foodDescription: 'Creamy, delicious, and thick lentil curry enriched with a tempering of spices and whole chillies in ghee.',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Dal/dal makhani.avif',
                        foodName: "Dal Makhani",
                        foodPrice: 349,
                        foodDescription: 'Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils',
                        foodRating: '4.5',
                        foodVote: '7 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Dal/dal ghost.avif',
                        foodName: "Dal Ghost",
                        foodPrice: 449,
                        foodDescription: 'A mutton simmered with spices, mixture of toor dal and masoor dal, or ... read more',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: true
                    }
                ]
            },
            {
                'Drinks': [
                    {
                        foodImg: './assets/food/drinks/sprite.avif',
                        foodName: "Sprite",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/drinks/thumbs up.avif',
                        foodName: "Thumbs Up",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/drinks/coke.avif',
                        foodName: "Coke",
                        foodPrice: 60,
                        foodDescription: 'Can',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    }
                ]
            },
            {
                'Rice': [
                    {
                        foodImg: './assets/food/rice/rice.jpg',
                        foodName: "Rice",
                        foodPrice: 249,
                        foodDescription: 'Fragrant white rice steamed until fluffy. ',
                        foodRating: '4.5',
                        foodVote: '6 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/rice/zeera rice.avif',
                        foodName: "Zeera Rice",
                        foodPrice: 249,
                        foodDescription: 'An Indian dish consisting of rice and cumin seeds.',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/rice/dal khichdi.jpg',
                        foodName: "Dal Khichdi",
                        foodPrice: 299,
                        foodDescription: 'A combination of lentils and vegetables cooked with rice in one pot to create a wholesome and delicious vegetarian goulash',
                        foodRating: '4',
                        foodVote: '21 Votes',
                        nonVeg: false
                    }
                ]
            },
            {
                'Dessert': [
                    {
                        foodImg: './assets/food/dessert/Rasgulla.avif',
                        foodName: "Rasgulla (2 pcs)",
                        foodPrice: 80,
                        foodDescription: '',
                        foodRating: '4',
                        foodVote: '59 Votes',
                        nonVeg: false
                    }
                ]
            }
        ]
    },
    {
        img: './assets/food/mcdonald.avif',
        discount: '10% OFF',
        restaurantName: 'Mcdonald',
        rating: '4.0',
        cuisine: 'Burger, Fast Food, Beverages',
        price: '₹300 for one',
        delieveryTime: '40 mins',
        veg: true,
        restaurantImgs: [
            { restaurantImg1: './assets/food/restaurant imgs/Mcdonald/mcdonald1.avif' },
            { restaurantImg2: './assets/food/restaurant imgs/Mcdonald/mcdonald2.avif' },
            { restaurantImg3: './assets/food/restaurant imgs/Mcdonald/mcdonald3.avif' },
        ],
        food: [
            {
                'South Indian': [
                    {
                        foodImg: './assets/food/southIndian/cheese dosa.jpeg',
                        foodName: "Cheese Dosa",
                        foodPrice: 200,
                        foodDescription: 'Cheese Dosa is a fusion dish that combines the traditional dosa with the creamy goodness of cheese. It is made by spreading the dosa batter on a hot griddle and adding grated cheese on top. It is then folded and served hot with tomato chutney. It is a popular street food in India.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/idly smabhar.jpeg',
                        foodName: "Idly Sambhar",
                        foodPrice: 104.76,
                        foodDescription: 'Idly sambar is a traditional breakfast dish made with steamed rice and lentil cakes (idly) served with a spicy and tangy lentil-based vegetable stew (sambar). It is often accompanied by coconut chutney and is a nutritious and satisfying meal that is popular throughout India.',
                        foodRating: '3.5',
                        foodVote: '14 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/masala dosa.jpeg',
                        foodName: "Masala Dosa",
                        foodPrice: 166.76,
                        foodDescription: 'Masala Dosa is a popular dish made from rice and lentil batter. It is a crispy crepe filled with a spiced potato and onion mixture. It is served with coconut chutney and sambar, a lentil-based vegetable stew.',
                        foodRating: '4',
                        foodVote: '95 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer_dosa.jpeg',
                        foodName: "Paneer Dosa",
                        foodPrice: 200.76,
                        foodDescription: 'Paneer dosa is a savory crepe made with fermented rice and lentil batter filled with spiced paneer (Indian cottage cheese) and vegetables. It is a popular breakfast dish often served with coconut chutney and sambar. Paneer dosa is a delicious and nutritious meal for vegetarians and non-vegetarians alike.',
                        foodRating: '4.5',
                        foodVote: '195 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer pav bhaji.jpeg',
                        foodName: "Paneer Pav Bhaji",
                        foodPrice: 133.76,
                        foodDescription: 'Paneer Pav Bhaji is a twist on the classic Indian street food dish, Pav Bhaji. It is made with a spicy and flavorful vegetable curry, with the addition of paneer, a type of Indian cheese. It is served with buttered and toasted buns known as pav, and is a delicious and satisfying meal.',
                        foodRating: '3.7',
                        foodVote: '9 Votes'
                    }
                ]
            }
            ,
            {
                'Biryani': [
                    {
                        foodImg: './assets/food/biryani/vegBiryani.avif',
                        foodName: "Veg Biryani",
                        foodPrice: 269,
                        foodDescription: 'Vegetable biryani is an aromatic rice dish made by cooking basmati rice with mix veggies, herbs & biryani spices.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                ]
            },
            {
                'Roomali Rolls': [
                    {
                        foodImg: './assets/food/Roomali Rolls/paneer tikka masala roll.avif',
                        foodName: "Paneer Tikka Masala Roll",
                        foodPrice: 229,
                        foodDescription: 'In this roll the stuffing is a lip-smacking paneer tikka made on skillet, a vibrant green chutney and a crunchy mixed veggie salad wrapped inside a whole wheat dough.',
                        foodRating: '4',
                        foodVote: '18 Votes'
                    },
                ]
            },
            {
                'Veg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/veg tikka and kebabs/veg seekh kebab.jpg',
                        foodName: "Veg Seekh Kebab",
                        foodPrice: 359,
                        foodDescription: 'Veg Seekh kebab is a delicious veg starter made using mixed vegetables and spices.(Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/lahori soya chaap.avif',
                        foodName: "Lahori Soya Chaap",
                        foodPrice: 329,
                        foodDescription: 'Made in red spicy marination cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '11 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/classic panner tikka.avif',
                        foodName: "Classic Paneer Tikka",
                        foodPrice: 359,
                        foodDescription: 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. (Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    }

                ]
            },
            {
                'Veg Curry': [
                    {
                        foodImg: './assets/food/veg curry/Nawaabi Paneer.avif',
                        foodName: "Nawaabi Paneer",
                        foodPrice: 279,
                        foodDescription: 'Nawaabi Paneer curry made in Rich Yellow Gravy',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg curry/Paneer Tikka Masala.avif',
                        foodName: "Paneer Tikka Masala",
                        foodPrice: 309,
                        foodDescription: 'Paneer Tikka Masala Is a Dish of Chunks of Roasted Marinated Cottage cheese in A Spiced Curry Sauce. (Portion 5 pieces Paneer)',
                        foodRating: '4',
                        foodVote: '8 Votes'
                    }
                ]
            },
            {
                'Breads': [
                    {
                        foodImg: './assets/food/Breads/Roti.avif',
                        foodName: "Roti",
                        foodPrice: 30,
                        foodDescription: 'Handmade soft and fluffy flatbread, cooked on an iron griddle.',
                        foodRating: '4',
                        foodVote: '43 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Naan.avif',
                        foodName: "Naan",
                        foodPrice: 40,
                        foodDescription: 'Savory and soft slightly leavened flatbread cooked in tandoor.',
                        foodRating: '4',
                        foodVote: '72 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Lachha Paratha.avif',
                        foodName: "Laccha Paratha",
                        foodPrice: 60,
                        foodDescription: 'Flaky and multi layered flatbread cooked until crisp on the outside.',
                        foodRating: '4',
                        foodVote: '15 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Roomali Roti.avif',
                        foodName: "Roomali Roti",
                        foodPrice: 45,
                        foodDescription: 'Roomali roti is one of the unleavened Indian breads that is made traditionally in the Awadhi, Mughlai and Hyderabadi cuisine.',
                        foodRating: '4.5',
                        foodVote: '33 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Cheese Naan.avif',
                        foodName: "Cheese Naan",
                        foodPrice: 90,
                        foodDescription: 'Soft and fluffy cheese stuffed naan bread filled with cheesy mozzarella and chives.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/garlicnaan.jpg',
                        foodName: "Garlic Naan",
                        foodPrice: 80,
                        foodDescription: 'Garlic Naan is a soft Indian leavened flatbread made with wheat flours and spiced with garlic.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    }

                ]

            },
            {
                'Sides': [
                    {
                        foodImg: './assets/food/Sides/Papad.avif',
                        foodName: "Papad",
                        foodPrice: 79,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Green Salad.avif',
                        foodName: "Green Salad",
                        foodPrice: 149,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Boondi Raita.avif',
                        foodName: "Boondi Raita",
                        foodPrice: 169,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Dal': [
                    {
                        foodImg: './assets/food/Dal/dal tadka.avif',
                        foodName: "Dal Tadka",
                        foodPrice: 399,
                        foodDescription: 'Creamy, delicious, and thick lentil curry enriched with a tempering of spices and whole chillies in ghee.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Dal/dal makhani.avif',
                        foodName: "Dal Makhani",
                        foodPrice: 349,
                        foodDescription: 'Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils',
                        foodRating: '4.5',
                        foodVote: '7 Votes'
                    },
                ]
            },
            {
                'Drinks': [
                    {
                        foodImg: './assets/food/drinks/sprite.avif',
                        foodName: "Sprite",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/thumbs up.avif',
                        foodName: "Thumbs Up",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/coke.avif',
                        foodName: "Coke",
                        foodPrice: 60,
                        foodDescription: 'Can',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Rice': [
                    {
                        foodImg: './assets/food/rice/rice.jpg',
                        foodName: "Rice",
                        foodPrice: 249,
                        foodDescription: 'Fragrant white rice steamed until fluffy. ',
                        foodRating: '4.5',
                        foodVote: '6 Votes'
                    },
                    {
                        foodImg: './assets/food/rice/zeera rice.avif',
                        foodName: "Zeera Rice",
                        foodPrice: 249,
                        foodDescription: 'An Indian dish consisting of rice and cumin seeds.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/rice/dal khichdi.jpg',
                        foodName: "Dal Khichdi",
                        foodPrice: 299,
                        foodDescription: 'A combination of lentils and vegetables cooked with rice in one pot to create a wholesome and delicious vegetarian goulash',
                        foodRating: '4',
                        foodVote: '21 Votes'
                    }
                ]
            },
            {
                'Dessert': [
                    {
                        foodImg: './assets/food/dessert/Rasgulla.avif',
                        foodName: "Rasgulla (2 pcs)",
                        foodPrice: 80,
                        foodDescription: '',
                        foodRating: '4',
                        foodVote: '59 Votes'
                    }
                ]
            }
        ]
    },
    {
        img: './assets/food/royal_briyani.avif',
        discount: '10% OFF',
        restaurantName: 'Royal Briyani',
        rating: '4.0',
        cuisine: 'Biryani, Kebab, North Indian',
        price: '₹500 for one',
        delieveryTime: '45 mins',
        veg: false,
        restaurantImgs: [
            { restaurantImg1: './assets/food/restaurant imgs/Royal Biryani/royalbiryani1.avif' },
            { restaurantImg2: './assets/food/restaurant imgs/Royal Biryani/royalbiryani2.avif' },
            { restaurantImg3: './assets/food/restaurant imgs/Royal Biryani/royalbiryani3.avif' },
        ],
        food: [
            {
                'Chicken': [
                    {
                        foodImg: './assets/food/chicken/ChickenShaamiKebab.avif',
                        foodName: "Chicken Shaami Kebab",
                        foodPrice: 420,
                        foodDescription: 'It is an Indian style kabab where cooked chicken is combined with lentils and spices, shaped into a patty and shallow fried.(Portion Size 8 pieces)',
                        foodRating: '4',
                        foodVote: '7 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/chicken/ClassicChickenTikka.avif',
                        foodName: "Classic Chicken Tikka",
                        foodPrice: 389,
                        foodDescription: 'Chicken tikka is cubed chicken that is marinated in spiced yogurt mixture & then grilled to perfection (Portion 8 pieces) NOTE: No colour',
                        foodRating: '4',
                        foodVote: '11 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/chicken/ChickenTandoori.avif',
                        foodName: "Chicken Tandoori",
                        foodPrice: 319,
                        foodDescription: 'It is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor.',
                        foodRating: '4.5',
                        foodVote: '69 Votes',
                        nonVeg: true
                    }
                ]
            },
            {
                'Biryani': [
                    {
                        foodImg: './assets/food/biryani/vegBiryani.avif',
                        foodName: "Veg Biryani",
                        foodPrice: 269,
                        foodDescription: 'Vegetable biryani is an aromatic rice dish made by cooking basmati rice with mix veggies, herbs & biryani spices.',
                        foodRating: '4.5',
                        foodVote: '31 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/biryani/EggBiryani.avif',
                        foodName: "Egg Biryani",
                        foodPrice: 289,
                        foodDescription: 'Egg Biryani or Anda Biryani is a flavorful and delicious Indian rice preparation where rice is cooked with a spicy egg layer and cook in dum method. Potion size 2/4 pieces egg',
                        foodRating: '4.5',
                        foodVote: '9 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/biryani/ChickenTikkaBiryani.avif',
                        foodName: "Chicken Tikka Biryani",
                        foodPrice: 349,
                        foodDescription: 'Chicken Tikka Biryani is a spicy and flavorful, incredibly delicious Rice preparation consist of tikka masala and tikka boneless pieces. (Portion 3/6 pieces Chicken boneless)',
                        foodRating: '4.5',
                        foodVote: '60 Votes',
                        nonVeg: true
                    }
                ]
            },
            {
                'Roomali Rolls': [
                    {
                        foodImg: './assets/food/Roomali Rolls/paneer tikka masala roll.avif',
                        foodName: "Paneer Tikka Masala Roll",
                        foodPrice: 229,
                        foodDescription: 'In this roll the stuffing is a lip-smacking paneer tikka made on skillet, a vibrant green chutney and a crunchy mixed veggie salad wrapped inside a whole wheat dough.',
                        foodRating: '4',
                        foodVote: '18 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Roomali Rolls/chicken tikka masala roll.avif',
                        foodName: "Chicken Tikka Masala Roll",
                        foodPrice: 249,
                        foodDescription: '',
                        foodRating: '4.5',
                        foodVote: '15 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Roomali Rolls/butter chicken roll.avif',
                        foodName: "Butter Chicken Roll",
                        foodPrice: 259,
                        foodDescription: 'Butter chicken roll is made with our creamy butter chicken masala curry, topped with your favorite vegetables and chutneys, and wrapped in a flakey paratha roll.',
                        foodRating: '4',
                        foodVote: '5 Votes',
                        nonVeg: false
                    }
                ]
            },
            {
                'Veg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/veg tikka and kebabs/veg seekh kebab.jpg',
                        foodName: "Veg Seekh Kebab",
                        foodPrice: 359,
                        foodDescription: 'Veg Seekh kebab is a delicious veg starter made using mixed vegetables and spices.(Portion 8 pieces)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/lahori soya chaap.avif',
                        foodName: "Lahori Soya Chaap",
                        foodPrice: 329,
                        foodDescription: 'Made in red spicy marination cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '11 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/classic panner tikka.avif',
                        foodName: "Classic Paneer Tikka",
                        foodPrice: 359,
                        foodDescription: 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. (Portion 8 pieces)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes',
                        nonVeg: false
                    }

                ]
            },
            {
                'NonVeg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/classic chicken tikka.avif',
                        foodName: "Classic Chicken Tikka",
                        foodPrice: 389,
                        foodDescription: 'Chicken tikka is cubed chicken that is marinated in spiced yogurt mixture & then grilled to perfection (Portion 8 pieces) NOTE: No colour',
                        foodRating: '4',
                        foodVote: '11 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/achari chicken tikka.avif',
                        foodName: "Achari Chicken Tikka",
                        foodPrice: 399,
                        foodDescription: 'It is one of those phenomenal Indian chicken kebabs whose taste is simply unbeatable. Soft tender pieces of chicken bathed in pickling spices (achari masala) & yogurt marinade (Portion 8 pieces) NOTE: No color used.]',
                        foodRating: '4.5',
                        foodVote: '14 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/chicken tandoori.avif',
                        foodName: "Chicken Tandoori",
                        foodPrice: 319,
                        foodDescription: 'It is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor.',
                        foodRating: '4',
                        foodVote: '69 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/afghani tandoori.avif',
                        foodName: "Afghani Tandoori",
                        foodPrice: 339,
                        foodDescription: 'Afghani style tandoori chicken is an incredibly moist and juicy and tender roasted chicken marinated with yogurt, kasoori methi and few spices',
                        foodRating: '4',
                        foodVote: '27 Votes',
                        nonVeg: true
                    },
                    {
                        foodImg: './assets/food/non veg tikka and kebabs/fish fry.jpg',
                        foodName: "Fish Fry",
                        foodPrice: 369,
                        foodDescription: 'Fish fry is scrumptious dish made by marinating fish with delectable spices and shallow frying it (Portion Size 8 pieces)',
                        foodRating: '4.5',
                        foodVote: '11 Votes',
                        nonVeg: true
                    }

                ]
            },
            {
                'Veg Curry': [
                    {
                        foodImg: './assets/food/veg curry/Nawaabi Paneer.avif',
                        foodName: "Nawaabi Paneer",
                        foodPrice: 279,
                        foodDescription: 'Nawaabi Paneer curry made in Rich Yellow Gravy',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/veg curry/Paneer Tikka Masala.avif',
                        foodName: "Paneer Tikka Masala",
                        foodPrice: 309,
                        foodDescription: 'Paneer Tikka Masala Is a Dish of Chunks of Roasted Marinated Cottage cheese in A Spiced Curry Sauce. (Portion 5 pieces Paneer)',
                        foodRating: '4',
                        foodVote: '8 Votes',
                        nonVeg: false
                    }
                ]
            },
            {
                'Breads': [
                    {
                        foodImg: './assets/food/Breads/Roti.avif',
                        foodName: "Roti",
                        foodPrice: 30,
                        foodDescription: 'Handmade soft and fluffy flatbread, cooked on an iron griddle.',
                        foodRating: '4',
                        foodVote: '43 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Naan.avif',
                        foodName: "Naan",
                        foodPrice: 40,
                        foodDescription: 'Savory and soft slightly leavened flatbread cooked in tandoor.',
                        foodRating: '4',
                        foodVote: '72 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Lachha Paratha.avif',
                        foodName: "Laccha Paratha",
                        foodPrice: 60,
                        foodDescription: 'Flaky and multi layered flatbread cooked until crisp on the outside.',
                        foodRating: '4',
                        foodVote: '15 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Roomali Roti.avif',
                        foodName: "Roomali Roti",
                        foodPrice: 45,
                        foodDescription: 'Roomali roti is one of the unleavened Indian breads that is made traditionally in the Awadhi, Mughlai and Hyderabadi cuisine.',
                        foodRating: '4.5',
                        foodVote: '33 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/Cheese Naan.avif',
                        foodName: "Cheese Naan",
                        foodPrice: 90,
                        foodDescription: 'Soft and fluffy cheese stuffed naan bread filled with cheesy mozzarella and chives.',
                        foodRating: '4.5',
                        foodVote: '17 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Breads/garlicnaan.jpg',
                        foodName: "Garlic Naan",
                        foodPrice: 80,
                        foodDescription: 'Garlic Naan is a soft Indian leavened flatbread made with wheat flours and spiced with garlic.',
                        foodRating: '4.5',
                        foodVote: '17 Votes',
                        nonVeg: false
                    }

                ]

            },
            {
                'Sides': [
                    {
                        foodImg: './assets/food/Sides/Papad.avif',
                        foodName: "Papad",
                        foodPrice: 79,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Sides/Green Salad.avif',
                        foodName: "Green Salad",
                        foodPrice: 149,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Sides/Boondi Raita.avif',
                        foodName: "Boondi Raita",
                        foodPrice: 169,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    }
                ]
            },
            {
                'Dal': [
                    {
                        foodImg: './assets/food/Dal/dal tadka.avif',
                        foodName: "Dal Tadka",
                        foodPrice: 399,
                        foodDescription: 'Creamy, delicious, and thick lentil curry enriched with a tempering of spices and whole chillies in ghee.',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Dal/dal makhani.avif',
                        foodName: "Dal Makhani",
                        foodPrice: 349,
                        foodDescription: 'Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils',
                        foodRating: '4.5',
                        foodVote: '7 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/Dal/dal ghost.avif',
                        foodName: "Dal Ghost",
                        foodPrice: 449,
                        foodDescription: 'A mutton simmered with spices, mixture of toor dal and masoor dal, or ... read more',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: true
                    }
                ]
            },
            {
                'Drinks': [
                    {
                        foodImg: './assets/food/drinks/sprite.avif',
                        foodName: "Sprite",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/drinks/thumbs up.avif',
                        foodName: "Thumbs Up",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/drinks/coke.avif',
                        foodName: "Coke",
                        foodPrice: 60,
                        foodDescription: 'Can',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    }
                ]
            },
            {
                'Rice': [
                    {
                        foodImg: './assets/food/rice/rice.jpg',
                        foodName: "Rice",
                        foodPrice: 249,
                        foodDescription: 'Fragrant white rice steamed until fluffy. ',
                        foodRating: '4.5',
                        foodVote: '6 Votes',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/rice/zeera rice.avif',
                        foodName: "Zeera Rice",
                        foodPrice: 249,
                        foodDescription: 'An Indian dish consisting of rice and cumin seeds.',
                        foodRating: '',
                        foodVote: '',
                        nonVeg: false
                    },
                    {
                        foodImg: './assets/food/rice/dal khichdi.jpg',
                        foodName: "Dal Khichdi",
                        foodPrice: 299,
                        foodDescription: 'A combination of lentils and vegetables cooked with rice in one pot to create a wholesome and delicious vegetarian goulash',
                        foodRating: '4',
                        foodVote: '21 Votes',
                        nonVeg: false
                    }
                ]
            },
            {
                'Dessert': [
                    {
                        foodImg: './assets/food/dessert/Rasgulla.avif',
                        foodName: "Rasgulla (2 pcs)",
                        foodPrice: 80,
                        foodDescription: '',
                        foodRating: '4',
                        foodVote: '59 Votes',
                        nonVeg: false
                    }
                ]
            }
        ]
    },
    {
        img: './assets/food/New_pizza_king.avif',
        discount: '20% OFF',
        restaurantName: 'New Pizza King',
        rating: '4.2',
        cuisine: 'Pizza',
        price: '₹400 for one',
        delieveryTime: '30 mins',
        veg: true,
        restaurantImgs: [
            { restaurantImg1: './assets/food/restaurant imgs/New Pizza King/newpizzaking1.jpg' },
            { restaurantImg2: './assets/food/restaurant imgs/New Pizza King/newpizzaking2.jpg' },
            { restaurantImg3: '' },
        ],
        food: [
            {
                'South Indian': [
                    {
                        foodImg: './assets/food/southIndian/cheese dosa.jpeg',
                        foodName: "Cheese Dosa",
                        foodPrice: 200,
                        foodDescription: 'Cheese Dosa is a fusion dish that combines the traditional dosa with the creamy goodness of cheese. It is made by spreading the dosa batter on a hot griddle and adding grated cheese on top. It is then folded and served hot with tomato chutney. It is a popular street food in India.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/idly smabhar.jpeg',
                        foodName: "Idly Sambhar",
                        foodPrice: 104.76,
                        foodDescription: 'Idly sambar is a traditional breakfast dish made with steamed rice and lentil cakes (idly) served with a spicy and tangy lentil-based vegetable stew (sambar). It is often accompanied by coconut chutney and is a nutritious and satisfying meal that is popular throughout India.',
                        foodRating: '3.5',
                        foodVote: '14 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/masala dosa.jpeg',
                        foodName: "Masala Dosa",
                        foodPrice: 166.76,
                        foodDescription: 'Masala Dosa is a popular dish made from rice and lentil batter. It is a crispy crepe filled with a spiced potato and onion mixture. It is served with coconut chutney and sambar, a lentil-based vegetable stew.',
                        foodRating: '4',
                        foodVote: '95 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer_dosa.jpeg',
                        foodName: "Paneer Dosa",
                        foodPrice: 200.76,
                        foodDescription: 'Paneer dosa is a savory crepe made with fermented rice and lentil batter filled with spiced paneer (Indian cottage cheese) and vegetables. It is a popular breakfast dish often served with coconut chutney and sambar. Paneer dosa is a delicious and nutritious meal for vegetarians and non-vegetarians alike.',
                        foodRating: '4.5',
                        foodVote: '195 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer pav bhaji.jpeg',
                        foodName: "Paneer Pav Bhaji",
                        foodPrice: 133.76,
                        foodDescription: 'Paneer Pav Bhaji is a twist on the classic Indian street food dish, Pav Bhaji. It is made with a spicy and flavorful vegetable curry, with the addition of paneer, a type of Indian cheese. It is served with buttered and toasted buns known as pav, and is a delicious and satisfying meal.',
                        foodRating: '3.7',
                        foodVote: '9 Votes'
                    }
                ]
            }
            ,
            {
                'Biryani': [
                    {
                        foodImg: './assets/food/biryani/vegBiryani.avif',
                        foodName: "Veg Biryani",
                        foodPrice: 269,
                        foodDescription: 'Vegetable biryani is an aromatic rice dish made by cooking basmati rice with mix veggies, herbs & biryani spices.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                ]
            },
            {
                'Roomali Rolls': [
                    {
                        foodImg: './assets/food/Roomali Rolls/paneer tikka masala roll.avif',
                        foodName: "Paneer Tikka Masala Roll",
                        foodPrice: 229,
                        foodDescription: 'In this roll the stuffing is a lip-smacking paneer tikka made on skillet, a vibrant green chutney and a crunchy mixed veggie salad wrapped inside a whole wheat dough.',
                        foodRating: '4',
                        foodVote: '18 Votes'
                    },
                ]
            },
            {
                'Veg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/veg tikka and kebabs/veg seekh kebab.jpg',
                        foodName: "Veg Seekh Kebab",
                        foodPrice: 359,
                        foodDescription: 'Veg Seekh kebab is a delicious veg starter made using mixed vegetables and spices.(Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/lahori soya chaap.avif',
                        foodName: "Lahori Soya Chaap",
                        foodPrice: 329,
                        foodDescription: 'Made in red spicy marination cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '11 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/classic panner tikka.avif',
                        foodName: "Classic Paneer Tikka",
                        foodPrice: 359,
                        foodDescription: 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. (Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    }

                ]
            },
            {
                'Veg Curry': [
                    {
                        foodImg: './assets/food/veg curry/Nawaabi Paneer.avif',
                        foodName: "Nawaabi Paneer",
                        foodPrice: 279,
                        foodDescription: 'Nawaabi Paneer curry made in Rich Yellow Gravy',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg curry/Paneer Tikka Masala.avif',
                        foodName: "Paneer Tikka Masala",
                        foodPrice: 309,
                        foodDescription: 'Paneer Tikka Masala Is a Dish of Chunks of Roasted Marinated Cottage cheese in A Spiced Curry Sauce. (Portion 5 pieces Paneer)',
                        foodRating: '4',
                        foodVote: '8 Votes'
                    }
                ]
            },
            {
                'Breads': [
                    {
                        foodImg: './assets/food/Breads/Roti.avif',
                        foodName: "Roti",
                        foodPrice: 30,
                        foodDescription: 'Handmade soft and fluffy flatbread, cooked on an iron griddle.',
                        foodRating: '4',
                        foodVote: '43 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Naan.avif',
                        foodName: "Naan",
                        foodPrice: 40,
                        foodDescription: 'Savory and soft slightly leavened flatbread cooked in tandoor.',
                        foodRating: '4',
                        foodVote: '72 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Lachha Paratha.avif',
                        foodName: "Laccha Paratha",
                        foodPrice: 60,
                        foodDescription: 'Flaky and multi layered flatbread cooked until crisp on the outside.',
                        foodRating: '4',
                        foodVote: '15 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Roomali Roti.avif',
                        foodName: "Roomali Roti",
                        foodPrice: 45,
                        foodDescription: 'Roomali roti is one of the unleavened Indian breads that is made traditionally in the Awadhi, Mughlai and Hyderabadi cuisine.',
                        foodRating: '4.5',
                        foodVote: '33 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Cheese Naan.avif',
                        foodName: "Cheese Naan",
                        foodPrice: 90,
                        foodDescription: 'Soft and fluffy cheese stuffed naan bread filled with cheesy mozzarella and chives.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/garlicnaan.jpg',
                        foodName: "Garlic Naan",
                        foodPrice: 80,
                        foodDescription: 'Garlic Naan is a soft Indian leavened flatbread made with wheat flours and spiced with garlic.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    }

                ]

            },
            {
                'Sides': [
                    {
                        foodImg: './assets/food/Sides/Papad.avif',
                        foodName: "Papad",
                        foodPrice: 79,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Green Salad.avif',
                        foodName: "Green Salad",
                        foodPrice: 149,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Boondi Raita.avif',
                        foodName: "Boondi Raita",
                        foodPrice: 169,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Dal': [
                    {
                        foodImg: './assets/food/Dal/dal tadka.avif',
                        foodName: "Dal Tadka",
                        foodPrice: 399,
                        foodDescription: 'Creamy, delicious, and thick lentil curry enriched with a tempering of spices and whole chillies in ghee.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Dal/dal makhani.avif',
                        foodName: "Dal Makhani",
                        foodPrice: 349,
                        foodDescription: 'Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils',
                        foodRating: '4.5',
                        foodVote: '7 Votes'
                    },
                ]
            },
            {
                'Drinks': [
                    {
                        foodImg: './assets/food/drinks/sprite.avif',
                        foodName: "Sprite",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/thumbs up.avif',
                        foodName: "Thumbs Up",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/coke.avif',
                        foodName: "Coke",
                        foodPrice: 60,
                        foodDescription: 'Can',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Rice': [
                    {
                        foodImg: './assets/food/rice/rice.jpg',
                        foodName: "Rice",
                        foodPrice: 249,
                        foodDescription: 'Fragrant white rice steamed until fluffy. ',
                        foodRating: '4.5',
                        foodVote: '6 Votes'
                    },
                    {
                        foodImg: './assets/food/rice/zeera rice.avif',
                        foodName: "Zeera Rice",
                        foodPrice: 249,
                        foodDescription: 'An Indian dish consisting of rice and cumin seeds.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/rice/dal khichdi.jpg',
                        foodName: "Dal Khichdi",
                        foodPrice: 299,
                        foodDescription: 'A combination of lentils and vegetables cooked with rice in one pot to create a wholesome and delicious vegetarian goulash',
                        foodRating: '4',
                        foodVote: '21 Votes'
                    }
                ]
            },
            {
                'Dessert': [
                    {
                        foodImg: './assets/food/dessert/Rasgulla.avif',
                        foodName: "Rasgulla (2 pcs)",
                        foodPrice: 80,
                        foodDescription: '',
                        foodRating: '4',
                        foodVote: '59 Votes'
                    }
                ]
            }
        ]
    },
    {
        img: './assets/food/pizzahut.avif',
        discount: '25% OFF',
        restaurantName: 'Pizzahut',
        rating: '3.0',
        cuisine: 'Pizza',
        price: '₹300 for one',
        delieveryTime: '55 mins',
        veg: true,
        restaurantImgs: [
            { restaurantImg1: './assets/food/restaurant imgs/Pizzahut/pizzahut1.avif' },
            { restaurantImg2: './assets/food/restaurant imgs/Pizzahut/pizzahut2.avif' },
            { restaurantImg3: './assets/food/restaurant imgs/Pizzahut/pizzahut3.avif' },
        ],
        food: [
            {
                'South Indian': [
                    {
                        foodImg: './assets/food/southIndian/cheese dosa.jpeg',
                        foodName: "Cheese Dosa",
                        foodPrice: 200,
                        foodDescription: 'Cheese Dosa is a fusion dish that combines the traditional dosa with the creamy goodness of cheese. It is made by spreading the dosa batter on a hot griddle and adding grated cheese on top. It is then folded and served hot with tomato chutney. It is a popular street food in India.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/idly smabhar.jpeg',
                        foodName: "Idly Sambhar",
                        foodPrice: 104.76,
                        foodDescription: 'Idly sambar is a traditional breakfast dish made with steamed rice and lentil cakes (idly) served with a spicy and tangy lentil-based vegetable stew (sambar). It is often accompanied by coconut chutney and is a nutritious and satisfying meal that is popular throughout India.',
                        foodRating: '3.5',
                        foodVote: '14 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/masala dosa.jpeg',
                        foodName: "Masala Dosa",
                        foodPrice: 166.76,
                        foodDescription: 'Masala Dosa is a popular dish made from rice and lentil batter. It is a crispy crepe filled with a spiced potato and onion mixture. It is served with coconut chutney and sambar, a lentil-based vegetable stew.',
                        foodRating: '4',
                        foodVote: '95 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer_dosa.jpeg',
                        foodName: "Paneer Dosa",
                        foodPrice: 200.76,
                        foodDescription: 'Paneer dosa is a savory crepe made with fermented rice and lentil batter filled with spiced paneer (Indian cottage cheese) and vegetables. It is a popular breakfast dish often served with coconut chutney and sambar. Paneer dosa is a delicious and nutritious meal for vegetarians and non-vegetarians alike.',
                        foodRating: '4.5',
                        foodVote: '195 Votes'
                    },
                    {
                        foodImg: './assets/food/southIndian/paneer pav bhaji.jpeg',
                        foodName: "Paneer Pav Bhaji",
                        foodPrice: 133.76,
                        foodDescription: 'Paneer Pav Bhaji is a twist on the classic Indian street food dish, Pav Bhaji. It is made with a spicy and flavorful vegetable curry, with the addition of paneer, a type of Indian cheese. It is served with buttered and toasted buns known as pav, and is a delicious and satisfying meal.',
                        foodRating: '3.7',
                        foodVote: '9 Votes'
                    }
                ]
            }
            ,
            {
                'Biryani': [
                    {
                        foodImg: './assets/food/biryani/vegBiryani.avif',
                        foodName: "Veg Biryani",
                        foodPrice: 269,
                        foodDescription: 'Vegetable biryani is an aromatic rice dish made by cooking basmati rice with mix veggies, herbs & biryani spices.',
                        foodRating: '4.5',
                        foodVote: '31 Votes'
                    },
                ]
            },
            {
                'Roomali Rolls': [
                    {
                        foodImg: './assets/food/Roomali Rolls/paneer tikka masala roll.avif',
                        foodName: "Paneer Tikka Masala Roll",
                        foodPrice: 229,
                        foodDescription: 'In this roll the stuffing is a lip-smacking paneer tikka made on skillet, a vibrant green chutney and a crunchy mixed veggie salad wrapped inside a whole wheat dough.',
                        foodRating: '4',
                        foodVote: '18 Votes'
                    },
                ]
            },
            {
                'Veg-Tikka Kebabs': [
                    {
                        foodImg: './assets/food/veg tikka and kebabs/veg seekh kebab.jpg',
                        foodName: "Veg Seekh Kebab",
                        foodPrice: 359,
                        foodDescription: 'Veg Seekh kebab is a delicious veg starter made using mixed vegetables and spices.(Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/lahori soya chaap.avif',
                        foodName: "Lahori Soya Chaap",
                        foodPrice: 329,
                        foodDescription: 'Made in red spicy marination cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '11 Votes'
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/classic panner tikka.avif',
                        foodName: "Classic Paneer Tikka",
                        foodPrice: 359,
                        foodDescription: 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. (Portion 8 pieces)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg tikka and kebabs/malai soya chaap.avif',
                        foodName: "Malai Soya Chaap",
                        foodPrice: 339,
                        foodDescription: 'An Exclusive preparation made with earthy masala, marinated in White Masala cooked in tandoor (Portion 8 pieces)',
                        foodRating: '4',
                        foodVote: '10 Votes'
                    }

                ]
            },
            {
                'Veg Curry': [
                    {
                        foodImg: './assets/food/veg curry/Nawaabi Paneer.avif',
                        foodName: "Nawaabi Paneer",
                        foodPrice: 279,
                        foodDescription: 'Nawaabi Paneer curry made in Rich Yellow Gravy',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/veg curry/Paneer Tikka Masala.avif',
                        foodName: "Paneer Tikka Masala",
                        foodPrice: 309,
                        foodDescription: 'Paneer Tikka Masala Is a Dish of Chunks of Roasted Marinated Cottage cheese in A Spiced Curry Sauce. (Portion 5 pieces Paneer)',
                        foodRating: '4',
                        foodVote: '8 Votes'
                    }
                ]
            },
            {
                'Breads': [
                    {
                        foodImg: './assets/food/Breads/Roti.avif',
                        foodName: "Roti",
                        foodPrice: 30,
                        foodDescription: 'Handmade soft and fluffy flatbread, cooked on an iron griddle.',
                        foodRating: '4',
                        foodVote: '43 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Naan.avif',
                        foodName: "Naan",
                        foodPrice: 40,
                        foodDescription: 'Savory and soft slightly leavened flatbread cooked in tandoor.',
                        foodRating: '4',
                        foodVote: '72 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Lachha Paratha.avif',
                        foodName: "Laccha Paratha",
                        foodPrice: 60,
                        foodDescription: 'Flaky and multi layered flatbread cooked until crisp on the outside.',
                        foodRating: '4',
                        foodVote: '15 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Roomali Roti.avif',
                        foodName: "Roomali Roti",
                        foodPrice: 45,
                        foodDescription: 'Roomali roti is one of the unleavened Indian breads that is made traditionally in the Awadhi, Mughlai and Hyderabadi cuisine.',
                        foodRating: '4.5',
                        foodVote: '33 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/Cheese Naan.avif',
                        foodName: "Cheese Naan",
                        foodPrice: 90,
                        foodDescription: 'Soft and fluffy cheese stuffed naan bread filled with cheesy mozzarella and chives.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    },
                    {
                        foodImg: './assets/food/Breads/garlicnaan.jpg',
                        foodName: "Garlic Naan",
                        foodPrice: 80,
                        foodDescription: 'Garlic Naan is a soft Indian leavened flatbread made with wheat flours and spiced with garlic.',
                        foodRating: '4.5',
                        foodVote: '17 Votes'
                    }

                ]

            },
            {
                'Sides': [
                    {
                        foodImg: './assets/food/Sides/Papad.avif',
                        foodName: "Papad",
                        foodPrice: 79,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Green Salad.avif',
                        foodName: "Green Salad",
                        foodPrice: 149,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Sides/Boondi Raita.avif',
                        foodName: "Boondi Raita",
                        foodPrice: 169,
                        foodDescription: '',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Dal': [
                    {
                        foodImg: './assets/food/Dal/dal tadka.avif',
                        foodName: "Dal Tadka",
                        foodPrice: 399,
                        foodDescription: 'Creamy, delicious, and thick lentil curry enriched with a tempering of spices and whole chillies in ghee.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/Dal/dal makhani.avif',
                        foodName: "Dal Makhani",
                        foodPrice: 349,
                        foodDescription: 'Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils',
                        foodRating: '4.5',
                        foodVote: '7 Votes'
                    },
                ]
            },
            {
                'Drinks': [
                    {
                        foodImg: './assets/food/drinks/sprite.avif',
                        foodName: "Sprite",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/thumbs up.avif',
                        foodName: "Thumbs Up",
                        foodPrice: 60,
                        foodDescription: '(Can)',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/drinks/coke.avif',
                        foodName: "Coke",
                        foodPrice: 60,
                        foodDescription: 'Can',
                        foodRating: '',
                        foodVote: ''
                    }
                ]
            },
            {
                'Rice': [
                    {
                        foodImg: './assets/food/rice/rice.jpg',
                        foodName: "Rice",
                        foodPrice: 249,
                        foodDescription: 'Fragrant white rice steamed until fluffy. ',
                        foodRating: '4.5',
                        foodVote: '6 Votes'
                    },
                    {
                        foodImg: './assets/food/rice/zeera rice.avif',
                        foodName: "Zeera Rice",
                        foodPrice: 249,
                        foodDescription: 'An Indian dish consisting of rice and cumin seeds.',
                        foodRating: '',
                        foodVote: ''
                    },
                    {
                        foodImg: './assets/food/rice/dal khichdi.jpg',
                        foodName: "Dal Khichdi",
                        foodPrice: 299,
                        foodDescription: 'A combination of lentils and vegetables cooked with rice in one pot to create a wholesome and delicious vegetarian goulash',
                        foodRating: '4',
                        foodVote: '21 Votes'
                    }
                ]
            },
            {
                'Dessert': [
                    {
                        foodImg: './assets/food/dessert/Rasgulla.avif',
                        foodName: "Rasgulla (2 pcs)",
                        foodPrice: 80,
                        foodDescription: '',
                        foodRating: '4',
                        foodVote: '59 Votes'
                    }
                ]
            }
        ]
    },
]
var deliveryRestaurantsContainer = document.querySelector('.deliveryRestaurants-container');

deliveryRestaurants.forEach((item, idx) => {
    displayRestaurants(item, idx)
})

// function to filter restaurants based on criteria
function filterRestaurants() {
    var isRatingFilterSelected = ratingBoxFlag === 0;
    var isPureVegFilterSelected = pureVegFlag === 0;

    //both the filters are selected
    if (isRatingFilterSelected && isPureVegFilterSelected) {
        deliveryRestaurantsContainer.innerHTML = '';
        deliveryRestaurants.filter(item => item.rating >= 4 && item.veg === true).forEach((item, idx) => {
            displayRestaurants(item, idx);
        });
    }
    else if (isRatingFilterSelected) {
        // Only the Rating filter is selected
        deliveryRestaurantsContainer.innerHTML = '';
        deliveryRestaurants.filter(item => item.rating >= 4).forEach((item, idx) => {
            displayRestaurants(item, idx);
        });
    }
    else if (isPureVegFilterSelected) {
        //only pure veg filter is selected
        deliveryRestaurantsContainer.innerHTML = '';
        deliveryRestaurants.filter(item => item.veg === true).forEach((item, idx) => {
            displayRestaurants(item, idx);
        });
    }
    else {
        // No filters are selected
        deliveryRestaurantsContainer.innerHTML = '';
        deliveryRestaurants.forEach((item, idx) => {
            displayRestaurants(item, idx);
        });
    }
}

//filter
//filter image and filter count visible hidden
var filterImage = document.querySelector('.filter-image');
var filterCount = document.querySelector('.filter-count')


//Rating 4.0+ filter
var ratingBoxFilter = document.querySelector('.rating-box')
var cross1 = document.querySelector('.cross-1')
ratingBoxFlag = 1;

ratingBoxFilter.addEventListener('click', () => {

    if (ratingBoxFlag == 1) {
        ratingBoxFilter.style.backgroundColor = 'red';
        ratingBoxFilter.style.color = 'white';
        cross1.style.display = 'block';
        ratingBoxFlag = 0;
        // filter count and making it visible hidden based on count
        filterImage.style.display = 'none';
        filterCount.style.display = 'flex';
        filterCount.textContent = parseInt(filterCount.textContent) + 1;
    }
    else {
        ratingBoxFilter.style.backgroundColor = 'white';
        ratingBoxFilter.style.color = 'rgb(156, 156, 156)';
        cross1.style.display = 'none';
        ratingBoxFlag = 1;
        // filter count and making it visible hidden based on count using if else
        filterCount.textContent = parseInt(filterCount.textContent) - 1;
        if (filterCount.textContent == 0) {
            filterCount.style.display = 'none';
            filterImage.style.display = 'flex';
        }
        else {
            filterImage.style.display = 'none';
            filterCount.style.display = 'flex';
            filterCount.textContent = filterCount.textContent;
        }
    }

    //function to show restaurants with filter 
    filterRestaurants();
})

//pure veg filter
var pureVegFilter = document.querySelector('.pure-veg-box')
var cross2 = document.querySelector('.cross-2')
pureVegFlag = 1;

pureVegFilter.addEventListener('click', () => {

    if (pureVegFlag == 1) {
        pureVegFilter.style.backgroundColor = 'red';
        pureVegFilter.style.color = 'white';
        cross2.style.display = 'block';
        pureVegFlag = 0;
        // filter count and making it visible hidden
        filterImage.style.display = 'none';
        filterCount.style.display = 'flex';
        filterCount.textContent = parseInt(filterCount.textContent) + 1;
    }
    else {
        pureVegFilter.style.backgroundColor = 'white';
        pureVegFilter.style.color = 'rgb(156, 156, 156)';
        cross2.style.display = 'none';
        pureVegFlag = 1;
        // filter count and making it visible hidden based on count using if else
        filterCount.textContent = parseInt(filterCount.textContent) - 1;
        if (filterCount.textContent == 0) {
            filterCount.style.display = 'none';
            filterImage.style.display = 'flex';
        }
        else {
            filterImage.style.display = 'none';
            filterCount.style.display = 'flex';
            filterCount.textContent = filterCount.textContent;
        }
    }
    //function to show restaurants with filter 
    filterRestaurants();
})

//intitialy when screen loads 
filterRestaurants();


// footer code
var showCountry = document.querySelector('.show-country')
var countriesDropDown = document.querySelector('.countries-drop-down');
var showLanguages = document.querySelector('.show-language');
var languageDropDown = document.querySelector('.languages-drop-down')
var countiresAdded = false;



showCountry.addEventListener('click', () => {
    if (countriesDropDown.style.display === 'block') {
        countriesDropDown.style.display = 'none';
    } else {
        if (languageDropDown.style.display === 'block') {
            languageDropDown.style.display = 'none';
        }
        if (!countiresAdded) {
            countiresWithFlagName();
            countiresAdded = true;
        }

        countriesDropDown.style.display = 'block';
    }
})

var languagesAdded = false;
showLanguages.addEventListener('click', () => {
    if (languageDropDown.style.display === 'block') {
        languageDropDown.style.display = 'none';
    } else {
        if (countriesDropDown.style.display == 'block') {
            countriesDropDown.style.display = 'none';
        }
        if (!languagesAdded) {
            language();
            languagesAdded = true;
        }

        languageDropDown.style.display = 'block';
    }
})

//drop down for countires
var mainCountryName = document.querySelector('.country-name');
var countryFlag = document.querySelector('.country-flag')
function countiresWithFlagName() {


    var countries = [
        { src: './assets/icons/flags/Australia.png', countryName: 'Australia' },
        { src: './assets/icons/flags/Bahrain.png', countryName: 'Bahrain' },
        { src: './assets/icons/flags/Chile.png', countryName: 'Chile' },
        { src: './assets/icons/flags/Egypt.png', countryName: 'Egypt' },
        { src: './assets/icons/flags/Greece.png', countryName: 'Greece' },
        { src: './assets/icons/flags/India.png', countryName: 'India' },
        { src: './assets/icons/flags/Ireland.png', countryName: 'Ireland' },
        { src: './assets/icons/flags/Italy.png', countryName: 'Italy' },
        { src: './assets/icons/flags/japan.png', countryName: 'Japan' },
        { src: './assets/icons/flags/Jordan.png', countryName: 'Jordan' },
        { src: './assets/icons/flags/Kuwait.png', countryName: 'Kuwait' },
        { src: './assets/icons/flags/Malaysia.png', countryName: 'Malaysia' },
        { src: './assets/icons/flags/New Zealand.png', countryName: 'New Zealand' },
        { src: './assets/icons/flags/Peru.png', countryName: 'Peru' },
        { src: './assets/icons/flags/Romania.png', countryName: 'Romania' },
        { src: './assets/icons/flags/Saudi Arabia.png', countryName: 'Saudi Arabia' },
        { src: './assets/icons/flags/Switzerland.png', countryName: 'Switzerland' },
        { src: './assets/icons/flags/uk.png', countryName: 'UK' },
        { src: './assets/icons/flags/Vietnam.png', countryName: 'Vietnam' },
        { src: './assets/icons/flags/Yemen.png', countryName: 'Yemen' },
    ]


    function displayData(item, idx) {

        var countriesDropDownContainer = document.querySelector('.countries-drop-down-container');

        var flagWithName = document.createElement('div');
        flagWithName.classList.add('flag-with-name')

        var flagImage = document.createElement('img');
        var countryName = document.createElement('p');

        flagImage.src = item.src;
        countryName.textContent = item.countryName;

        flagWithName.appendChild(flagImage);
        flagWithName.appendChild(countryName);

        countriesDropDownContainer.appendChild(flagWithName);

        flagWithName.addEventListener('click', function () {
            countryFlag.setAttribute('src', flagImage.src)
            mainCountryName.textContent = flagWithName.textContent;

            countriesDropDown.style.display = 'none';
        })
    }


    countries.forEach((item, idx) => {
        displayData(item, idx)
    })
}

//drop down for languages
var showLanguageOnLanguageBox = document.querySelector('.show-language-on-language-box');
function language() {
    var languages = ['English', 'Türkçe', 'हिंदी', 'Português(BR)', 'Indonesian', 'Português(PT)', 'Español', 'Čeština', 'Slovenčina', 'Polish', 'Italian', 'Vietnamese']

    function displayData(item, idx) {

        var languagesDropDownContainer = document.querySelector('.languages-drop-down-container');

        var languagesWithName = document.createElement('div');
        languagesWithName.classList.add('language-with-name')

        var languagesName = document.createElement('p');
        languagesName.textContent = item;

        languagesWithName.appendChild(languagesName);

        languagesDropDownContainer.appendChild(languagesWithName);

        languagesName.addEventListener('click', function () {
            showLanguageOnLanguageBox.textContent = languagesName.textContent;
            languageDropDown.style.display = 'none';
        })
    }


    languages.forEach((item, idx) => {
        displayData(item, idx)
    })
}


// order on app notfication close
var footerDisclaimerSMContainer = document.querySelector('.footer-disclaimer-sm-container');
var footerDisclaimerClose = document.querySelector('.close-notification')

footerDisclaimerClose.addEventListener('click', () => {
    footerDisclaimerSMContainer.style.display = 'none';
})

//delivery dining out for small screen
var deliveryContainerSM = document.querySelector('.delivery-container-sm');
var diningOutContainerSM = document.querySelector('.dining-out-container-sm');

deliveryContainerSM.addEventListener('click', () => {
    deliveryContainerSM.style.borderTop = "2px solid red";
    diningOutContainerSM.style.borderTop = "2px solid white";
})

diningOutContainerSM.addEventListener('click', () => {
    diningOutContainerSM.style.borderTop = "2px solid red";
    deliveryContainerSM.style.borderTop = "2px solid white";
})


// search functionality fo bg screens

var searchInput = document.querySelector('.search-input');
var searchDishContainer = document.querySelector('.search-dish-container');

function searchInputFunction(searchInputValue) {

    searchDishContainer.innerHTML = '';
    var searchedRestaurants = deliveryRestaurants.filter((item) =>
        (item.restaurantName.toLowerCase().includes(searchInputValue.toLowerCase()) ||
            item.cuisine.toLowerCase().includes(searchInputValue.toLowerCase())) &&
        searchInputValue.length > 0)

    if (searchedRestaurants.length == 0 && searchInputValue.length != 0) {
        searchDishContainer.style.display = 'block';
        searchDishContainer.style.overflowY = 'hidden'
        searchDishContainer.style.color = 'rgb(156, 156, 156)';
        searchDishContainer.style.padding = '1.3rem 1rem';
        searchDishContainer.innerHTML = 'Oops! <br><p style="font-size:0.8rem; margin-top:0.2rem">We could not understand what you mean,try rephrasing the query.</p>'
        searchDishContainer.style.height = 'auto';

    }
    else {
        searchedRestaurants.forEach((item, idx) => {
            searchDishContainer.style.display = 'block';
            searchDishContainer.style.height = '88vh';
            searchDishContainer.style.backgroundColor = 'white';
            displayRestaurantOnSearch(item, idx);
        });

        if (searchInputValue.length === 0) {
            searchDishContainer.style.display = 'none';
        }
    }
}

searchInput.addEventListener('input', function () {
    searchDishContainer.innerHTML = '';
    let searchInputValue = searchInput.value;
    searchInputFunction(searchInputValue)

});


function displayRestaurantOnSearch(item, idx) {
    var searchDishContainer = document.querySelector('.search-dish-container');

    var searchRestaurantContainerImgDetails = document.createElement('div');
    searchRestaurantContainerImgDetails.classList.add('search-restaurant-container-img-details');

    var searchRestaurantImg = document.createElement('img');
    searchRestaurantImg.classList.add('search-restaurant-img');
    searchRestaurantImg.src = item.img;
    searchRestaurantContainerImgDetails.appendChild(searchRestaurantImg);

    var searchRestaurantContainerDetails = document.createElement('div');
    searchRestaurantContainerDetails.classList.add('search-restaurant-container-details');

    //restaurant name
    var searchRestaurantHeading = document.createElement('p');
    searchRestaurantHeading.classList.add('search-restaurant-heading');
    searchRestaurantHeading.textContent = item.restaurantName;
    searchRestaurantContainerDetails.appendChild(searchRestaurantHeading);

    // rating
    var searchRestaurantRatingContainer = document.createElement('div');
    searchRestaurantRatingContainer.classList.add('search-restaurant-rating-container');


    let restaurantRating = document.createElement('b');
    restaurantRating.classList.add('search-restaurant-rating');
    restaurantRating.textContent = item.rating;
    searchRestaurantRatingContainer.appendChild(restaurantRating)

    let starIcon = document.createElement('p');
    starIcon.classList.add('search-star-icon')
    starIcon.innerHTML = '&#9734';
    starIcon.style.margin = '0 0 3px 2px';
    searchRestaurantRatingContainer.appendChild(starIcon)

    searchRestaurantContainerDetails.appendChild(searchRestaurantRatingContainer);

    let searchRestaurantOrderNow = document.createElement('div');
    searchRestaurantOrderNow.classList.add('search-restaurant-order-now');
    let orderNow = document.createElement('p');
    orderNow.classList.add('order-now');
    orderNow.textContent = 'Order Now';
    searchRestaurantOrderNow.appendChild(orderNow);

    let redRightArrow = document.createElement('img');
    redRightArrow.src = './assets/icons/red-right-arrow.png';
    redRightArrow.style.width = '1.1rem';
    searchRestaurantOrderNow.appendChild(redRightArrow);
    searchRestaurantContainerDetails.appendChild(searchRestaurantOrderNow);

    let searchRestaurantDeliverytime = document.createElement('p');
    searchRestaurantDeliverytime.classList.add('search-restaurant-deliverytime');
    searchRestaurantDeliverytime.textContent = 'Delivery in ' + item.delieveryTime;
    searchRestaurantContainerDetails.appendChild(searchRestaurantDeliverytime);


    searchRestaurantContainerImgDetails.appendChild(searchRestaurantContainerDetails);

    searchDishContainer.appendChild(searchRestaurantContainerImgDetails);

    //detail of restraunt
    searchRestaurantContainerImgDetails.addEventListener('click', () => {
        localStorage.setItem('selectedRestauraunt', JSON.stringify(item))

        setTimeout(() => {
            let restaurantName = item.restaurantName;
            let restaurantNameReplace = restaurantName.replace(' ', "-").toLowerCase();
            window.location.href = `restrauntDetail.html?city=${encodeURIComponent(cityValue)}&restaurant=${encodeURIComponent(restaurantNameReplace)}`;
        }, 100);
    }
    )
}

// voice search for bg screens
let microphoneContainer = document.querySelector('.microphone-container');
let recognition;

microphoneContainer.addEventListener('click', function () {
    microphoneContainer.style.backgroundColor = 'red';
    microphoneContainer.style.transform = 'scale(1.5)';
    microphoneContainer.style.transition = 'transform 0.1s ease-in-out';

    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        let timeoutId;

        //Handle the result event
        recognition.onresult = function (event) {
            const transcript = event.results[0][0].transcript;
            let voiceInputValue = document.querySelector('.search-input').value = transcript;
            searchInputFunction(voiceInputValue)
            restartRecognition();
        }

        //Handle error event
        recognition.onerror = function (event) {
            console.error('Speech recognition error', event.error);
            restartRecognition();
        }
        //Start recognition
        recognition.start();
        document.querySelector('.search-input').value = 'Listening...';

        // Set a timeout to disable the mic if no input is received in 4 seconds
        timeoutId = setTimeout(function () {
            recognition.stop();
            microphoneContainer.style.backgroundColor = 'white';
            microphoneContainer.style.transform = 'scale(1)';
            microphoneContainer.style.transition = 'transform 0.1s ease-in-out';
            document.querySelector('.search-input').value = 'Try again...';
            setTimeout(function () {
                document.querySelector('.search-input').value = 'Search for restaurant, cuisine or a dish';
            }, 4000)
        }, 4000)

        function restartRecognition() {
            clearTimeout(timeoutId);
            microphoneContainer.style.backgroundColor = 'white';
            microphoneContainer.style.transform = 'scale(1)';
            microphoneContainer.style.transition = 'transform 0.1s ease-in-out';
            recognition.stop();
        }

    } else {
        microphoneContainer.style.backgroundColor = 'grey';
        microphoneContainer.style.transform = 'scale(1)';
        microphoneContainer.style.transition = 'transform 0.3s ease-in-out';
    }
})

// voice search for sm,md screens
let microphoneContainerSM = document.querySelector('.microphone-container-sm');
let recognitionSM;

microphoneContainerSM.addEventListener('click', function () {
    microphoneContainerSM.style.backgroundColor = 'red';
    microphoneContainerSM.style.transform = 'scale(1.5)';
    microphoneContainerSM.style.transition = 'transform 0.1s ease-in-out';

    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        recognitionSM = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognitionSM.lang = 'en-US';
        let timeoutIdSM;

        //Handle the result event
        recognitionSM.onresult = function (event) {
            const transcriptSM = event.results[0][0].transcript;
            let voiceInputValueSM = document.querySelector('.search-input-sm').value = transcriptSM;
            searchInputFunctionSM(voiceInputValueSM)
            restartRecognitionSM();
        }

        //Handle error event
        recognitionSM.onerror = function (event) {
            console.error('Speech recognition error', event.error);
            restartRecognitionSM();
        }
        //Start recognition
        recognitionSM.start();
        document.querySelector('.search-input-sm').value = 'Listening...';

        // Set a timeout to disable the mic if no input is received in 4 seconds
        timeoutIdSM = setTimeout(function () {
            recognitionSM.stop();
            microphoneContainerSM.style.backgroundColor = 'white';
            microphoneContainerSM.style.transform = 'scale(1)';
            microphoneContainerSM.style.transition = 'transform 0.1s ease-in-out';
            document.querySelector('.search-input-sm').value = 'Try again...';
            setTimeout(function () {
                document.querySelector('.search-input-sm').value = 'Search for restaurant, cuisine or a dish';
            }, 4000)
        }, 4000)

        function restartRecognitionSM() {
            clearTimeout(timeoutIdSM);
            microphoneContainerSM.style.backgroundColor = 'white';
            microphoneContainerSM.style.transform = 'scale(1)';
            microphoneContainerSM.style.transition = 'transform 0.1s ease-in-out';
            recognitionSM.stop();
        }

    } else {
        microphoneContainerSM.style.backgroundColor = 'grey';
        microphoneContainerSM.style.transform = 'scale(1)';
        microphoneContainerSM.style.transition = 'transform 0.3s ease-in-out';
    }
})

function searchInputFunctionSM(searchInputValueSM) {
    searchDishContainerSM.innerHTML = '';

    var searchedRestaurantsSM = deliveryRestaurants.filter((item) =>
        (item.restaurantName.toLowerCase().includes(searchInputValueSM.toLowerCase()) ||
            item.cuisine.toLowerCase().includes(searchInputValueSM.toLowerCase())) &&
        searchInputValueSM.length > 0)

    if (searchedRestaurantsSM.length == 0 && searchInputValueSM.length != 0) {
        filtersSM.style.display = 'none';
        searchDishContainerSM.style.display = 'block';
        searchDishContainerSM.style.overflowX = 'hidden'
        searchDishContainerSM.style.color = 'rgb(156, 156, 156)';
        searchDishContainerSM.style.padding = '1.3rem 1rem';
        searchDishContainerSM.innerHTML = 'Oops! <br><p style="font-size:0.8rem; margin-top:0.2rem">We could not understand what you mean,try rephrasing the query.</p>'
        searchDishContainerSM.style.height = 'auto';

        // Freeze the body
        body.style.overflow = 'hidden';

    }
    else {
        searchedRestaurantsSM.forEach((item, idx) => {
            filtersSM.style.display = 'none';
            searchDishContainerSM.style.display = 'block';
            searchDishContainerSM.style.height = '88vh';
            searchDishContainerSM.style.backgroundColor = 'white';
            // Freeze the body
            body.style.overflow = 'hidden';
            displayRestaurantOnSearchSM(item, idx);

        });

        if (searchInputSM.value.length === 0) {
            filtersSM.style.display = 'flex';
            searchDishContainerSM.style.display = 'none';
            // Unfreeze the body
            body.style.overflow = 'auto';
        }
    }
}


// search functionality fo sm,md screens

var searchInputSM = document.querySelector('.search-input-sm');
var searchDishContainerSM = document.querySelector('.search-dish-container-sm');
var filtersSM = document.querySelector('.filters');
var body = document.querySelector('body');

searchInputSM.addEventListener('input', function () {
    searchInputFunctionSM(searchInputSM.value)
});


function displayRestaurantOnSearchSM(item, idx) {
    var searchDishContainerSM = document.querySelector('.search-dish-container-sm');

    var searchRestaurantContainerImgDetailsSM = document.createElement('div');
    searchRestaurantContainerImgDetailsSM.classList.add('search-restaurant-container-img-details-sm');

    var searchRestaurantImgSM = document.createElement('img');
    searchRestaurantImgSM.classList.add('search-restaurant-img-sm');
    searchRestaurantImgSM.src = item.img;
    searchRestaurantContainerImgDetailsSM.appendChild(searchRestaurantImgSM);

    var searchRestaurantContainerDetailsSM = document.createElement('div');
    searchRestaurantContainerDetailsSM.classList.add('search-restaurant-container-details-sm');

    //restaurant name
    var searchRestaurantHeadingSM = document.createElement('p');
    searchRestaurantHeadingSM.classList.add('search-restaurant-heading-sm');
    searchRestaurantHeadingSM.textContent = item.restaurantName;
    searchRestaurantContainerDetailsSM.appendChild(searchRestaurantHeadingSM);

    // rating
    var searchRestaurantRatingContainerSM = document.createElement('div');
    searchRestaurantRatingContainerSM.classList.add('search-restaurant-rating-container-sm');


    let restaurantRatingSM = document.createElement('b');
    restaurantRatingSM.classList.add('search-restaurant-rating-sm');
    restaurantRatingSM.textContent = item.rating;
    searchRestaurantRatingContainerSM.appendChild(restaurantRatingSM)

    let starIconSM = document.createElement('p');
    starIconSM.classList.add('search-star-icon-sm')
    starIconSM.innerHTML = '&#9734';
    starIconSM.style.margin = '0 0 3px 2px';
    searchRestaurantRatingContainerSM.appendChild(starIconSM)

    searchRestaurantContainerDetailsSM.appendChild(searchRestaurantRatingContainerSM);

    let searchRestaurantOrderNowSM = document.createElement('div');
    searchRestaurantOrderNowSM.classList.add('search-restaurant-order-now-sm');
    let orderNowSM = document.createElement('p');
    orderNowSM.classList.add('order-now-sm');
    orderNowSM.textContent = 'Order Now';
    searchRestaurantOrderNowSM.appendChild(orderNowSM);

    let redRightArrowSM = document.createElement('img');
    redRightArrowSM.src = './assets/icons/red-right-arrow.png';
    redRightArrowSM.style.width = '1.1rem';
    searchRestaurantOrderNowSM.appendChild(redRightArrowSM);
    searchRestaurantContainerDetailsSM.appendChild(searchRestaurantOrderNowSM);

    let searchRestaurantDeliverytimeSM = document.createElement('p');
    searchRestaurantDeliverytimeSM.classList.add('search-restaurant-deliverytime-sm');
    searchRestaurantDeliverytimeSM.textContent = 'Delivery in ' + item.delieveryTime;
    searchRestaurantContainerDetailsSM.appendChild(searchRestaurantDeliverytimeSM);


    searchRestaurantContainerImgDetailsSM.appendChild(searchRestaurantContainerDetailsSM);

    searchDishContainerSM.appendChild(searchRestaurantContainerImgDetailsSM);


    //detail of restraunt
    searchRestaurantContainerImgDetailsSM.addEventListener('click', () => {
        localStorage.setItem('selectedRestauraunt', JSON.stringify(item))

        setTimeout(() => {
            let restaurantName = item.restaurantName;
            let restaurantNameReplace = restaurantName.replace(' ', "-").toLowerCase();
            window.location.href = `restrauntDetail.html?city=${encodeURIComponent(cityValue)}&restaurant=${encodeURIComponent(restaurantNameReplace)}`;
        }, 100);
    }
    )
}
