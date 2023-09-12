import Form from 'react-bootstrap/Form';
import { Navx } from '../components/Navbar';
import { useSelector } from 'react-redux';
import { DisplayHotelList } from '../components/DisplayHotelList';


export const DisplayHotels = () => {
 
    const data = useSelector((state) => state.hotel.hotels)

    console.log('data arrived',data)
 

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <Navx/>
    <div  className="d-flex">
        
    <div className="" style={{ maxHeight: '100%', display:'flex' , background:'rgb(180,180,180)',padding:'50px'}}>
        
      <Form onSubmit={handleSubmit} style={{marginLeft:'30px'}}>
        <div className="filter-section" style={{display:'flex' ,flexDirection:'column', justifyContent:'space-between',height:'250px',}}>
          <h5>Price Range</h5>
          <Form.Check
            type="checkbox"
            label="< 1000"
            value="less-than-1000"
         
          />
        
          <Form.Check
            type="checkbox"
            label="1000-5000"
            value="1000-5000"
         
          />
          <Form.Check
            type="checkbox"
            label="5001-10000"
            value="5001-10000"
          
          />
          <Form.Check
            type="checkbox"
            label="10001-20000"
            value="10001-20000"
      
          />
          <Form.Check
            type="checkbox"
            label="> 20000"
            value="more-than-20000 "
          
          />
        </div>
        <div className="filter-section" style={{marginTop:'20px',display:'flex' ,flexDirection:'column', justifyContent:'space-between',height:'450px'}}>
          <h5>Property Type</h5>
          <Form.Check
            type="checkbox"
            label="Hotel"
            value="Hotel"
        
          />
            <Form.Check
            type="checkbox"
            label="Resort"
            value="Resort"
        
          />
            <Form.Check
            type="checkbox"
            label="Motel"
            value="Motel"
  
          />
            <Form.Check
            type="checkbox"
            label="Guest House"
            value="Guest House"
           
          />
            <Form.Check
            type="checkbox"
            label="Hostel"
            value="Hostel"
     
          />
            <Form.Check
            type="checkbox"
            label="Entire apartment"
            value="Entire apartment"
         
          />
             <Form.Check
            type="checkbox"
            label="Homestay"
            value="Homestay"
          
          />
             <Form.Check
            type="checkbox"
            label="Tent"
            value="Tent"
          
          />
             <Form.Check
            type="checkbox"
            label="Farm stay"
            value="Farm stay"
            
          />
             <Form.Check
            type="checkbox"
            label="Entire bungalow"
            value="Entire bungalow"
           
          />
             <Form.Check
            type="checkbox"
            label="Bed and breakfast"
            value="Bed and breakfast"
    
          />
          <br />
        </div>
        <button type="submit" className="btn btn-success">
          Apply Filters
        </button>
      </Form>
    </div>
    <div> 
         <div style={{marginLeft:'100px',width:'auto',}}>
         <DisplayHotelList  data={data}/>
      </div>
      </div>
    </div>
    </>
  );
};

