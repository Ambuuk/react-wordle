import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {
    return (
        <div className="modal">
            {isCorrect && (
                <div>
                    <h1>Та яллаа!</h1>
                    <p className="solution">{solution}</p>
                    <p>Үгийг {turn} оролдлогоор таалаа.</p>
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1>Та ялагдлаа.</h1>
                    <p className="solution">{solution}</p>
                    <p>Дараагийн үгийг таана гэдэгт итгэлтэй байна.</p>
                </div>
            )}
        </div>
    )
}
