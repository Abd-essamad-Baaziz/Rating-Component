import { useState } from 'react'
import Styles from './Rating.module.css'
import Star from '../assets/star.svg'
import React from '../assets/react.svg'
export function Rating () {

    const [selectRating, setSelectRating] = useState<number>()
    const [isSubmitted, setIsSubmitted] = useState(false)

    function hundleRatingClicked (rating: number) {
        setSelectRating(rating)
    }

    function hundleSubmitted (e: React.FormEvent) {
        e.preventDefault();
        setIsSubmitted(!isSubmitted)
    }

    return isSubmitted ? (
        <div className={Styles.panel + ' center'}>
            <img src={Star} alt="" className={Styles.star2}/>
            <h3 className={Styles.selected}>{`You selected ${selectRating} of 5`}</h3>
            <h2 className={Styles.title}>Thank you!</h2>

            <p className={Styles.desc1}>We Appreciated You taking the time to give a rating. If you ever need more support, don't hestiate to get in touch.</p>
        </div>
    ) : (
        <form onSubmit={hundleSubmitted} className={Styles.panel}>
            <img src={Star} alt="" className={Styles.star} />
            <h1 className={Styles.title}>How did you do?</h1>

            <p className={Styles.desc}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering.</p>
            <div className={Styles.btns}>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button type='button' onClick={() => hundleRatingClicked(rating)} className={Styles.rating}>{rating}</button>
                ))}
             {/* <button onClick={() => hundleRatingClicked(1)} className={Styles.rating}>1</button>
             <button className={Styles.rating}>2</button>
             <button className={Styles.rating}>3</button>
             <button className={Styles.rating}>4</button>
             <button className={Styles.rating}>5</button> */}
            </div>
            <button disabled={selectRating === undefined} className={Styles.submit} type="submit">Submit</button>
        </form>
    )
}