// menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
});
// vertically page scroller
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const totalHeight = document.body.scrollHeight;
    const totalPages = Math.ceil(totalHeight / windowHeight);
    const currentPage = Math.ceil(scrollTop / windowHeight) + 1; // Start from 1

    document.getElementById('currentPage').innerText = currentPage;
    document.getElementById('totalPages').innerText = totalPages;
});
// 
document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalPages = items.length;
    let currentIndex = 0;

    const updateCarousel = () => {
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
      items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
      });
      document.getElementById('currentPage').innerText = currentIndex + 1;
      document.getElementById('totalPages').innerText = totalPages;
    };

    document.querySelector('.carousel-control-prev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    });

    document.querySelector('.carousel-control-next').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    });

    updateCarousel();
  });
//   price and pacakages
const oneLessonBtn = document.getElementById('oneLessonBtn');
  const subscriptionBtn = document.getElementById('subscriptionBtn');
  const saleBtn = document.getElementById('saleBtn');
  const cardsContainer = document.getElementById('cardsContainer');

  const oneLessonCards = `
    <div class="card p-6 bg-white shadow-md rounded-md  hover:bg-gray-100">
      <h2 class="text-xl font-bold mb-2">Single Lesson: Beginner</h2>
      <p class="text-lg font-semibold mb-4">1 training session</p>
      <div class="flex items-center mb-2">
        <span class="mr-2">📅</span>
        <span>Monday - Sunday</span>
      </div>
      <div class="flex items-center mb-2">
        <span class="mr-2">🕒</span>
        <span>07:00 am - 22:00 pm</span>
      </div>
      <div class="flex items-center mb-4">
        <span class="mr-2">🧺</span>
        <span>The price includes a towel, water, and a yoga mat</span>
      </div>
      <p class="text-2xl font-bold mb-4">$10</p>
      <button class="bg-black text-white py-2 px-4 rounded-md"><a href="./signin.html">Get started</a></button>
    </div>
    <div class="card p-6 bg-white shadow-md rounded-md hover:bg-gray-100">
      <h2 class="text-xl font-bold mb-2">Single Lesson: Intermediate</h2>
      <p class="text-lg font-semibold mb-4">1 training session</p>
      <div class="flex items-center mb-2">
        <span class="mr-2">📅</span>
        <span>Monday - Sunday</span>
      </div>
      <div class="flex items-center mb-2">
        <span class="mr-2">🕒</span>
        <span>07:00 am - 22:00 pm</span>
      </div>
      <div class="flex items-center mb-4">
        <span class="mr-2">🧺</span>
        <span>The price includes a towel, water, and a yoga mat</span>
      </div>
      <p class="text-2xl font-bold mb-4">$15</p>
      <button class="bg-black text-white py-2 px-4 rounded-md"><a href="./signin.html">Get started</a></button>
    </div>
    <div class="card p-6 bg-white shadow-md rounded-md hover:bg-gray-100">
      <h2 class="text-xl font-bold mb-2">Single Lesson: Advanced</h2>
      <p class="text-lg font-semibold mb-4">1 training session</p>
      <div class="flex items-center mb-2">
        <span class="mr-2">📅</span>
        <span>Monday - Sunday</span>
      </div>
      <div class="flex items-center mb-2">
        <span class="mr-2">🕒</span>
        <span>07:00 am - 22:00 pm</span>
      </div>
      <div class="flex items-center mb-4">
        <span class="mr-2">🧺</span>
        <span>The price includes a towel, water, and a yoga mat</span>
      </div>
      <p class="text-2xl font-bold mb-4">$20</p>
      <button class="bg-black text-white py-2 px-4 rounded-md"><a href="./signin.html">Get started</a></button>
    </div>
  `;

  const subscriptionCards = `
    <div class="card p-6 bg-white shadow-md rounded-md hover:bg-gray-100">
      <h2 class="text-xl font-bold mb-2">the one month</h2>
      <p class="text-lg font-semibold mb-4">8 training</p>
      <div class="flex items-center mb-2">
        <span class="mr-2">📅</span>
        <span>Monday - Sunday</span>
      </div>
      <div class="flex items-center mb-2">
        <span class="mr-2">🕒</span>
        <span>07:00 am - 22:00 pm</span>
      </div>
      <div class="flex items-center mb-4">
        <span class="mr-2">🧺</span>
        <span>The price includes a towel, water, and a yoga mat</span>
      </div>
      <p class="text-2xl font-bold mb-4">$50</p>
      <button class="bg-black text-white py-2 px-4 rounded-md"><a href="./signin.html">Get started</a></button>
    </div>
    <div class="card p-6 bg-white shadow-md rounded-md hover:bg-gray-100">
      <h2 class="text-xl font-bold mb-2">the one month</h2>
      <p class="text-lg font-semibold mb-4">12 training</p>
      <div class="flex items-center mb-2">
        <span class="mr-2">📅</span>
        <span>Monday - Sunday</span>
      </div>
      <div class="flex items-center mb-2">
        <span class="mr-2">🕒</span>
        <span>07:00 am - 22:00 pm</span>
      </div>
      <div class="flex items-center mb-4">
        <span class="mr-2">🧺</span>
        <span>The price includes a towel, water, and a yoga mat</span>
      </div>
      <p class="text-2xl font-bold mb-4">$70</p>
      <button class="bg-black text-white py-2 px-4 rounded-md"><a href="./signin.html">Get started</a></button>
    </div>
    <div class="card p-6 bg-white shadow-md rounded-md hover:bg-gray-100">
      <h2 class="text-xl font-bold mb-2">the one month</h2>
      <p class="text-lg font-semibold mb-4">no limit</p>
      <div class="flex items-center mb-2">
        <span class="mr-2">📅</span>
        <span>Monday - Sunday</span>
      </div>
      <div class="flex items-center mb-2">
        <span class="mr-2">🕒</span>
        <span>07:00 am - 22:00 pm</span> 
      </div>
      <div class="flex items-center mb-4">
        <span class="mr-2">🧺</span>
        <span>The price includes a towel, water, and a yoga mat</span>
      </div>
      <p class="text-2xl font-bold mb-4">$100</p>
      <button class="bg-black text-white py-2 px-4 rounded-md"><a href="./signin.html">Get started</a></button>
    </div>
  `;

  const saleCards = `
    <div class="card p-6 bg-white shadow-md rounded-md hover:bg-gray-100">
      <h2 class="text-xl font-bold mb-2">Summer Sale</h2>
      <p class="text-lg font-semibold mb-4">Buy 1 Get 1 Free</p>
      <div class="flex items-center mb-2">
        <span class="mr-2">📅</span>
        <span>Valid till August 31</span>
      </div>
      <div class="flex items-center mb-2">
        <span class="mr-2">🕒</span>
        <span>Applicable to all time slots</span>
      </div>
      <div class="flex items-center mb-4">
        <span class="mr-2">🧺</span>
        <span>Includes a towel and water</span>
      </div>
      <p class="text-2xl font-bold mb-4">$30</p>
      <button class="bg-black text-white py-2 px-4 rounded-md"><a href="./signin.html">Get started</a></button>
    </div>
    <div class="card p-6 bg-white shadow-md rounded-md hover:bg-gray-100">
      <h2 class="text-xl font-bold mb-2">New Year Offer</h2>
      <p class="text-lg font-semibold mb-4">50% Off on Annual Subscription</p>
      <div class="flex items-center mb-2">
        <span class="mr-2">📅</span>
        <span>Valid till January 31</span>
      </div>
      <div class="flex items-center mb-2">
        <span class="mr-2">🕒</span>
        <span>Applicable to all time slots</span>
      </div>
      <div class="flex items-center mb-4">
        <span class="mr-2">🧺</span>
        <span>Includes a towel, water, and yoga mat</span>
      </div>
      <p class="text-2xl font-bold mb-4">$500</p>
      <button class="bg-black text-white py-2 px-4 rounded-md"><a href="./signin.html">Get started</a></button>
    </div>
    <div class="card p-6 bg-white shadow-md rounded-md hover:bg-gray-100">
      <h2 class="text-xl font-bold mb-2">Flash Sale</h2>
      <p class="text-lg font-semibold mb-4">20% Off on All Sessions</p>
      <div class="flex items-center mb-2">
        <span class="mr-2">📅</span>
        <span>Valid for the next 24 hours</span>
      </div>
      <div class="flex items-center mb-2">
        <span class="mr-2">🕒</span>
        <span>Applicable to all time slots</span>
      </div>
      <div class="flex items-center mb-4">
        <span class="mr-2">🧺</span>
        <span>Includes a towel and water</span>
      </div>
      <p class="text-2xl font-bold mb-4">$40</p>
      <button class="bg-black text-white py-2 px-4 rounded-md">Get started</button>
    </div>
  `;

  function updateCards(cards) {
    cardsContainer.innerHTML = cards;
  }

  oneLessonBtn.addEventListener('click', () => {
    updateCards(oneLessonCards);
    oneLessonBtn.classList.add('active');
    subscriptionBtn.classList.remove('active');
    saleBtn.classList.remove('active');
  });

  subscriptionBtn.addEventListener('click', () => {
    updateCards(subscriptionCards);
    oneLessonBtn.classList.remove('active');
    subscriptionBtn.classList.add('active');
    saleBtn.classList.remove('active');
  });

  saleBtn.addEventListener('click', () => {
    updateCards(saleCards);
    oneLessonBtn.classList.remove('active');
    subscriptionBtn.classList.remove('active');
    saleBtn.classList.add('active');
  });

  // Initialize with subscription cards
  updateCards(subscriptionCards);

  // out team
  function gallery(){
    this.index=0;
    this.load=function(){
      this.rootEl = document.querySelector(".gallery");
      this.platform = this.rootEl.querySelector(".platform");
      this.frames = this.platform.querySelectorAll(".each-frame");
      this.contentArea = this.rootEl.querySelector(".content-area");      
      this.width = parseInt(this.rootEl.style.width);
      this.limit = {start:0,end:this.frames.length-1};
      this.frames.forEach(each=>{each.style.width=this.width+"px";});   
      this.goto(this.index);      
    }
    this.set_title = function(){this.rootEl.querySelector(".heading").innerText=this.frames[this.index].getAttribute("title");}
    this.next = function(){this.platform.style.right=this.width * ++this.index + "px";this.set_title();}
    this.prev = function(){this.platform.style.right=this.width * --this.index + "px";this.set_title();}
    this.goto = function(index){this.platform.style.right = this.width * index + "px";this.index=index;this.set_title();}
    this.load();
}
var G = new gallery();
  G.rootEl.addEventListener("click",function(t){
      var val = t.target.getAttribute("action");
      if(val == "next" && G.index != G.limit.end){G.next();}
      if(val == "prev" && G.index != G.limit.start){G.prev();}
      if(val == "goto"){
          let rv = t.target.getAttribute("goto");
          rv = rv == "end" ? G.limit.end:rv;
          G.goto(parseInt(rv));
      }
  });
  document.addEventListener("keyup",function(t){
      var val = t.keyCode;
      if(val == 39 && G.index != G.limit.end){G.next();}
      if(val == 37 && G.index != G.limit.start){G.prev();}
  });

  // run G.load() if new data loaded with ajax


