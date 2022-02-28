import React from 'react';
import { useState } from 'react';


export default function Editorview(props) {
const [img, setImg] = useState("")
const [name, setName] = useState("")
const [description, setDescription] = useState("")
const [price, setPrice] = useState("")
  return ( <div>
    <div className="editorContainer">
      <h2 className="create-title">Create product</h2>

        <form className="createContainer"> {/* bit of a spaghetti, but everything here does the same thing and that is save given data as a state and send that to createproduct function */}
          <div className="item-save">Image URL<input value={img} onChange={(event) => setImg(event.target.value)} type="text"/></div>
            <div className="item-save"> Name<input value={name} onChange={(event) => setName(event.currentTarget.value)} type="text"/></div>
              <div className="item-save">Description<input value={description} onChange={(event) => setDescription(event.currentTarget.value)}type="text"/></div>
                <div className="item-save">Price<input  value={price} onChange={(event) => setPrice(event.currentTarget.value)}type="text"/></div>
                  <button onClick={()=>props.createProduct({
                    img,name,description,price
                      })}>Save</button>
                        </form>
             

              <h2 className= "create-title">Choose one of these for image Url</h2> {/* Helper for new product creation */}
                <div className="imageInfoContainer">
                  <div>Iphone = https://dummyjson.com/image/i/products/2/thumbnail.jpg</div>
                    <div>Huawei = https://dummyjson.com/image/i/products/5/thumbnail.jpg</div>
                      <div>Laptop = https://dummyjson.com/image/i/products/7/thumbnail.jpg</div>
                        <div>Perfume = https://dummyjson.com/image/i/products/11/thumbnail.jpg</div>
                          <div>Cream = https://dummyjson.com/image/i/products/18/thumbnail.jpg</div>
                        <div>Spices = https://dummyjson.com/image/i/products/22/thumbnail.jpg</div>
                    <div>Decoration = https://dummyjson.com/image/i/products/26/thumbnail.jpg</div>
                  <div>Led Lamp = https://dummyjson.com/image/i/products/28/thumbnail.jpg</div>
              </div>   
    </div>
            
              
      <div className="item-delete"> {/* delete products */}
        <h2 className="create-title">Delete product</h2>
          {props.products.map(p => <div> {p.name}<button className="delete-btn" onClick={() => props.onItemDelete(p)}>DELETE</button></div>)}
        </div>
     </div>
  )
}
