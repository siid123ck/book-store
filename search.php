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

<section class="search-products">
  <div class="container">
    <h2>Search Products</h2>
    <form id="search-form">
      <div class="form-group">
        <label for="search-keyword">Search by ID or Name:</label>
        <input type="text" id="search-keyword" name="keyword" placeholder="Enter ID or Name">
      </div>
      <div class="form-group">
        <label for="price-range">Price Range:</label>
        <input type="number" id="price-min" name="min-price" placeholder="Min Price">
        <input type="number" id="price-max" name="max-price" placeholder="Max Price">
      </div>
      <button type="submit" class="btn-search">Search</button>
    </form>
    <div id="search-results">
    </div>
  </div>
</section>

<section id="product-info">
</section>

<footer>
    <p>&copy; 2024 E-commerce Site</p>
</footer>

<script src="search.js"></script>
</body>
</html>
