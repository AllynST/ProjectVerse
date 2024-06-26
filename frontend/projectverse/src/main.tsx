//Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from 'react-router-dom'
import {DndContext, PointerSensor, useDndMonitor, useSensor, useSensors} from '@dnd-kit/core';

//Styles
import './index.css'

//Pages
import { PageLoading } from './pages/PageLoading';
import router from './routes';
import { GlobalOverride } from './customElements/GlobalOverride';
import { Provider, useDispatch } from 'react-redux';
import store from './context/store';
import { setCredentials } from './features/Auth/authSlice';
import { SessionSetter } from './features/Auth/SessionSetter';
import { ThemeProvider } from '@emotion/react';
import { theme } from './materialTheme';
import { handleDragEnd, handleDragStart } from './customHooks&Functions/DndHandlers';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>  

    <GlobalOverride />

    <ThemeProvider theme={theme}>

      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <Provider store={store}>

          <SessionSetter />
          <RouterProvider router={router} fallbackElement={ <PageLoading/> }/>
        
        </Provider>
      </DndContext>

    </ThemeProvider>
    
  </React.StrictMode>,
)

