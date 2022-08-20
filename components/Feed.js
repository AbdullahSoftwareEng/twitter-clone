import { SparklesIcon } from "@heroicons/react/outline"
import Input from "./Input"
import Post from "./Post"

const Feed = () => {
  const posts =[
    {
      id: '1',
      name:'Abdullah Hasan',
      username:'codewithabdullah',
      userImg:'https://www.w3schools.com/howto/img_avatar.png',
      img:'https://images.unsplash.com/photo-1616080409883-a96ae084a7e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJhbCUyMGJlYXV0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      text: 'nice view!',
      timestamp:'2 hours ago',
    },
    {
      id: '2',
      name:'Abdullah Hasan',
      username:'codewithabdullah',
      userImg:'https://www.w3schools.com/howto/img_avatar.png',
      img:'https://images.unsplash.com/photo-1493962621260-74cc5a3baf89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyYWwlMjBiZWF1dHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      text: 'wow!!',
      timestamp:'2 days ago',
    }
  ]
  return (
    <div className="xl:ml-[370px]  
                    border-l 
                    border-r 
                    border-gray-200
                    xl:min-w-[576px]
                    sm:ml-[73px]
                    flex-grow
                    max-w-xl">
        <div 
            className=" flex 
                         py-2 
                         px-3 
                         sticky 
                         top-0 
                         z-50 
                         bg-white 
                         border-b 
                         border-gray-200">
            
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5"/>
            </div>
        </div>

        <Input/>
        {posts.map(post =>(
          <Post key={post.id} post={post}/> 
        ))}
    </div>
  )
}

export default Feed