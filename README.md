# Movie Poster Quiz
### https://zorakdev.github.io/movieposterquiz
 Movie Poster Quiz Game made with Flutter
 
It's still a concept under construction.
It is not the source code, but the build web deploy


This code is a Dart / Flutter implementation of a quiz game that presents the user with a movie poster and four movie titles, one of which is correct, and the user has to select the correct title. The game retrieves the movie data from The Movie Database (TMDb) API, and it has features such as a countdown of attempts/lives, a delay of the buttons, changing the color of the buttons based on whether the user's selection is correct or not, generating an extra life for every X number of correct answers, and the ability to store the user's name in a database.

The code defines a Movie class with attributes such as the movie's title, overview, release date, and poster URL. It also defines a QuizPage class, which is the main class that sets up the quiz game. In the QuizPage class, the _resetGame function resets the game by setting the state variables, _getRandomMovie retrieves a random movie and sets up the quiz options, and _checkAnswer checks the user's answer and updates the score and the color of the button based on the correctness of the selection.

The build function of the QuizPage class returns a Scaffold widget with an AppBar and a Center widget that displays the movie poster and the four movie titles as buttons. The FutureBuilder widget is used to display a CircularProgressIndicator widget while the movie data is being retrieved from the API, and when the movie data is available, the poster and the quiz options are displayed. The quiz options are generated using the _titles list, which contains four movie titles, one of which is correct. The _buildButton function creates a button with the specified title and color, and the _buildCounter function creates a counter widget that displays the number of attempts/lives left and the score.
