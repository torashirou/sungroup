import design from '../assets/img/design.jpg'
import literals from "../assets/Literals";
import TestDescription from '../atoms/TestDescription';

function TestLeftColumn() {
    return (
        <div className="col-12 col-lg-7">
            <img src={design} alt={literals.test.design}/>
            <small>{literals.test.designDesc}</small>
            <TestDescription />
        </div>
    );
}

export default TestLeftColumn;
