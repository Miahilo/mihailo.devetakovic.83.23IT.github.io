window.onload = function(){
    
    console.log(window.location.pathname);
    function generateHeader(){
        let header = `
        
            
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <!-- ***** Logo Start ***** -->
                    <a href="index.html" class="logo">
                        <img src="assets/images/logo.png" alt="" style="width: 158px;">
                    </a>
                    <!-- ***** Logo End ***** -->
                    <!-- ***** Menu Start ***** -->
                    <ul class="nav">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="shop.html">Shop</a></li>
                      <li><a class="cart" href="cart.html" data-filter="*">Cart</a></li>
                      <li><a href="author.html">Author</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                  </ul>   
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    <!-- ***** Menu End ***** -->
                </nav>
            </div>
        </div>
    </div>
    <button id="scrollTopBtn" class="invisible" title="Go to top"><i class="fa-solid fa-arrow-up"></i></button>
  

        `;

        document.getElementsByTagName("header")[0].innerHTML = header;
    }

    generateHeader();console.log("Heder");

    function generateFooter(){
        let footer = `

            <div class="footer-container">
            
            <!-- Left Column: Contact Info (Keeping structure similar to image) -->
            <div class="footer-col">
                <h4>Contact Us</h4>
                <p>LUGX Gaming</p>
                <p>All Rights Reserved©</p>
                <p>Support : +381 61 4060330</p>
            </div>
            <div class="footer-col">
                <h4>Quick Links</h4>
                <a href="#"><i class="fab fa-telegram"></i> Telegram</a>
                <a href="#"><i class="fab fa-instagram"></i> Instagram</a>
                <a href="#"><i class="fab fa-facebook"></i> Facebook</a>
            </div>
            <div class="footer-col">
                <h4>Resources</h4>
                <a href="#"><i class="fas fa-rss"></i> RSS</a>
                <a href="#"><i class="fas fa-sitemap"></i> Sitemap</a>
                <a href="#">Documentation</a>
            </div>

        </div>`

        document.getElementsByTagName("footer")[0].innerHTML = footer;
    }

    generateFooter();console.log("Footer");


    // Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}

    if ($(window).width() > 767) {
        if($('.menu-trigger').hasClass('active')){
                $('.menu-trigger').removeClass('active');
                $('.header-area .nav').css('display','').removeClass('slideToggle');
            }
    }

    let previousWidth = $(window).width();

    $(window).on('resize', function() {
        const currentWidth = $(window).width();
        
        // Only run logic if we actually crossed the 767px threshold
        if ((previousWidth <= 767 && currentWidth > 767) || 
            (previousWidth > 767 && currentWidth <= 767)) {
            
            console.log("AA");
            
            if ($('.menu-trigger').hasClass('active')) {
                $('.menu-trigger').removeClass('active');
                $('.header-area .nav').css('display', '').removeClass('slideToggle');
            }
        }
        
        // Update the previous width for the next event
        previousWidth = currentWidth;
    });
    

    // Menu elevator animation
    $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});

    generateHeader(); console.log("Header");

    //TOAST
    function showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        
        // Set class based on type (success or error)
        toast.className = `toast ${type}`;
        toast.innerText = message;
        
        container.appendChild(toast);

        // Trigger animation (small delay to allow DOM insertion)
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            // Remove from DOM after transition finishes
            setTimeout(() => {
                if (container.contains(toast)) {
                    container.removeChild(toast);
                }
            }, 200);
        }, 800);
    }

    //SCROLL TO TOP
    const scrollBtn = document.getElementById("scrollTopBtn");

        // When the user scrolls down 20px from the top, show the button
        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollBtn.classList.remove("invisible");
            } else {
                scrollBtn.classList.add("invisible");
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        scrollBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Smooth scrolling animation
            });
        });

    //TIMER

    (function() {
  // 1. Set the target date: June 15, 2026 at 00:00:00
  const TARGET_DATE = new Date('2026-06-15T00:00:00').getTime();
  const STORAGE_KEY = 'countdown_last_seen';

  // 2. Function to calculate the remaining time
  function getCountdown() {
    const now = new Date().getTime();
    let distance = TARGET_DATE - now;

    // If the date has passed, return 0
    if (distance < 0) {
      distance = 0;
    }

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, distance };
  }

  // 3. Function to update the DOM
  function updateDisplay() {
    const timerData = getCountdown();
    
    // Format the string
    const timeString = `${timerData.days}d ${timerData.hours}h ${timerData.minutes}m ${timerData.seconds}s`;

    // Select the target element
    // Note: CSS selector for :nth-child(2) requires specific syntax
    const targetElement = document.querySelector('.trending .container .row div:nth-child(2) .main-button span');

    if (targetElement) {
      targetElement.innerText = timeString;
    } else {
      console.warn('Target element .trending .container .row div:nth-child(2) not found.');
    }

    // Stop updating if the countdown is over
    if (timerData.distance <= 0) {
      clearInterval(intervalId);
      if (targetElement) targetElement.innerText = "Event Started";
    }
  }

  // 4. Start the timer
  // Update immediately, then every second
  updateDisplay();
  const intervalId = setInterval(updateDisplay, 1000);

  // Optional: To ensure perfect sync across tabs or refreshes, 
  // we could store the target date and reload time in localStorage, 
  // but since the target date is fixed (2026-06-15), calculating 
  // based on the user's current system time is sufficient and accurate.
})();

    //Dohvatanje priozvoda
    ajaxCallBack('assets/js/json/games.json' ,`get` ,function result(){
        console.log("Rezultat : " + result);
        setItemToLocalStorage(result);
    })

    //Skladištenje podataka
    function setItemToLocalStorage(name,data){
        localStorage.setItem(name,JSON.stringify(data));
    }

    allGames = [];

    function ajaxCallBack(url ,method ,result)
    {$.ajax({
        url: url,
        method: method,
        dataType: 'json',

        success: function (data) {
            allGames = data;
            setItemToLocalStorage("games",data)
            if(window.location.pathname.includes("/index.html")){
            showCards(allGames);ajustCartContence();
            largestDiscounts(allGames,4);
            }else if(window.location.pathname.includes("/shop.html")){
                ajustShownGames();ajustCartContence();
            }
            else if(window.location.pathname.includes("/cart.html")){
                cartContence();ajustCartContence();updateCartTotal();
            }
            else if(window.location.pathname.includes("/product-details.html")){
                ajustCartContence();
                selectedId = getItemFromLocalStorage("selectedGame");
                console.log("selectedId : ",selectedId);
                selectedGame = allGames.find(game => game.id == selectedId);
                findAndRenderSimilarGames(selectedGame);
                console.log("selectedGame : ",selectedGame);
                makeProductInfo(selectedGame);
            }
        },

        error: function (xhr) {
            console.log(xhr);
        }
    });}

    //Pretraga

    const searchInput = document.querySelector('.search');
    const resultsContainer = document.querySelector('.results-container');

    // Function to render games to the screen

        // 3. EVENT LISTENER
        // Using 'input' instead of 'keypress' is better as it handles backspace and pasting
        if(window.location.pathname.includes("/index.html") || window.location.pathname.includes("/shop.html")){
            function renderGames(games) {
            resultsContainer.innerHTML = ''; // Clear previous results

            games.forEach(game => {
                const card = document.createElement('div');
                card.addClass = 'game-card';

                card.innerHTML = `
                    <a href="product-details.html" data-gameid="${game.id}">${game.name}</a>
                `;
                resultsContainer.appendChild(card);
            });
        }

            function filterGames(query) {
            const lowerQuery = query.toLowerCase().trim();
            
            if (!lowerQuery) {
                // If empty, show all games (optional) or hide all
                return []; 
            }

            return allGames.filter(game => {
                // Check if the game name includes the query string
                // "in order that they are typed" means we check for the substring
                return game.name.toLowerCase().includes(lowerQuery);
            });
        }

            searchInput.addEventListener('input', (e) => {
            const typedValue = e.target.value;
            const filteredGames = (filterGames(typedValue)).slice(0,5);
            renderGames(filteredGames);

            document.querySelector('.search').addEventListener('submit', (e) => {
            e.preventDefault();

            renderGames(allGames);
        });

        });
        }

    function showCards(cards){
        console.log("Ulazi u showCards");
        randomGames = [];
        numberOfRandomGames = 6;
        
        for(let x=0;x < numberOfRandomGames;x++){
            randGame = Math.floor(Math.random() * cards.length);
            if(!randomGames.includes(allGames[randGame])){//console.log("Prošlo kroz dodavanje randGame");
                randomGames[x] = allGames[randGame];
            }else{
                x--;//console.log("Duplikat");
            }
        }
        for(let x of randomGames){
            createCard(x,document.querySelector(".most-played .container .row"));
        }
    }


    function createCard(game,destination){

        let html = `
        
        <div class="col-lg col-sm-6 col-xs-12">
          <div data-gameid=${game.id} class="item">
            <div class="thumb">
              <a href="product-details.html" data-gameid="${game.id}"><img class=""img-fluid src="assets/images/${game.image.portrait}" alt="${game.name}"></a>
            </div>
            <div class="down-content">
                <h4>${game.name}</h4>
                <a data-gameid="${game.id}" href="product-details.html">Explore</a>
            </div>
          </div>
        </div>

        `;

        destination.innerHTML += html;

    }

    //Odabir 4 Igre sa najvećim Popustom
    function largestDiscounts(games,numberofgames){
        var topDiscounted = [];
        topDiscounted = games.sort(function(a,b){
            return b.discount - a.discount;
        }).slice(0,numberofgames);
        
        for(let x of topDiscounted){
            createDiscountCard(x,this.document.querySelector(".trending .container .row"))
        }
    }
    //Prikaz 4 Igre sa najvećim Popustom
    function createDiscountCard(game,destination){
        let html = `
        
        <div class="col-lg-3 col-md-6">
          <div data-gameid="${game.id}" class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="assets/images/${game.image.portrait}" alt=""></a>
              <span class="price"><em>$${game.price}</em>$${finalPrice(game)}</span>
            </div>
            <div class="down-content">
              <h4>${game.name}</h4>
            </div>
          </div>
        </div>
        `;
        destination.innerHTML += html;
    }
    //Funkcija za izračunavanje cene sa popustom

    function finalPrice(game){
        if(game.discount > 0){
            return (game.price * (1 - game.discount/100)).toFixed(2);
        }
        else return game.price;
    }

    function makePrice(game){
        if(parseInt(game.discount) > 1){
            return `<span class="price"><em>$${game.price}</em><p>$${finalPrice(game)}</p></span>`
        }
        else{
            return `<span class="price"><p>$${game.price}</p></span>`
        }
    }

    function getAllGenres(genres){
        let html = "";
        for(let x of genres){
            html += `<p class="inline">${x}</p>`;
        }
        return html;
    }
    
        //RAD SA ŽANROVINA
    let selectedGenres = [];

    let currentPage = 1;

    const itemsPerPage = 12;

    $(document).on("change",".category",function(){

        const genre = this.dataset.genre;

        if(this.checked){
            if(!selectedGenres.includes(this.dataset.genre)){
                selectedGenres.push(genre);
                $(this).next().addClass("checked");
            }
        }
        else{
            selectedGenres = selectedGenres.filter(g => g != genre);
            $(this).next().removeClass("checked");
        }
        
        console.log("Selected Genres : "+ selectedGenres);
        
        currentPage = 1;
        ajustShownGames();
    })

    $("#priceFiltering").on("change",function(){console.log("Ulazi u priceFiltering")
        currentPage = 1;
        ajustShownGames();
    })

    $(document).on("click", ".page-btn", function() {
        currentPage = parseInt($(this).data("page"));
        ajustShownGames();
    });

    //Prikaz Igara
    function ajustShownGames(){

    let filteredGames = [];

    // --- STEP A: Filter ---
    if (selectedGenres.length === 0) {
        filteredGames = allGames;
    } else {
        filteredGames = allGames.filter(game => {
            var gameGenres = Array.isArray(game.genre) ? game.genre : [];
            // Check if game has ANY of the selected genres
            return selectedGenres.every(selectedGenre => gameGenres.includes(selectedGenre));
        });
    }

    var gameSelectionDiv = document.getElementById("gameSelection");

    if (filteredGames.length === 0) {
        if(gameSelectionDiv){
            gameSelectionDiv.innerHTML = '<h1>No games matches your description!</h1>';
        }
        $("#pagination-container").empty();
        return;
    }

    // --- STEP B: Sort ---
    const sortValue = $('#priceFiltering').val(); // Get current selection

    if (sortValue) {
        filteredGames.sort((a, b) => {
            switch (sortValue) {
                case 'priceAscending':
                    // Assuming price is a number. If string, use parseFloat(a.price)
                    return getFinalPrice(a) - getFinalPrice(b);
                
                case 'priceDescending':
                    return getFinalPrice(b) - getFinalPrice(a) ;
                
                case 'nameAscending':
                    // Sort A-Z
                    return (a.name || "").localeCompare(b.name || "");
                
                case 'nameDescending':
                    // Sort Z-A
                    return (b.name || "").localeCompare(a.name || "");
                
                default:
                return 0;
            }
        });
    }

    // --- STEP C: Pagination  ---

    var totalPages = Math.ceil(filteredGames.length / itemsPerPage);
    
    // Ensure current page doesn't exceed total pages if items were removed
    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
    }
    if (currentPage < 1) currentPage = 1;

    var start = (currentPage - 1) * itemsPerPage;
    var end = start + itemsPerPage;
    var paginatedGames = filteredGames.slice(start, end);

    createShopCards(paginatedGames);
    renderPagination(totalPages);

    }

    function renderPagination(totalPages) {console.log("Ulazi u renderPagination");
    var $paginationContainer = $("#pagination-container");
    $paginationContainer.empty();

    if (totalPages <= 1) {
        // No buttons needed if 0 or 1 page
        return;
    }

    // Previous Button
    if (currentPage > 1) {
        $paginationContainer.append(`<button class="page-btn" data-page="${currentPage - 1}">Prev</button>`);
    }

    // Page Numbers
    for (let i = 1; i <= totalPages; i++) {
        var isActive = i === currentPage ? "active" : "";
        $paginationContainer.append(`<button class="page-btn ${isActive}" data-page="${i}">${i}</button>`);
    }

    // Next Button
    if (currentPage < totalPages) {
        $paginationContainer.append(`<button class="page-btn" data-page="${currentPage + 1}">Next</button>`);
    }
}

    function getFinalPrice(game) {
        var basePrice = game.price || 0;
        var discount = game.discount || 0;
        if (discount > 0) {
            return basePrice * (1 - (discount / 100));
        }
        return basePrice;
    }
    console.log("Radiš li?");

    //Ispis Igara prodavnice
    function createShopCards(games){
        var shopCard = "";
        for(let game of games){
            shopCard += `

        <div class="shopCard">
          <div data-gameid="${game.id}" class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="assets/images/${game.image.portrait}" alt=""></a>
              ${makePrice(game)}
            </div>
            <div class="down-content">
                <h4>${game.name}</h4>
              <span class="category">${game.publisher}</span>
              <a class="add-to-cart" data-gameid=${game.id}>ADD TO CART</a>
            </div>
          </div>
        </div>

        `;
        
        }

        document.querySelector("#gameSelection").innerHTML = shopCard;

        $(".add-to-cart").click(addToCart);
    }

    function getItemFromLocalStorage(key) {
    let data = localStorage.getItem(key);
    if (!data) return null;
    
    // CRITICAL: Ensure we parse it. 
    // If data is already an object (unlikely from LS), return it.
    // If it's a string, parse it.
    try {
        return JSON.parse(data);
    } catch (e) {
        console.error("Failed to parse cart data:", e);
        return null;
    }
}
    //Rad sa Korpom
    function addToCart(){

        let thisGameId = $(this).data("gameid");console.log("This Game id : "+thisGameId);

        let gamesFromCart = getItemFromLocalStorage("gamesInCart");

        if(gamesFromCart){
            if(gameAlreadyInCart()){
                manageQuantity();
            }
            else{
                addGameToCart();
                showToast("Game added to cart!","success");
            }
        }
        else{
            addFirstGameToCart();
            showToast("Game added to cart!","success");
        }

        function gameAlreadyInCart(){
            let gamesInCart = getItemFromLocalStorage("gamesInCart");
            let brj = 0;
            for(let x of gamesInCart){
                if(x.id == thisGameId){
                    brj++;
                }
            }

            if (brj > 0) {
                return true;        
            }else{return false;}
        }

        function manageQuantity(){
            let gamesInCart = getItemFromLocalStorage("gamesInCart");

            for(let x of gamesInCart){
                if(x.id == thisGameId){
                    if(x.quantity >= 5){
                        showToast("You can't purchase more than 5 keys!","error");
                    }else{
                        x.quantity++;
                        showToast("Game added to cart!","success");
                    }
                }console.log("Količina : "+x.quantity)
            }

            localStorage.setItem("gamesInCart",JSON.stringify(gamesInCart));
        }

        function addGameToCart(){
            let gamesInCart = getItemFromLocalStorage("gamesInCart");console.log("gamesInCart : "+gamesInCart)

            gamesInCart.push({id : thisGameId , quantity : 1});

            localStorage.setItem("gamesInCart",JSON.stringify(gamesInCart));
        }


        function addFirstGameToCart(){
            let gamesInCart = [];

            gamesInCart[0] = ({id : thisGameId , quantity : 1});

            localStorage.setItem("gamesInCart",JSON.stringify(gamesInCart));
        }

        ajustCartContence();

    }

    function numberOfGamesInCart(){
            let gamesInCart = getItemFromLocalStorage("gamesInCart");
            let numberOfGames = 0;
            for(let x of gamesInCart){
                numberOfGames += x.quantity;
            }
            return numberOfGames;
        }

        function ajustCartContence(){console.log("Ulazi u ajustCartInterior");
            let gamesFromCart = getItemFromLocalStorage("gamesInCart");
            if(gamesFromCart.length){
                document.querySelector(".cart").innerHTML = (`Cart (${numberOfGamesInCart()})`);
            }
            else {document.querySelector(".cart").innerHTML = "Cart";}
        }

        function cartContence(){

            let gamesFromCart = getItemFromLocalStorage("gamesInCart");
        
            let gamesForPrint = [];

            let printNumberer = 0;

            for( let y of getItemFromLocalStorage("games")){
                for(let x of gamesFromCart){
                    if(y.id == x.id){
                        gamesForPrint[printNumberer] = y;
                        printNumberer++;
                    }
                }
            }

            console.log("gamesForPrint : "+gamesForPrint);

            var cartCardContainer = document.querySelector("#gamesInCart");
            
            cartCardContainer.innerHTML = "";

            if(gamesForPrint.length == 0){
                cartIsEmpty();
                return;
            }
            else{
                for(let y of gamesForPrint){
                    // console.log("Igra za print : "+y);
                    // console.log("ID Igre za print : "+y.id);
                    // console.log("Ime Igre za print : "+y.name);
                    cartCardContainer.innerHTML += makeCartCard(y);
                }
            }
        }

        function cartIsEmpty(){
            document.querySelector("#gamesInCart").innerHTML = `<h2 class="text-center">YOUR CART IS EMPTY</h2>`;
        }

        function updateCartTotal() {
            var gamesInCart = getItemFromLocalStorage("gamesInCart");
            var total = 0;

            gamesInCart.forEach(function(cartItem) {
                // Look up full game details for price calculation
                var fullGame = allGames.find(g => g.id == cartItem.id);
                if (fullGame) {
                    var unitPrice = getFinalPrice(fullGame);
                    total += unitPrice * cartItem.quantity;
                }
            });

            if(total){
                $("#totalSum").text("$" + total.toFixed(2));
            }else{
                $("#totalSum").text("$0.00");
                cartIsEmpty();
            }
        }

        $(document).on("click", "#emptyCart", function(){
            setItemToLocalStorage("gamesInCart",[]);
            cartContence();
            ajustCartContence();
            updateCartTotal();
        })

        $(document).on("click", ".ajustingQuantity p", function() {
            // 1. Get the direction (increase or decrease) from the clicked <p>
            var action = $(this).data("quantityajustment");

            // 2. Find the game card and ID
            var gameCard = $(this).closest(".cartCard");
            var gameId = gameCard.data("gameid");
            console.log(`Action: ${action} for Game ID: ${gameId}`);

            // 3. Retrieve and update cart data
            var gamesInCart = getItemFromLocalStorage("gamesInCart");
            var gameIndex = gamesInCart.findIndex(g => g.id == gameId);

            // Only proceed if the game exists in the cart
            if (gameIndex !== -1) {

                var gameInCart = gamesInCart[gameIndex];
                
                var fullGame = allGames.find(g => g.id == gameId); 

                var fullGamePrice = getFinalPrice(fullGame);

                if (action === "decrease") {
                    gameInCart.quantity--;
                    gameCard.find(".ajustingQuantity span").text(gamesInCart[gameIndex].quantity);
                    
                    // FIX: Check if quantity is 0 or less to remove
                    if (gameInCart.quantity <= 0) {
                        // Remove item
                        gamesInCart.splice(gameIndex, 1);
                        setItemToLocalStorage("gamesInCart", gamesInCart);
                        
                        // Fade out and remove DOM
                        gameCard.fadeOut(200, function() { 
                            $(this).remove(); 
                            updateCartTotal(); // Update total after removal
                        });
                        
                        ajustCartContence(); 
                        return;
                    }
                    }
                    else if (action === "increase") {
                    gameInCart.quantity++;
                    gameCard.find(".ajustingQuantity span").text(gamesInCart[gameIndex].quantity);
                }

                // 4. Save and Refresh
                setItemToLocalStorage("gamesInCart", gamesInCart);

                gameCard.find(".ajustingQuantity span").text(gameInCart.quantity);

                var newGameTotal = fullGamePrice * gameInCart.quantity;
                gameCard.find(".price").text("$" + newGameTotal.toFixed(2));

                updateCartTotal();
                
                // Assuming these functions re-render the cart UI
                ajustCartContence();
            }
        });

        console.log("Ključevi");
        //Prikaz količina ključeva

        function getGameQuantity(gameId, storageKey = "gamesInCart") {
            const rawData = localStorage.getItem(storageKey);
            if (!rawData) return 0;

            // Parse the JSON array
            const cartArray = JSON.parse(rawData);
            
            // Ensure it's an array before searching
            if (!Array.isArray(cartArray)) {
                console.warn("Expected an array in localStorage for", storageKey);
                return 0;
            }

            // Find the item where the ID matches (handling string vs number)
            const gameEntry = cartArray.find(item => String(item.id) === String(gameId));

            return gameEntry.quantity;
        }


        function makeCartCard(game){console.log("Ulazi u makeCartCard");

            var gamesInCart = getItemFromLocalStorage("gamesInCart");
            var gameInCart = gamesInCart.find(cartGame => cartGame.id == game.id);
            var quantity = gameInCart.quantity;

            var gamePrice = getFinalPrice(game);
            var gamePriceTotal = (gamePrice * quantity).toFixed(2);

            let html = "";

            html = `
            
            <div data-gameid="${game.id}" class="cartCard">

                <div class="cartCardImg">
                    <img src="assets/images/${game.image.landscape}" alt="${game.name}">
                </div>
                <div class="cartCardInfo">
                    <h3 class="caption">${game.name}</h3>
                    <hr/>
                    <p class="caption">${getAllGenres(game.genre)}</p>
                </div>
                <div class="cartCardPrice">
                    <span class="price">$${gamePriceTotal}</span>
                    <div class="ajustingQuantity">
                        <p>Quantity</p>
                        <p data-quantityajustment="decrease">-</p>
                        <span>${getGameQuantity(game.id)}</span>
                        <p data-quantityajustment="increase">+</p>
                    </div>
                </div>

            </div>
            
            `;

            return html;

        }

        //PRODUCT PAGE

        $(document).on("click", ".shopCard img , .most-played a , .relatedGame img , .trending img , .results-container a", function() {

            var selectedGame;
            var type = event.target.tagName;
            if(type === 'A'){
                selectedGame = $(this);
            }else if ($(this).closest(".item").length) {
                selectedGame = $(this).closest(".item");
            }
            else if ($(this).closest(".shopCard").length) {
                selectedGame = $(this).closest(".shopCard");
            }
            var gameId = selectedGame.data("gameid");
            console.log("selectedGame je : " + selectedGame);

            setItemToLocalStorage("selectedGame", gameId);
            
        });

        $(document).on("click", "#addProductFromDetails , .trending .fa", addToCart);

        function makeProductInfo(game){
            productMainInfo = `
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                        <div class="left-image">
                            <img src="assets/images/${game.image.landscape}" alt="${game.name}">
                        </div>
                        </div>
                        <div class="col-lg-6 align-self-center">
                        <h4>${game.name}</h4>
                        <span class="price">$${finalPrice(game)}</span>
                        <div id="qty" action="#">
                            <button id="addProductFromDetails" data-gameid="${game.id}"><i class="fa fa-shopping-bag"></i> ADD TO CART</button>
                        </div>
                        <ul>
                            <li><span>Game Publisher:${game.publisher}I</li>
                            <li><span>Genre:</span> ${getAllGenres(game.genre)}</li>
                            <li><span>Release Date:</span> ${game.releaseDate}</li>
                        </ul>
                        </div>
                        <div class="col-lg-12">
                        <div class="sep"></div>
                        </div>
                    </div>
                </div>
            `;

            $("#productAbout").html(productMainInfo);

            $("#product-detailsGameName").text(game.name);

            $("#description-short").append(game.description[0]);

            var showHideCounter = 0;

            $("#showMoreInfo").on("click",function(){console.log("radi")

                if(showHideCounter % 2){
                    $("#description-long").removeClass("expanded");
                    setTimeout(function() {
                        $("#description-long").text("").html(""); 
                    }, 500); 
                }else{
                    for(let desc of game.description){
                        $("#description-long").addClass("expanded");
                        if(desc != game.description[0]){
                            $("#description-long").append(`<p>${desc}</p>`);$("#description-long").append("<br/><br/>")
                        }
                    }
                }
                if(showHideCounter == 10){showHideCounter = 0;}
                showHideCounter++;
            })

        }

        function findAndRenderSimilarGames(currentGame) {
            const allGames = getItemFromLocalStorage("games");
            if (!allGames || !Array.isArray(allGames)) {
                console.error("No games found in localStorage");
                return;
            }

            const currentGenres = currentGame.genre;
            const similarGames = [];

            // Filter games: must share at least one genre AND must NOT be the current game
            for (let candidate of allGames) {
                // Skip the current game itself
                if (candidate.id == currentGame.id) continue;

                // Check for intersection of genres
                const hasCommonGenre = candidate.genre.some(g => currentGenres.includes(g));

                if (hasCommonGenre) {
                    similarGames.push(candidate);
                }
            }

            // Shuffle the array to get random results
            for (let i = similarGames.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [similarGames[i], similarGames[j]] = [similarGames[j], similarGames[i]];
            }

            // Take the first 5
            const randomSimilarGames = similarGames.slice(0, 6);
            console.log("randomSimilarGames : "+randomSimilarGames.length);

            for(let similarGame of randomSimilarGames){
                makeSimilarGame(similarGame);
            }
        }

        function makeSimilarGame(similarGame){
            let html ="";
            html = `
                <div class="relatedGame">
                    <div data-gameid="${similarGame.id}" class="item">
                        <div>
                            <h4>${similarGame.name}</h4>
                        </div>
                        <div class="thumb">
                        <a href="product-details.html"><img src="assets/images/${similarGame.image.portrait}" alt="${similarGame.name}"></a>
                        </div>
                    </div>
                </div>
            `;
            $("#similarGamesProduct-Detail").append(html);
        }
        
        /////////////Obrada Forme

        $(document).ready(function() {
            $("#contact-form").on("submit", function(e) {
                e.preventDefault(); // Stop default submission to handle validation first

                // 1. Clear previous errors
                $("#formResult").addClass("invisible");
                $("#formResult").html("");
                let errors = [];

                // 2. Helper to get value safely
                const getValue = (id) => $(id).val().trim();

                // 3. Validation Logic
                var objName = getValue("#name-contact");
                var objSurname = getValue("#surname-contact");
                var objEmail = getValue("#email-contact");
                var objBAddress = getValue("#bAdress-contact");
                var objZipCode = getValue("#zCode-contact");
                var objCountry = getValue("#countrySelector");
                var objCity = getValue("#city-contact");
                var objPaymentMethod = getValue("#paymentSelector");
                var objCardNumber = getValue("#cardNumber-contact");

                // Name & Surname checks
                const nameRegex = /^[A-Z][a-zA-Z]*(\s+[A-Z] [a-zA-Z]*)*$/;
                if (!objName) errors.push("Name is required.");
                else if(!nameRegex.test(objName)){
                    errors.push("Each word of name must start with a capital letter.");
                }
                if (!objSurname) errors.push("Surname is required.");
                else if(!nameRegex.test(objSurname)){
                    errors.push("Each word of surname must start with a capital letter.");
                }

                // Email check (simple regex)
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!objEmail) {
                    errors.push("Email is required.");
                } else if (!emailRegex.test(objEmail)) {
                    errors.push("Invalid email format.");
                }

                // Address & Zip checks
                if (!objBAddress) errors.push("Billing address is required.");
                if (!objZipCode) errors.push("Zip Code is required.");
                else if (isNaN(parseInt(objZipCode))) errors.push("Zip Code must be a number.");

                // Country check
                if (!objCountry) errors.push("Please select a country.");

                // City check (Optional based on your HTML, but good to have if address is provided)
                if (!objCity) errors.push("City is required.");

                if(!objPaymentMethod) errors.push("Please select paying method.");

                const cardNumberRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;console.log("objCardNumber : ",objCardNumber);
                if (!objCardNumber) {
                    errors.push("Please enter the credit card number.");
                }else if(!cardNumberRegex.test(objCardNumber)){
                    errors.push("Credit card numbermust be in format : 1111-1111-1111-1111");
                }

                // 4. Handle Errors
                if (errors.length > 0) {
                    const errorList = $('<ul></ul>');
                    errors.forEach(err => {
                        errorList.append(`<li>${err}</li>`);
                    });
                    $("#formResult").removeClass("invisible");console.log("Nevalja forma");
                    $("#formResult").append(errorList);
                    
                } else {console.log("Uspesno popunjena forma");
                    $("#formResult").removeClass("invisible");
                    $("#formResult").append("<p>Process Complete!</p>");
                    
                }
            });
        });

    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    console.log("Opet Zabo 22?");
    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
}