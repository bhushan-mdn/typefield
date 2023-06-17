import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { CursorArrowRaysIcon, ArrowPathIcon, NewspaperIcon } from '@heroicons/react/24/solid';

// declare window: any;

function App() {

  const [typedContent, setTypedContent] = useState("");
  const [content, setContent] = useState("");
  const [focused, setFocused] = useState(false);

  const inputRef: any = useRef(null);

  const testContent: string = "million milk cook sugar hill form or place light occur count with care some look simple tiny keep sudden hard fresh chord yet sand fraction work equal piece pair quart finish could while start among separate them milk arrange temperature verb piece big pose boat stand might count populate them meant new shoe sail condition ready enemy sing any bring not flow sat crease went money agree said notice family free gone determine doctor sugar repeat captain finger bell cotton to joy vary cat insect way dance is mouth root steam plain basic form day slip less took nine vary";

  useEffect(() => {
    setContent(testContent);
  }, []);

  const updateContent = (typed: string) => {
    setTypedContent(typed);
  }

  const changeContent = () => {
    const myModal: any = document.getElementById('change_content_modal');
    myModal.showModal();
  }

  return (
    <div className="App bg-black h-screen flex flex-col">
      <div className='flex items-center justify-between text-white bg-slate-900 p-5'>
        <p className='text-3xl font-bold text-blue-100'>TypeField</p>
        <button className='btn btn-primary' onClick={changeContent}>
          <NewspaperIcon className='h-4 w-4' /> Change content
        </button>
      </div>
      <h1 className="my-5 text-8xl font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">
        not a side quest
      </h1>
      <div className='container mx-auto border-solid border-green-400'>
        <input
          name="content"
          id="content"
          type="text"
          className='p-3 pointer-events-none absolute opacity-0'
          autoFocus
          placeholder='Start typing here...'
          onChange={(e) => updateContent(e.currentTarget.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={typedContent}
          ref={inputRef}
        />
        <div>
          <div className={`text-4xl font-mono ${focused ? 'opacity-0' : ''} text-center relative z-10 w-full h-full`}>
            <div className='flex items-center justify-center'>
              <CursorArrowRaysIcon className='h-6 w-6' /> Click to focus again
            </div>
          </div>
          <p className={`tracking-wider text-3xl font-bold ${focused ? '' : 'blur-sm'} z-0`} onClick={() => { inputRef.current && inputRef.current.focus() }}>
            {
              content.split('').map((letter, idx) => {
                return (
                  <>
                    {
                      typedContent.length === idx ?
                        <span className='text-white absolute font-normal'>|</span> : null
                    }
                    <span
                      key={"index-" + idx}
                      className={
                        typedContent && typedContent[idx] ?
                          typedContent[idx] === letter ?
                            'active'
                            : `text-red-300 underline`
                          : 'inactive'
                      }
                    >
                      {letter}
                    </span>
                  </>
                )
              })
            }
          </p>
        </div>

        <div className="actions flex items-center place-content-center my-5">
          <button className='btn text-center' onClick={() => {setTypedContent("")}}>
            <ArrowPathIcon className='h-5 w-5' /> Restart
          </button>
        </div>
      </div>
      <dialog id="change_content_modal" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg">Change content</h3>
          <p className="py-4">Enter the content to type below:</p>
          <textarea
            className='textarea textarea-primary w-full'
            name="changeContent"
            id="changeContent"
            cols={30}
            rows={10}
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
          >
          </textarea>
          <div className="modal-action">
            <button className='btn btn-primary'>save</button>
            <button className='btn'>close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default App;
