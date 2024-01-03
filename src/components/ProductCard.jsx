import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart,} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link,useParams,useNavigate,useLocation } from "react-router-dom";

const ProductCard = ({product,category,subcategory}) => {
  const {pathname} = useLocation();
  console.log("loc",pathname);
  const navigate = useNavigate();
  // useEffect(()=>{
  //   const path = useParams();
  //   console.log("path : ",path);
  // },[])
  let path = "";
  if(subcategory){
    path = `${product.productId}`;
  }else if(category == "allproducts"){
    path = `${category}/${product.shortDesc.split(" ")[0]}/${product.productId}`;
  }else if(category == "searched"){
    path = `${product.productId}`;
  }else if(category){
    path = `${product.shortDesc.split(" ")[0]}/${product.productId}`;
  }else{
    navigate('/')
  }
  console.log("product to pass : ",product);  
  return (
    <Card style={{borderRadius:"10%",padding:20,marginBottom:20}} as={Link} to={`${pathname}/${path}`} state={{product}}>
      <Card.Img variant="top" src={product.productImage[0]} alt={product.productImage} style={{width:200,height:200}}/>
      <Card.Title style={{position:"absolute",top:30,right:30}}><FontAwesomeIcon icon={regularHeart} style={{width:"30",height:"30"}} /></Card.Title>
      <Card.Body>
        <Card.Title>{product.shortDesc}</Card.Title>
        <Card.Text>
          {(product.mrp -(product.mrp * (product.discount / 100))).toFixed()} {product.mrp}{" "}
          {product.discount}% OFF
        </Card.Text>
        <Button className="rounded-lg bg-white w-100">
          <div style={{display:"flex",justifyContent:"space-between",color:"black",alignItems:"center",marginRight: '20px',marginLeft:"20px"}}><div style={{fontSize:20,fontWeight:800}}>Add</div><div><FontAwesomeIcon icon={faPlus} /></div></div>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
