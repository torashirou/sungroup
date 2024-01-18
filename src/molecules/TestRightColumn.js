import travel from '../assets/img/travel.jpg'
import literals from "../assets/Literals";

function TestRightColumn() {
    return (
        <div className="col-12 col-lg-5 mt-auto">
            <img src={travel} alt={literals.test.travel}/>
            <small>{literals.test.travelDesc}</small>
        </div>
    );
}

export default TestRightColumn;
