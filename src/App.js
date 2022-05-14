import { useEffect, useState } from 'react';

import { db } from './firebase';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import SignUp from './components/SignUp';
import Login from './components/Login';
// import { ref } from 'firebase/storage'

function App() {
  const [ products, setProducts ] = useState([])

  const prodsCollection = collection(db, 'products');

  // const storageRef = ref(storage, 'gs://batch-jan-firebase.appspot.com/g2-background.jpeg')

  useEffect(() => {
    // const snapshot = await db.collection('users').get();
    //   snapshot.forEach((doc) => {
    //     console.log(doc.id, '=>', doc.data());
    //   });

    // console.log("try to connect to firestore");

    // const getProducts = async () => {
    //   const data = await getDocs(prodsCollection);
    //   let tempProducts = [];
    //   data.docs.map((doc) => {
    //     tempProducts.push(doc.data());
    //   })

    //   setProducts(prevState => {
    //     return [ ...prevState, ...tempProducts ]
    //   })
    // }

    //  return () => getProducts()

    const unsubsribe = onSnapshot(prodsCollection, (snapshot) => {
      const data = []
      snapshot.docs.map(doc => {
        data.push(doc.data());
      })

      setProducts(data);
    })

    return () => unsubsribe();

  }, [])

  return (
    <div>
      <h1>Hello World</h1>
      { products.map((prod, index) => (
        <h1 key={index}>{prod.name}</h1>
      ))}

      <Login />
    </div>
  );
}



export default App;
