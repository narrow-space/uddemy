
import './Detail.css'

const Detail = (props) => {
    const {name,img,price}=props.detail
    

   
    return ( 
        

        
        <div className="col-md-4 my-4">
            <div className="card-container">
                <div className="component card">
                    <div className="img-logo">
                    <img src={img} className="card-img-top w-50 " alt="..."/>
                    </div>
                    <div className="card-body">
                    <h5 className="card-title">Course Name:{name}</h5>
                    <p className="card-text">Price:${price}</p>
                     <div className="ratings">
                     <p>
                    Ratings:<i class="fas fa-star"></i> 
                    <i class="fas fa-star"></i> 
                    <i class="fas fa-star"></i> 
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    
                    (4.5)
                    
                   
                    </p>
                     
                     </div>
                     
                   

                    <div className="my-3 mt-4">
                    <a  href="/"><i class="fas fa-shopping-cart mx-2"></i>Enroll Now</a>
                    </div>
                    
                    
                    </div>
                </div>
                
                
            </div>
        </div>
        
    );
};

export default Detail;