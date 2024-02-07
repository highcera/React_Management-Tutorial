import React, {useEffect} from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    axiosTest();
  })

  const axiosTest = () => {
    axios.get("이곳에 api를 입력해 주세요.")
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  return <p>hello</p>
}

export default App;