import React, {useState, useEffect} from 'react'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import { MdOutlineDelete} from 'react-icons/md'
import { Link } from 'react-router-dom'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


const BooksTable = ({ books }) => {


     const [br, setBr] = useState([])

     const bookchecked = (book) => {

          setBr(prevState =>{

               // if the book is already checked, remove it
               if(prevState.some(b =>b._id === book._id)){

                    return prevState.filter(b =>b._id !== book._id);
               }else{

                    // if the book is not checked
                    return [...prevState, book]
               }
          });

     }

     useEffect(()=>{
          console.log(br, "checked books")
     }, [br])


     return (

          <div>
               <table className='w-full border-separate border-spacing'>

                    <thead>
                         <tr>
                              <th className='border border-slate-600 rounded-md'>No</th>
                              <th className='border border-slate-600 rounded-md'>Title</th>
                              <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                              <th className='border border-slate-600 rounded-md max-md:hidden'>Published Year</th>
                              <th className='border border-slate-600 rounded-md max-md:hidden'>Book Image</th>
                              <th className='border border-slate-600 rounded-md max-md:hidden'>Operations</th>
                         </tr>
                    </thead>

                    <tbody>
                         {
                              books.map((book, index) => (

                                   <tr key={book._id} className='h-8'>
                                        <td className='border border-slate-700 rounded-md text-center'>
                                             {index + 1}
                                        </td>
                                        <td className='border border-slate-700 rounded-md text-center'>
                                             {book.title}
                                        </td>
                                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                             {book.author}
                                        </td>
                                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                             {book.publishedYear}
                                        </td>
                                        <td className='border border-slate-700 rounded-md item-center  h-auto max-md:hidden'>

                                             {/* <img src={book.imageUrl} alt="" className='w-1/6 h-1/6'/> */}

                                        </td>

                                        <td className='border border-slate-700 rounded-md text-center'>
                                             <div className='flex justify-center gap-x-4 item-center'>

                                                  <Link to={`/books/details/${book._id}`}>
                                                       <BsInfoCircle className='text-2xl text-green-800' />
                                                  </Link>

                                                  <Link to={`/books/edit/${book._id}`}>
                                                       <AiOutlineEdit className='text-2xl text-yellow-300' />
                                                  </Link>

                                                  <Link to={`/books/delete/${book._id}`}>
                                                       <MdOutlineDelete className='text-2xl text-red-600' />
                                                  </Link>

                                                  <div>
                                                       <FormControlLabel control={<Checkbox size="small" onChange={() => { bookchecked(book) }} />} label="Borrow Book" />
                                                  </div>


                                             </div>
                                        </td>


                                   </tr>
                              ))
                         }
                    </tbody>

               </table>




               <div className='flex justify-between items-center'>
                    <h1 className='text-3xl my-8'>Borrowed Books</h1>

                    <Button variant="outlined">Borrow All</Button>

               </div>



               {/* BURROWED BOOK TABLE SECTION */}

               <table className='w-full border-separate border-spacing'>

                    <thead>
                         <tr>
                              <th className='border border-slate-600 rounded-md'>No</th>
                              <th className='border border-slate-600 rounded-md'>Title</th>
                              <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                              <th className='border border-slate-600 rounded-md max-md:hidden'>Published Year</th>
                              <th className='border border-slate-600 rounded-md max-md:hidden'>Book Image</th>
                              <th className='border border-slate-600 rounded-md max-md:hidden'>Remove burrowed book</th>
                         </tr>
                    </thead>


                    <tbody>
                         {
                              br.map((bk, index) => (

                                   <tr key={bk._id} className='h-8'>
                                        <td className='border border-slate-700 rounded-md text-center'>
                                             {index + 1}
                                        </td>
                                        <td className='border border-slate-700 rounded-md text-center'>
                                             {bk.title}
                                        </td>
                                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                             {bk.author}
                                        </td>
                                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                             {bk.publishedYear}
                                        </td>
                                        <td className='border border-slate-700 rounded-md item-center  h-auto max-md:hidden'>

                                        </td>

                                        <td className='border border-slate-700 rounded-md text-center'>
                                             <div className='flex justify-center gap-x-4 item-center'>
                                                  <Link to="">
                                                       <MdOutlineDelete className='text-2xl text-red-600' />
                                                  </Link>

                                             </div>
                                        </td>


                                   </tr>
                              ))
                         }
                    </tbody>

               </table>


          </div>




     )
}

export default BooksTable