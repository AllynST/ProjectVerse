//Dependencies
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

//Pages
import { MainLayout } from "./layouts/MainLayout"

import { HomePage } from "./pages/HomePage"
import { FeedPage } from './pages/FeedPage';
import { LoginPage } from './pages/LoginPage';

import { CreateCollab } from './pages/CreateCollab';
import { CollaborationApplicants } from './features/Collaborations/CollaborationDashboard/CollaborationApplicants';
import { ColabManagement } from './pages/ColabManagement';
import CollaborationPage from './pages/CollaborationPage'; import CollabDescriptionPage from './pages/CollabDescriptionPage';

import PortfolioPage from './pages/PortfolioPage';
import AddProjectPage from './pages/AddProjectPage';
import ProjectPage from './pages/ProjectPage';
import DesignerPage from './pages/DesignerPage';
import AddColabPage from './pages/AddColabPage';

import store from './context/store'
import { useSelector } from 'react-redux';
import ProfilePage from './pages/ProfilePage';

const userToken = store.getState().auth.token

const ProtectedRoute = ({ children }) => {

  const user = useSelector(state => state.auth.user)

  if (user == null) {
    console.log('redirect fired')
    return <Navigate to={""} replace />;
  }
  else {
    return children;
  }
};

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index path="/" element={<LoginPage />}></Route>
      <Route path="home" element={<HomePage />}></Route>

      <Route path="collabs" element={

        <ProtectedRoute>
          <CollaborationPage />
        </ProtectedRoute>

      }></Route>
      <Route path="collab_card/:id" element={

        <ProtectedRoute>
          <CollabDescriptionPage />
        </ProtectedRoute>}>

      </Route>

      <Route path="new_collab" element={

        <ProtectedRoute>
          <AddColabPage />
        </ProtectedRoute>

      }></Route>

      <Route path="collab_dashboard/:id" element={

        <ProtectedRoute>
          <ColabManagement />
        </ProtectedRoute>

      }></Route>

      <Route path="portfolio" element={

        <ProtectedRoute>
          <PortfolioPage />
        </ProtectedRoute>

      }></Route>
      <Route path="portfolio/addProject" element={

        <ProtectedRoute>
          <AddProjectPage />
        </ProtectedRoute>

      }></Route>

      <Route path="portfolio/project/:id" element={

        <ProtectedRoute>
          <ProjectPage />
        </ProtectedRoute>

      }></Route>

      {/* <Route path="portfolio/:id" element={ <PortfolioSinglePage/> }></Route> */}

      <Route path="feed" element={
        <ProtectedRoute>
          <FeedPage />
        </ProtectedRoute>
      }></Route>

      <Route path="designer" element={
        
        <ProtectedRoute>
          <DesignerPage />
        </ProtectedRoute>}>

      </Route>

      <Route path="profile/:id" element={
        
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>}>

      </Route>

    </Route>


  )
);




export default router
