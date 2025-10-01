import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import BlogsImage from '../assets/Image.png';

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-16 md:py-24 bg-[#f8f6f1]">
            <Container>
                 <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                    <div className="w-full md:w-1/2 text-center md:text-left p-2">
           
                        <h1 className="font-serif font-bold text-7xl md:text-8xl lg:text-9xl text-[#282725] leading-none mb-6">
                            Human <br />stories & ideas
                        </h1>
                             <p className='text-xl md:text-2xl text-[#282725] mb-10 max-w-xl mx-auto md:mx-0'>
                            A place to read, write, and deepen your understanding
                        </p>
                        
                        <button className="bg-[#282725] text-white px-8 py-4 text-lg rounded-md cursor-pointer hover:bg-gray-700 transition duration-300">
                        Let's Get Started
                        </button>
                    </div>
                    
                   <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <div className="w-full max-w-lg aspect-square bg-transparent relative">
                            <div className="absolute inset-0 bg-white/0 flex items-center justify-center">
                            <img 
                src={BlogsImage} 
                alt="Description of your side photo"
                className="w-full h-full object-fit rounded-xl" 
            />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home