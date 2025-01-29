# DevDetective

This is a simple web application that retrieves and displays GitHub user profiles using the GitHub API. Built with just HTML, CSS, and JavaScript, this app allows users to search for any GitHub username and view details like profile picture, bio, repositories, and more.

---

## Features

- **Search GitHub Profiles**: Enter a GitHub username to retrieve their profile.
- **User Details**: Displays the user's avatar, name, bio, public repositories, followers, and following.
- **Error Handling**: Provides feedback for invalid or non-existent usernames.
- **Responsive Design**: Optimized for desktop and mobile devices.

---

## Tech Stack

- **Frontend**: HTML, CSS, and JavaScript
- **API**: [GitHub REST API](https://docs.github.com/en/rest)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/github-user-profiles.git
   cd github-user-profiles
   ```

2. Open the `index.html` file in your browser to run the application.

---

## Usage

1. Enter a GitHub username in the search bar.
2. View the user's profile details, including their repositories, followers, and more.
3. If the username doesn't exist, an error message will be displayed.

---

## File Structure

```
.github-user-profiles/
├── index.html      # Main HTML file
├── style.css       # CSS styles
├── script.js       # JavaScript logic for API integration
└── README.md       # Project documentation
```

---

## API Integration

This project uses the GitHub REST API to fetch user data. The API endpoint used is:

- `GET https://api.github.com/users/{username}`

Example:
```javascript
fetch(`https://api.github.com/users/exampleUser`)
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add a meaningful commit message"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a Pull Request.

---


## Contact

For queries or suggestions, feel free to contact:
- **Email**: krishmakadiya2005@gmail.com

---

