import starFull from '../assets/star-full.svg';
import starGrey from '../assets/star-grey.svg';

function Rating({rank}) {
    let rating = [];
    
    for (let x=0; x<rank; x++) {
        rating.push(<img src={starFull} className="star starFull-figure" alt="star-full" key={x} />);
    }
    for (let x=rank;x<5;x++) {
        rating.push(<img src={starGrey} className="star starGrey-figure" alt="star" key={x}/>);
    }

    return (

        <div className="ficheRanking" >
            {rating.map((item) => (
                <span key={("span")+item.key}>{item}</span>
                ))
            }
        </div>
    )
}

export default Rating;