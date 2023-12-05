import axios from "axios";
import React, { Component, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
const boyut = ["Küçük", "Orta", "Büyük"];
const dougthType = ["Kalın", "Normal", "İnce"];


const malzemeler =["Pepperoni","Sosis","Kanada Jambonu",
"Tavuk Izgara","Soğan","Domates","Mısır","Sucuk","Jalepeno","Sarımsak",
"Biber","Sucuk","Ananas","Kabak"];

const initialObject = {
  size: "",
  dough: "",
  material0:false,
  material1:false,
  material2:false,
  material3:false,
  material4:false,
  material5:false,
  material6:false,
  material7:false,
  material8:false,
  material9:false,
  material10:false,
  material11:false,
  material12:false,
  material13:false,
  name: "",
  personal:""
};

const Section = () => {
  const [product, setProduct] = useState(initialObject);

  const handlerChange = (e) => {

    const { name, type, checked, value } = e.target;
    const inputVal = type === "checkbox" ? (checked)&&(value) : value;
    setProduct({ ...product, [name]: inputVal });

  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log("data:",product);
    axios.post("https://reqres.in/api/users",product)
    .then((res)=>{
      console.log("Sipariş Özeti:",res.data);
    })
    .catch((err)=>{
      console.warn("eror",err.message);
    })
  };

  return (
    <div className="section">
      <h4 className="pizzaName">Position Absolute Acı Pizza</h4>

      <div className="nameAndStock">
        <p className="price">85.50₺</p>
        <p className="stock">(200)</p>
      </div>
      <p>
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. . Küçük bir pizzaya bazen pizzetta denir.
      </p>

      <Form id="pizza-form" onSubmit={handlerSubmit}>
        <div className="radio">
          <legend>
            Boyut Seç <span className="yıldız">*</span>
          </legend>

          {boyut.map((item) => {
            return (
              <FormGroup check>
                <Input
                  name="size"
                  type="radio"
                  id="size-radio"
                  value={item}
                  onChange={handlerChange}
                />{" "}
                <Label check>{item}</Label>
              </FormGroup>
            );
          })}
        </div>

        <div className="select">
          <legend>
            Hamur Seç <span className="yıldız">*</span>
          </legend>

          <Input name="dough" value={product.dough} onChange={handlerChange} type="select">
            <option value={""} disabled>
              Hamur Kalınlığı
            </option>
            {dougthType.map((item) => {
              return <option>{item}</option>;
            })}
          </Input>
        </div>

        <div className="malzemeler">
          <legend>Ek Malzemeler</legend>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        </div>
        <div className="checkBoxs">
          
            {malzemeler.map((item,index)=>{
             return <FormGroup check inline>
             <Input id="malzemeler-checkbox" value={item} name={"material"+index} checked={product[`material${index}`]} onChange={handlerChange}  type="checkbox" />
              <Label check>{item}</Label>
             </FormGroup>
            })}
        </div>
         
        <div className= "nameContainer">
        <FormGroup>
    <legend htmlFor="name-input">
      Pizza İsmi
    </legend>
    <Input
      id="name-input"
      name="name"
      placeholder="isim"
      type="text"
      value={product.name}
      onChange={handlerChange}
    />
    </FormGroup>
    <div className="personal">
    <FormGroup>
    <legend htmlFor="name-input">
     Sipariş Notu
    </legend>
    <Input
      id="special-text"
      name="personal"
      placeholder="Siparişine eklemek istediğin not var mı?"
      type="text"
      value={product.personal}
      onChange={handlerChange}
    />
    </FormGroup>
    </div>
        </div>
        <Button id="order-button" onSubmit={handlerSubmit}>Sipariş Ver</Button>
      </Form>
    </div>
  );
};
export default Section;
