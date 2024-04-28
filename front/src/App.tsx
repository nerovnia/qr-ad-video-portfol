import { useState } from 'react'
import { QRCodeImage } from './components/QRCodeImage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //getQrCodeImage();
  return (
    <>
      <div>
        <QRCodeImage />
      </div>
    </>
  )
}

export default App
