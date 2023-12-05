import logo from './logo.svg';
import { useState } from 'react'

function App() {
  const [text, setText] = useState(
   'Anh có yeu em không'
)

  const handleUpdate = () => {
    setText(
      'làm người yêu anh nhé bây bê!'
    )
  }
  return (
    <div className="App">
      <h1>{text}</h1>
      <button onClick={handleUpdate}>Hãy click tôi đi</button>
    </div>
  );
}

export default App;
// vd của gift
const gifts = [
  '1 con lợn ',
  '1 con mèo',
  '1 con chó'
]

function App() {
  const [gift, setGift] = useState()

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)

    setGift(gifts[index]);
  }

  return (
    <div className="App">
      <h1>{gift || 'Chưa có phần thưởng'}</h1>
      <button onClick={randomGift} > Lấy thưởng </button>
    </div>
  );
}

export default App;
//two-way bliding
//
vd
function App() {
 
  const [name, setName] = useState()
  const [mail, setMail] = useState()
  
  const handleSubmit  = () => {
console.log({name,mail})
  }
  return (
    <div style={{display: "flex"}}>
   <input
   value = {name}
   onChange ={e => setName(e.target.value)}
   />
     <input
   value = {mail}
   onChange ={e => setMail(e.target.value)}
   /> 
   <button onClick={handleSubmit}>Xác nhận</button>
    </div>
  );
  ///
  function App() {
  const [job, setJob ] =useState('')
 const [jobs, setJobs] = useState([])
  
 const handleSubmit = () => {
  setJobs(prev => [...prev, job])
  setJob('')
 }
  return (
    <div style={{ padding: 32}}>
      <input 
      value={job} onChange={e => setJob(e.target.value)}/>
      <button onClick={handleSubmit}>ADD</button>

      <ul>
        {jobs.map((jobs,index) => (
        
        <li key={index}>{jobs}</li> 
        ))}
      </ul>
    </div>
  );

}
/// mounted và unmounted 
import { useState } from 'react'
import Content from "./Content"



function App() {
  
  const [show, setShow] = useState(false)
 
  return (
    <div style={{ padding: 32}}>
      <button onClick={() => setShow(!show)}>Tonggle</button>
   {show && <Content />}
    </div>
  )
  }


export default App;
//// call api 
    function Content() {
        const [title, setTitle] = useState('')
        const [posts, setPossts] = useState([])

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPossts(posts)
            })
    }, [])

       
    return (
        <div>
            <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
        <ul>
            {posts.map(post =>(
                 <li key={post.id}>{post.title}</li>
                 
                 ))}
        </ul>
        </div>
    )
}


export default Content
/// vd2 useefect
  function Content(){
 
    const[title, setTitle] = useState('')
    useEffect(() => {
        document.title = title
    })

    return(
        <div>
             <h1>
                Chào những người anh em nhé
             </h1>
             <input
             value={title}
             onChange={e => setTitle(e.target.value) }
             />
        </div>
    )
   }

export default Content

2.useEffect(callback,[])
    // --chỉ gọi callback một lần sau khi component mounted
    function Content(){
 
    const[title, setTitle] = useState('')
    const[posts, setPost]= useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {setPost(posts)})

    }, [])
    return(
        <div>
             <h1>
                Chào những người anh em nhé
             </h1>
             <input
             value={title}
             onChange={e => setTitle(e.target.value) }
             />
             <ul>
                {posts.map(post =>
                <li key={post.id}>{post.body}</li>
                    
                    )}
             </ul>
        </div>
    )
   }
// 3.useEffect(callback,[deps])
    //- Call back sẽ được gọi lại sau khi component mounted
//1. Callback luôn được gọi sau khi  Component mounted
const tabs = ['posts','comments','albums']
  function Content(){
 
    const[title, setTitle] = useState('')
    const[posts, setPost]= useState([])
    const[type, setType]= useState('posts')



    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPost(posts)
        })

    }, [type])

    return(
        <div>
            {tabs.map(tab => (
                <button key={tab}
                style={type === tab ? {
                    color:'white',
                    backgroundColor:'#333'
                }: {}}
                onClick={() => setType(tab)}>
                    {tab}
                </button>
            ))}

             <input
             value={title}
             onChange={e => setTitle(e.target.value) }
             />
             <ul>
                {posts.map(post =>
                <li key={post.id}>{post.body}</li>
                    
                    )}
             </ul>
        </div>
    )
   }

export default Content

//set timeout
const tabs = ['posts', 'comments', 'albums', 'photos','todos','users']
  function Content(){
  const [count, setCount] = useState(180)
  
  useEffect(()=> {
   setTimeout(()=> {
    setCount(count-1)
   }, 1000)
  },[count])
    return(
        <div>
           <h1>
            {count}
           </h1>
        </div>
    )
   }

export default Content
///// AVATAR 
  function Content(){
     
    const [avatar, setAvatar]=  useState()

useEffect(()=> {
    return()=> {
      avatar &&  URL.revokeObjectURL(avatar.preview)
    }
}, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)
         
        setAvatar(file)
     
    }
  
    return(
        <div>
          <input type="file"
          onChange={handlePreviewAvatar}
          />
          {avatar && (
            <img src={avatar.preview} alt=""  width="80%" >
            </img>
          )}
          
        </div>
    )
   }

export default Content