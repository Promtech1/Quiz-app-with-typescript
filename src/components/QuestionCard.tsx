import React from 'react'

//Types
import { AnswerObject } from '../App'

//styles
// import {Wrapper, ButtonWrapper} from './QuestionCard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers, 
    callback, 
    userAnswer,
    questionNr, 
    totalQuestions,
}) => {
  return (
    <div>
        <p className="number">
            Question No: {questionNr} / {totalQuestions}
        </p>

        <p dangerouslySetInnerHTML={{ __html:"Question: " + question}}/>

        <div>
            {answers.map(answer=> (
                <div key={answer}>
                    <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default QuestionCard