//your code here
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body Styling */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f5f5f5;
    color: #333;
    padding: 20px;
}

/* Heading */
h1, h2 {
    margin-bottom: 15px;
}

/* Navigation */
nav {
    margin-bottom: 20px;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 15px;
}

nav a {
    text-decoration: none;
    color: #007BFF;
    font-weight: bold;
}

nav a:hover {
    text-decoration: underline;
}

/* Image */
.profile-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
}

/* Paragraph */
p {
    margin-bottom: 20px;
    max-width: 600px;
}

/* List */
ul[role="list"] {
    list-style: disc inside;
    margin-left: 20px;
}

li[role="listitem"] {
    margin-bottom: 10px;
}
