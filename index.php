<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce Product Display</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header class="header">
    <div class="header-logo">
        <a href="index.php">
            <img src="images/logo.webp" alt="Company Logo">
        </a>
    </div>
    <nav class="header-nav">
        <ul>
            <li><a href="shop.php">Shop</a></li>
            <li><a href="search.php">Search</a></li>
            <li><a href="books.php">Books</a></li>
            <li><a href="contact.php">Contact us</a></li>
            <li><a href="help.php">Help</a></li>
        </ul>
    </nav>
</header>

<div class="banner">
<div class="carousel">
  <div class="carousel-inner">
    <div class="carousel-item">
      <img src="images/carousel-1.jpg" alt="First Slide">
      <div class="carousel-caption">
        <h2>Electronics</h2>
        <button>Explore the electronics items such monitor, laptop, keyboard</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="images/carousel-2.jpg" alt="Second Slide">
      <div class="carousel-caption">
        <h2>Smartphones</h2>
        <button>Explore the smart Iphones and other smartphones</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="images/carousel-3.jpg" alt="Third Slide">
      <div class="carousel-caption">
        <h2>Books</h2>
        <button>Explore the libraries for different books</button>
      </div>
    </div>

    <div class="carousel-item active">
      <img src="images/carousel-4.jpg" alt="Fourth Slide">
      <div class="carousel-caption">
        <h2>Books</h2>
        <button>Find your favorite books</button>
      </div>
    </div>
   
  </div>
  <a class="carousel-control-prev" role="button">
    <span class="carousel-control-prev-icon" aria-hidden="true">&lt;</span>
  </a>
  <a class="carousel-control-next" role="button">
    <span class="carousel-control-next-icon" aria-hidden="true">&gt;</span>
  </a>
</div>

</div>



<section class="website-description">
  <div class="container">
  <p>Explore our diverse product categories and find what you need.</p>
    <p>Welcome to Our E-commerce Store, your number one source for all things about books and electronics items.
         We're dedicated to giving you the very best of books by best authors, with a focus on quality, 
         customer service, and uniqueness.</p>
    <p>Founded in 2024 by Sowya bhu, Our E-commerce Store has come a long way from its beginnings in a
     Sydney, Australia. When Sowya first started out, her passion for helping others
      be more eco-conscious about what they want, which drove her to do intense research
      and quit day job, and start a small business. it gave her the impetus to turn hard work 
      and inspiration into to a booming online store.</p>
  </div>
  <button>
  <a href="books.php" style="color:aliceblue">Shop now</a>
  </button>
</section>

<footer>
    <p>&copy; 2024 E-commerce Site</p>
</footer>

<script src="script.js"></script>
</body>
</html>
