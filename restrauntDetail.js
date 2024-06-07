document.addEventListener('DOMContentLoaded', function () {
    selectedRestauraunt = JSON.parse(localStorage.getItem('selectedRestauraunt'));

    //Fetching the City name from URL
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const params = new URLSearchParams(url.search);
    const cityValue = params.get("city");
    const restaurantValue = params.get("restaurant");
    const capitalizedCity = cityValue.charAt(0).toUpperCase() + cityValue.slice(1);
    const restaurantName = restaurantValue.charAt(0).toUpperCase() + restaurantValue.slice(1);

    //Adding City Name wherever necessary
    var cityName = document.querySelector('.city-name');
    cityName.textContent = capitalizedCity;
    var cityNameInBreadcrumb = document.querySelector('.city-name-in-breadcrumb');
    cityNameInBreadcrumb.textContent = capitalizedCity;
    var restaurantNameInBreadcrumb = document.querySelector('.restaurant-name-in-breadcrumb');
    restaurantNameInBreadcrumb.textContent = restaurantName;

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

    // page name on dom load
    var restaurantPageTitle = document.querySelector('.restaurant-page-title');
    restaurantPageTitle.textContent += restaurantName + ', ' + capitalizedCity;

    // HIDE DIRECTION SHARE BOOKMARK CONTAINER
    var screenWidth = window.innerWidth || document.documentElement.clientWidth;

    if (screenWidth >= 900) {
        window.addEventListener('scroll', function () {
            var directionBookmarkShareContainer = document.querySelector('.direction-bookmark-share-container');
            // var deliveryDiningContainerSM = document.querySelector('.delivery-dining-container-sm');
            var scrollPosition = window.scrollY;
            if (scrollPosition >= 800) {
                directionBookmarkShareContainer.style.display = 'none';
                document.querySelector('.restaurant-options-container').style.transform = 'translateY(-0.3rem)'
                document.querySelector('.restaurant-options-container').style.transition = 'transform 0.1s ease-in';
                document.querySelector('.restaurant-options-container').style.margin = '0';
                document.querySelector('.order-online-options').style.top = '9.6rem';
            }
            else {
                directionBookmarkShareContainer.style.display = 'flex';
                document.querySelector('.restaurant-options-container').style.transform = 'translateY(-0rem)'
                document.querySelector('.restaurant-options-container').style.transition = 'transform 0.1s ease'
                document.querySelector('.restaurant-options-container').style.margin = '0 0';
                document.querySelector('.order-online-options').style.top = '13.6rem';
            }
        })
    }

    // makes search container visible on scroll in small screens
    window.addEventListener('scroll', function () {
        var dishContainer = document.querySelector('.dish-sm');
        var deliveryDiningContainerSM = document.querySelector('.delivery-dining-container-sm');
        var scrollPosition = window.scrollY;
        if (scrollPosition > 150) {
            dishContainer.style.display = 'block';
            deliveryDiningContainerSM.style.display = 'none';
        }
        else {
            dishContainer.style.display = 'none';
            deliveryDiningContainerSM.style.display = 'flex';
        }
    })


    // hide bookmark direction share container
    const hotelDetailContainer = document.querySelector('.hotel-detail');

    // display restaurants images
    const [
        {
            restaurantImg1: restaurantImg1
        },
        {
            restaurantImg2: restaurantImg2
        },
        {
            restaurantImg3: restaurantImg3
        }
    ] = selectedRestauraunt.restaurantImgs;

    restaurantImg01 = restaurantImg1 !== '' ? restaurantImg1 : './assets/food/restaurant imgs/defaultRestrauntImage.webp'
    restaurantImg02 = restaurantImg2 !== '' ? restaurantImg2 : './assets/food/restaurant imgs/defaultRestrauntImage.webp'
    restaurantImg03 = restaurantImg3 !== '' ? restaurantImg3 : './assets/food/restaurant imgs/defaultRestrauntImage.webp'


    var restaurantImagesContainer = document.querySelector('.restaurant-images-container');

    var restaurantImageLeft = document.createElement('div');
    restaurantImageLeft.classList.add('restaurant-image-left');
    var restaurantImageLeftImg = document.createElement('img');
    restaurantImageLeftImg.src = restaurantImg01;
    restaurantImageLeft.appendChild(restaurantImageLeftImg);
    restaurantImagesContainer.appendChild(restaurantImageLeft);

    var restaurantImageCentre = document.createElement('div');
    restaurantImageCentre.classList.add('restaurant-image-centre');
    var restaurantImageCentreTop = document.createElement('div');
    restaurantImageCentreTop.classList.add('restaurant-image-centre-top');
    var restaurantImageCentreTopImg = document.createElement('img');
    restaurantImageCentreTopImg.src = restaurantImg02;
    restaurantImageCentreTop.appendChild(restaurantImageCentreTopImg);
    restaurantImageCentre.appendChild(restaurantImageCentreTop);

    var restaurantImageCentreBottom = document.createElement('div');
    restaurantImageCentreBottom.classList.add('restaurant-image-centre-bottom');
    var restaurantImageCentreBottomImg = document.createElement('img');
    restaurantImageCentreBottomImg.src = restaurantImg03;
    restaurantImageCentreBottom.appendChild(restaurantImageCentreBottomImg);
    restaurantImageCentre.appendChild(restaurantImageCentreBottom);
    restaurantImagesContainer.appendChild(restaurantImageCentre)

    var restaurantImageRight = document.createElement('div');
    restaurantImageRight.classList.add('restaurant-image-right');
    var restaurantImageRightImg = document.createElement('img');
    restaurantImageRightImg.src = './assets/food/restaurant imgs/view gallery image.avif';
    var viewgalleryText = document.createElement('p');
    viewgalleryText.classList.add('viewgallery');
    viewgalleryText.textContent = "View Gallery"
    restaurantImageRight.appendChild(restaurantImageRightImg);
    restaurantImageRight.appendChild(viewgalleryText);
    restaurantImageCentre.appendChild(restaurantImageRight);
    restaurantImagesContainer.appendChild(restaurantImageRight);


    //display hotel detail functionality
    var hotelName = document.querySelector('.hotel-name');
    hotelName.textContent = selectedRestauraunt.restaurantName;

    var diningRating = document.querySelector('.dining-rating');
    diningRating.textContent = selectedRestauraunt.rating;

    var cuisines = document.querySelector('.cuisines');
    cuisines.textContent = selectedRestauraunt.cuisine;

    var cityLocation = document.querySelector('.city-location');
    cityLocation.textContent = capitalizedCity;

    // more info functionlaity
    var reviewContainer = document.querySelector('.review-container');
    var timingsContainer = document.querySelector('.timings-container');
    var directionBookmarkShareContainer = document.querySelector('.direction-bookmark-share-container');
    var restaurantImagesContainer = document.querySelector('.restaurant-images-container');
    var restaurantImageLeft = document.querySelector('.restaurant-image-left');

    var moreInfoLink = document.querySelector('.more-info-link');
    moreInfoLink.addEventListener('click', () => {
        moreInfoLink.style.display = 'none';
        reviewContainer.style.display = 'flex';
        timingsContainer.style.display = 'flex';
        directionBookmarkShareContainer.style.display = 'flex';
        restaurantImagesContainer.style.display = 'flex';
        restaurantImageLeft.style.display = 'flex';
    })

    // restaurant options
    var overview = document.querySelector('.overview');
    var orderOnline = document.querySelector('.order-online');
    var reviews = document.querySelector('.reviews');
    var photos = document.querySelector('.photos');
    var menu = document.querySelector('.menu');
    orderOnline.style.color = "red";

    overview.addEventListener('click', () => {
        overview.style.borderBottom = "3px solid red";
        overview.style.color = 'red';
        orderOnline.style.borderBottom = "none";
        orderOnline.style.color = 'rgb(156, 156, 156)';
        reviews.style.borderBottom = "none";
        reviews.style.color = 'rgb(156, 156, 156)';
        photos.style.borderBottom = "none";
        photos.style.color = 'rgb(156, 156, 156)';
        menu.style.borderBottom = "none";
        menu.style.color = 'rgb(156, 156, 156)';
    })

    orderOnline.addEventListener('click', () => {
        orderOnline.style.borderBottom = "3px solid red";
        orderOnline.style.color = "red";
        overview.style.borderBottom = "none";
        overview.style.color = 'rgb(156, 156, 156)';
        reviews.style.borderBottom = "none";
        reviews.style.color = 'rgb(156, 156, 156)';
        photos.style.borderBottom = "none";
        photos.style.color = 'rgb(156, 156, 156)';
        menu.style.borderBottom = "none";
        menu.style.color = 'rgb(156, 156, 156)';
    })

    reviews.addEventListener('click', () => {
        overview.style.borderBottom = "none";
        overview.style.color = 'rgb(156, 156, 156)';
        orderOnline.style.borderBottom = "none";
        orderOnline.style.color = 'rgb(156, 156, 156)';
        reviews.style.borderBottom = "3px solid red";
        reviews.style.color = 'red';
        photos.style.borderBottom = "none";
        photos.style.color = 'rgb(156, 156, 156)';
        menu.style.borderBottom = "none";
        menu.style.color = 'rgb(156, 156, 156)';
    })

    photos.addEventListener('click', () => {
        overview.style.borderBottom = "none";
        overview.style.color = 'rgb(156, 156, 156)';
        orderOnline.style.borderBottom = "none";
        orderOnline.style.color = 'rgb(156, 156, 156)';
        reviews.style.borderBottom = "none";
        reviews.style.color = 'rgb(156, 156, 156)';
        photos.style.borderBottom = "3px solid red";
        photos.style.color = 'red';
        menu.style.borderBottom = "none";
        menu.style.color = 'rgb(156, 156, 156)';
    })

    menu.addEventListener('click', () => {
        overview.style.borderBottom = "none";
        overview.style.color = 'rgb(156, 156, 156)';
        orderOnline.style.borderBottom = "none";
        orderOnline.style.color = 'rgb(156, 156, 156)';
        reviews.style.borderBottom = "none";
        reviews.style.color = 'rgb(156, 156, 156)';
        photos.style.borderBottom = "none";
        photos.style.color = 'rgb(156, 156, 156)';
        menu.style.borderBottom = "3px solid red";
        menu.style.color = 'red';
    })

    // cusines options
    const cuisineMap = new Map();
    selectedRestauraunt.food.forEach(category => {
        const cuisineName = Object.keys(category)[0];
        const cusineCount = category[cuisineName].length;
        cuisineMap.set(cuisineName, cusineCount);
    });
    var orderOnlineOptions = document.querySelector('.order-online-options');
    cuisineMap.forEach((key, value1) => {
        var cuisineCountHTML = document.createElement('b');
        cuisineCountHTML.classList.add('cuisine-count');

        cuisineCountHTML.textContent = ' ' + '(' + key + ')';
        var cusineNameHTML = document.createElement('p');
        cusineNameHTML.classList.add('cuisine-name', 'cuisine-name-small-screen');
        cusineNameHTML.textContent = value1;
        cusineNameHTML.setAttribute('id', value1 + '1');
        cusineNameHTML.appendChild(cuisineCountHTML);
        orderOnlineOptions.append(cusineNameHTML);

        //scroll into view
        var screenWidth = window.innerWidth || document.documentElement.clientWidth;
        if (screenWidth <= 900) {
            var orderOnlineOptionsId = document.getElementById('order-online-options-id');
            orderOnlineOptionsId.classList.remove('order-online-options');
            orderOnlineOptionsId.classList.add('order-online-options-smallScreen');

            document.querySelector('.cuisine-count').remove();
            document.querySelector('.cuisine-name-small-screen').classList.remove('cuisine-name');
        }

        cusineNameHTML.addEventListener('click', () => {
            var cuisineNames = document.querySelectorAll('.cuisine-name');
            console.log('cuisineNames', cuisineNames);
            cuisineNames.forEach(function (item) {
                if (screenWidth <= 900) {
                    item.style.fontWeight = '100';
                    item.style.borderRadius = "none";
                    item.style.background = "none";
                }
                else {
                    item.style.color = 'black';
                    item.style.borderRight = "none";
                    item.style.background = "none";
                }
            })

            var cuisineName = document.getElementById(`${value1}1`);
            if (screenWidth <= 900) {
                cuisineName.style.fontWeight = "600";
                cuisineName.style.borderRadius = "3px";
                cuisineName.style.background = "rgba(128, 128, 128, 0.279)";
            } else {
                cuisineName.style.color = "red";
                cuisineName.style.borderRight = "3px solid rgb(239, 79, 95)";
                cuisineName.style.background = "linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 237, 239))";
            }

            document.getElementById(value1).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    })

    //pure veg box display
    var vegOnlyContainer = document.querySelector('.veg-only-container');
    if (selectedRestauraunt.veg === false) {
        vegOnlyContainer.style.display = 'flex';
    }
    else {
        vegOnlyContainer.style.display = 'none';
    }

    //display dish details
    var onlineDishes = document.querySelector('.online-dishes');

    var totalItems = 0;
    let totalItemsCount = document.querySelector('#total-items-count');

    // total cost
    var totalCost = 0;
    var itemTotal = document.querySelector('#item-total');

    //GST and restaurant charges
    var gstCost = 0;
    var gstCharge = document.querySelector('#item-gst');

    //grand total
    var grandTotalCost = 0;
    var grandTotal = document.querySelector('#grand-total');

    selectedRestauraunt.food.forEach((category) => {

        Object.entries(category).forEach(([categoryName, dishes]) => {
            displayDishes(categoryName, dishes);
        })
    })




    // Dislay dishes
    function displayDishes(categoryName, dishes) {
        var onlineDishContainer = document.createElement('div');
        onlineDishContainer.classList.add('online-dish-container');

        var leftCuisineName = document.createElement('h3');
        leftCuisineName.classList.add('left-cuisine-name');
        leftCuisineName.textContent = categoryName;
        leftCuisineName.setAttribute('id', categoryName);
        onlineDishContainer.appendChild(leftCuisineName);


        onlineDishes.appendChild(onlineDishContainer)
        dishes.forEach((dish, index) => {
            var dishContainer = document.createElement('div');
            dishContainer.classList.add('dish-container-new');

            //dish image
            var dishImgContainer = document.createElement('div');
            dishImgContainer.classList.add('dish-img-container');

            var dishImage = document.createElement('img');
            dishImage.classList.add('dish-img');
            dishImage.src = dish.foodImg;

            dishImgContainer.appendChild(dishImage);


            //Add button
            var addButton = document.createElement('div');
            addButton.classList.add('add-button');

            var addText = document.createElement('b');
            addText.textContent = 'Add';
            addButton.appendChild(addText)

            var addSign = document.createElement('p');
            addSign.innerText = '+';
            addButton.appendChild(addSign)
            dishImgContainer.appendChild(addButton);

            //  Remove button
            var addRemoveButton = document.createElement('div');
            addRemoveButton.classList.add('add-remove-button');


            var subSign = document.createElement('p');
            subSign.classList.add('remove-item');
            subSign.innerText = '-';
            subSign.style.marginBottom = '0.3rem';
            addRemoveButton.appendChild(subSign);
            dishImgContainer.appendChild(addRemoveButton);

            var countText = document.createElement('b');
            countText.classList.add('count');
            countText.style.fontWeight = '100';
            countText.textContent = 1;
            addRemoveButton.appendChild(countText);

            var addSign = document.createElement('p');
            addSign.classList.add('add-item');
            addSign.innerText = '+';
            addRemoveButton.appendChild(addSign)


            dishContainer.appendChild(dishImgContainer);

            //dish name
            var dishDetails = document.createElement('div');
            dishDetails.classList.add('dish-details');
            var dishName = document.createElement('p');
            dishName.classList.add('dishname');
            dishName.textContent = dish.foodName;
            dishDetails.appendChild(dishName);


            //dish rating rating-votes
            var ratingVotes = document.createElement('div');
            ratingVotes.classList.add('rating-votes');

            var rating = document.createElement('div');
            rating.classList.add('rating');

            //dispay stars basd on food rating
            rates = dish.foodRating;
            halfRate = dish.foodRating / 10;

            if (!rates) {
                var noRating = document.createElement('p');
                noRating.textContent = 'No Rating';
                rating.appendChild(noRating);
            }
            for (var i = 1; i < rates; i++) {
                var starImg = document.createElement('img');
                starImg.src = './assets/icons/full-yellow-star (1).png';
                rating.appendChild(starImg);
            }
            if (halfRate) {
                var starImg = document.createElement('img');
                starImg.src = './assets/icons/half-yellow-star.png';
                rating.appendChild(starImg);
            }
            ratingVotes.appendChild(rating);

            var votes = document.createElement('p');
            votes.classList.add('votes');
            votes.textContent = dish.foodVote;
            ratingVotes.appendChild(votes);
            dishDetails.appendChild(ratingVotes);

            //dish cost
            var dishCost = document.createElement('p');
            dishCost.classList.add('dish-cost');
            dishCost.textContent = '₹' + dish.foodPrice;
            dishDetails.appendChild(dishCost);

            //dish contains
            var dishMadeFrom = document.createElement('p');
            dishMadeFrom.classList.add('dish-made-from');
            dishMadeFrom.textContent = dish.foodDescription;
            dishDetails.appendChild(dishMadeFrom);


            //all appended
            dishContainer.appendChild(dishDetails);
            onlineDishContainer.appendChild(dishContainer);
            onlineDishes.appendChild(onlineDishContainer);

            //items count logic
            let countItems = 1;

            //to make cartCount accessible outside this block
            var cartCount = document.createElement('b');
            cartCount.classList.add('cart-count');
            cartCount.style.fontWeight = '100';

            //to make cartTotal accessible outside this block
            var cartTotal = document.createElement('div');
            cartTotal.classList.add('cart-total');

            addButton.addEventListener('click', () => {
                countItems = 1;
                countText.textContent = countItems;

                totalCost = totalCost + dish.foodPrice;
                itemTotal.textContent = totalCost;

                gstCost = gstCost + (dish.foodPrice * 0.05);
                gstCharge.textContent = parseFloat(gstCost.toFixed(2));

                if (totalCost >= 500) {
                    document.querySelector('.delivery-charges').style.display = 'none';
                    document.querySelector('.free-delivery-container').style.display = 'block';

                    grandTotalCost = totalCost + gstCost + 1 - 50;
                    grandTotal.textContent = parseFloat(grandTotalCost.toFixed(2));

                }
                else {
                    document.querySelector('.delivery-charges').textContent = 30;
                    document.querySelector('.delivery-charges').style.display = 'flex';
                    document.querySelector('.free-delivery-container').style.display = 'none';

                    grandTotalCost = totalCost + gstCost + 30 + 1 - 50;
                    grandTotal.textContent = parseFloat(grandTotalCost.toFixed(2));
                }

                totalItems++;
                totalItemsCount.textContent = totalItems == 1 ? totalItems + ' item added' : totalItems + ' items added';
                document.querySelector('.items-added-container').style.transform = 'translateX(0rem)';
                document.querySelector('.items-added-container').style.transition = 'transform 0.5s ease';

                addButton.style.display = 'none';
                addRemoveButton.style.display = 'flex';

                // display cart total container
                document.querySelector('.items-added-container').addEventListener('click', () => {
                    document.querySelector('.cart-section-container').style.transform = 'translateX(0rem)';
                    document.querySelector('.cart-section-container').style.transition = 'transform 0.5s ease';
                    //Adding name to cart
                    document.querySelector('.cart-restraunt-name').textContent = selectedRestauraunt.restaurantName;

                })


                document.querySelector('.close-cart').addEventListener('click', () => {
                    document.querySelector('.cart-section-container').style.transform = 'translateX(45rem)';
                    document.querySelector('.cart-section-container').style.transition = 'transform 0.5s ease';
                })

                var cartTotalContainer = document.querySelector('.cart-total-container');
                //defining cart total outside this block to make it accessible outside this block

                var cartImg = document.createElement('div');
                cartImg.classList.add('cart-img');


                var cartDishImg = document.createElement('img');
                cartDishImg.classList.add('cart-dish-img');
                cartDishImg.src = dish.foodImg;
                cartImg.appendChild(cartDishImg);
                cartTotal.appendChild(cartImg);

                // cart details container
                var cartDetailsContainer = document.createElement('div');
                cartDetailsContainer.classList.add('cart-details-container');

                var cartDetails = document.createElement('div');
                cartDetails.classList.add('cart-details');

                var cartDishName = document.createElement('p');
                cartDishName.classList.add('cart-dish-name');
                cartDishName.textContent = dish.foodName;
                cartDetails.appendChild(cartDishName)

                //dish rating rating-votes
                var cartRatingVotes = document.createElement('div');
                cartRatingVotes.classList.add('cart-rating-votes');

                var cartRating = document.createElement('div');
                cartRating.classList.add('cart-rating');

                //dispay stars basd on food rating
                rates = dish.foodRating;
                halfRate = dish.foodRating / 10;

                if (!rates) {
                    var noRating = document.createElement('p');
                    noRating.textContent = 'No Rating';
                    cartRating.appendChild(noRating);
                }
                for (var i = 1; i < rates; i++) {
                    var starImg = document.createElement('img');
                    starImg.src = './assets/icons/full-yellow-star (1).png';
                    cartRating.appendChild(starImg);
                }
                if (halfRate) {
                    var starImg = document.createElement('img');
                    starImg.src = './assets/icons/half-yellow-star.png';
                    cartRating.appendChild(starImg);
                }
                cartRatingVotes.appendChild(cartRating);

                var cartVotes = document.createElement('p');
                cartVotes.classList.add('cart-votes');
                cartVotes.textContent = dish.foodVote;
                cartRatingVotes.appendChild(cartVotes);
                cartDetails.appendChild(cartRatingVotes);

                // cart dish cost
                var cartDishCost = document.createElement('div');
                cartDishCost.classList.add('cart-dish-cost');
                cartDishCost.textContent = '₹' + dish.foodPrice;
                cartDetails.appendChild(cartDishCost);

                cartDetailsContainer.appendChild(cartDetails);
                cartTotal.appendChild(cartDetailsContainer)
                cartTotalContainer.appendChild(cartTotal)

                // Button in cart
                var cartAddRemoveButton = document.createElement('div');
                cartAddRemoveButton.classList.add('cart-add-remove-button');

                var addSign = document.createElement('p');
                addSign.classList.add('add-item');
                addSign.innerText = '+';
                cartAddRemoveButton.appendChild(addSign);

                //cartCount is defined outside this block to make it accessible to next block
                cartCount.textContent = countItems;
                cartAddRemoveButton.appendChild(cartCount);

                var subSign = document.createElement('p');
                subSign.classList.add('remove-item');
                subSign.innerText = '-';
                subSign.style.padding = '0 0.5rem';
                subSign.style.paddingBottom = '0.1rem';
                cartAddRemoveButton.appendChild(subSign);

                cartDetails.appendChild(cartAddRemoveButton);

                addSign.addEventListener('click', () => {
                    countItems++;
                    cartCount.textContent = countItems;
                    countText.textContent = countItems;

                    totalCost = totalCost + dish.foodPrice;
                    itemTotal.textContent = totalCost;

                    gstCost = gstCost + (dish.foodPrice * 0.05);
                    gstCharge.textContent = parseFloat(gstCost.toFixed(2));

                    if (totalCost >= 500) {
                        document.querySelector('.delivery-charges').style.display = 'none';
                        document.querySelector('.free-delivery-container').style.display = 'block';

                        grandTotalCost = totalCost + gstCost + 1 - 50;
                        grandTotal.textContent = parseFloat(grandTotalCost.toFixed(2));
                    }
                    else {
                        document.querySelector('.delivery-charges').textContent = 30;
                        document.querySelector('.delivery-charges').style.display = 'flex';
                        document.querySelector('.free-delivery-container').style.display = 'none';

                        grandTotalCost = totalCost + gstCost + 30 + 1 - 50;
                        grandTotal.textContent = parseFloat(grandTotalCost.toFixed(2));
                    }

                    totalItems++;
                    totalItemsCount.textContent = totalItems == 1 ? totalItems + ' item added' : totalItems + ' items added';
                })

                subSign.addEventListener('click', () => {
                    countItems--;
                    cartCount.textContent = countItems;
                    countText.textContent = countItems;

                    totalCost = totalCost - dish.foodPrice;
                    itemTotal.textContent = totalCost;

                    gstCost = gstCost - (dish.foodPrice * 0.05);
                    gstCharge.textContent = parseFloat(gstCost.toFixed(2));

                    if (totalCost >= 500) {
                        document.querySelector('.delivery-charges').style.display = 'none';
                        document.querySelector('.free-delivery-container').style.display = 'block';

                        grandTotalCost = totalCost + gstCost + 1 - 50;
                        grandTotal.textContent = parseFloat(grandTotalCost.toFixed(2));
                    }
                    else {
                        document.querySelector('.delivery-charges').textContent = 30;
                        document.querySelector('.delivery-charges').style.display = 'flex';
                        document.querySelector('.free-delivery-container').style.display = 'none';

                        grandTotalCost = totalCost + gstCost + 30 + 1 - 50;
                        grandTotal.textContent = parseFloat(grandTotalCost.toFixed(2));
                    }

                    totalItems--;
                    totalItemsCount.textContent = totalItems == 1 ? totalItems + ' item added' : totalItems + ' items added';

                    if (totalItems === 0) {
                        document.querySelector('.items-added-container').style.transform = 'translateX(45rem)';
                        document.querySelector('.items-added-container').style.transition = 'transform 0.5s ease';
                        document.querySelector('.cart-section-container').style.transform = 'translateX(45rem)';
                        document.querySelector('.cart-section-container').style.transition = 'transform 0.5s ease';
                    }

                    if (countItems < 1) {
                        addButton.style.display = 'flex';
                        addRemoveButton.style.display = 'none';
                        cartTotal.innerHTML = '';
                        cartTotal.style.marginBottom = '0';
                    }
                })
            })

            addSign.addEventListener('click', () => {
                countItems++;
                countText.textContent = countItems;
                cartCount.textContent = countItems;

                totalCost = totalCost + dish.foodPrice;
                itemTotal.textContent = totalCost;

                totalItems++;
                totalItemsCount.textContent = totalItems == 1 ? totalItems + ' item added' : totalItems + ' items added';

                gstCost = gstCost + (dish.foodPrice * 0.05);
                gstCharge.textContent = parseFloat(gstCost.toFixed(2));

                if (totalCost >= 500) {
                    document.querySelector('.delivery-charges').style.display = 'none';
                    document.querySelector('.free-delivery-container').style.display = 'block';

                    grandTotalCost = totalCost + gstCost + 1 - 50;
                    grandTotal.textContent = parseFloat(grandTotalCost.toFixed(2));
                }
                else {
                    document.querySelector('.delivery-charges').textContent = 30;
                    document.querySelector('.delivery-charges').style.display = 'flex';
                    document.querySelector('.free-delivery-container').style.display = 'none';

                    grandTotalCost = totalCost + gstCost + 30 + 1 - 50;
                    grandTotal.textContent = parseFloat(grandTotalCost.toFixed(2));
                }

                document.querySelector('.items-added-container').style.transform = 'translateX(0rem)';
                document.querySelector('.items-added-container').style.transition = 'transform 0.5s ease';
            })
            subSign.addEventListener('click', () => {
                countItems--;
                countText.textContent = countItems;
                cartCount.textContent = countItems;

                totalCost = totalCost - dish.foodPrice;
                itemTotal.textContent = totalCost;

                gstCost = gstCost - (dish.foodPrice * 0.05);
                gstCharge.textContent = parseFloat(gstCost.toFixed(2));

                if (totalCost >= 500) {
                    document.querySelector('.delivery-charges').style.display = 'none';
                    document.querySelector('.free-delivery-container').style.display = 'block';

                    grandTotalCost = totalCost + gstCost + 1 - 50;
                    grandTotal.textContent = parseFloat(grandTotalCost.toFixed(2));
                }
                else {
                    document.querySelector('.delivery-charges').textContent = 30;
                    document.querySelector('.delivery-charges').style.display = 'flex';
                    document.querySelector('.free-delivery-container').style.display = 'none';

                    grandTotalCost = totalCost + gstCost + 30 + 1 - 50;
                    grandTotal.textContent = parseFloat(grandTotalCost.toFixed(2));
                }

                totalItems--;
                totalItemsCount.textContent = totalItems == 1 ? totalItems + ' item added' : totalItems + ' items added';
                document.querySelector('.items-added-container').style.transform = 'translateX(0rem)';
                document.querySelector('.items-added-container').style.transition = 'transform 0.5s ease';

                if (totalItems === 0) {
                    document.querySelector('.items-added-container').style.transform = 'translateX(45rem)';
                    document.querySelector('.items-added-container').style.transition = 'transform 0.5s ease';
                    document.querySelector('.cart-section-container').style.transform = 'translateX(45rem)';
                    document.querySelector('.cart-section-container').style.transition = 'transform 0.5s ease';
                }

                if (countItems < 1) {
                    addButton.style.display = 'flex';
                    addRemoveButton.style.display = 'none';
                    cartTotal.innerHTML = '';
                    cartTotal.style.padding = '0';
                }
            })
        })
    }

    // place order
    var placeOrderButton = document.querySelector('#place-order');
    placeOrderButton.addEventListener('click', () => {
        document.querySelector('#order-placed-sound').play();
        placeOrderButton.style.display = 'none';
        document.querySelector('#modify-order').style.display = 'block';
        document.querySelector('.order-placed-section').style.transform = 'scale(1)';

        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('#overlay').style.display = 'block';


        setTimeout(() => {
            document.querySelector('.order-placed-section').style.transform = 'scale(0)';
            document.querySelector('body').style.overflow = 'visible';
            document.querySelector('#overlay').style.display = 'none';
        }, 2000)

        setTimeout(() => {
            document.querySelector('#modify-order').textContent = 'Order Placed';
            document.querySelector('#modify-order').style.cursor = 'not-allowed';
            document.querySelector('.cart-order').style.backgroundColor = '#5f4747';
        }, 5000)//change to 120000


        //order accepted
        setTimeout(() => {
            document.querySelector('.notification-section').style.transform = 'scale(1)';
            document.querySelector('#notification').textContent = 'Your order has been accepted by restaurant';
            document.querySelector('#notificationImg').src = './assets/icons/success-filled.png';
            document.querySelector('#notificationThought').textContent = '"Trying to lose weight? We deliver meals with \' less calories\'... Less likely to leave you hungry! 😉"';
        }, 8000)//change to 180000

        setTimeout(() => {
            document.querySelector('.notification-section').style.transform = 'scale(0)';
        }, 15000)//change to 195000

        //order getting prepared
        setTimeout(() => {
            document.querySelector('.notification-section').style.transform = 'scale(1)';
            document.querySelector('#notification').textContent = 'Your order is being prepared';
            document.querySelector('#notificationImg').src = './assets/icons/food-preparing.png';
            document.querySelector('#notificationThought').textContent = '"When the talk revolves around food, it\'s bound to get funny sooner or later! 😜"';
        }, 20000)//change to 210000

        setTimeout(() => {
            document.querySelector('.notification-section').style.transform = 'scale(0)';
        }, 30000)//change to 220000

        //Delivery person is on the way to pick up your order
        setTimeout(() => {
            document.querySelector('.notification-section').style.transform = 'scale(1)';
            document.querySelector('#notification').textContent = 'Delivery person is on the way to pick your order';
            document.querySelector('#notificationImg').src = './assets/icons/deliveryBoy.jpg';
            document.querySelector('#notificationThought').textContent = '"Those 30 minutes from the time you order a pizza, to the time it gets to your doorstep. 🙃"';
        }, 35000)//change to 210000

        setTimeout(() => {
            document.querySelector('.notification-section').style.transform = 'scale(0)';
        }, 45000)//change to 22000

        //Delivery person has picked up your order
        setTimeout(() => {
            document.querySelector('.notification-section').style.transform = 'scale(1)';
            document.querySelector('#notification').textContent = 'Your order has been picked up';
            document.querySelector('#notificationImg').src = './assets/icons/order_pick_up.webp';
            document.querySelector('#notificationThought').textContent = '"Zomato is the fastest way to find great places to eat around you. 😜"';
        }, 55000)//change to 210000

        setTimeout(() => {
            document.querySelector('.notification-section').style.transform = 'scale(0)';
        }, 65000)//change to 22000

        //Your order is on the way 
        setTimeout(() => {
            document.querySelector('.notification-section').style.transform = 'scale(1)';
            document.querySelector('#notification').textContent = 'Your order is on the way';
            document.querySelector('#notificationImg').src = './assets/icons/deliveryBoy.jpg';
            document.querySelector('#notificationThought').textContent = '"Trying to lose weight? We deliver meals with \' less calories\'... Less likely to leave you hungry! 😉"';
        }, 70000)//change to 210000

        setTimeout(() => {
            document.querySelector('.notification-section').style.transform = 'scale(0)';
        }, 80000)//change to 22000

        //Delivery person has reached your address 
        setTimeout(() => {
            document.querySelector('.notification-section').style.transform = 'scale(1)';
            document.querySelector('#notification').textContent = 'Your order has been arrived';
            document.querySelector('#notificationImg').src = './assets/icons/deliveryBoyReachedHome.jpg';
            document.querySelector('#notificationThought').textContent = '"When the talk revolves around food, it\'s bound to get funny sooner or later! 😜"';
        }, 85000)//change to 210000

        setTimeout(() => {
            document.querySelector('.notification-section').style.transform = 'scale(0)';
        }, 95000)//change to 22000

        // order delivered successfully
        setTimeout(() => {
            document.querySelector('.notification-section').style.transform = 'scale(1)';
            document.querySelector('#notification').textContent = 'Order delivered successfully';
            document.querySelector('#notificationImg').src = './assets/icons/success-filled.png';
            document.querySelector('#notificationThought').textContent = '"Enjoy your meal 😋"';
        }, 100000)//change to 210000

        setTimeout(() => {
            document.querySelector('.notification-section').style.transform = 'scale(0)';
        }, 110000)//change to 22000

        // clear everything from cart
        setTimeout(() => {
            location.reload(true)
        }, 120000)
    })
    // display only veg dishes on click of pure veg box
    var vegDishes = [];
    var check = 1;
    vegOnlyContainer.addEventListener('click', () => {

        if (check === 1) {
            onlineDishes.innerHTML = '';
            selectedRestauraunt.food.forEach((category) => {
                vegDishes = [];
                Object.entries(category).forEach(([categoryName, dishes]) => {
                    for (var dish of dishes) {
                        if (dish.nonVeg != true) {
                            vegDishes.push(dish);
                        }
                    }
                    displayDishes(categoryName, vegDishes);
                    vegOnlyContainer.style.display = 'none';
                })
            })
        }

    })
});

