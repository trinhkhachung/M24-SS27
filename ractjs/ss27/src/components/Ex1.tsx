import React from 'react'
interface Product {
  name: string,
  id: number,
  price: number,
}
export default function Ex1() {
  //render dữ liệu đối với funcition components
  let fullName: string = "khachung";
  let age: number = 18;
  let student = {
    name: "manh",
    age: 19,
    address: "hà nội"
  }
  let number: number[] = [1, 3, 5, 6];
  let students: string[] = ["hung", "ngheo", "qua"]
  let Products: Product[] = [
    {
      name: "iphone11",
      price: 500,
      id: 1,
    },
    {
      name: "iphone12",
      price: 500,
      id: 1,
    },
    {
      name: "iphone13",
      price: 500,
      id: 1,
    },
  ]
  return (
    <div>
      <p>meo meoo</p>
      <p>hung</p>
      <p>hiển thị fullName : {fullName} {age}</p>
      <p>{student.name}</p>
      <p>chuyển sang dạng JSON {JSON.stringify(student)}</p>
      <p>hiển thị mảng arr</p>
      <ul>
        {number.map((item, index, arr) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
      <ul>
        {students.map((item, index, arr) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
      <table border={1}>
        <thead>
          <tr>
            <th>STD</th>
            <th>name</th>
            <th>price</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
          {Products.map((item, index) => {
            return <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.id}</td>
            </tr>
          })}
        </tbody>


      </table>
    </div>
  )
}
