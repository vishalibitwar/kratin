import React, { Fragment, useState } from "react";
import Answer from "./Answers";
import '../css/quiz.css';

 
const Safequiz = () => {
  const questions = [
    {
      questionText: "Do you Wash your hands frequently?",
      answerOptions: [
        { answerText: "Yes, I do", isCorrect: 1 },
        { answerText: "No , I don't", isCorrect: 0 },
      ],
      answers: [
        {
          title: "You need to wash your hands more frequently",
          description: [
            "Washing your hands frequently, regularly and thoroughly with soap and water or with alcohol-based hand rub kills viruses that may be on your hands.",
          ],
          youtubeUrl: "https://www.youtube.com/embed/bPITHEiFWLc",
          correctAnswer: false,
        },
        {
          title: "Good, wash your hands frequently",
          description: [
            "Washing your hands frequently, regularly and thoroughly with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.",
          ],
          youtubeUrl: "https://www.youtube.com/embed/bPITHEiFWLc",
          correctAnswer: true,
        },
      ],
    },
    {
      questionText: "Do you often touch your eyes, nose and mouth ?",
      answerOptions: [
        { answerText: "Yes, I do", isCorrect: 1 },
        { answerText: "No , I don't", isCorrect: 0 },
      ],
      answers: [
        {
          title: "Good, avoid touching eyes, nose and mouth.",
          description: [
            "Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.",
          ],
          correctAnswer: false,
        },
        {
          title: "Avoid touching eyes, nose and mouth.",
          description: [
            "Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.",
          ],
          correctAnswer: true,
        },
      ],
    },
    {
      questionText:
        " Do you cover your mouth and nose with your bent elbow or tissue when you cough or sneeze? ",
      answerOptions: [
        { answerText: "Yes, I do", isCorrect: 1 },
        { answerText: "No , I don't", isCorrect: 0 },
      ],
      answers: [
        {
          title: "Practice good respiratory hygiene.",
          description: [
            "Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze, then dispose of the used tissue immediately.",
          ],
          imgUrl:
            "https://pbs.twimg.com/media/ESAQNdGXUAEkHGM?format=jpg&name=medium",
          correctAnswer: false,
        },
        {
          title:
            "Good, make sure you, and the people around you, follow good respiratory hygiene.",
          description: [
            "Cover your mouth and nose with your bent elbow or tissue when you cough or sneeze, then dispose of the used tissue immediately. Droplets spread virus. By following good respiratory hygiene you can protect the people around you from viruses such as cold, flu and COVID-19.",
          ],
          imgUrl:
            "https://pbs.twimg.com/media/ESAQNdGXUAEkHGM?format=jpg&name=medium ",
          correctAnswer: true,
        },
      ],
    },
    {
      questionText:
        " Are you a patient of any Cardiovascular or Chronic respiratory disease, Diabetes, Hypertension or Cancer? ",
      answerOptions: [
        { answerText: "Yes, I do", isCorrect: 1 },
        { answerText: "No , I don't", isCorrect: 0 },
      ],
      answers: [
        {
          title: "You have considerably lesser chance of complication",
          description: [
            "Having no such such pre-existing conditions will decrease the odds of complications, if infected ",
          ],
          correctAnswer: false,
        },
        {
          title:
            "Take care, you have a higher chance of complication if infected",
          description: [
            "The risk of fatality from Coronavirus is higher if you have any such pre-existing conditions. Take extra care if you fall into this category. Seek medical attention immediately if you experience the symptoms.",
          ],
          correctAnswer: true,
        },
      ],
    },
    {
      questionText:
        "If you find yourself with fever, cough or difficulty in breathing, do you know exactly what to do in the current scenario? ",
      answerOptions: [
        { answerText: "Yes, I do", isCorrect: 1 },
        { answerText: "No , I don't", isCorrect: 0 },
      ],
      answers: [
        {
          title: "Seek urgent medical care if you're symptomatic.",
          description: [
            " If you have fever, cough and difficulty breathing, seek medical care as soon as possible. Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.",
          ],
          correctAnswer: false,
        },
        {
          title:
            "Good, if you're symptomatic, seeking medical care is the first thing to do.",
          description: [
            " If you have fever, cough and difficulty breathing, seek medical care as soon as possible. Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.",
          ],
          correctAnswer: true,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [btnClick, setBtn] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    setAnswer(isCorrect);
    setBtn(true);
  };

  const resetAllState = () => {
    setAnswer(0);
    setBtn(false);
  };

  const clickNext = () => {
    resetAllState();
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          <h2>
            You are now aware of Basic protective measures against the new
            coronavirus
          </h2>
          <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"  target="_blank">Read More</a>
        </div>
      ) : (
        <Fragment>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className='answer-section '>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>

          {btnClick && (
            <Answer a={questions[currentQuestion].answers[answer]} />
          )}
          {btnClick && (
            <button onClick={clickNext} className='next'>
              Next
            </button>
          )}
        </Fragment>
      )}
    </div>
  );
}

export default Safequiz
