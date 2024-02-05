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

<section class="browse-categories">
    <button id="books-category">Books</button>
    <button id="electronics-category">Electronics</button>
    <button id="perfume-category">Perfumes</button>
</section>

<section id="product-info">
</section>

<footer>
    <p>&copy; 2024 E-commerce Site</p>
</footer>

<script src="script.js"></script>
</body>
</html>
