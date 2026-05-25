<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>AG Vape Cartel</title>

<style>
body{
margin:0;
font-family:Arial, sans-serif;
color:white;
overflow-x:hidden;
background:black;
}

/* VIDEO BACKGROUND */
#bgVideo{
position:fixed;
width:100%;
height:100%;
object-fit:cover;
z-index:-2;
}

.overlay{
position:fixed;
width:100%;
height:100%;
background:rgba(0,0,0,0.65);
z-index:-1;
}

/* NAV */
nav{
position:sticky;
top:0;
background:rgba(0,0,0,0.7);
backdrop-filter:blur(10px);
padding:15px;
display:flex;
justify-content:space-between;
align-items:center;
z-index:10;
}

nav a{
color:#ccc;
margin-left:15px;
cursor:pointer;
text-decoration:none;
}

nav a:hover{color:#00ff88;}

/* HERO */
.hero{
height:90vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
}

.hero h1{font-size:60px;}
.hero span{color:#00ff88;}

/* BUTTON */
.btn{
background:#00ff88;
color:#000;
padding:10px 18px;
border:none;
border-radius:10px;
cursor:pointer;
margin:5px;
font-weight:bold;
}

.btn:hover{transform:scale(1.05);}

/* PRODUCT AREA */
.product-grid{
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:10px;
padding:40px;
}

.product-btn{
background:#111;
border:1px solid #333;
color:white;
padding:15px;
width:180px;
border-radius:10px;
cursor:pointer;
transition:0.3s;
}

.product-btn:hover{
border-color:#00ff88;
transform:translateY(-3px);
}

/* MODAL */
.modal{
display:none;
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.85);
justify-content:center;
align-items:center;
z-index:999;
}

.modal-box{
background:#111;
padding:20px;
border-radius:15px;
width:350px;
max-height:80vh;
overflow:auto;
border:1px solid #00ff88;
}

.flavor{
padding:8px;
margin:5px 0;
background:#1a1a1a;
border-radius:8px;
cursor:pointer;
transition:0.2s;
}

.flavor:hover{
background:#00ff88;
color:black;
}
</style>
</head>

<body>

<!-- BACKGROUND VIDEO -->
<video autoplay muted loop id="bgVideo">
<source src="smoke.mp4" type="video/mp4">
</video>
<div class="overlay"></div>

<!-- NAV -->
<nav>
<div><b>AG <span style="color:#00ff88">Vape Cartel</span></b></div>
<div>
<a href="#">Home</a>
</div>
</nav>

<!-- HERO -->
<section class="hero">
<h1>AG <span>Vape Cartel</span></h1>
<p>Click a device to explore flavors</p>
</section>

<!-- PRODUCTS -->
<div class="product-grid">

<button class="product-btn" onclick="openFlavors('xslimbar')">X-Slimbar</button>
<button class="product-btn" onclick="openFlavors('xaero')">X-Aero</button>
<button class="product-btn" onclick="openFlavors('xultra')">X-Ultra</button>
<button class="product-btn" onclick="openFlavors('funky')">Funky Monkey Rush</button>
<button class="product-btn" onclick="openFlavors('ryuu')">Ryuu 12,000</button>
<button class="product-btn" onclick="openFlavors('chillax')">Chillax</button>

</div>

<!-- MODAL -->
<div class="modal" id="modal">
<div class="modal-box">
<h3 id="title">Flavors</h3>
<div id="flavorList"></div>
<br>
<button class="btn" onclick="closeModal()">Close</button>
</div>
</div>

<script>
const flavors = {
xslimbar:[
"Red Tropic Bubble (Watermelon Bubblegum)",
"Icy Heart (Strawberry Ice)",
"Purple Burst (Taro Ice Cream)",
"Mystery Burst (Mixed Berries)",
"Golden Sunburst (Yakult)",
"Blue Burst (Blueberry Ice)",
"Golden Slice (Mango Ice)",
"Violet Eclipse (Blackcurrant Ice)",
"Purple Haze (Grapes)",
"Rosy Breeze (Lychee Ice)",
"Red Tropic (Watermelon Ice)",
"Amber (Tobacco)"
],
xultra:[
"Violet Steam (BlackCurrant)",
"Cold Breeze (Cola)",
"Wild Fragrance (Mixed Berries)",
"Cloud Spring (Yakult)",
"Summer Dew (Watermelon)",
"Morning Garden (Strawberry)",
"Bubble Dream (Bubblegum)",
"Purple Twilight (Grapes)"
],
xaero:[
"Topaz Breeze (Blueberry)",
"Bubble Dream (Bubblegum Mint)",
"Purple Wave (Grapes)",
"Yellow Green Mist (Lemon Lime)",
"Green Zen (Matcha)",
"Icy Breeze (Menthol Mint)",
"Poplin Sky (Mixed Berries)",
"Icy Heart (Strawberry Ice)",
"Purple Mist (Taro)",
"Red Tropic (Watermelon)",
"Red Tropic Mist (Watermelon Raspberry)"
],
funky:[
"Sea Zest (Seasalt Lemon)",
"Menthol",
"Garden's Heart (Strawberry)",
"Fresh Mint",
"Red Frost (Strawberry Ice Cream)",
"Bubble Bomb (Bubblegum)",
"Contis (Cheesecake)",
"Black Gems (Black Currant)",
"Fresh Red (Watermelon)",
"Tangy Purple (Grape)",
"Yogi Lush (Yogurt)",
"Raspy Red (Raspberry Watermelon)",
"Dark Sparkle (Cola Ice)",
"White Freeze (Banana Ice)",
"Starbox (Coffee)",
"Green Brew (Matcha)",
"Triple Harvest (Kiwi Passion Fruit Guava)",
"Mixed Gems (Mixed Berries)",
"Burst Mellow (Lychee Melon)",
"DOTS (Sour Candy)",
"Rainbow (Gummy Bears)"
],
ryuu:[
"Watermelon","Strawberry","Mixed Berries","Blueberry",
"Blackcurrant","Yakult","Grapes","Matcha",
"Banana","Peach","Bubblegum"
],
chillax:[
"Cosmic Crush (Grape)",
"Slick Kick (Sour Apple)",
"Pink Harmony (Strawberry)",
"Twilight Willow (Black Currant)",
"Thunder Blazed (Gatorade)",
"Very Mellow (Watermelon)",
"Violet Fusion (Taro Ice Cream)",
"Silver Dynasty (Menthol Ice)",
"Crystal Wink (Bubblegum)",
"Rustic Haze (Classic Tobacco)"
]
};

function openFlavors(type){
document.getElementById("modal").style.display="flex";

const list = document.getElementById("flavorList");
const title = document.getElementById("title");

title.innerText = type.toUpperCase() + " FLAVORS";
list.innerHTML = "";

flavors[type].forEach(f=>{
const div = document.createElement("div");
div.className="flavor";
div.innerText=f;
div.onclick=()=>alert("Selected: " + f);
list.appendChild(div);
});
}

function closeModal(){
document.getElementById("modal").style.display="none";
}
</script>

</body>
</html>
