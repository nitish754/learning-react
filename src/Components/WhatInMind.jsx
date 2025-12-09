import CircleImage from "./CircleImage";

const WhatsInMind = ({data}) => {
    return (
        <section className="what-in-mind">
            <h2>What's on Your Mind?</h2>
            <p>Pick up the foods you might like!</p>
            <div className="circle-image">
                {
                    data.map((item) => {
                        return <CircleImage key={item.id} name={item.name} image={item.image} />
                    })
                }
               
            </div>
        </section>
    );
}

export default WhatsInMind;