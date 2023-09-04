// import second from 'first'
// const { data, loading, loadingMore, loadMore } = useInfiniteScroll(service);
const data=['1', '2', '3', '4', '5', '6', '7', '8', '9']
import {useEffect, useState} from 'react'
// const { value, setValue, backLength, forwardLength, back, forward } = useHistoryTravel<string>()
import {useRef} from 'react'
function useInfiniteScroll(service:Function) {
  const [value,setValue]  =useState('')
  const baclAction =[]
  const forwardAction =[]
  useEffect(()=>{

    
  },[value])
  const back=(e:any)=>{

    setValue(value)
  }
  const forward=[]
  // return { data, loading, loadingMore, loadMore }
}
