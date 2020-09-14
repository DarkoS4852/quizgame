/*

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer

2. Create a couple of questions using the constructor.

3. Store them all inside an array.

4. Select one random question and log it on the console, together with the possible answers.

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not.

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code.

8. After you display the result, display the next random question, so that the game never ends.

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score.

11. Display the score in the console.
*/

(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
    
    var q1 = new Question('Entomology is the science that studies:',
                          ['Behavior of human beings', 'Insects', 'The formation of rocks'],
                          1);

    var q2 = new Question('Which is the longest river in the world?',
                          ['Nile', 'Mississippi', 'Amazon'],
                          2);

    var q3 = new Question('Germany signed the Armistice Treaty on ____ and World War I ended',
                          ['January 19, 1918', 'May 30, 1918', 'November 11, 1918', 'February 15, 1918'],
                          2);

    var q4 = new Question('Headquarters of UNO are located in:',
                          ['New York', 'Hague', 'Geneva', 'Brussels'],
                          0);

    var q5 = new Question('For seeing objects at the surface of water from a submarine under water, the instrument used is',
                          ['Telescope', 'Spectroscope', 'Periscope', 'Kaleidoscope'],
                          3);                    

    var questions = [q1, q2, q3, q4, q5];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    
    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
    }
    
    nextQuestion();
    
})();