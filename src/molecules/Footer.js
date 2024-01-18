import literals from "../assets/Literals";
import Social from "../atoms/Social";
import FooterLinks from "../atoms/FooterLinks";
import StyledFooter from "../styled/StyledFooter";

function Footer() {
    return (
        <StyledFooter className="mt-4">
            <div className="container d-flex flex-md-row flex-column justify-content-between align-items-center">
                <span>{literals.copyrights}</span>
                <FooterLinks />
                <Social />
            </div>
        </StyledFooter>
    );
}

export default Footer;
