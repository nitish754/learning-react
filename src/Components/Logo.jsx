import { LOGO_URL } from "../utils/constants";

const Logo = () => {
    return (
        <div className="logo">
            <img 
                src={LOGO_URL}
                alt="Logo" 
                className="logo-image"
            />
        </div>
    );
}

export default Logo;