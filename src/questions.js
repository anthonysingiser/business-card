const questions = () => {
    const questions = [
        {
            questionText : 'What does the P stand for in PB&J?',
            answerOptions: [  
                {answerText: 'Paypal', isCorrect: false},
                {answerText: 'Paris', isCorrect: false},
                {answerText: 'Peanutbutter', isCorrect: false},
                {answerText: 'Peanut', isCorrect: true}

            ]
        },
        {
            questionText: 'What would you name your pet beaver if you had a pet beaver?',
            answerOptions: [
                {answerText: 'Sebastian', isCorrect: false},
                {answerText: 'Chuck', isCorrect: false},
                {answerText: 'Harold Beaverton The Great', isCorrect: true},
                {answerText: 'The Answer', isCorrect: false}
            ]
        },
        {
            questionText: 'What is the greatest movie of all time?',
            answerOptions: [
                {answerText: 'Robocop (1987)', isCorrect: true},
                {answerText: 'Robocop (2014)', isCorrect: false},
                {answerText: 'Robocop 2 (1990)', isCorrect: false},
                {answerText: 'Chappie (2015)', isCorrect: false}
            ]
        },
        {
            questionText: '2 + 2 = ?',
            answerOptions: [
                {answerText: '22', isCorrect: false},
                {answerText: '.4', isCorrect: false},
                {answerText: '5', isCorrect: true},
                {answerText: '42', isCorrect: false}
            ]
        }
    ]
    return questions
}

export default questions 