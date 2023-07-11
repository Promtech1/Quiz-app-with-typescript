import React from 'react'
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

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
    <Wrapper>
        <p className="number">
            Question No: {questionNr} / {totalQuestions}
        </p>

        <p dangerouslySetInnerHTML={{ __html:"Question: " + question}}/>

        <div>
            {answers.map(answer=> (
                <ButtonWrapper 
                    correct={userAnswer?.correctAnswer == answer}
                    userClicked = {userAnswer?.answer === answer}
                    key={answer}
                >
                    <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
  )
}

export default QuestionCard