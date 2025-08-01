 export const EventPropogation = () => {
    const handleGrandparent = () => {
        console.log("GrandParent clicked");
        
    };
    const handleParentClick = () => {
        console.log("Parent clicked");
        
    };

    const handleChildClick = (event) =>{
        console.log(event);
        event.stopPropogation();
        
        console.log("Child clicked");
        
    };
    return(
        <>
        <section className="main-div">
            <div className="g-div" onClickCapture={handleGrandparent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildClick}>
                        Child Div
                    </button>

                </div>

            </div>
            </section> 
           
                
            
        
        
        </>
    )
}