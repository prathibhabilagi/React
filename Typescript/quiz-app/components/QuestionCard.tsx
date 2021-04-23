import React from 'react';

type Props ={
    question: string;
    answers: string[];
    callback: any;
    userAnswer: boolean;
    questionNo: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ 
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNo,
    totalQuestions
}) => (
        <div>
            <p className="number">Question: {questionNo} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html: question}}></p>
            <div>
                {answers.map(answer => (
                    <div>
                        <button disabled={userAnswer} onClick={callback}></button>
                        <span dangerouslySetInnerHTML={{__html: answer}}></span>
                    </div>
                ))}
            </div>
        </div>
    )

export default QuestionCard;
