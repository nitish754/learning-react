const CircleImage = (props) => {
    const img = props.image || "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png"
    return (
        <div >
            <img 
                src={img} 
                alt="Circle" 
                className="circle-img"
            />
         
        </div>
    );
}

export default CircleImage;