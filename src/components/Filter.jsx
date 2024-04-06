import axios from 'axios'
import React,{useEffect,useState} from 'react'
function home(){
    const [data,setData]=useState([])
    const [records,setRecords]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
           setData(res.data)
           setRecords(res.data);
    })
         .catch(err=> console.log(err));
    },[])

    const Filter =(event)=>{
        setRecords(data.filter(f=>
            f.name.toLowerCase().includes(event.target.value)))
    } 
    console.log(data)
    return (
<div className=' a '>
    <div className='b'>
    <input type="text" className='form-control' onChange={Filter} placeholder="Search"/>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name of Institution</th>
                    <th>Email</th>
                    <th>post</th>
                    {/* <th>Support</th> */}
                </tr>
            </thead>
            <tbody>
                {records.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>
</div>
    )
}
export default home