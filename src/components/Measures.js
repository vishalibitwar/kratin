import React, { Fragment, useState } from "react";
import Answer from "./Answers";
import '../css/quiz.css';

 
const Measures = () => {
  const questions = [
    {
        questionText: "Do you know when to use a mask?",
        answerOptions: [
          { answerText: "Yes, I know when to use mask", isCorrect: 1 },
          { answerText: "I\'m not quite sure", isCorrect: 0 },
        ],
        answers: [
          {
            title: "Be informed about when to use masks",
            description: [
              "If you are healthy, you only need to wear a mask if you are taking care of a person with suspected 2019-nCoV infection."
            ],
            youtubeUrl: "https://www.youtube.com/embed/lrvFrH_npQI",
            correctAnswer: false,
          },
          {
            title: "Good, using masks the right way will help prevent the virus",
            description: [
              "It is important to know when to use masks and educate others on the same.Wear a mask if you are coughing or sneezing.Masks are effective only when used in combination with frequent hand-cleaning with alcohol-based hand rub or soap and water.",
            ],
            youtubeUrl: "https://www.youtube.com/embed/lrvFrH_npQI",
            
            correctAnswer: true,
          },
        ],
      },
    {
      questionText: "Do you practice respiratory hygiene?",
      answerOptions: [
        { answerText: "Yes, I do", isCorrect: 1 },
        { answerText: "No , I don't", isCorrect: 0 },
      ],
      answers: [
        {
          title: "Practice good respiratory hygiene.",
          description: [
            "Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately."
          ],
          youtubeUrl: "https://www.youtube.com/embed/bPITHEiFWLc",
          correctAnswer: false,
        },
        {
          title: "Good, make sure you, and the people around you, follow good respiratory hygiene.",
          description: [
            "Good, keeping respiratory hygiene not only keeps you from getting infected but also helps others by setting an example to get a front step towards to fight against CoVID 19.",
          ],
          
          correctAnswer: true,
        },
      ],
    },
    {
      questionText: " Do you strictly follow advice given by public health officials and your health care provider? ",
      answerOptions: [
        { answerText: "Yes, I do", isCorrect: 1 },
        { answerText: "No , I don't", isCorrect: 0 },
      ],
      answers: [
        {
          title: " You need to stay informed and listen to health officals ",
          description: [
            " Stay informed on the latest developments about COVID-19. Follow advice given by your healthcare provider, your national and local public health authority or your employer on how to protect yourself and others from COVID-19",
          ],
          correctAnswer: false,
        },
        {
          title: "Good, Stay informed and listen to health officals ",
          description: [
            " It is always good to get proper knowledge about what is happening, how to prevent virus infection, and also primarily to educate others. Find help from the health department immediately if you feel you are symptomatic",
          ],
          correctAnswer: true,
        },
      ],
    },
    {
      questionText:
        " Do you know how to put on a mask and how to dispose of it? ",
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
    
          correctAnswer: false,
        },
        {
          title:
            "Good, using masks properly can help prevent the virus",
          description: [
            " Masks help in preventing the viral infection so important to know how to use them and destroy them properly. Refer the video below to learn more:",
          ],
          
          correctAnswer: true,
        },
      ],
    },
    {
      questionText:
        " Are you planning to attend or organise any event or gathering in the coming weeks? ",
      answerOptions: [
        { answerText: "Yes, I do", isCorrect: 1 },
        { answerText: "No , I don't", isCorrect: 0 },
      ],
      answers: [
        {
          title: "Good, avoid any mass gatherings for the next few weeks to prevent the spread of COVID-19.",
          description: [
            "Mass gatherings of people are an easy way for the virus to spread. Avoid attending any kind of events including marriages, funerals, movies and other public events for the next few weeks. If you are organisor of any such event, consider postponing the event to a later date for the safety of your attendees..",
          ],
          correctAnswer: false,
        },
        {
          title:
            "Don't! Avoid all gatherings for the next few weeks to prevent the spread of COVID-19.",
          description: [
            "Mass gatherings of people are an easy way for the virus to spread. Avoid attending any kind of events including marriages, funerals, movies and other public events for the next few weeks. If you are organisor of any such event, consider postponing the event to a later date for the safety of your attendees.",
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
          You are now aware of Basic protective measures against the new coronavirus
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

export default Measures
